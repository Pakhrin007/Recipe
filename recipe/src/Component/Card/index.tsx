import { SaveIcon } from '../../assets/icons/SaveIcon';
import { useState, useEffect } from 'react';
import { truncateString } from '../../UI/Truncate-String/truncate-string';
import { HeartIcon } from '../../assets/icons/HeartIcon';
import { CommentIcon } from '../../assets/icons/CommentIcon';
import { jwtDecode } from "jwt-decode"; // For decoding JWT token
import { getAccessToken } from '../../Services/JwtServices'; // Adjust path as needed

interface DecodedToken {
  sub?: string;
  userId?: string;
  id?: string;
  nameid?: string;
  [key: string]: any;
}

function RecipeCard() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [interactionStates, setInteractionStates] = useState({});
  const [likeCounts, setLikeCounts] = useState({});
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number | ''>('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(null);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewsError, setReviewsError] = useState(null);
  const [commentCounts, setCommentCounts] = useState({});

  const initializeInteractionState = (recipeId: any) => ({
    isSaveIcon: false,
    isLiked: false,
  });

  const toggleInteraction = (recipeId: any, key: any, value: any) => {
    setInteractionStates((prev: any) => ({
      ...prev,
      [recipeId]: {
        ...prev[recipeId],
        [key]: value,
      },
    }));
  };

  // Fetch all recipes, their comment counts, and user's like status
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const token = getAccessToken();
        let userId = null;
        if (token) {
          try {
            const decoded: DecodedToken = jwtDecode(token);
            userId = decoded.nameid || decoded.sub || decoded.userId || decoded.id;
          } catch (err: any) {
            console.error('Error decoding token:', err.message);
          }
        }

        // Fetch recipes
        const response = await fetch('https://localhost:7043/api/Recipe/all', {
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const recipesData = data.map((recipe: any) => ({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          prepTime: recipe.prepTime,
          servings: recipe.servings,
          difficulty: recipe.difficulty,
          ingredients: JSON.parse(recipe.ingredients || '[]'),
          instructions: JSON.parse(recipe.instructions || '[]'),
          image: recipe.imagePath,
          notes: recipe.notes,
          categoryId: recipe.categoryId,
          CretedByName: recipe.cretedByName,
          category: recipe.category,
          userId: recipe.userId,
          totalLikes: recipe.totalLikes,
        }));
        setRecipes(recipesData);

        // Initialize interaction states and like counts
        const initialStates = {};
        const initialLikeCounts = {};
        for (const recipe of recipesData) {
          initialStates[recipe.id] = initializeInteractionState(recipe.id);
          initialLikeCounts[recipe.id] = recipe.totalLikes;

          // Fetch user's like status if logged in
          if (userId) {
            const likeStatusResponse = await fetch(
              `https://localhost:7043/api/RecipeLikes/Likes?userId=${userId}&recipeId=${recipe.id}`,
              { headers: { Accept: 'application/json' } }
            );
            if (likeStatusResponse.ok) {
              const isLiked = await likeStatusResponse.json();
              initialStates[recipe.id].isLiked = isLiked;
            }
          }
        }
        setInteractionStates(initialStates);
        setLikeCounts(initialLikeCounts);

        // Fetch comment counts
        const counts = {};
        for (const recipe of recipesData) {
          try {
            const reviewResponse = await fetch(`https://localhost:7043/api/Reviews/${recipe.id}`, {
              headers: { Accept: 'application/json' },
            });
            if (reviewResponse.ok) {
              const reviewData = await reviewResponse.json();
              counts[recipe.id] = reviewData.reviews?.length || 0;
            } else {
              counts[recipe.id] = 0;
            }
          } catch (err: any) {
            console.warn(`Failed to fetch reviews for recipe ${recipe.id}: ${err.message}`);
            counts[recipe.id] = 0;
          }
        }
        setCommentCounts(counts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  // Fetch recipe details
  useEffect(() => {
    if (!selectedRecipeId) return;
    const fetchRecipeDetails = async () => {
      setDetailsLoading(true);
      setDetailsError(null);
      setRecipeDetails(null);
      try {
        const recipeResponse = await fetch(
          `https://localhost:7043/api/Recipe/filterId?Id=${selectedRecipeId}`,
          { headers: { Accept: 'application/json' } }
        );
        if (!recipeResponse.ok) {
          if (recipeResponse.status === 404) throw new Error('Recipe not found');
          throw new Error(`Failed to fetch recipe (Status: ${recipeResponse.status})`);
        }
        const recipeData = await recipeResponse.json();
        const ingredients =
          typeof recipeData.ingredients === 'string'
            ? JSON.parse(recipeData.ingredients || '[]')
            : recipeData.ingredients;
        let instructions =
          typeof recipeData.instructions === 'string'
            ? JSON.parse(recipeData.instructions || '[]')
            : recipeData.instructions;
        setRecipeDetails({ ...recipeData, ingredients, instructions });
        // Update like count for the selected recipe
        setLikeCounts((prev: any) => ({
          ...prev,
          [selectedRecipeId]: recipeData.totalLikes,
        }));
      } catch (err: any) {
        setDetailsError(err.message);
      } finally {
        setDetailsLoading(false);
      }
    };
    fetchRecipeDetails();
  }, [selectedRecipeId]);

  // Fetch reviews for the selected recipe
  useEffect(() => {
    if (!selectedRecipeId) return;
    const fetchReviews = async () => {
      setReviewsLoading(true);
      setReviewsError(null);
      setReviews([]);
      setAvgRating(null);
      try {
        const response = await fetch(`https://localhost:7043/api/Reviews/${selectedRecipeId}`, {
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) {
          if (response.status === 404) throw new Error('No reviews found for this recipe');
          throw new Error(`Failed to fetch reviews (Status: ${response.status})`);
        }
        const data = await response.json();
        setReviews(data.reviews || []);
        setAvgRating(data.avgRating || null);
        setCommentCounts((prev: any) => ({
          ...prev,
          [selectedRecipeId]: data.reviews?.length || 0,
        }));
      } catch (err: any) {
        setReviewsError(err.message);
      } finally {
        setReviewsLoading(false);
      }
    };
    fetchReviews();
  }, [selectedRecipeId]);

  const handleViewDetails = (recipeId: any) => {
    setSelectedRecipeId(recipeId);
  };

  const handleCloseModal = () => {
    setSelectedRecipeId(null);
    setRecipeDetails(null);
    setDetailsError(null);
    setReviews([]);
    setAvgRating(null);
    setReviewsError(null);
    setComment('');
    setRating('');
    setSubmitMessage('');
  };

  const handleSubmitReview = async () => {
    if (!comment || !rating || rating < 1 || rating > 5) {
      alert('Please enter a valid comment and rating between 1 and 5.');
      return;
    }

    const token = getAccessToken();
    if (!token) {
      alert('You must be logged in to submit a review.');
      return;
    }

    let userId: string | null = null;
    try {
      const decoded: DecodedToken = jwtDecode(token);
      userId = decoded.nameid || decoded.sub || decoded.userId || decoded.id;
      if (!userId) {
        throw new Error('User ID not found in token.');
      }
    } catch (err: any) {
      alert('Invalid or expired token. Please log in again.');
      console.error('Error decoding token:', err.message);
      return;
    }

    const reviewData = {
      review: comment,
      userId: userId,
      recipeId: selectedRecipeId,
      rate: rating,
    };

    try {
      const res = await fetch('https://localhost:7043/api/Reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      if (!res.ok) throw new Error('Failed to submit review.');

      setSubmitMessage('Thanks for your review!');
      setComment('');
      setRating('');

      const response = await fetch(`https://localhost:7043/api/Reviews/${selectedRecipeId}`, {
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews || []);
        setAvgRating(data.avgRating || null);
        setCommentCounts((prev: any) => ({
          ...prev,
          [selectedRecipeId]: data.reviews?.length || 0,
        }));
      }
    } catch (err: any) {
      setSubmitMessage('Error submitting review.');
      console.error(err);
    }
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setRating('');
    } else {
      const numValue = parseInt(value);
      if (!isNaN(numValue) && numValue >= 1 && numValue <= 5) {
        setRating(numValue);
      }
    }
  };

  const handleLikeToggle = async (recipeId: number, userId: string) => {
    const token = getAccessToken();
    if (!token) {
      alert('You must be logged in to like a recipe.');
      return;
    }

    const isCurrentlyLiked = interactionStates[recipeId]?.isLiked || false;
    const recipe = recipes.find((r: any) => r.id === recipeId);
    const creatorId = recipe?.userId;

    try {
      if (isCurrentlyLiked) {
        // Unlike the recipe
        const response = await fetch(
          `https://localhost:7043/api/RecipeLikes/Delete?userId=${userId}&recipeId=${recipeId}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) throw new Error('Failed to unlike recipe.');

        // Optimistically update the UI
        toggleInteraction(recipeId, 'isLiked', false);
        setLikeCounts((prev: any) => ({
          ...prev,
          [recipeId]: (prev[recipeId] || 0) - 1,
        }));

        // Fetch the updated like count from the backend
        const countResponse = await fetch(
          `https://localhost:7043/api/RecipeLikes/Count?recipeId=${recipeId}`,
          {
            headers: { Accept: 'application/json' },
          }
        );
        if (countResponse.ok) {
          const updatedCount = await countResponse.json();
          setLikeCounts((prev: any) => ({
            ...prev,
            [recipeId]: updatedCount,
          }));
        }
      } else {
        // Like the recipe
        const likeData = {
          userId: creatorId,
          recipeId: recipeId,
          logUserId: userId,
        };

        const response = await fetch('https://localhost:7043/api/RecipeLikes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(likeData),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to like recipe: ${errorText}`);
        }

        // Optimistically update the UI
        toggleInteraction(recipeId, 'isLiked', true);
        setLikeCounts((prev: any) => ({
          ...prev,
          [recipeId]: (prev[recipeId] || 0) + 1,
        }));

        // Fetch the updated like count from the backend
        const countResponse = await fetch(
          `https://localhost:7043/api/RecipeLikes/Count?recipeId=${recipeId}`,
          {
            headers: { Accept: 'application/json' },
          }
        );
        if (countResponse.ok) {
          const updatedCount = await countResponse.json();
          setLikeCounts((prev: any) => ({
            ...prev,
            [recipeId]: updatedCount,
          }));
        }
      }
    } catch (err: any) {
      alert(`Error: ${err.message}`);
      console.error(err);
      // Revert optimistic updates on failure
      toggleInteraction(recipeId, 'isLiked', isCurrentlyLiked);
      setLikeCounts((prev: any) => ({
        ...prev,
        [recipeId]: prev[recipeId] || 0,
      }));
    }
  };

  if (loading) return <section className="py-8"><p className="text-center text-gray-600">Loading recipes...</p></section>;
  if (error) return <section className="py-8"><p className="text-center text-red-600">Error: {error}</p></section>;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe: any) => {
            const token = getAccessToken();
            let userId = null;
            if (token) {
              try {
                const decoded: DecodedToken = jwtDecode(token);
                userId = decoded.nameid || decoded.sub || decoded.userId || decoded.id;
              } catch (err: any) {
                console.error('Error decoding token:', err.message);
              }
            }

            return (
              <div key={recipe.id} className="recipe-card w-full max-w-[350px] h-[550px] rounded-lg shadow-md overflow-hidden mx-auto">
                <div className="bg-gray-600 h-40">
                  <img
                    src={`https://localhost:7043${recipe.image}`}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col h-[350px]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-4">
                        <HeartIcon
                          className={`w-5 h-5 cursor-pointer ${
                            interactionStates[recipe.id]?.isLiked ? 'text-red-500' : 'text-black'
                          }`}
                          onClick={() => userId && handleLikeToggle(recipe.id, userId)}
                        />
                        <span className="text-black text-sm">{likeCounts[recipe.id] || 0}</span>
                        <div className="flex items-center">
                          <CommentIcon className="text-black mr-1 w-5 h-5" />
                          <span className="text-black text-sm">{commentCounts[recipe.id] || 0}</span>
                        </div>
                        <SaveIcon
                          className={`text-black mr-1 w-5 h-5 ${
                            interactionStates[recipe.id]?.isSaveIcon ? 'text-red-500' : ''
                          } cursor-pointer`}
                          onClick={() => toggleInteraction(recipe.id, 'isSaveIcon', !interactionStates[recipe.id]?.isSaveIcon)}
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{recipe.title}</h3>
                  <h1 className="text-sm text-gray-600">
                    Created by {recipe.CretedByName || 'Unknown Chef'}
                  </h1>
                  <div className="mt-2 text-[16px] font-body text-gray-700 flex-1">
                    <p><strong>Category:</strong> {recipe.category}</p>
                    <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p className="line-clamp-2"><strong>Description:</strong> {truncateString(20, recipe.description)}</p>
                    {recipe.notes && (
                      <p className="line-clamp-1"><strong>Notes:</strong> {truncateString(20, recipe.notes)}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleViewDetails(recipe.id)}
                    className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    View Recipe Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedRecipeId && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50" onClick={handleCloseModal}></div>
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">✕</button>
            {detailsLoading && <p className="text-center">Loading recipe...</p>}
            {detailsError && <p className="text-center text-red-600">Error: {detailsError}</p>}
            {recipeDetails && (
              <div>
                <h1 className="text-3xl font-bold mb-4">{recipeDetails.title}</h1>
                <p className="mb-2"><strong>Created by:</strong> {recipeDetails.cretedByName || 'Unknown Chef'}</p>
                <img
                  src={`https://localhost:7043${recipeDetails.imagePath}`}
                  alt={recipeDetails.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="mb-2"><strong>Description:</strong> {recipeDetails.description}</p>
                <p className="mb-2"><strong>Prep Time:</strong> {recipeDetails.prepTime}</p>
                <p className="mb-2"><strong>Servings:</strong> {recipeDetails.servings}</p>
                <p className="mb-2"><strong>Difficulty:</strong> {recipeDetails.difficulty}</p>
                <p className="mb-2"><strong>Notes:</strong> {recipeDetails.notes}</p>
                <h2 className="text-xl mt-4 mb-2 font-semibold">Ingredients:</h2>
                <ul className="list-disc ml-6 mb-4">
                  {recipeDetails.ingredients.map((item: any, index: any) => (
                    <li key={index}>{`${item.name} - ${item.amount}`}</li>
                  ))}
                </ul>
                <h2 className="text-xl mt-4 mb-2 font-semibold">Instructions:</h2>
                <ol className="list-decimal ml-6 mb-4">
                  {recipeDetails.instructions.map((step: any, index: any) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                {!reviewsLoading && !reviewsError && reviews.length === 0 && (
                  <p className="text-center text-gray-600">No reviews yet.</p>
                )}
                {avgRating && (
                  <p className="mb-2"><strong>Average Rating:</strong> {avgRating.toFixed(1)} / 5</p>
                )}
                {reviews.length > 0 && (
                  <ul className="list-disc ml-6 mb-4">
                    {reviews.map((review: any, index: any) => (
                      <li key={index} className="mb-2">
                        <p><strong>{review.userName || 'Anonymous'}:</strong> {review.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6">
                  <label className="block mb-1 font-bold font-body">Your Review</label>
                  <textarea
                    className="border p-2 w-full rounded"
                    rows={3}
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <label className="block mt-4 mb-1 font-bold font-body">Rating (1 to 5)</label>
                  <input
                    type="number"
                    className="border p-2 w-20 rounded"
                    min={1}
                    max={5}
                    value={rating}
                    onChange={handleRatingChange}
                  />
                  <button
                    onClick={handleSubmitReview}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Submit Review
                  </button>
                  {submitMessage && (
                    <p className="mt-2 text-green-600 font-medium">{submitMessage}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default RecipeCard;