import { useState } from "react";
import SavedRecipe from "./profile/saved-recipe";
import ViewProfile from "./profile/view-profile";
const Profile = () => {
    const [isactiveTab,setActiveTab]=useState("manage-account")

    return (
        <div className="w-screen h-full gap-y-[24px] px-[16px] py-[16px] flex flex-col">
            <div  className="">
                <h1 className="mt-2 text-[20px] font-medium">Profile</h1>
            </div>

            <div className="w-full h-full gap-y-[16px] bg-black px-[26px] py-[16px] flex flex-col rounded-[8px]">
                <h1 className="mt-2 text-[20px] text-white font-medium">Personal Information</h1>
                <p className="text-[16px] text-white font-regular">
                    Manage Your Personal Information
                </p>
            </div>

            <div className="w-full border-b border-border-dark pb-[14px] flex gap-x-[66px]">
  <p
    className={`text-[16px] cursor-pointer font-regular ${
      isactiveTab === "manage-account"
        ? "text-red-400 underline underline-offset-8 decoration-2"
        : "text-black"
    }`}
    onClick={() => setActiveTab("manage-account")}
  >
    Manage your account
  </p>
  <p
    className={`text-[16px] cursor-pointer font-regular ${
      isactiveTab === "saved-recipes"
        ? "text-red-400 underline underline-offset-8 decoration-2"
        : "text-black"
    }`}
    onClick={() => setActiveTab("saved-recipes")}
  >
    Saved Recipes
  </p>
</div>

            {isactiveTab==="manage-account"&&<ViewProfile/>}
            {isactiveTab==="saved-recipes"&&<SavedRecipe recipes={[]}/>}
           
        </div>
    )
}       
export default Profile;
