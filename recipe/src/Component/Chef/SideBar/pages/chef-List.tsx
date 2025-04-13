import ChefList from "./chef-list/index";

const ChefListPage = () => {
  return (
    <div className="w-full h-full px-6 font-body py-6">
      <h2 className="text-3xl font-bold text-red-500 mb-6 font-title  ">Our Chefs Lists</h2>
      <ChefList />
    </div>
  );
};

export default ChefListPage;
