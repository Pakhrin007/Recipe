import GoogleImage from "../../assets/auth-images/image.png"
const SignupPage = () => {
  return(
    // -----------------------------Main Div---------------------------------
    <div className="flex justify-center w-full h-screen ">
      {/* -----------------------------form Div--------------------------------- */}
      <form action="">
        <div className="flex flex-col mt-[40px] w-full text-center gap-y-4 pb-[100px]">
            <h1 className="text-2xl font-bold text-[#BE1E1E]/[58%]">RecipeNest</h1>
            <div className="flex flex-col gap-y-2 bg-gray-100 px-[150px] py-8 rounded-lg w-[800px] justify-self-start shadow-lg">
              {/* -------------------greetings div--------------------------- */}
              <div className="flex flex-col gap-y-2 pb-[50px]">
                <h1 className="text-2xl font-bold ">Create an Account</h1>
                <p className="text-gray-500">Hungry and Don’t know how to make let’s we serve you..</p>
              </div>
                <label htmlFor="UserName" className="text-left text-[20px]">UserName</label>
                <input type="text" name="UserName" id="UserName" className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] " placeholder="Enter your UserName" />
                <label htmlFor="password" className="text-left text-[20px]">Password</label>
                <input type="password" name="password" id="password" className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] " placeholder="Enter your password"/>
                {/* -----------------Confirm Password---------------------- */}
                <label htmlFor="ConfirmPassword" className="text-left text-[20px]">Confirm Password</label>
                <input type="password" name="ConfirmPassword" id="ConfirmPassword" className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] " placeholder="Enter your password"/>
                {/* ------------------------------Email--------------------------------- */}
                <label htmlFor="Email" className="text-left text-[20px]">Email</label>
                <input type="email" name="Email" id="Email" className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] " placeholder="Enter your Email"/>

                {/* ----------------------Phone Number----------------------------------- */}
                <label htmlFor="PhoneNumber" className="text-left text-[20px]">Phone Number</label>
                <input type="text" name="PhoneNumber" id="PhoneNumber" className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] " placeholder="Enter your Phone Number"/>
                {/* ------------------------profie Picture------------------------------- */}
                <label htmlFor="ProfilePicture" className="text-left text-[20px]">Profile Picture</label>
                <input type="file" name="ProfilePicture" id="ProfilePicture" className="w-full p-2 rounded-md border border-gray-300 bg-[#FEFCF8] " placeholder="Enter your Phone Number"/>
                {/* -------------------Signin Button---------------------- */}
                <button className="bg-[#BE1E1E] text-white text-[20px] px-4 py-2 rounded-md mt-[20px]">Signin</button>

                {/* -----------------------Signin with Google-------------------- */}
                <button className="flex items-center justify-center gap-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 mt-[15px]">
                    <img src={GoogleImage} alt="Google" />
                    <p className="text-[20px]">Signin with Google</p>
                </button>

                <div className="flex items-center justify-center gap-x-2 mt-[15px] text-[20px]">
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

