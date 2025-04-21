import { AlertIcon } from '../../assets/icons/AlertIcon';
import { SaveIcon } from '../../assets/icons/SaveIcon';
import { HeartIcon } from '../../assets/icons/HeartIcon';
import { CommentIcon } from '../../assets/icons/CommentIcon';
import { StarIcon } from '../../assets/icons/StarIcon';
import { useState, useEffect } from 'react';

function RecipeCard() {
  // State for API data, loading, and error
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for icon interactions (per recipe)
  const [interactionStates, setInteractionStates] = useState<any>({});

  // Initialize interaction states for a recipe
  const initializeInteractionState = (recipeId: string) => ({
    isStarYellow: false,
    isHeartRed: false,
    isSaveIcon: false,
  });

  // Toggle interaction state for a specific recipe and icon
  const toggleInteraction = (recipeId: string, key: string) => {
    setInteractionStates((prev: any) => ({
      ...prev,
      [recipeId]: {
        ...prev[recipeId],
        [key]: !prev[recipeId][key],
      },
    }));
  };

  // Fetch recipes and likes from API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://localhost:7043/api/Recipe/all', {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Fetch likes for each recipe
        const recipesWithLikes = await Promise.all(
          data.map(async (recipe: any) => {
            try {
              const likesResponse = await fetch(
                `https://localhost:7043/api/Recipe/RecipeLikes?recipeId=${recipe.id}`,
                {
                  headers: {
                    Accept: 'application/json',
                  },
                }
              );
              const likes = await likesResponse.json();
              return {
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
                category: recipe.category,
                userId: recipe.userId,
                likes: likes || 0, // Total likes from RecipeLikes
                comments: 0, // Placeholder (no comments endpoint)
                rating: 0, // Placeholder (no ratings endpoint)
              };
            } catch (err) {
              console.error(`Error fetching likes for recipe ${recipe.id}:`, err);
              return {
                ...recipe,
                likes: 0,
                comments: 0,
                rating: 0,
                ingredients: JSON.parse(recipe.ingredients || '[]'),
                instructions: JSON.parse(recipe.instructions || '[]'),
                image: recipe.imagePath,
                userId: recipe.userId,
              };
            }
          })
        );

        setRecipes(recipesWithLikes);

        // Initialize interaction states for all recipes
        const initialStates = recipesWithLikes.reduce((acc: any, recipe: any) => ({
          ...acc,
          [recipe.id]: initializeInteractionState(recipe.id),
        }), {});
        setInteractionStates(initialStates);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Render loading, error, or recipe cards
  if (loading) {
    return (
      <section id="recipes" className="py-8">
        <div className="recipes-container max-w-7xl mx-auto">
          <p className="text-center text-gray-600">Loading recipes...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="recipes" className="py-8">
        <div className="recipes-container max-w-7xl mx-auto">
          <p className="text-center text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="recipes" className="py-8">
      <div className="recipes-container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-body">
          {recipes.map((recipe: any) => (
            <div
              key={recipe.id}
              className="recipe-card w-[300px] h-[450px] rounded-lg shadow-md overflow-hidden mx-auto"
            >
              {/* Image */}
              <div className="bg-gray-600 h-40">
                <img
                  src={`https://localhost:7043${recipe.image}`}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col h-[410px]">
                {/* Interaction Icons */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <HeartIcon
                        className={`text-black mr-1 w-5 h-5 ${
                          interactionStates[recipe.id]?.isHeartRed ? 'text-red-500' : ''
                        } cursor-pointer`}
                        onClick={() => toggleInteraction(recipe.id, 'isHeartRed')}
                      />
                      <span className="text-black text-sm">{recipe.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <CommentIcon className="text-black mr-1 w-5 h-5" />
                      <span className="text-black text-sm">{recipe.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <SaveIcon
                        className={`text-black mr-1 w-5 h-5 ${
                          interactionStates[recipe.id]?.isSaveIcon ? 'text-red-500' : ''
                        } cursor-pointer`}
                        onClick={() => toggleInteraction(recipe.id, 'isSaveIcon')}
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <AlertIcon className="text-black mr-1 w-5 h-5" />
                  </div>
                </div>

                {/* Title and User */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-black mb-2">{recipe.title}</h3>
                  <div className="flex items-center gap-x-2">
                    <StarIcon
                      className={`text-black mr-1 w-5 h-5 ${
                        interactionStates[recipe.id]?.isStarYellow ? 'text-yellow-500' : ''
                      } cursor-pointer`}
                      onClick={() => toggleInteraction(recipe.id, 'isStarYellow')}
                    />
                    <span className="text-black text-sm">{recipe.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Created by User {recipe.userId}</p>

                {/* Additional Details */}
                <div className="mt-2 text-sm text-gray-700">
                  <p><strong>Category:</strong> {recipe.category}</p>
                  <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
                  <p><strong>Servings:</strong> {recipe.servings}</p>
                  <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                  <p className="line-clamp-2"><strong>Description:</strong> {recipe.description}</p>
                  {recipe.notes && (
                    <p className="line-clamp-1"><strong>Notes:</strong> {recipe.notes}</p>
                  )}
                </div>

                {/* Button */}
                <button className="mt-auto w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  View Recipe Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeCard;