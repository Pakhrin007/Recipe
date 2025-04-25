import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");
    const [categories, setCategories] = useState([]);

    const API_URL = "https://localhost:7043/api/Categories"; // Update if needed

    // Fetch categories
    const fetchCategories = async () => {
        try {
            const res = await axios.get(API_URL);
            setCategories(res.data);
        } catch (err) {
            console.error("Error fetching categories:", err);
        }
    };

    useEffect(() => {
        
        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        if (!name || !image) {
            setMessage("Please fill all fields.");
            return;
        }

        const formData = new FormData();
        formData.append("Name", name);
            formData.append("ImageUrl", image);

        try {
            const response = await axios.post(API_URL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                setMessage("Category added successfully!");
                setName("");
                setImage(null);
                fetchCategories(); // Refresh category list
            } else {
                setMessage("Failed to add category.");
            }
        } catch (error: any) {
            setMessage("Error: " + error.message);
        }
    };

    return (
        <div className="p-4 flex flex-col gap-y-[16px] w-screen">
            <h1 className="text-xl font-bold mb-4 font-title text-red-500">Add Category</h1>
            <form onSubmit={handleSubmit} className="space-y-4 mb-8 w-full">
                <div className="w-full">
                    <label className="block mb-1 ">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div className="w-full">
                    <label className="block mb-1">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0])}
                        className="border p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
                {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
            </form>

            <h2 className="text-lg font-semibold mb-2 text-center font-title text-red-500">Category List</h2>
            <table className="table-auto w-full border-collapse border border-gray-300 font-body">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat: any) => (
                        <tr key={cat.id}>
                            <td className="border border-gray-300 px-4 py-2">{cat.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{cat.name}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <img
                                    src={`https://localhost:7043${cat.imageUrl}`}     
                                    alt={cat.name}
                                    className="h-16 object-cover"
                                />
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Category;
