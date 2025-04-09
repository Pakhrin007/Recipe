
const AddRecipePage = () => {
  return (
    <div className="min-h-screen w-full  flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Add Your Recipe</h1>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Cancel
          </button>
        </div>

        {/* Recipe Name */}
        <div>
          <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">
            Recipe Name
          </label>
          <input
            type="text"
            id="recipeName"
            placeholder="Enter recipe name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
        <div>
          <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">
            Recipe Image
          </label>  
          <input
            type="file"
            id="recipeImage"
            placeholder="Enter recipe name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            placeholder="Describe your recipe"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          <div className="mt-2 space-y-2">
            {/* Ingredient Input Fields */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ingredient 1"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Remove
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ingredient 2"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Remove
              </button>
            </div>
            {/* Add Ingredient Button */}
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Add Ingredient
            </button>
          </div>
        </div>

        {/* Cooking Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Cooking Steps</label>
          <div className="mt-2 space-y-2">
            {/* Step Input Fields */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Step 1"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Remove
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Step 2"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Remove
              </button>
            </div>
            {/* Add Step Button */}
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Add Step
            </button>
          </div>
        </div>

        {/* Preparation Time */}
        <div>
          <label htmlFor="preparationTime" className="block text-sm font-medium text-gray-700">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="preparationTime"
            placeholder="e.g., 30"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Difficulty Level */}
        <div>
          <label htmlFor="difficultyLevel" className="block text-sm font-medium text-gray-700">
            Difficulty Level
          </label>
          <select
            id="difficultyLevel"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Chef's Name */}
        <div>
          <label htmlFor="chefName" className="block text-sm font-medium text-gray-700">
            Chef's Name
          </label>
          <input
            type="text"
            id="chefName"
            placeholder="Enter chef's name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipePage;