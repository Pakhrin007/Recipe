import GoogleImage from "../../assets/auth-images/image.png";

const LoginPage = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  if (!isVisible) return null;

  return (
    // -----------------------------Main Div---------------------------------
    <div className="flex justify-center items-center w-full h-screen fixed inset-0 bg-black/50 backdrop-blur-sm">
      {/* -----------------------------Form Div--------------------------------- */}
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto my-6 sm:my-[40px] bg-gray-100 rounded-lg shadow-lg">
          {/* Header with Title and Close Button */}
          <div className="flex justify-between items-center px-4 sm:px-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#BE1E1E]/[58%]">RecipeNest</h1>
            <button
              className="text-black h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full bg-white flex items-center justify-center"
              onClick={onClose}
            >
              X
            </button>
          </div>

          {/* Form Content */}
          <div className="flex flex-col gap-y-2 bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-[150px] py-6 sm:py-8 rounded-lg shadow-lg">
            {/* Greetings Div */}
            <div className="flex flex-col gap-y-2 pb-6 sm:pb-[50px]">
              <h1 className="text-xl sm:text-2xl font-bold">Welcome Back</h1>
              <p className="text-gray-500 text-sm sm:text-base">
                Hungry and don’t know how to cook? Let us serve you!
              </p>
            </div>

            {/* Username Field */}
            <label htmlFor="UserName" className="text-left text-base sm:text-[20px]">
              Username
            </label>
            <input
              type="text"
              name="UserName"
              id="UserName"
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Enter your Username"
            />

            {/* Password Field */}
            <label htmlFor="password" className="text-left text-base sm:text-[20px] mt-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Enter your password"
            />

            {/* Signin Button */}
            <button className="bg-[#BE1E1E] text-white text-base sm:text-[20px] px-4 py-2 rounded-md mt-4 sm:mt-[20px] w-full sm:w-auto">
              Signin
            </button>

            {/* Signin with Google */}
            <button className="flex items-center justify-center gap-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 mt-3 sm:mt-[15px] w-full sm:w-auto">
              <img src={GoogleImage} alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-[20px]">Signin with Google</p>
            </button>

            {/* Signup Link */}
            <div className="flex items-center justify-center gap-x-2 mt-3 sm:mt-[15px] text-sm sm:text-[20px]">
              <p>Don't have an account?</p>
              <button className="text-[#BE1E1E]">Signup</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;