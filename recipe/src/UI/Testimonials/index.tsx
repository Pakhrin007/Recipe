import { useState } from "react";
import { testimonials } from "./tesimonial-array";
const TestimonialSection = () => {
  const[currentIndex,setCurrentIndex] = useState(0);


  // -------------------function to go back------------------

  const handleBack=()=>{
    setCurrentIndex((prevIndex: number)=>
       prevIndex===0?testimonials.length-1:prevIndex-1
    )
  }

  const handleNext=()=>{
    setCurrentIndex((prevIndex:number)=>
    prevIndex===testimonials.length-1?0:prevIndex+1
    )
  }

  const currentTestimonial=testimonials[currentIndex];
    return ( 
      <div className="flex flex-col gap-y-[16px] border border-gray-300 rounded-[8px] w-full  mt-[50px] max-w-[600px] mx-auto">
      {/* Testimonial Card */}
      <div className="flex flex-col  rounded-lg p-6 shadow-md w-full">
        {/* -------------------description---------------- */}  
      <p className="text-center text-gray-700 mt-2">{currentTestimonial.description}</p>
      {/* -------------------name and image---------------- */}
      <div className="flex items-center gap-x-[16px] mt-[16px]  ">
      <img
          src={currentTestimonial.image}
          alt={currentTestimonial.name}
          className="w-[38px] h-[38px] rounded-full "
          
        />
        <div className="flex flex-col ">
        <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
        <p className="text-yellow-500">{"★".repeat(Math.floor(currentTestimonial.rating))} ({currentTestimonial.rating})</p>
        </div>
        

      </div>
       
 
      <div className="flex mt-6 justify-center gap-x-[50px]">
        <button
          onClick={handleBack}
          className=" text-white font-bold text-[24px] w-10 h-10 bg-[#F48E28] rounded-full hover:bg-[#F48E28] transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className=" text-white font-bold text-[24px] w-10 h-10 bg-[#F48E28] rounded-full hover:bg-[#F48E28] transition"
        >
          →
        </button>
      </div>
      </div>

     
    </div>
    )
} 
export default TestimonialSection;
