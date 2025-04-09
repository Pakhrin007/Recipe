import ChefList from "./chef-list/index";

const ChefListPage = () => {
  return (
    <div className="w-full h-full px-4 ">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Our Chefs Lists</h2>
      <ChefList />
    </div>
  );
};

export default ChefListPage;
