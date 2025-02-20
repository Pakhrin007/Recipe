import pasta from "../../assets/images/pasta.png"
import chopstick from "../../assets/images/chopstick.png"
import leaves from "../../assets/images/leaves.png"
import chilly from "../../assets/images/chilly.png"
function HeroSection() {
    return (
        <div className="mt-[100px] ml-[160px] w-[1260px] h-[650px] flex py-[20px] bg-[#FFFFFF]">
            <div className="w-[600px] h-[500px] flex flex-col px-[30px] space-y-[20px]">
                {/* First Paragraph */}
                <p className="text-[80px] font-semibold text-black m-0 p-0">Cook</p>

                {/* Second Paragraph */}
                <p className="text-[80px] font-semibold text-[#FFA319] w-[600px] m-0 p-0">Share Enjoy!</p>

                {/* Third Paragraph */}
                <p className="text-[26px] text-black/[0.69] m-0 p-0">
                    Explore a world of delicious recipes and bring out the chef in you – effortlessly with RecipeHut!
                </p>

                {/* Button with Margin */}
                <button className="h-[50px] w-[220px] px-[11px] py-[10px] rounded-[20px] bg-[#BE1E1E]/[0.84] text-white flex justify-center items-center mt-[20px]">
                    Explore Recipes
                </button>
            </div>
            {/* ----------------------------------Images------------------------------------- */}
            <div className="w-[600px] h-[560px] flex flex-col px-[30px] space-y-[20px] relative ">
                <img src={pasta} className="absolute top-[-10px] left-0 w-full h-full object-cover z-100" />
                <img
                    src={chopstick}
                    className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 w-[200px] h-[300px] object-contain z-50 "
                    alt="Chopstick"
                />      
                <img src={leaves} className="absolute top-1/2 right-0 transform -translate-y-[300px] left-[10px] w-[100px] h-[300px] object-contain" />
                <img src={leaves} className="absolute top-1/2 right-0 transform -translate-y-[-60px] left-[-100px] w-[171px] h-[148px] object-contain" />
                <img src={chilly} className="absolute top-1/2 right-0 transform -translate-y-[25px] left-[-55px] w-[120px] h-[120px] object-contain" />

                </div>
        </div>
    );
}
export default HeroSection;