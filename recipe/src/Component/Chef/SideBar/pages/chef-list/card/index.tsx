import { truncateString } from "../../../../../../UI/Truncate-String/truncate-string";
interface ChefListProps {
  image: string;
  name: string;
  specialty: string;
}

const ChefListCard = ({ image, name, specialty }: ChefListProps) => {
  return (
    <div className="w-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-[160px] object-cover"
      />
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">{truncateString(20,name)}</h1>
        <p className="text-sm text-gray-500 mt-1 mb-4">Specialist in: <span className="font-medium">{truncateString(15,specialty)}</span></p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ChefListCard;
