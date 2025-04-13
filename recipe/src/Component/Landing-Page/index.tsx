import Footer from "../../UI/Footer";
import TestimonialSection from "../../UI/Testimonials";
import Bowl from "../../assets/Images/Bowl.png";
import chilly from "../../assets/Images/chilly.png";
import pizza from "../../assets/Images/pizza.png";
import FoodList from "./FoodList";
import NavBar from "../NavBar";
import leaf from "../../assets/Images/leaves.png";
import chopstick from "../../assets/Images/chopsticks.png";

const LandingPage = () => {
 
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 gap-y-6 min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 sm:mt-12 lg:mt-16 gap-y-8 lg:gap-x-12 relative mb-12 lg:mb-24">
        <div className="flex flex-col gap-y-6 w-full lg:w-1/2 max-w-lg lg:max-w-xl mx-auto lg:ml-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BE1E1E] font-title">Cook</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF7F00] font-title">Share Enjoy</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-body">
            Explore a world of delicious recipes and bring out the chef in you effortlessly with recipeHut
          </p>
          <button className="bg-[#BE1E1E] w-36 sm:w-40 text-white px-4 py-2 rounded-md font-body hover:bg-[#a51b1b] transition">
            Get Started
          </button>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src={Bowl}
            alt="Bowl"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg mix-blend-color-burn"
          />
         
          <img
            src={leaf}
            alt="Leaf"
            className="absolute hidden lg:block right-[700px] top-[80%] translate-y-[-50%] h-[60px] w-12 mix-blend-color-burn"
          />
          <img
            src={leaf}
            alt="Leaf"
            className="absolute hidden lg:block right-[700px] top-[10%]  h-[60px] w-12 mix-blend-color-burn z-20"
          />
          <img
            src={chopstick}
            alt="Chopstick"
            className="absolute hidden lg:block right-[70px] top-[120px]  h-[300px] w-24 mix-blend-color-dodge z-[-1]"
          />
        </div>
      </div>

      {/* What Should I Prepare Section */}
      <div className="flex w-full flex-col mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#BE1E1E] font-title mb-6">
          What should I Prepare To Eat?
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-12 w-full">
          <img
            src={Bowl}
            alt="Bowl"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg mix-blend-color-burn"
          />
          <div className="flex flex-col gap-y-6 lg:w-full max-w-full">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF7F00] font-title">
              Our Trending Recipe
            </h1>
            <p className="text-base sm:text-lg text-gray-700 font-body">
              Discover the latest culinary trends with our trending recipes, crafted to inspire and delight your taste buds. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae, aut optio vero dolores porro numquam maxime at sapiente, voluptates earum a eius vel itaque blanditiis ad voluptatibus? Atque repellat vel excepturi voluptate aperiam iusto asperiores facilis inventore earum, dignissimos quod cum, numquam, cumque consequuntur accusantium sequi debitis autem blanditiis.
            </p>
          </div>
        </div>
      </div>

      {/* Most Searched Recipes Section */}
      <div className="flex w-full flex-col items-center gap-y-6 max-w-5xl mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#ff0000] font-title">
          Our Most Searched Recipe
        </h1>
        <p className="text-base sm:text-lg text-gray-700 font-body text-center px-4">
          Explore our most popular recipes, loved by food enthusiasts everywhere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a eos est laudantium cum architecto assumenda explicabo soluta vel enim quo, illo optio ipsa rerum ullam expedita beatae dignissimos quidem.
        </p>
        <FoodList />
      </div>

      {/* Happy Customers Section */}
      <div className="flex flex-col items-center gap-y-6 w-full bg-[#f1e0c7]/20 relative py-12 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#ff0000] font-title">
          Our Happy Customers
        </h1>
        {/* Decorative Images - Adjusted for responsiveness */}
        <img
          src={chilly}
          alt="Chilly"
          className="absolute hidden sm:block top-[20px] right-[600px] w-16 rotate-[-45deg] mix-blend-color-burn"
        />
        <img
          src={chilly}
          alt="Chilly"
          className="absolute hidden sm:block top-[70px] right-[1060px] w-16 rotate-[90deg] mix-blend-color-burn"
        />
        <img
          src={pizza}
          alt="Pizza"
          className="absolute hidden lg:block top-[-50px] right-0 w-64 rotate-10 mix-blend-color-burn"
        />
        <img
          src={pizza}
          alt="Pizza"
          className="absolute hidden lg:block top-[-50px] left-0 w-64 rotate-[-10deg] mix-blend-color-burn"
        />
        <div className="w-full max-w-4xl hover:scale-105 transition-transform duration-300">
          <TestimonialSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />

   
    </div>
  );
};

export default LandingPage;