import { useState } from 'react';
import image from '../../assets/images/login.png'
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });





  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-[10px]">
        <div className="w-[550px]">
          {/* Logo */}
          <div className="flex justify-center mb-[40px]">
            <h1 className="text-4xl font-bold text-center font-rock text-[#BE1E1E]">RecipeHut</h1>
          </div>

          {/* Welcome Text */}
          <h2 className="text-[22.2px] font-bold mb-[8px] text-center">Welcomeback?</h2>
          <p className="text-gray-600 text-[14px] mb-[24px] text-center">
            The Faster you Fill up, the Faster you get a ticket
          </p>

          {/* Form */}
          <form  className="space-y-5">
            <div>
              <label className="block text-black font-medium text-[14px] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="w-full p-3 border border-gray-300 rounded-md text-[14px]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-black font-medium text-[14px] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
               
                className="w-full p-3 border border-gray-300 rounded-md text-[14px]"
                placeholder="••••••••"
              />
            </div>

            {/* Remember me and Forgot Password */}
            <div className="flex justify-between items-center">
              <label className="flex items-center space-x-2 text-[14px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="text-[14px] text-gray-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>

            {/* Google Sign In Button */}
            <button
              type="button"
              className="w-full border border-gray-300 p-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>

            {/* Sign Up Link */}
            <div className="text-center text-[14px]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-gray-600 hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 bg-gray-100">
        <img
          src={image} // You'll need to add your food image
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login; 