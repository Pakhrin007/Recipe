import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [commentCounts, setCommentCounts] = useState({}); // Share comment counts for SavedRecipe

  const toggleSavedRecipe = (recipe: any, isSaved: boolean) => {
    setSavedRecipes((prev: any) => {
      if (isSaved) {
        return prev.some((r: any) => r.id === recipe.id) ? prev : [...prev, recipe];
      }
      return prev.filter((r: any) => r.id !== recipe.id);
    });
  };

  return (
    <RecipeContext.Provider value={{ savedRecipes, toggleSavedRecipe, commentCounts, setCommentCounts }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);