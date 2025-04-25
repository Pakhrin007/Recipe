import { SaveIcon } from '../../assets/icons/SaveIcon';
import { useState, useEffect } from 'react';
import { truncateString } from '../../UI/Truncate-String/truncate-string';
import { HeartIcon } from '../../assets/icons/HeartIcon';
import { CommentIcon } from '../../assets/icons/CommentIcon';

function RecipeCard() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [interactionStates, setInteractionStates] = useState({});
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [submitMessage, setSubmitMessage] = useState('');
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(null);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewsError, setReviewsError] = useState(null);
  const [commentCounts, setCommentCounts] = useState({}); // New state for comment counts

  const initializeInteractionState = (recipeId) => ({
    isSaveIcon: false,
  });

  const toggleInteraction = (recipeId, key, value) => {
    setInteractionStates((prev) => ({
      ...prev,
      [recipeId]: {
        ...prev[recipeId],
        [key]: value,
      },
    }));
  };

  // Fetch all recipes and their comment counts
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://localhost:7043/api/Recipe/all', {
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const recipesData = data.map((recipe) => ({
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
        }));
        setRecipes(recipesData);

        // Initialize interaction states
        const initialStates = recipesData.reduce((acc, recipe) => ({
          ...acc,
          [recipe.id]: initializeInteractionState(recipe.id),
        }), {});
        setInteractionStates(initialStates);

        // Fetch comment counts for each recipe
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
              counts[recipe.id] = 0; // No reviews or error
            }
          } catch (err) {
            console.warn(`Failed to fetch reviews for recipe ${recipe.id}: ${err.message}`);
            counts[recipe.id] = 0;
          }
        }
        setCommentCounts(counts);
      } catch (err) {
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
      } catch (err) {
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
        // Update comment count for the selected recipe
        setCommentCounts((prev) => ({
          ...prev,
          [selectedRecipeId]: data.reviews?.length || 0,
        }));
      } catch (err) {
        setReviewsError(err.message);
      } finally {
        setReviewsLoading(false);
      }
    };
    fetchReviews();
  }, [selectedRecipeId]);

  const handleViewDetails = (recipeId) => {
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
    setRating(0);
    setSubmitMessage('');
  };

  const handleSubmitReview = async () => {
    if (!comment || rating < 1 || rating > 5) {
      alert('Please enter a valid comment and rating between 1 and 5.');
      return;
    }

    const reviewData = {
      review: comment,
      userId: 1, // Replace with actual logged-in user ID
      recipeId: selectedRecipeId,
      rate: rating,
    };

    try {
      const res = await fetch('https://localhost:7043/api/Reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!res.ok) throw new Error('Failed to submit review.');

      setSubmitMessage('Thanks for your review!');
      setComment('');
      setRating(0);

      // Re-fetch reviews to update the list and comment count
      const response = await fetch(`https://localhost:7043/api/Reviews/${selectedRecipeId}`, {
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews || []);
        setAvgRating(data.avgRating || null);
        setCommentCounts((prev) => ({
          ...prev,
          [selectedRecipeId]: data.reviews?.length || 0,
        }));
      }
    } catch (err) {
      setSubmitMessage('Error submitting review.');
      console.error(err);
    }
  };

  if (loading) return <section className="py-8"><p className="text-center text-gray-600">Loading recipes...</p></section>;
  if (error) return <section className="py-8"><p className="text-center text-red-600">Error: {error}</p></section>;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
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
                  <div className="flex items-center ">
                    <div className="flex items-center gap-x-4">
                      <HeartIcon className="text-black w-5 h-5" />
                      <span className="text-black text-sm">0</span>
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
          ))}
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
                  {recipeDetails.ingredients.map((item, index) => (
                    <li key={index}>{`${item.name} - ${item.amount}`}</li>
                  ))}
                </ul>
                <h2 className="text-xl mt-4 mb-2 font-semibold">Instructions:</h2>
                <ol className="list-decimal ml-6 mb-4">
                  {recipeDetails.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                {/* Display Reviews */}
            
            
                {!reviewsLoading && !reviewsError && reviews.length === 0 && (
                  <p className="text-center text-gray-600">No reviews yet.</p>
                )}
                {avgRating && (
                  <p className="mb-2"><strong>Average Rating:</strong> {avgRating.toFixed(1)} / 5</p>
                )}
                {reviews.length > 0 && (
                  <ul className="list-disc ml-6 mb-4">
                    {reviews.map((review, index) => (
                      <li key={index} className="mb-2">
                        <p><strong>{review.userName || 'Anonymous'}:</strong> {review.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {/* Submit Review */}
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
                    onChange={(e) => setRating(parseInt(e.target.value))}
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