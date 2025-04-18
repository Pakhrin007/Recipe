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
        const response = await fetch("https://localhost:7136/api/Users?role=Chef");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched chefs:", data);
        // Transform data to match expected structure
        const transformedData = data.map((chef: any) => ({
          id: chef.UserId,
          name: chef.Name,
          email: chef.Email,
        }));
        setChefs(transformedData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch chefs:", err);
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
              src="data:image/png;base64,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"
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
