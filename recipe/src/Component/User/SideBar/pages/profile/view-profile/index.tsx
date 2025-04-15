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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken(); // Get access token from storage
        if (!token) return;

        const userData = await getUserData(token);
        setUser({
          name: userData.name,
          email: userData.email,
          username: userData.username,
          phone: userData.phone,
          tag: "Food Lover", // You can make this dynamic too
          profilePic: userData.profilePic || pakhrin, // Fallback if no profilePic
        });
      } catch (err) {
        console.error("Failed to fetch user profile", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p>Loading profile...</p>;

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
            <h2 className="text-2xl font-semibold font-body">{user.name}</h2>
            <p className="text-gray-600 font-body">{user.email}</p>
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
