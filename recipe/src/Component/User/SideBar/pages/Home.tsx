import RecipeCard from "../../../Card";

const Home = () => {
    return (
        <div className="flex flex-col gap-y-4 p-4 w-full h-screen overflow-y-auto" >
          <p className="text-2xl font-bold font-title">Home</p>
          <RecipeCard />
          
        </div>
   
    )
}   
export default Home;

