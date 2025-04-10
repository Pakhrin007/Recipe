import recipe from "../../assets/Images/recipe.png"
interface Recipe {
    id: number;
    title: string;
    image: string;
    likes: number;
    comments: number;
    rating: number;
    loveicon?: React.ReactNode;
    commenticon?: React.ReactNode;
    bookmarkicon?: React.ReactNode;
    staricon?: React.ReactNode;
    prepTime?: string;
    difficulty?: string;
    description?: string;
    tags?: string[];
    ingredients?: string[];
    nutrition?: string[];
    cookingInstructions?: string[];
    chefName?: string;
    chefImage?: string;
    chefEmail?: string;
    chefPhone?: string;
}

export const recipes: Recipe[] = [
    {
      id: 1,
      title: "Gyro Sandwich",
      image: recipe, // Replace with actual image URL or path
      likes: 100,
      comments: 100,
      rating: 4.9,
      prepTime: "10 minutes",
      difficulty: "Easy",
      description: "This is a description of the recipe",
      tags: ["Recipe", "Recipe", "Recipe"],
      ingredients: ["pasta", "tomato", "onion"],
      nutrition: ["Recipe", "Recipe", "Recipe"],
      cookingInstructions: ["Recipe", "Recipe", "Recipe"],
      chefName: "John Doe",
      chefImage: recipe,
    },

  ];