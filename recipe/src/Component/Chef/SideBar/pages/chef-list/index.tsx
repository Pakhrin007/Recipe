import { useEffect, useState } from "react";
import Pagination from "../../../../../UI/Pagination";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch("https://localhost:7043/api/users?type=1");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Raw API response:", data);
        // Transform data to match expected structure
        const transformedData = data
          .filter((chef: any) => chef.type === 1) // Fallback filter
          .map((chef: any) => ({
            id: chef.id,
            name: chef.name,
            email: chef.email,
            image: chef.imagePath,
          }));
        console.log("Transformed chefs:", transformedData);
        setChefs(transformedData);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch chefs:", err.message);
        setError("Failed to load chefs. Please try again later.");
        setChefs([]);
      }
    };
    fetchChefs();
  }, []);

  const totalPages = Math.ceil(chefs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chefs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-y-4">
      {error && <p className="text-red-500">{error}</p>}

      {/* Card layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {chefs.length > 0 &&
          currentItems.map((chef: any, index: number) => (
            <div key={chef.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <img
              src={`https://localhost:7043${chef.image}`}
              alt="Chef avatar"
              className="w-[100px] h-[100px] rounded-full object-cover mb-4"
            />
            <p className="font-semibold text-lg">{chef.name}</p>
            <p className="text-sm text-gray-600">{chef.email}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Pagination + Entry info */}
      <div className="flex items-center gap-x-16 mt-6 px-2">
        <p className="text-sm text-gray-700">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, chefs.length)} of{" "}
          {chefs.length} chefs
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Chef;
