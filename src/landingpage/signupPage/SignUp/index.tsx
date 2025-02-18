import { useState } from 'react';
import image from '../../../assets/images/login.png'
function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-[10px]">
        <div className="w-[550px]">
          {/* Logo */}
          <div className="flex justify-center mb-[40px]">
          <h1 className="text-4xl font-bold text-center font-rocksalt text-[#BE1E1E] text-[20px]">RecipeHut</h1>
          </div>

          {/* Welcome Text */}
          <h1 className="text-[22.2px] mb-[20px] text-center">Welcomeback?</h1>
          <p className="text-gray-600 text-[16px] text-center mb-6">
            Hungry and Don't know how to make let's we serve you..
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className='mb-[10px]'>
                <label className="block leading-[20px] text-black font-poppins text-[12.5px] mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border-1 border-gray-300  rounded"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className='mb-[10px]'>
                <label className="block leading-[20px] text-black font-poppins text-[12.5px] mb-1 font-semibold">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Password"
                />
              </div>

              <div className='mb-[10px]'>
                <label className="block leading-[20px] text-black font-poppins  text-[12.5px] mb-1 font-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Confirm Password"
                />
              </div>

                <div className='mb-[10px]'>
                <label className="block leading-[20px] text-black font-poppins  text-[12.5px] mb-1 font-semibold">UserName</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Username"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
              >
                Sign In
              </button>

              {/* Google Sign In Button */}
              <button
                type="button"
                className="w-full border border-gray-300 p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign in with Google
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center mt-4 text-sm">
            Already have an Account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 bg-gray-200">
        <img
          src={image} // Replace with your actual image path
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default SignUp; 