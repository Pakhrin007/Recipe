import { useEffect, useState } from "react";
import People from "../../../../assets/icons/People";
import ChefHat from "../../../../assets/icons/Chef-Hat";
import ReportIcon from "../../../../assets/icons/ReportIcon";
import ListIcon from "../../../../assets/icons/ListIcon";

const Home = () => {
  // State to store counts
  const [totalChefs, setTotalChefs] = useState(0);
  const [totalFoodLovers, setTotalFoodLovers] = useState(0);
  const [error, setError] = useState(null);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  // Fetch data when the component mounts
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch chefs
        const chefsResponse = await fetch("https://localhost:7043/api/users?type=1");
        if (!chefsResponse.ok) {
          throw new Error(`Failed to fetch chefs: ${chefsResponse.status}`);
        }
        const chefsData = await chefsResponse.json();
        console.log("Parsed chefs data:", chefsData); // Debugging line
        setTotalChefs(Array.isArray(chefsData) ? chefsData.length : 0);

        const TotalRecipes = await fetch("https://localhost:7043/api/Recipe/all");
        if (!TotalRecipes.ok) {
          throw new Error(`Failed to recipes: ${TotalRecipes.status}`);
        }
        const TotalRecipesData = await TotalRecipes.json();
        console.log("Parsed recipes data:", TotalRecipesData); // Debugging line
        setTotalRecipes(Array.isArray(TotalRecipesData) ? TotalRecipesData.length : 0);

        const TotalCategories = await fetch("https://localhost:7043/api/Categories");
        if (!TotalCategories.ok) {
          throw new Error(`Failed to categories: ${TotalCategories.status}`);
        }
        const TotalCategoriesData = await TotalCategories.json();
        console.log("Parsed categories data:", TotalCategoriesData); // Debugging line
        setTotalCategories(Array.isArray(TotalCategoriesData) ? TotalCategoriesData.length : 0);


        
    
        // Fetch food lovers
        const foodLoversResponse = await fetch("https://localhost:7043/api/users?type=0");
        if (!foodLoversResponse.ok) {
          throw new Error(`Failed to fetch food lovers: ${foodLoversResponse.status}`);
        }
        const foodLoversData = await foodLoversResponse.json();
        console.log("Parsed food lovers data:", foodLoversData); // Debugging line
        setTotalFoodLovers(Array.isArray(foodLoversData) ? foodLoversData.length : 0);
    
        setError(null);
      } catch (err) {
        console.error("Error fetching counts:", err);
        setError("Failed to load data. Please try again later.");
      }

      
    };

    fetchCounts();
  }, []);

  return (
    <div className="px-[16px] py-[16px] flex flex-col gap-y-[16px] w-full">
      {/* -----------------Greeting Message---------------- */}
      <div>
        <p className="text-[24px] font-bold font-body">Welcome back, Admin</p>
        <p className="text-[16px] font-regular font-body">Here's what's happening with your recipes</p>
      </div>

      {/* ----------------------Total foodlovers, total chefs, total recipes and total reports---------------------- */}
      <div className="flex gap-x-[26px] ">
        {/* Total Foodlovers */}
        <div className="flex gap-x-[16px] w-[200px] h-[100px] bg-[#F2994B]/[21%] rounded-[8px] p-[16px] flex-shrink-0">
          <div className="flex flex-col gap-y-[10px]">
            <p className="text-[16px] font-regular">Total Foodlovers</p>
            <p className="text-[24px] font-bold">{totalFoodLovers}</p>
          </div>
          <i className="w-[30px] h-[30px] bg-blue-300 flex justify-center items-center rounded-[8px]">
            <People className="w-[24px] h-[24px]" />
          </i>
        </div>

        {/* Total Chefs */}
        <div className="flex gap-x-[16px] w-[160px] h-[100px] bg-[#F2994B]/[21%] rounded-[8px] p-[16px] flex-shrink-0">
          <div className="flex flex-col gap-y-[10px]">
            <p className="text-[16px] font-regular">Total Chefs</p>
            <p className="text-[24px] font-bold">{totalChefs}</p>
          </div>
          <i className="w-[30px] h-[30px] bg-[#EEA18C]/[91%] flex justify-center items-center rounded-[8px]">
            <ChefHat className="w-[24px] h-[24px]" />
          </i>
        </div>

        {/* Total Recipes */}
        <div className="flex gap-x-[16px] w-[180px] h-[100px] bg-[#F2994B]/[21%] rounded-[8px] p-[16px] flex-shrink-0">
          <div className="flex flex-col gap-y-[10px]">
            <p className="text-[16px] font-regular">Total Recipes</p>
            <p className="text-[24px] font-bold">{totalRecipes}</p>
          </div>
          <i className="w-[30px] h-[30px] bg-blue-300 flex justify-center items-center rounded-[8px]">
            <ListIcon className="w-[24px] h-[24px]" />
          </i>
        </div>

         {/* Total categories */}
         <div className="flex gap-x-[16px] w-[200px] h-[100px] bg-[#F2994B]/[21%] rounded-[8px] p-[16px] flex-shrink-0">
          <div className="flex flex-col gap-y-[10px]">
            <p className="text-[16px] font-regular">Total Categories</p>
            <p className="text-[24px] font-bold">{totalCategories}</p>
          </div>
          <i className="w-[30px] h-[30px] bg-blue-300 flex justify-center items-center rounded-[8px]">
            <ListIcon className="w-[24px] h-[24px]" />
          </i>
        </div>

      </div>

      {/* -----------------------Recent Activity-------------------------- */}
      <div className="flex flex-col gap-y-[16px] bg-[#F2994B]/[21%] rounded-[8px] p-[16px]">
        <p className="text-[16px] font-regular font-body">Recent Activity</p>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex items-center gap-x-[16px]">
          <i className="w-[30px] h-[30px] bg-[#EEA18C]/[91%] flex justify-center items-center rounded-[8px]">
            <ChefHat className="w-[24px] h-[24px]" />
          </i>
          <p>New Chef Joined the platform</p>
        </div>
        <div className="flex items-center gap-x-[16px]">
          <i className="w-[30px] h-[30px] bg-[#EEA18C]/[91%] flex justify-center items-center rounded-[8px]">
            <ReportIcon className="w-[24px] h-[24px]" />
          </i>
          <p>New Recipe Added</p>
        </div>
        <div className="flex items-center gap-x-[16px]">
          <i className="w-[30px] h-[30px] bg-[#EEA18C]/[91%] flex justify-center items-center rounded-[8px]">
            <People className="w-[24px] h-[24px]" />
          </i>
          <p>New Foodlover Joined the platform</p>
        </div>
      </div>
    </div>
  );
};

export default Home;