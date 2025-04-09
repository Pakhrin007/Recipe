import ViewRecipe from "../index";
import love from "../../../assets/Images/love.png"
import comment from "../../../assets/Images/comment.png"
import save from "../../../assets/Images/save.jpeg"
import hatImage from "../../../assets/Images/hat.png"
import { recipes } from "../../../Constants/card-array";

const RecipePage = () => {
    return (
        <div>
          {recipes.map((recipe) => (
            <ViewRecipe
              key={recipe.id}
              recipeName={recipe.title}
              recipeImage={recipe.image}
              prepTime={recipe.prepTime || ""}
              difficulty={recipe.difficulty || ""}
              Description={recipe.description || ""}
              tags={recipe.tags || []}
              ingredients={recipe.ingredients || []}
              NutritionalInfo={recipe.nutrition || []}
              cookingInstructions={recipe.cookingInstructions || []}
              LoveImage={love}
              commentImage={comment}
              loveCount={recipe.likes}
              commentCount={recipe.comments}
              saveImage={save}
              hatImage={hatImage}
            />
          ))}
        </div>
      );
}

export default RecipePage;