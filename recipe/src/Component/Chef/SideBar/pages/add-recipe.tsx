import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getAccessToken } from '../../../../Services/JwtServices';
import { jwtDecode } from 'jwt-decode';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryNames, setCategoryNames] = useState('');
  const [categories, setCategories] = useState([]);
  const [cookingTime, setCookingTime] = useState('30 mins');
  const [cookingTip, setCookingTip] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
  const [instructions, setInstructions] = useState(['']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const userIdFromRedux = useSelector((state: any) => state.role.userId);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [servings, setServings] = useState(1);
  const [difficulty, setDifficulty] = useState('');

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://localhost:7043/api/categories');
        setCategories(response.data);
      } catch (err: any) {
        console.error('Failed to load categories:', err.response?.data || err.message);
      }
    };
    fetchCategories();
  }, []);

  // Get userId from JWT as fallback
  let userId: string | number = userIdFromRedux;
  const token = getAccessToken();
  if (!userId && token) {
    try {
      const decodedToken: any = jwtDecode(token);
      userId = decodedToken['nameid'];
      console.log('Using userId from JWT:', userId);
    } catch (err) {
      console.error('Failed to decode JWT:', err);
    }
  }

  // Log userId for debugging
  console.log('userId:', userId);

  // Add a new ingredient field
  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '' }]);
  };

  // Remove an ingredient field
  const removeIngredient = (index: number) => {
    if (ingredients.length === 1) {
      setError('At least one ingredient is required.');
      return;
    }
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  // Add a new instruction field
  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  // Remove an instruction field
  const removeInstruction = (index: number) => {
    if (instructions.length === 1) {
      setError('At least one instruction is required.');
      return;
    }
    setInstructions(instructions.filter((_: any, i: number) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate userId
    if (!userId) {
      setError('User ID is missing. Please log in again.');
      setIsLoading(false);
      return;
    }

    // Form validation
    if (!title || title.length > 100) {
      setError('Title is required and must be 100 characters or less.');
      setIsLoading(false);
      return;
    }
    if (!description || description.length > 1000) {
      setError('Description is required and must be 1000 characters or less.');
      setIsLoading(false);
      return;
    }
    if (!categoryNames) {
      setError('Please select a category.');
      setIsLoading(false);
      return;
    }
    if (ingredients.some((ing: { name: string; amount: string }) => !ing.name || !ing.amount)) {
      setError('Each ingredient must have a name and amount.');
      setIsLoading(false);
      return;
    }
    if (instructions.some((inst: string) => !inst.trim())) {
      setError('Each instruction must have a value.');
      setIsLoading(false);
      return;
    }
    if (!difficulty) {
      setError('Please select a difficulty level.');
      setIsLoading(false);
      return;
    }

    // Prepare form data per API spec
    const categoryId = parseInt(categoryNames);
    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Description', description);
    formData.append('PrepTime', cookingTime);
    formData.append('Difficulty', difficulty);
    formData.append('Servings', servings.toString());
    formData.append('Category', categoryId.toString());
    formData.append('Notes', cookingTip || '');
    formData.append('CreatedBy', userId.toString()); // String "4" for integer($int32)
    formData.append('Ingredients', JSON.stringify(ingredients)); // JSON string
    formData.append('Instructions', JSON.stringify(instructions)); // JSON string of array

    // Add file upload
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      formData.append('Photo', file); // Binary file
    } else {
      setError('Please upload a recipe image.');
      setIsLoading(false);
      return;
    }

    // Log FormData for debugging
    for (const [key, value] of formData.entries()) {
      console.log(`FormData: ${key}=${value}`);
    }

    try {
      // Send the request to the backend
      const response = await axios.post(
        'https://localhost:7043/api/Recipe/products', // Match API path case
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Recipe response:', response.data);
      alert('Recipe published successfully!');
      setIsLoading(false);

      // Reset form fields
      setTitle('');
      setDescription('');
      setCategoryNames('');
      setCookingTime('30 mins');
      setServings(1);
      setDifficulty('');
      setCookingTip('');
      setIngredients([{ name: '', amount: '' }]);
      setInstructions(['']);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: any) {
      console.error('Error submitting recipe:', error);
      if (error.response?.status === 401) {
        setError('Please log in to publish a recipe.');
      } else if (error.response?.data?.message?.includes('CreatedBy')) {
        setError('Invalid user ID. Please log in again.');
      } else {
        setError(error.response?.data?.message || 'Failed to publish recipe. Please try again.');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="add-recipe max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-red-500">Add Recipe</h1>
        <p className="mt-2 text-sm text-gray-600">Share your culinary masterpiece with our community</p>
      </header>

      <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
        {/* Error and Loading Messages */}
        {error && <div className="error-message text-red-500 text-sm">{error}</div>}
        {isLoading && <div className="loading-message text-gray-600 text-sm">Submitting recipe...</div>}

        {/* Recipe Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            placeholder="Enter Recipe Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Recipe Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Description</label>
          <textarea
            placeholder="Brief Description of your Recipe"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={1000}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-y"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={categoryNames}
            onChange={(e) => setCategoryNames(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat: { id: number; name: string }) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Servings */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Servings</label>
          <input
            type="number"
            placeholder="Number of servings"
            min={1}
            value={servings}
            onChange={(e) => setServings(parseInt(e.target.value) || 1)}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Difficulty Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
          >
            <option value="">-- Select Difficulty --</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          {ingredients.map((ingredient: { name: string; amount: string }, index: number) => (
            <div key={index} className="flex gap-3 mb-3">
              <input
                type="text"
                placeholder="Ingredient"
                value={ingredient.name}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index].name = e.target.value;
                  setIngredients(newIngredients);
                }}
                maxLength={100}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              />
              <input
                type="text"
                placeholder="Amount"
                value={ingredient.amount}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index].amount = e.target.value;
                  setIngredients(newIngredients);
                }}
                maxLength={50}
                required
                className="w-1/3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              />
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            Add Ingredient
          </button>
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          {instructions.map((instruction: string, index: number) => (
            <div key={index} className="flex gap-3 mb-3">
              <input
                type="text"
                placeholder="Instruction"
                value={instruction}
                onChange={(e) => {
                  const newInstructions = [...instructions];
                  newInstructions[index] = e.target.value;
                  setInstructions(newInstructions);
                }}
                maxLength={500}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
              />
              <button
                type="button"
                onClick={() => removeInstruction(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addInstruction}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            Add Instruction
          </button>
        </div>

        {/* Cooking Tip */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Cooking Tip</label>
          <textarea
            placeholder="Share your tip for the recipe"
            rows={3}
            value={cookingTip}
            onChange={(e) => setCookingTip(e.target.value)}
            maxLength={500}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-y"
          />
        </div>

        {/* Recipe Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Image</label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={() => setError(null)}
            required
            className="mt-1 block"
            
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            disabled={isLoading}
          >
            {isLoading ? 'Publishing...' : 'Publish Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;