import StartIcon from "../../assets/icons/StartIcon"

interface CardProps {
  title: string
  description: string
  image?: string
  rating?: number
}

function Card({ title, description, image, rating = 0 }: CardProps) {
  return (
    <div className="w-[423.4px] bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image container */}
      <div className="h-[250px] w-full bg-gray-100">
        {image ? (
          <img 
            className="h-full w-full object-cover" 
            src={image} 
            alt={title} 
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">{title}</h2>
          {rating > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-amber-400">★</span>
              <span className="text-sm">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Button */}
        <button className="w-full bg-[#353535] text-white py-3 px-4 rounded-lg font-[20px]">
          See Complete Recipe
        </button>
      </div>
    </div>
  )
}

export default Card
