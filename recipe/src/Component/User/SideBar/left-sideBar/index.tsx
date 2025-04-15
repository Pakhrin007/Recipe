import React, { useState } from 'react';
import HomeIcon from '../../../../assets/icons/HomeIcon';
import ContactIcon from '../../../../assets/icons/ContactIcon';
import FAQIcon from '../../../../assets/icons/FAQIcon';
import CollapseIcon from '../../../../assets/icons/CollapseIcon';
import LogoutIcon from '../../../../assets/icons/LogoutIcon';
import { HeartIcon } from '../../../../assets/icons/HeartIcon';
import pakhrin from '../../../../assets/images/Pakhrin.jpg';
import Modal from '../../../../UI/Modal';
interface SideBarProps {
    pageSelected: "home" | "chef-list" | "favourites"  | "FAQ" | "profile";
    setPageSelected: (pageSelected: "home" | "chef-list" | "favourites" | "FAQ"| "profile") => void;
}

const SideBar = ({ pageSelected, setPageSelected }: SideBarProps) => {
    // State to track whether the sidebar is collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isModalOpen,SetIsModalOpen]=useState(false);

    const handleLogout=()=>{
        SetIsModalOpen(true);
    }
    const handleCloseModal=()=>{
        SetIsModalOpen(false);
    }

    return (    
        <div
            className={`flex flex-col justify-between  h-screen ${
                isCollapsed ? "min-w-[60px]" : "min-w-[180px]"
            } border-r-2 border-border-dark shadow-lg gap-y-[24px] px-[16px] py-[16px] h-screen transition-all duration-300`}
        >
            {/* Profile, Theme, Notifications, and Security */}
            <div className="flex flex-col gap-y-[20px] text-justify">
                {/* RecipeNest Title */}
                <p
                    className={`rounded-[8px] p-[12px] mb-[30px] text-[#FF1313] font-bold text-[14px] cursor-pointer font-title`}
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
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark font-body">
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
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Chef List
                        </p>
                    )}
                </div>

                <div
                    onClick={() => setPageSelected("favourites")}
                    className={`flex items-center gap-x-[8px] cursor-pointer ${
                        pageSelected === "favourites"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                >
                    <i>
                        <HeartIcon className="w-[24px] h-[24px]" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Favourites
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
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            FAQ
                        </p>
                    )}
                </div>

                {/* ------------------------------add recipe-=------------------------ */}
                
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
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Collapse
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-x-[16px] cursor-pointer" onClick={handleLogout}>
                    <i>
                        <LogoutIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Logout
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-x-[16px] cursor-pointer" onClick={() => setPageSelected("profile")}>
                    <img
                        src={pakhrin}
                        alt="pakhrin"
                        className="w-[24px] h-[24px] rounded-full"
                    />
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Profile
                        </p>
                    )}
                </div>
            </div>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
        </div>
    );
};

export default SideBar;