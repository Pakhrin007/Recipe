import { useEffect, useState } from "react";
import Pagination from "../../../UI/Pagination";

const FoodLover = () => {
  const [foodLovers, setFoodLovers] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Fetch data from the API
  useEffect(() => {
    const fetchFoodLovers = async () => {
      try {
        const response = await fetch("https://localhost:7043/api/users?type=0");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Raw API response:", data);
        // Transform data to match expected structure
        const transformedData = data
          .filter((foodlover: any) => foodlover.type === 0) // Fallback filter
          .map((foodlover: any) => ({
            id: foodlover.id,
            name: foodlover.name,
            email: foodlover.email,
          }));
        console.log("Transformed food lovers:", transformedData);
        setFoodLovers(transformedData);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch food lovers:", err.message);
        setError("Failed to load food lovers. Please try again later.");
        setFoodLovers([]);
      }
    };
    fetchFoodLovers();
  }, []);

  const totalPages = Math.ceil(foodLovers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodLovers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-y-[16px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[40px] rounded-[8px] px-[16px] py-[8px] border-[2px] border-black"
      />
      {/* Table headers */}
      <div className="flex gap-x-[16px] bg-black px-[16px] py-[16px]">
        <p className="text-[14px] w-[100px] text-white">S.N</p>
        <p className="text-[14px] w-[200px] text-white">User</p>
        <p className="text-[14px] w-[270px] text-white">Email</p>
        <p className="text-[14px] w-[50px] text-white">Actions</p>
      </div>
      {/* Error or Empty State */}
      {error && <p className="text-red-500">{error}</p>}
      {!error && foodLovers.length === 0 && <p>No food lovers found.</p>}
      {/* Table rows */}
      {currentItems.map((foodlover: any, index: number) => (
        <div key={foodlover.id} className="flex gap-x-[16px]">
          <p className="text-[14px] w-[100px]">{indexOfFirstItem + index + 1}</p>
          <p className="text-[14px] w-[200px]">{foodlover.name}</p>
          <p className="text-[14px] w-[270px]">{foodlover.email}</p>
          <p className="text-[14px] w-[50px]">
            <button className="bg-red-500 text-white px-2 py-1 rounded">Suspend</button>
          </p>
        </div>
      ))}
      {/* Pagination */}
      {foodLovers.length > 0 && (
        <div className="flex justify-between items-center mt-4 px-[16px] py-[16px]">
          <p className="text-[14px] text-white">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, foodLovers.length)} of{" "}
            {foodLovers.length} entries
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default FoodLover;