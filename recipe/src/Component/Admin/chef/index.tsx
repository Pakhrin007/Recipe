import { useEffect, useState } from "react";
import Pagination from "../../../UI/Pagination";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;

  // Fetch chefs from API on mount
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
    <div className="flex flex-col gap-y-[16px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[40px] rounded-[8px] px-[16px] py-[8px] border-[2px] border-black"
      />
  
      {/* Table columns */}
      <div className="flex gap-x-[16px] bg-black px-[16px] py-[16px]">
        <p className="text-[14px] w-[100px] text-white">S.N</p>
        <p className="text-[14px] w-[200px] text-white">User</p>
        <p className="text-[14px] w-[270px] text-white">Email</p>
        <p className="text-[14px] w-[50px] text-white">Actions</p>
      </div>
  
      {/* Error or Empty State */}
      {error && <p className="text-red-500">{error}</p>}
      {!error && chefs.length === 0 && <p>No chefs found.</p>}
  
      {/* Table rows */}
      {chefs.length > 0 &&
        currentItems.map((chef: any, index: number) => (
          <div key={chef.id} className="flex gap-x-[16px]">
            <p className="text-[14px] w-[100px]">{indexOfFirstItem + index + 1}</p>
            <p className="text-[14px] w-[200px]">{chef.name}</p>
            <p className="text-[14px] w-[270px]">{chef.email}</p>
            <p className="text-[14px] w-[50px]">
              <button className="bg-red-500 text-white px-2 py-1 rounded">Suspend</button>
            </p>
          </div>
        ))}
  
      {/* Pagination */}
      {chefs.length > 0 && (
        <div className="flex justify-between items-center mt-4 px-[16px] py-[16px]">
          <p className="text-[14px] text-white">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, chefs.length)} of{" "}
            {chefs.length} entries
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

export default Chef;
