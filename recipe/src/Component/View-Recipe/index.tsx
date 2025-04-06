import ChevronLeftIcon from "../../assets/icons/ChevLeftIcon";

interface ViewRecipeProps {
    LoveImage: string;
    commentImage: string;
    saveImage: string;
    loveCount: number;
    commentCount: number;
    recipeName: string;
    hatImage: string;
    recipeImage: string;
    prepTime: string;
    difficulty: string;
    Description: string;
    tags: string[];
    ingredients: string[];
    NutritionalInfo: string[];
    cookingInstructions: string[];
}

const ViewRecipe = ({
    recipeName,
    recipeImage,
    hatImage,
    prepTime,
    difficulty,
    Description,
    tags,
    ingredients,
    NutritionalInfo,
    cookingInstructions,
    LoveImage,
    commentImage,
    loveCount,
    commentCount,
    saveImage,
}: ViewRecipeProps) => {
    return (
        <div className="flex flex-col gap-y-4 px-18 py-6">
            {/* ---------------------Back button--------------------- */}
            <div className="flex items-center gap-x-6">
                <div className="relative flex justify-center items-center h-10 w-10 rounded-full bg-[#BE1E1E]/[56%]">
                    <ChevronLeftIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-[20px] leading-[24px] font-medium">Back to Recipe List</p>
            </div>

            <div className="relative w-full h-[450px]">
                <img src={recipeImage} alt={recipeName} className="h-[90%] w-[95.8%] mt-4" />
                <img
                    src={saveImage}
                    alt={recipeName}
                    className="h-[60px] w-[60px] mr-[0px] absolute top-[10px] right-[0px]"
                />
            </div>
            <div className="flex  justify-between items-center pr-18">
            <div className="flex gap-x-4">
                <div className="flex gap-x-2 items-center">
                    <img src={LoveImage} alt="Love"  className="h-[30px] w-[30px]"/>
                    <p className="text-[20px] leading-[24px] font-medium">{loveCount}</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <img src={commentImage} alt="Comment"  className="h-[30px] w-[30px]"/>
                    <p className="text-[20px] leading-[24px] font-medium">{commentCount}</p>
                </div>
            

            </div>
            {/* ------------------------recipe name----------------------- */}
            <div className="flex flex-col gap-y-2 ">
            <h1 className="text-[30px] leading-[36px] text-[#BE1E1E]/[56%]">Let's cook</h1>
            <p className="text-[20px] leading-[24px] ">{recipeName}</p>

            </div>
            <div className="flex gap-x-4 items-center pl-10">
                <img src={hatImage} alt="Hat" className="h-[90px] w-[90px]"/>
                <div className="flex flex-col gap-y-2">
                <h1 className="text-[30px] leading-[36px] text-[#BE1E1E]/[56%]">Prep Time</h1>
                <p className="text-[20px] leading-[24px] ">{prepTime}</p>
            </div>
            </div>
            
            <div className="flex gap-x-4 items-center pl-10">
                <img src={hatImage} alt="Hat" className="h-[90px] w-[90px]"/>
                <div className="flex flex-col gap-y-2">
                <h1 className="text-[30px] leading-[36px] text-[#BE1E1E]/[56%]">Difficulty</h1>
                <p className="text-[20px] leading-[24px] ">{difficulty}</p>
            </div>
            </div>
          
          
            </div>
            {/* -----------------description----------------- */}
            <div className="bg-gray-200 p-[20px] w-[95.8%]">
                <p className="text-poppins text-[18px] leading-[24px]">{Description}</p>
            </div>

            <div>
               

                <h1>Tags:</h1>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>

                <h1>Ingredients:</h1>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                <h1>Nutritional Info:</h1>
                <ul>
                    {NutritionalInfo.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>

                <h1>Cooking Instructions:</h1>
                <ol>
                    {cookingInstructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default ViewRecipe;