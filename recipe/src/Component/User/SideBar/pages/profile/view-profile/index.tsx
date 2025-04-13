
// Define the type for the user data
import pakhrin from "../../../../../../assets/Images/Pakhrin.jpg"
interface User {
  name: string;
  email: string;
  username: string;
  phone: string;
  tag: string;
  profilePic: string;
}

const ViewProfile = () => {
  // Sample user data (you can replace this with dynamic data from an API or props)
  const user: User = {
    name: 'Aryan Pakhrin',
    email: 'pakhrinp24@gmail.com',
    username: 'pakhrin007',
    phone: 'Aryan Pakhrin', // Placeholder as seen in the image
    tag: 'Food Lover',
    profilePic: pakhrin, // Placeholder image URL
  };

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
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-5">
          <div className="border-b border-gray-300 pb-3">
            <label className="block font-bold text-gray-700 font-body">Username</label>
            <p className="text-gray-600 font-body">{user.username}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 mb-5">
          <div className="border-b border-gray-300 pb-3">
            <label className="block font-bold text-gray-700 font-body">Email</label>
            <p className="text-gray-600 font-body">{user.email}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 mb-5">
          <div className="border-b border-gray-300 pb-3">
            <label className="block font-bold text-gray-700 font-body">Full Name</label>
            <p className="text-gray-600 font-body">{user.name}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 mb-5">
          <div className="border-b border-gray-300 pb-3">
            <label className="block font-bold text-gray-700 font-body">Phone Number</label>
            <p className="text-gray-600 font-body">{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;