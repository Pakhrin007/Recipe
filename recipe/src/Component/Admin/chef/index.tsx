import chefs from "../../../Constants/chef-list-array/index";
import Pagination from "../../../UI/Pagination"; // Import the Pagination component
import { useState } from "react";

const FoodLover = () => {
    // State to manage pagination
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const itemsPerPage = 5; // Number of items to display per page

    // Calculate total pages
    const totalPages = Math.ceil(chefs.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (pageNumber:any) => {
        setCurrentPage(pageNumber);
    };

    // Slice the data to display only the items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = chefs.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="flex flex-col gap-y-[16px]">
            <input type="text" placeholder="Search" className="w-full h-[40px] rounded-[8px] px-[16px] py-[8px] border-[2px] border-black  " />
            {/* Table columns */}
            <div className="flex gap-x-[16px] bg-black px-[16px] py-[16px]">
                <p className="text-[14px] font-regular font-body leading-[20px] w-[100px] text-white">S.N</p>
                <p className="text-[14px] font-regular font-body leading-[20px] w-[200px] text-white">User</p>
                <p className="text-[14px] font-regular font-body leading-[20px] w-[270px] text-white">Email</p>
                <p className="text-[14px] font-regular font-body leading-[20px] w-[300px] text-white">Phone Number</p>
                <p className="text-[14px] font-regular font-body leading-[20px] w-[50px] text-white">Actions</p>
            </div>

            {/* Display current items */}
            {currentItems.map((chef, index) => (
                <div key={chef.id} className="flex gap-x-[16px] ">
                    <p className="text-[14px] font-regular font-body leading-[20px] w-[100px]">{indexOfFirstItem + index + 1}</p>
                    <p className="text-[14px] font-regular font-body leading-[20px] w-[200px]">{chef.name}</p>
                    <p className="text-[14px] font-regular font-body leading-[20px] w-[270px]">{chef.email}</p>
                    <p className="text-[14px] font-regular font-body leading-[20px] w-[300px]">{chef.phone}</p>
                    <p className="text-[14px] font-regular font-body leading-[20px] w-[50px]">
                        <button className="bg-red-500 text-white px-2 py-1 rounded">Suspend Account</button>
                    </p>
                </div>
            ))}

            {/* Pagination section */}
            <div className="flex justify-between items-center mt-4 bg-black px-[16px] py-[16px]">
                <p className="text-[14px] font-regular font-body leading-[20px] text-white">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, chefs.length)} of {chefs.length} entries
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

export default FoodLover;