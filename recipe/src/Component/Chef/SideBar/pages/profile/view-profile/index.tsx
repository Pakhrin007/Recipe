import { useEffect, useState } from "react";
import pakhrin from "../../../../../../assets/Images/Pakhrin.jpg";
import { getUserData } from "../../../../../../Services/UserServices";
import { getAccessToken } from "../../../../../../Services/JwtServices";

interface User {
  name: string;
  email: string;
  username: string;
  phone: string;
  tag: string;
  profilePic: string;
}

const ViewProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken(); // Get access token from storage
        if (!token) {
          setError("No access token found");
          return;
        }

        const userData = await getUserData(token);
        console.log("Fetched user data:", userData); // Log the raw response

        // Check if userData has the expected fields
        if (!userData || !userData.Name || !userData.Email) {
          console.warn("User data missing name or email:", userData);
          setError("Incomplete user data received");
          return;
        }

        setUser({
          name: userData.Name,
          email: userData.Email,
          username: userData.Username || "N/A", // Fallback for missing username
          phone: userData.Phone || "N/A", // Fallback for missing phone
          tag: userData.Role || "Chef", // Use role from API or fallback
          profilePic: userData.profilePic || pakhrin, // Fallback if no profilePic

        });
        setError(null);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setError("Failed to load profile. Please try again.");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="max-w-4xl p-5 font-sans">
      <h1 className="text-3xl font-bold mb-5 font-body">View Profile</h1>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-5"
          />
          <div>
            <h2 className="text-2xl font-semibold font-body">{user.name || "Unknown Name"}</h2>
            <p className="text-gray-600 font-body">{user.email || "Unknown Email"}</p>
            <span className="inline-block bg-gray-200 text-sm px-3 py-1 rounded-full mt-1">
              {user.tag}
            </span>
          </div>
        </div>
        <button className="text-red-500 underline text-lg font-body">Edit Profile</button>
      </div>
      {/* Remaining user details */}
    </div>
  );
};

export default ViewProfile;