import ChevronLeftIcon from "../../assets/icons/ChevLeftIcon";
import chef from "../../assets/Images/chef.png"

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
            <div className="bg-gray-100 rounded-[31px] p-[20px] w-[95.8%]">
                <p className="text-poppins text-[18px] leading-[24px]">{Description}</p>
            </div>
            {/* --------------------Tags-------------------- */}

            <div className="bg-gray-100 rounded-[31px] p-[20px] w-[95.8%] gap-y-2">
                <h1 className="text-[20px] leading-[24px] font-medium text-[#FF1313]">Tags:</h1>
                <div className="flex gap-x-2">
                    {tags.map((tag, index) => (
                        <p key={index} className="text-[18px] leading-[24px]">{tag}</p>
                ))}
                </div>
            </div>

            <div>
                   {/* ---------------------Ingredients and Nutritional Info--------------------- */}
            <div className="flex gap-x-4">
                {/* Ingredients */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
                    <h2 className="text-red-500 text-xl font-bold mb-2">Ingredients:</h2>
                    <ul className="list-disc pl-5">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="text-base leading-6">
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Nutritional Info */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
                    <h2 className="text-red-500 text-xl font-bold mb-2">Nutritional Info:</h2>
                    <ul className="list-none pl-5">
                        {NutritionalInfo.map((info, index) => (
                            <li key={index} className="text-base leading-6">
                                {info}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

                {/* ---------------------Cooking Instructions--------------------- */}
            <div className="flex w-full justify-between ">
                <div className="bg-white p-4 rounded-lg shadow-md mt-6 w-[70.8%] flex flex-col gap-y-2 flex-wrap">
                <h2 className="text-red-500 text-[20px] leading-[24px] font-medium mb-2">Cooking Instructions:</h2>
                <ol className="list-decimal pl-5">
                    {cookingInstructions.map((instruction, index) => (
                        <li key={index} className="text-base leading-6">
                            {instruction}
                        </li>
                    ))}
                </ol>
                     </div>

                     <div className="h-[300px] -z-10 w-[350px] bg-gray-100 rounded-[31px] relative">
                        <img src={chef} alt="Chef" className="h-[300px] w-[350px]"/>
                        <p className="text-[20px] leading-[24px] font-medium absolute top-[200px] left-[30px]">
                            Chef
                        </p>

                     </div>

                </div>
        

               
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-[20px] leading-[24px] font-medium text-[#BE1E1E]/[56%]">
                    Recipe Reviews
                </h1>
                
                    
            </div>
        </div>
    );
};

export default ViewRecipe;