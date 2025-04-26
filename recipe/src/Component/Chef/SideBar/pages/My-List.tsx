import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Slice/Store';

// Define types to match the backend response
interface IngredientDTO {
    name: string;
    amount: string;
}

interface RecipeDTO {
    id: number;
    title: string;
    description: string;
    prepTime: string;
    servings: string;
    difficulty: string;
    ingredients: string; // JSON string
    instructions: string; // JSON string
    imagePath: string | null;
    notes: string | null;
    categoryId: number;
    category: string;
    userId?: number; // Optional, as it may be missing
}

interface EditRecipeForm {
    id: number;
    title: string;
    description: string;
    prepTime: string;
    servings: string;
    difficulty: string;
    ingredients: IngredientDTO[];
    instructions: string[];
    notes: string;
    categoryId: number;
}

const MyList = () => {
    const [recipes, setRecipes] = useState<RecipeDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editRecipe, setEditRecipe] = useState<EditRecipeForm | null>(null);

    const userId = useSelector((state: RootState) => state.role.userId);

    useEffect(() => {
        if (!userId) {
            setError('User ID not found. Please log in.');
            setLoading(false);
            return;
        }

        const fetchRecipes = async () => {
            try {
                const tokenString = localStorage.getItem('token');
                if (!tokenString) {
                    throw new Error('Authentication token is missing. Please log in again.');
                }

                let token;
                try {
                    token = JSON.parse(tokenString).Token;
                } catch (parseError) {
                    console.error('Error parsing token:', parseError);
                    throw new Error('Invalid token format. Please log in again.');
                }

                const res = await axios.get<RecipeDTO[]>(
                    `https://localhost:7043/api/Recipe/filterUserId?Id=${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json',
                        },
                    }
                );
                console.log('Fetched Recipes:', JSON.stringify(res.data, null, 2));
                setRecipes(res.data);
            } catch (err: any) {
                console.error('Fetch Recipes Error:', err);
                setError(err.response?.data?.message || err.message || 'Error fetching recipes');
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [userId]);

    // Function to handle recipe deletion
    const handleDelete = async (recipeId: number) => {
        if (!window.confirm('Are you sure you want to delete this recipe?')) {
            return;
        }

        try {
            const tokenString = localStorage.getItem('token');
            if (!tokenString) {
                throw new Error('Authentication token is missing. Please log in again.');
            }

            let token;
            try {
                token = JSON.parse(tokenString).Token;
            } catch (parseError) {
                console.error('Error parsing token:', parseError);
                throw new Error('Invalid token format. Please log in again.');
            }

            await axios.delete(`https://localhost:7043/api/Recipe/deleteRecipe/${recipeId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            });

            setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
            alert('Recipe deleted successfully!');
        } catch (err: any) {
            console.error('Delete Recipe Error:', err);
            setError(err.response?.data || err.message || 'Error deleting recipe');
        }
    };

    // Function to open the edit modal

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-100 overflow-y-auto">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 mx-auto"></div>
                    <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">Loading your delicious recipes...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-100 overflow-y-auto">
                <div className="bg-red-50 text-red-700 p-6 rounded-lg border border-red-200 shadow-lg max-w-md text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-lg font-medium">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen overflow-y-auto p-x-12 flex gap-8 flex-col w-screen">
            <div className="max-w-7xl flex gap-8 py-12 px-4 sm:px-6 lg:px-8 flex-col">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight font-title">
                    My Recipes
                </h1>
                {recipes.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-md">
                        <p className="text-lg text-gray-600 font-medium">
                            No recipes found. Let’s get cooking—add a new recipe!
                        </p>
                        <a
                            href="/add-recipe"
                            className="mt-4 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
                        >
                            Add Your First Recipe
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-12">
                        {recipes.map((recipe: RecipeDTO) => {
                            const ingredients = JSON.parse(recipe.ingredients);
                            let instructions: string[] = [];
                            try {
                                const parsed = JSON.parse(recipe.instructions);
                                instructions = typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
                            } catch (e) {
                                console.error('Error parsing instructions:', e, recipe.instructions);
                                instructions = [];
                            }

                            return (
                                <div
                                    key={recipe.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fade-in w-[350px] h-[700px] flex flex-col"
                                >
                                    {recipe.imagePath ? (
                                        <img
                                            src={`https://localhost:7043${recipe.imagePath}`}
                                            alt={recipe.title}
                                            className="h-48 object-cover rounded-t-xl"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-xl">
                                            <span className="text-gray-500 font-medium">No Image</span>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 truncate font-body">{recipe.title}</h3>
                                        <p className="mt-2 text-gray-600 line-clamp-3 font-body">{recipe.description}</p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            <span className="font-medium text-gray-700 font-body">Time:</span> {recipe.prepTime}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            <span className="font-medium text-gray-700 font-body">Servings:</span> {recipe.servings}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            <span className="font-medium text-gray-700 font-body">Difficulty:</span> {recipe.difficulty}
                                        </p>
                                        <div className="mt-4">
                                            <h4 className="text-lg font-semibold text-gray-900 font-body">Ingredients</h4>
                                            {ingredients.length === 0 ? (
                                                <p className="text-gray-500 text-sm mt-1">No ingredients listed.</p>
                                            ) : (
                                                <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm font-body">
                                                    {ingredients.map((ingredient: IngredientDTO, index: number) => (
                                                        <li key={index} className="mt-1">
                                                            {ingredient.name} {ingredient.amount ? `(${ingredient.amount})` : ''}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="text-lg font-semibold text-gray-900 font-body">Steps</h4>
                                            {instructions.length === 0 ? (
                                                <p className="text-gray-500 text-sm mt-1">No steps listed.</p>
                                            ) : (
                                                <ol className="list-decimal pl-5 mt-2 text-gray-600 text-sm font-body">
                                                    {instructions.map((step: string, index: number) => (
                                                        <li key={index} className="mt-1">{step}</li>
                                                    ))}
                                                </ol>
                                            )}
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="text-lg font-semibold text-gray-900 font-body">Category</h4>
                                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                {recipe.category}
                                            </span>
                                        </div>
                                        {recipe.notes && (
                                            <div className="mt-4">
                                                <h4 className="text-lg font-semibold text-gray-900 font-body">Notes</h4>
                                                <p className="text-gray-600 text-sm mt-1">{recipe.notes}</p>
                                            </div>
                                        )}
                                        <div className="mt-4 flex gap-4">
                                            <button
                                                onClick={() => handleDelete(recipe.id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Edit Recipe Modal */}
            
        </div>
    );
};

export default MyList;