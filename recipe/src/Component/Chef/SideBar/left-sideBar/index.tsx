import React, { useState } from 'react';
import HomeIcon from '../../../../assets/icons/HomeIcon';
import ContactIcon from '../../../../assets/icons/ContactIcon';
import ListIcon from '../../../../assets/icons/ListIcon';
import FAQIcon from '../../../../assets/icons/FAQIcon';
import CollapseIcon from '../../../../assets/icons/CollapseIcon';
import LogoutIcon from '../../../../assets/icons/LogoutIcon';
import AddIcon from '../../../../assets/icons/AddIcon';
import pakhrin from '../../../../assets/images/Pakhrin.jpg';
import LogoutModal from '../../../../UI/Logout';    
import { useNavigate } from 'react-router-dom';
interface SideBarProps {
    pageSelected: "home" | "chef-list" | "my-list" | "FAQ" | "add-recipe" | "profile";
    setPageSelected: (pageSelected: "home" | "chef-list" |  "my-list" | "FAQ" | "add-recipe" | "profile") => void;
}

const SideBar = ({ pageSelected, setPageSelected }: SideBarProps) => {
    // State to track whether the sidebar is collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();


    return (        
        
        <div
            className={`flex flex-col justify-between  h-screen backdrop-blur-2xl  ${
                isCollapsed ? "min-w-[60px]" : "min-w-[180px]"
            } border-r-2 border-border-dark shadow-lg gap-y-[24px] px-[16px] py-[16px] h-screen transition-all duration-300`}
        >
            {/* Profile, Theme, Notifications, and Security */}
            <div className="flex flex-col gap-y-[24px] text-justify">
                {/* RecipeNest Title */}
                <p
                    className={`font-title rounded-[8px] p-[12px] mb-[30px] text-[#FF1313] font-bold text-[16px] cursor-pointer  `}
                >
                    {isCollapsed ? "Rn" : "RecipeNest"}
                    
                </p>

                {/* Navigation Links */}
                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${
                        pageSelected === "home"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                    onClick={() => setPageSelected("home")}
                >
                    <i>
                        <HomeIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark">
                            Home
                        </p>
                    )}
                </div>

                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${
                        pageSelected === "chef-list"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                    onClick={() => setPageSelected("chef-list")}
                >
                    <i>
                        <ContactIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Chef List
                        </p>
                    )}
                </div>


                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${
                        pageSelected === "my-list"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                    onClick={() => setPageSelected("my-list")}
                >
                    <i>
                        <ListIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            My List
                        </p>
                    )}
                </div>

                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${
                        pageSelected === "FAQ"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                    onClick={() => setPageSelected("FAQ")}
                >
                    <i>
                        <FAQIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            FAQ
                        </p>
                    )}
                </div>

                {/* ------------------------------add recipe-=------------------------ */}
                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${pageSelected==="add-recipe" ? "text-red-500 underline underline-offset-4 rounded-[8px]" : ""}
                   
                    `}
                    onClick={() => setPageSelected("add-recipe")}
                >
                    <i>
                        <AddIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Add Recipe
                        </p>
                    )}
                </div>
            </div>

            {/* Collapse, Logout, and Profile Icon */}
            <div className="flex flex-col gap-y-[20px] text-justify ">
                <div
                    className="flex items-center gap-x-[16px] cursor-pointer"
                    onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse state
                >
                    <i>
                        <CollapseIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Collapse
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-x-[16px] cursor-pointer">
                    <i>
                        <LogoutIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] cursor-pointer" onClick={() => setShowLogoutModal(true)}>
                            Logout
                        </p>
                    )}
                </div>
                {showLogoutModal && (
                <LogoutModal
                
         onConfirm={() => {
            localStorage.removeItem("token");
            navigate(   "/");
            setShowLogoutModal(false);
        }}
        onCancel={() => setShowLogoutModal(false)}
    />
)}


                <div className="flex items-center gap-x-[16px] cursor-pointer" onClick={() => setPageSelected("profile")}>
                    <img
                        src={pakhrin}
                        alt="pakhrin"
                        className="w-[24px] h-[24px] rounded-full"
                    />
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Profile
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;