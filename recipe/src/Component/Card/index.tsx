import { recipes } from '../../Constants/card-array';
import { AlertIcon } from '../../assets/icons/AlertIcon';   
import { SaveIcon } from '../../assets/icons/SaveIcon';
import { HeartIcon } from '../../assets/icons/HeartIcon';
import { CommentIcon } from '../../assets/icons/CommentIcon';
import { StarIcon } from '../../assets/icons/StarIcon';
import { useState } from 'react';

function RecipeCard() {
    const [isStarYellow,setIsStarYellow]=useState(false);
    const [isHeartRed,setIsHeartRed]=useState(false);
    const [isSaveIcon,setIsSaveIcon]=useState(false);
 
  return (
    <section id="recipes" className="py-8 ">
      <div className="recipes-container max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card  rounded-lg shadow-md overflow-hidden" 
            >
              {/* Image */}
              <div className="w-full h-64 bg-gray-600">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Interaction Icons */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      {/* Removed <i> tag, adjusted AlertIcon class */}
                      <HeartIcon className={`text-black mr-1 w-5 h-5 ${isHeartRed ? 'text-red-500' : ''}`} onClick={()=>setIsHeartRed(!isHeartRed)} />
                      <span className="text-black text-sm">{recipe.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <CommentIcon className="text-black mr-1 w-5 h-5" />
                      <span className="text-black text-sm">{recipe.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <SaveIcon className={`text-black mr-1 w-5 h-5 ${isSaveIcon ? 'text-red-500' : ''}`} onClick={()=>setIsSaveIcon(!isSaveIcon)} />
                    </div>
                    <div className="flex items-center">
                
                    </div>
                  </div>
                  <div className="flex items-center">
                  <AlertIcon className="text-black mr-1 w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-black mb-2">{recipe.title}</h3>
                    {/* -----------------------------ratings---------------- */}
                    <div className="flex items-center gap-x-2">
                        <StarIcon className={`text-black mr-1 w-5 h-5 ${isStarYellow ? 'text-yellow-500' : ''}`} onClick={()=>setIsStarYellow(!isStarYellow)} />
                        <span className="text-black text-sm">{recipe.rating}</span>
                    </div>
                </div>

                {/* Button */}
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors" >
                  View Recipe Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeCard;