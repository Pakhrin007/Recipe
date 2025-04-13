import GoogleImage from '../../assets/auth-images/image.png';
import axios from 'axios';
import { useState } from 'react';

interface SignupPageProps {
  isvisible: boolean;
  onClose: () => void;
  setIsLoginModalOpen: (value: boolean) => void;
}

const SignupPage = ({ isvisible , onClose, setIsLoginModalOpen }: SignupPageProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7136/api/auth/register', {
        name: name || email.trim().split('@')[0],
        email,
        password,
        role: 'user',
        bio: 'Hello from RecipeNest',
        profileImage: 'example/login/profile.png',
      });
      alert('Signup successful');
      onClose();
      setIsLoginModalOpen(true);
    } catch (error: any) {
      console.error('Signup error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  if (!isvisible) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto z-50">
      <form onSubmit={handleSignup}>
        <div className="flex flex-col w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto my-6 sm:my-[40px] bg-gray-100 rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-4 sm:px-6 py-4">
            <h1 className="text-xl sm:text-2xl font-bold text-[#BE1E1E]/[58%] font-title text-center">
              RecipeNest
            </h1>
            <button
              className="text-black h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full bg-white flex items-center justify-center"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <div className="flex flex-col gap-y-2 px-4 sm:px-6 md:px-10 lg:px-[150px] py-6 sm:py-8 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex flex-col gap-y-2 pb-6 sm:pb-[50px]">
              <h1 className="text-xl sm:text-2xl font-bold font-title">Create an Account</h1>
              <p className="text-gray-500 text-sm sm:text-base font-body">
                Hungry and don't know how to cook? Let us serve you!
              </p>
            </div>

            <label htmlFor="UserName" className="text-left text-base sm:text-[20px] font-body">
              Username
            </label>
            <input
              type="text"
              name="UserName"
              id="UserName"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Enter your Username"
            />

            <label htmlFor="password" className="text-left text-base sm:text-[20px] mt-2 font-body">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Enter your password"
            />

            <label htmlFor="Email" className="text-left text-base sm:text-[20px] mt-2 font-body">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Enter your Email"
            />

            <button
              type="submit"
              className="bg-[#BE1E1E] text-white text-base sm:text-[20px] px-4 py-2 rounded-md mt-4 sm:mt-[20px] w-full sm:w-auto font-body"
            >
              Signup
            </button>

            <button className="flex items-center justify-center gap-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 mt-3 sm:mt-[15px] w-full sm:w-auto font-body">
              <img src={GoogleImage} alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-[20px]">Signup with Google</p>
            </button>

            <div className="flex items-center justify-center gap-x-2 mt-3 sm:mt-[15px] text-sm sm:text-[20px] font-body">
              <p>Already have an account?</p>
              <button
                className="text-[#BE1E1E]"
                onClick={() => {
                  onClose();
                  setIsLoginModalOpen(true);
                }}
              >
                SignIn
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;