import { useEffect, useState } from "react";
import { getUserData } from "../../../../../../Services/UserServices";
import { getAccessToken } from "../../../../../../Services/JwtServices";
import { jwtDecode } from "jwt-decode";

interface User {
  name: string;
  email: string;
  username: string;
  phone: string;
  type: string;
  profilePic: string | null;
}

const ViewProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false); // Modal state

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          setError("No access token found. Please log in.");
          return;
        }

        const decodedToken: any = jwtDecode(token);
        const userId = decodedToken["nameid"];
        if (!userId) {
          setError("User ID not found in token.");
          return;
        }

        const userData = await getUserData(userId, token);
        if (!userData || !userData.name || !userData.email) {
          setError("Incomplete user data received.");
          return;
        }

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
            role = "user";
        }

        setUser({
          name: userData.name,
          email: userData.email,
          username: userData.username || "N/A",
          phone: userData.phone || "N/A",
          type: role,
          profilePic: userData.imagePath
            ? `https://localhost:7043${userData.imagePath}`
            : null,
        });
        setError(null);
      } catch (err: any) {
        setError("Failed to load profile. Please try again.");
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="max-w-4xl p-5 font-sans">
      <h1 className="text-3xl mb-5 font-body text-red-500 font-title">
        View Profile
      </h1>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          {user.profilePic && (
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-14 h-14 rounded-full mr-5"
            />
          )}
          <div className="flex flex-col gap-y-1">
            <h2 className="text-2xl font-semibold font-body">
              {user.name || "Unknown Name"}
            </h2>
            <p className="text-gray-600 font-body">
              {user.email || "Unknown Email"}
            </p>
            <span className="inline-block text-black font-body text-[20px] text-center bg-orange-500 px-3 py-1 rounded-full mt-1">
              {user.type}
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="text-red-500 underline text-lg font-body"
        >
          Edit Profile
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
            <h2 className="text-xl font-bold mb-4 text-center text-red-500">Edit Profile</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle profile update here
                setShowModal(false); // close modal on submit
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                defaultValue={user.name}
                className="border p-2 rounded"
              />
              <input
                type="email"
                defaultValue={user.email}
                className="border p-2 rounded"
              />
              <input
                type="text"
                defaultValue={user.phone}
                className="border p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProfile;
