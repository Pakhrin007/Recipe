import { useEffect, useState } from "react";
import { getUserData } from "../../../../../../Services/UserServices";
import { getAccessToken } from "../../../../../../Services/JwtServices";
import { jwtDecode } from "jwt-decode";

interface User {
  name: string;
  email: string;
  username: string;
  phone: string;
  type: string; // Changed from type to tag
  profilePic: string | null;
}

const ViewProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          setError("No access token found. Please log in.");
          return;
        }

        // Decode JWT to get userId
        const decodedToken: any = jwtDecode(token);
        const userId = decodedToken['nameid'];
        if (!userId) {
          setError("User ID not found in token.");
          return;
        }

        console.log("Fetching user data for userId:", userId);
        const userData = await getUserData(userId, token);
        console.log("Fetched user data:", userData);

        if (!userData || !userData.name || !userData.email) {
          console.warn("User data missing name or email:", userData);
          setError("Incomplete user data received.");
          return;
        }

        // Map numeric role to string
        let role: string;
        switch (userData.type?.toString()) {
          case "0":
            role = "user";
            break;
          case "1":
            role = "chef";
            break;
          case "2":
            role = "admin";
            break;
          default:
            role = "user"; // Fallback
            console.warn("Invalid role:", userData.type);
        }

        setUser({
          name: userData.name,
          email: userData.email,
          username: userData.username || "N/A",
          phone: userData.phone || "N/A",
          type: role, // Changed from type to tag
          profilePic: userData.imagePath ? `https://localhost:7043${userData.imagePath}` : null,
        });
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch user profile:", err.response?.data || err.message);
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
        <h1 className="text-3xl  mb-5 font-body text-red-500 font-title">View Profile</h1>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          {user.profilePic && (
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-14 h-14 rounded-full mr-5"
            />
          )}
          <div className="flex flex-col gap-y-1" >
            <h2 className="text-2xl font-semibold font-body">{user.name || "Unknown Name"}</h2>
            <p className="text-gray-600 font-body">{user.email || "Unknown Email"}</p>
            <span className="inline-block text-black font-body text-[20px] text-center  bg-orange-500  px-3 py-1 rounded-full mt-1">
              {user.type}
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