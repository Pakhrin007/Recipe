import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Outer Container with Background */}
      <div className="w-[600px] p-8 rounded-lg shadow-lg bg-white mt-[20px] mb-[20px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold text-[#BE1E1E] font-poppins">RecipeHut</h1>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>
        <p className="text-gray-600 text-center mb-6">
          Join us and start exploring amazing recipes!
        </p>

        {/* Form */}
        <form  className="space-y-5">
          <div>
            <label className="block text-black font-medium mb-1">Username</label>
            <input
              type="text"
              name="userName"
         
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
          
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
             
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-black font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
             
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition">
            Sign Up
          </button>

          {/* Google Sign Up Button */}
          <button type="button" className="w-full border border-gray-300 p-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          {/* Already have an account? */}
          <div className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-gray-600 hover:underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
