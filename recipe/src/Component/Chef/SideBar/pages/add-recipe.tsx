// add-recipe.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Slice/Store';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [estimatedTimeMinutes, setEstimatedTimeMinutes] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [stepInput, setStepInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Access userId from Redux store
  const userId = useSelector((state: RootState) => state.role.userId);
  const [createdByUserId, setCreatedByUserId] = useState('');

  useEffect(() => {
    if (userId) {
      setCreatedByUserId(userId);
    }
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    const estimatedTime = parseInt(estimatedTimeMinutes);

    console.log('title:', title.trim());
    console.log('description:', description.trim());
    console.log('estimatedTime:', estimatedTime);
    console.log('createdByUserId:', createdByUserId);

    if (!title.trim()) {
      setError('Title is required');
      setLoading(false);
      return;
    }

    if (!description.trim()) {
      setError('Description is required');
      setLoading(false);
      return;
    }

    if (isNaN(estimatedTime) || estimatedTime <= 0) {
      setError('Estimated time must be a valid number greater than 0');
      setLoading(false);
      return;
    }

    if (!createdByUserId) {
      setError('User ID is missing. Please log in and try again.');
      setLoading(false);
      return;
    }

    // Prepare the JSON payload according to the Swagger schema
    const recipeData = {
      title: title.trim(),
      description: description.trim(),
      imagePath: image ? '' : null, // Placeholder; handle image upload separately if needed
      estimatedTimeMinutes: estimatedTime,
      createdByUserId: parseInt(createdByUserId), // Convert to number as per schema
      ingredients: ingredients.map((name: string, index: number) => ({
        id: 0, // Let the backend assign the ID
        name: name.trim(),
        recipeId: 0, // Let the backend assign the recipeId
        createdAt: new Date().toISOString(), // Current timestamp
      })),
      steps: steps.map((instruction: string, index: number) => ({
        stepNumber: index + 1,
        instruction: instruction.trim(),
      })),
      categories: categories.map((cat: string) => parseInt(cat) || 0), // Assuming categories are numeric IDs
    };

 

    try {
      const response = await axios.post('https://localhost:7136/api/recipes', recipeData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || '{}').Token}`,
        },
      });
      console.log('Response:', response.data);
      setSuccess(true);
      setTitle('');
      setDescription('');
      setImage(null);
      setEstimatedTimeMinutes('');
      setIngredients([]);
      setSteps([]);
      setCategories([]);
    } catch (err: any) {
      console.error('Add Recipe Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim()) {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput('');
    }
  };

  const handleAddStep = () => {
    if (stepInput.trim()) {
      setSteps([...steps, stepInput.trim()]);
      setStepInput('');
    }
  };

  const handleAddCategory = () => {
    if (categoryInput.trim()) {
      setCategories([...categories, categoryInput.trim()]);
      setCategoryInput('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold">Add Recipe</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded border border-red-300">{error}</div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded border border-green-300">
          Recipe added successfully!
        </div>
      )}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full"
      />
      <input
        type="number"
        placeholder="Estimated Time (minutes)"
        value={estimatedTimeMinutes}
        onChange={(e) => setEstimatedTimeMinutes(e.target.value)}
        className="w-full p-2 border rounded"
      />

      {/* Ingredients */}
      <div>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Add ingredient"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            type="button"
            onClick={handleAddIngredient}
            className="px-3 py-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>
        <ul className="list-disc ml-6">
          {ingredients.map((ing: string, i: number) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Add step"
            value={stepInput}
            onChange={(e) => setStepInput(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            type="button"
            onClick={handleAddStep}
            className="px-3 py-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>
        <ol className="list-decimal ml-6">
          {steps.map((step: string, i: number) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Categories */}
      <div>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Add category"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="px-3 py-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>
        <ul className="list-disc ml-6">
          {categories.map((cat: string, i: number) => (
            <li key={i}>{cat}</li>
          ))}
        </ul>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Add Recipe'}
      </button>
    </form>
  );
};

export default AddRecipeForm;