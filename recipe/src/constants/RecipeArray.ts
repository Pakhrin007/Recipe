import recipe from "../assets/Images/recipe.png"
interface RecipeCardProps {
    image: string;
    title: string;
    rating: number;
    likes: number;
    comments: number;
    buttonText: string;
}

    export const recipeCards: RecipeCardProps[] = [
    {
      image: recipe,
      title: "Gyro Sandwich",
      rating: 4.9,
      likes: 100,
      comments: 100,
      buttonText: "View Recipe Details",
    },
    {
      image: recipe,
      title: "Margherita Pizza",
      rating: 4.7,
      likes: 85,
      comments: 60,
      buttonText: "View Recipe Details",
    },
    {
      image: recipe,
      title: "Chicken Tikka Masala",
      rating: 4.8,
      likes: 120,
      comments: 90,
      buttonText: "View Recipe Details",
    },
    {
      image: recipe,
      title: "Caprese Salad",
      rating: 4.5,
      likes: 70,
      comments: 45,
      buttonText: "View Recipe Details",
    },
    {
      image: recipe,
      title: "Chocolate Lava Cake",
      rating: 4.9,
      likes: 150,
      comments: 110,
      buttonText: "View Recipe Details",
    },
  ];