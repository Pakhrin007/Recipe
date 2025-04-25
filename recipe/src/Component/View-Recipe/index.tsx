import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<{ user: string; text: string }[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) {
        setError("No recipe ID provided");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://localhost:7043/api/Recipe/filterId?Id=${id}`,
          {
            headers: { Accept: "application/json" },
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Recipe not found");
          }
          throw new Error(`Failed to fetch recipe (Status: ${response.status})`);
        }

        const data = await response.json();
        const ingredients =
          typeof data.ingredients === "string"
            ? JSON.parse(data.ingredients || "[]")
            : data.ingredients;
        let instructions =
          typeof data.instructions === "string"
            ? JSON.parse(data.instructions || "[]")
            : data.instructions;

        setRecipe({ ...data, ingredients, instructions });
      } catch (err: any) {
        console.error("Error fetching recipe:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  // Simulate adding a comment
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    setComments([
      ...comments,
      { user: "Anonymous", text: newComment.trim() },
    ]);
    setNewComment("");
  };

  if (loading) return <p className="text-center">Loading recipe...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;
  if (!recipe) return <p className="text-center">No recipe found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Recipe Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <img
            src={`https://localhost:7043${recipe.imagePath}`}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <p className="mb-2">
            <strong>Description:</strong> {recipe.description}
          </p>
          <p className="mb-2">
            <strong>Prep Time:</strong> {recipe.prepTime}
          </p>
          <p className="mb-2">
            <strong>Servings:</strong> {recipe.servings}
          </p>
          <p className="mb-2">
            <strong>Difficulty:</strong> {recipe.difficulty}
          </p>
          <p className="mb-2">
            <strong>Notes:</strong> {recipe.notes}
          </p>
          <h2 className="text-xl mt-4 mb-2 font-semibold">Ingredients:</h2>
          <ul className="list-disc ml-6 mb-4">
            {recipe.ingredients.map(
              (item: { name: string; amount: string }, index: number) => (
                <li key={index}>{`${item.name} - ${item.amount}`}</li>
              )
            )}
          </ul>
          <h2 className="text-xl mt-4 mb-2 font-semibold">Instructions:</h2>
          <ol className="list-decimal ml-6">
            {recipe.instructions.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Comments Section */}
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          {/* Comment Input */}
          <div className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-blue-500"
              rows={3}
            ></textarea>
            <button
              onClick={handleAddComment}
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Add Comment
            </button>
          </div>

          {/* Display Comments */}
          <div
            className="max-h-64 overflow-y-auto space-y-2"
            style={{ scrollbarWidth: "thin" }}
          >
            {comments.length > 0 ? (
              comments.map((comment: { user: string; text: string }, index: number) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 rounded border border-gray-200"
                >
                  <p className="font-semibold">{comment.user}</p>
                  <p>{comment.text}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No comments yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;