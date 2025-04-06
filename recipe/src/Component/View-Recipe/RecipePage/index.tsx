import ViewRecipe from "../index";
import RecipeImage from "../../../assets/images/recipe-image.png";
import love from "../../../assets/Images/love.png"
import comment from "../../../assets/Images/comment.png"
import save from "../../../assets/Images/save.jpeg"
import hatImage from "../../../assets/Images/hat.png"
const RecipePage = () => {
    return (
        <div>
            <ViewRecipe recipeName={"Recipe Name"}  recipeImage={RecipeImage} prepTime={"10 minutes"} difficulty={"Easy"} Description={"Each skewer bursts with the quintessential flavors of Italy. The juicy sweetness of the cherry tomatoes pairs perfectly with the mild, milky flavor of the mozzarella. Fresh basil leaves add a fragrant and slightly peppery note, enhancing the overall taste experience. To finish, we drizzle the skewers with high-quality extra virgin olive oil and a touch of balsamic glaze, adding a rich and tangy depth to every bite."} tags={["Tag 1", "Tag 2", "Tag 3"]} ingredients={["Ingredient 1", "Ingredient 2", "Ingredient 3"]} NutritionalInfo={["Nutritional Info 1", "Nutritional Info 2", "Nutritional Info 3"]} cookingInstructions={["Cooking Instruction 1", "Cooking Instruction 2", "Cooking Instruction 3"]} LoveImage={love} commentImage={comment} loveCount={10} commentCount={10} saveImage={save} hatImage={hatImage} />
        </div>
    )
}

export default RecipePage;