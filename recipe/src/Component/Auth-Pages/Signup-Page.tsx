import GoogleImage from "../../assets/auth-images/image.png";

const SignupPage = ({ isvisible, onClose }: { isvisible: boolean; onClose: () => void }) => {
  if (!isvisible) return null;

  return (
    // -----------------------------Main Div---------------------------------
    <div className="flex justify-center items-center w-full h-screen fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto">
      {/* -----------------------------Form Div--------------------------------- */}
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto my-6 sm:my-[40px] bg-gray-100 rounded-lg shadow-lg">
          {/* Header with Title and Close Button */}
          <div className="flex justify-between items-center px-4 sm:px-6 py-4 ">
            <h1 className="text-xl sm:text-2xl font-bold text-[#BE1E1E]/[58%]">RecipeNest</h1>
            <button
              className="text-black h-10 w-10 sm:h-[50px] sm:w-[50px] rounded-full bg-white flex items-center justify-center"
              onClick={onClose}
            >
              X
            </button>
          </div>

          {/* Form Content */}
          <div className="flex flex-col gap-y-2 px-4 sm:px-6 md:px-10 lg:px-[150px] py-6 sm:py-8 max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* Greetings Div */}
            <div className="flex flex-col gap-y-2 pb-6 sm:pb-[50px]">
              <h1 className="text-xl sm:text-2xl font-bold">Create an Account</h1>
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

            {/* Confirm Password Field */}
            <label htmlFor="ConfirmPassword" className="text-left text-base sm:text-[20px] mt-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="ConfirmPassword"
              id="ConfirmPassword"
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Confirm your password"
            />

            {/* Email Field */}
            <label htmlFor="Email" className="text-left text-base sm:text-[20px] mt-2">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Enter your Email"
            />

            {/* Phone Number Field */}
            <label htmlFor="PhoneNumber" className="text-left text-base sm:text-[20px] mt-2">
              Phone Number
            </label>
            <input
              type="text"
              name="PhoneNumber"
              id="PhoneNumber"
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
              placeholder="Enter your Phone Number"
            />

            {/* Profile Picture Field */}
            <label htmlFor="ProfilePicture" className="text-left text-base sm:text-[20px] mt-2">
              Profile Picture
            </label>
            <input
              type="file"
              name="ProfilePicture"
              id="ProfilePicture"
              className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] text-sm sm:text-base"
            />

            {/* Signup Button */}
            <button className="bg-[#BE1E1E] text-white text-base sm:text-[20px] px-4 py-2 rounded-md mt-4 sm:mt-[20px] w-full sm:w-auto">
              Signup
            </button>

            {/* Signup with Google */}
            <button className="flex items-center justify-center gap-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 mt-3 sm:mt-[15px] w-full sm:w-auto">
              <img src={GoogleImage} alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-[20px]">Signup with Google</p>
            </button>

            {/* Signin Link */}
            <div className="flex items-center justify-center gap-x-2 mt-3 sm:mt-[15px] text-sm sm:text-[20px]">
              <p>Already have an account?</p>
              <button className="text-[#BE1E1E]">Signin</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;