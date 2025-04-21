import Dropdown from "../../../../UI/Drop-Down";
import Card from "../../../Card";
const Home = () => {
    
    return (
        <div className="flex flex-col gap-y-[20px] px-[20px] py-[20px] w-screen flex-1 font-body max-h-screen overflow-y-auto" >
            <h1 className="text-[24px] font-bold text-[#BE1E1E]">Home</h1>
            <input type="text" placeholder="Search recipe" className="w-full h-[40px] rounded-[8px] px-[16px] py-[8px] border-[2px] border-black font-body" />
            <div className="flex gap-x-[20px] items-center">
                <h1 className="text-[24px] font-bold text-[#BE1E1E]">
                    All Recipes
                </h1>
                <Dropdown options={["All Recipes", "french", "italian", "indian", "american", "japanese", "korean", "mexican", "thai", "vietnamese"]} />
             
            </div>
            <div className="flex flex-wrap gap-x-[20px] gap-y-[20px] font-body overflow-y-auto max-h-screen w-full">
                <Card />

            </div>
            
        </div>
    )
}   
export default Home;

