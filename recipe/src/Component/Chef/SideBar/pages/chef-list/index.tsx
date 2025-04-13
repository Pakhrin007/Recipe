import chefs from "../../../../../Constants/chef-list-array";
import ChefListCard from "./card";

const ChefList = () => {
  return (
    <div className="flex flex-wrap gap-6 font-body">
      {chefs.map((chef) => (
        <ChefListCard
          key={chef.id}
          image={chef.image}
          name={chef.name}
          specialty={chef.specialty}
        />
      ))}
    </div>
  );
};

export default ChefList;
