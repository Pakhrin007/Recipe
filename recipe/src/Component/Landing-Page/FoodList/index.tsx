import React, { useState } from 'react';
import foodListArray from './foodlist-array/index'; // Assuming this is an array of food items

// Define the type for a food item (adjust based on your actual data structure)
interface FoodItem {
  image: string;
  name: string;
}

const FoodList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to go back
  const handleBack = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? foodListArray.length - 1 : prevIndex - 1
    );
  };

  // Function to go forward
  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === foodListArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFood: FoodItem = foodListArray[currentIndex];

  return (
    <div className="flex flex-col gap-y-4 rounded-lg w-full mt-12 max-w-2xl mx-auto">
      {/* Food Item Card */}
      <div className="relative flex items-center justify-between rounded-lg p-6">
        {/* Back Button (Left Side) */}
        <button
          onClick={handleBack}
          className="absolute left-0 text-white font-bold text-3xl w-12 h-12 bg-[#F48E28] rounded-full hover:bg-[#E07B22] transition duration-300 flex items-center justify-center transform -translate-x-1/2"
        >
          ←
        </button>

        {/* Food Image and Name (Centered) */}
        <div className="flex flex-col items-center w-full">
          <img
            src={currentFood.image}
            alt={currentFood.name}
            className="w-[350px] h-[300px] rounded-lg "
          />
          <h3 className="text-xl font-bold text-center text-gray-800 mt-4">
            {currentFood.name}
          </h3>
        </div>

        {/* Next Button (Right Side) */}
        <button
          onClick={handleNext}
          className="absolute right-0 text-white font-bold text-3xl w-12 h-12 bg-[#F48E28] rounded-full hover:bg-[#E07B22] transition duration-300 flex items-center justify-center transform translate-x-1/2"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default FoodList;