import { truncateString } from '../../../../../../UI/Truncate-String/truncate-string';
import { HeartIcon } from '../../../../../../assets/icons/HeartIcon';
import { CommentIcon } from '../../../../../../assets/icons/CommentIcon';
import { SaveIcon } from '../../../../../../assets/icons/SaveIcon';

const SavedRecipe = ({ recipes }: { recipes: any[] }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Saved Recipes</h1>
      {recipes.length === 0 ? (
        <p className="text-center text-gray-600">No saved recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe: any) => (
            <div
              key={recipe.id}
              className="recipe-card w-full max-w-[350px] h-[550px] rounded-lg shadow-md overflow-hidden mx-auto"
            >
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
                      <HeartIcon className="text-black w-5 h-5" />
                      <span className="text-black text-sm">0</span>
                      <div className="flex items-center">
                        <CommentIcon className="text-black mr-1 w-5 h-5" />
                        <span className="text-black text-sm">{recipe.commentCount || 0}</span>
                      </div>
                      <SaveIcon
                        className="text-red-500 mr-1 w-5 h-5 cursor-not-allowed"
                        // Disabled since it's already saved
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
                  <p className="line-clamp-2">
                    <strong>Description:</strong> {truncateString(20, recipe.description)}
                  </p>
                  {recipe.notes && (
                    <p className="line-clamp-1">
                      <strong>Notes:</strong> {truncateString(20, recipe.notes)}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => alert('View details not implemented in SavedRecipe')}
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  View Recipe Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipe;