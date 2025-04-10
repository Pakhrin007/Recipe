
import Footer from "../../UI/Footer";
import TestimonialSection from "../../UI/Testimonials";
import Bowl from "../../assets/Images/Bowl.png"; // Placeholder for Bowl image
import chilly from "../../assets/Images/chilly.png"; // Placeholder for chilly image
import pizza from "../../assets/Images/pizza.png"; // Placeholder for pizza image
import FoodList from "./FoodList";
import NavBar from "../NavBar";
import leaf from "../../assets/Images/leaves.png"
import chopstick from "../../assets/Images/chopsticks.png"
const LandingPage = () => {
    return (
        <div className="flex flex-col px-[70px] py-[20px] gap-y-[20px]">
            {/* Navbar */}
            <NavBar />
            {/* -----------------------Another div--------------------- */}
            <div className="flex justify-between mt-[50px] items-center relative mb-[100px]">
                <div className="flex flex-col gap-y-[20px] w-[600px] ml-[100px]">
                    <h1 className="text-[24px] font-bold text-[#BE1E1E]">Cook</h1>
                    <h1 className="text-[24px] font-bold text-[#FF7F00]">Share Enjoy</h1>
                    <p className="text-[20px] text-gray-700"
                    >
                        Explore a world of delicious recipes and bring out the chef in your effortlessly with recipeHut
                    </p>
                    <button className="bg-[#BE1E1E] w-[150px] text-white px-[20px] py-[10px] rounded-md">
                        Get Started
                    </button>


                </div>
                <div className="flex flex-col gap-y-[20px] z-10">
                    <img src={Bowl} alt="Bowl" className="w-[700px] h-[600px] mix-blend-color-burn z-10 mr-[100px]" />
                </div>

                <img src={chilly} alt="" className="absolute right-[800px] top-[350px] z-[20] mix-blend-color-burn" />
                <img src={leaf} alt="" className="absolute right-[630px] top-[400px] z-[20] mix-blend-color-burn" />
                <img src={leaf} alt="" className="absolute right-[700px] top-[30px] z-[20]" />
                <img src={chopstick} alt="" className="absolute right-0 z-[-1]" />
            </div>

            {/* Hero Section */}
            <div className="flex w-full flex-col mx-auto mb-[20px]">
                <h1 className="text-[24px] font-bold text-center text-[#BE1E1E]">
                    What should I Prepare To Eat?
                </h1>
                <div className="flex items-center gap-x-[40px]">
                    {/* Bowl Image */}
                    <img src={Bowl} alt="Bowl" className="w-[700px] h-[600px] mix-blend-color-burn" />

                    {/* Content Section */}
                    <div className="flex flex-col gap-y-[20px] w-[600px]">
                        <h1 className="text-[24px] font-bold text-[#FF7F00] mt-[20px]">
                            Our Trending Recipe
                        </h1>
                        <p className="text-justify text-gray-700 mt-2 text-[20px]">
                            ML is used heavily in programming language research and is one of the few languages to be completely specified and verified using formal semantics. Its types and pattern matching make it well-suited and commonly used to operate on other formal languages, such as in compiler writing, automated theorem proving, and formal verification.
                        </p>
                    </div>
                </div>
            </div>

            {/* Most Searched Recipes Section */}
            <div className="flex w-full justify-center items-center flex-col gap-y-[20px] max-w-[1200px] mx-auto">
                <h1 className="text-[24px] font-bold text-center text-[#ff0000] mt-[20px]">
                    Our Most Searched Recipe
                </h1>
                <p className="text-justify text-gray-700 mt-2 text-[20px]">
                    ML is used heavily in programming language research and is one of the few languages to be completely specified and verified using formal semantics. Its types and pattern matching make it well-suited and commonly used to operate on other formal languages, such as in compiler writing, automated theorem proving, and formal verification.
                </p>
                <FoodList />
            </div>

            {/* Happy Customers Section */}
            <div className="flex flex-col justify-center items-center gap-y-[20px] w-full bg-[#f1e0c7]/[19%] relative p-[20px]">
                <h1 className="text-2xl font-bold text-center text-[#ff0000] mt-[20px]">
                    Our Happy Customers
                </h1>

                {/* Decorative Images */}
                <img src={chilly} alt="chilly" className="absolute top-[-1px] right-[700px] w-[100px] h-[100px] rotate-[-80deg] mix-blend-color-burn" />
                <img src={chilly} alt="chilly" className="absolute top-[20px] right-[1030px] w-[100px] rotate-90 h-[100px] mix-blend-color-burn" />
                <img src={pizza} alt="pizza" className="absolute top-[-90px] h-[600px] rotate-10 right-0 mix-blend-color-burn" />
                <img src={pizza} alt="pizza" className="absolute rotate-150 top-[-130px] h-[600px] left-0 mix-blend-color-burn" />

                {/* Testimonials */}
                <div className="mb-[20px] box-border hover:scale-105 transition-all duration-300">
                    <TestimonialSection />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;