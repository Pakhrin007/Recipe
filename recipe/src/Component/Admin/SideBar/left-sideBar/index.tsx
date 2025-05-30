import  { useState } from 'react';
import HomeIcon from '../../../../assets/icons/HomeIcon';
import ListIcon from '../../../../assets/icons/ListIcon';
import CollapseIcon from '../../../../assets/icons/CollapseIcon';
import LogoutIcon from '../../../../assets/icons/LogoutIcon';
import pakhrin from "../../../../assets/Images/Pakhrin.jpg";
import LoverIcon from '../../../../assets/icons/LoverIcon';
import { HeartIcon } from '../../../../assets/icons/HeartIcon';
import LogoutModal from '../../../../UI/Logout';
import { useNavigate } from 'react-router-dom';
interface SideBarProps {
    pageSelected: "home" | "chef-list" | "foodLover-list" | "category";
    setPageSelected: (pageSelected: "home" | "chef-list"  | "foodLover-list" | "category") => void;
}

const AdminSideBar = ({ pageSelected, setPageSelected }: SideBarProps) => {
    // State to track whether the sidebar is collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();


    return (
        <div
            className={`flex flex-col justify-between ${
                isCollapsed ? "min-w-[60px]" : "min-w-[180px]"
            } border-r-2 border-border-dark shadow-lg gap-y-[24px] px-[16px] py-[16px] h-screen transition-all duration-300`}
        >
            {/* Profile, Theme, Notifications, and Security */}
                <div className="flex flex-col gap-y-[20px] text-justify font-title">
                {/* RecipeNest Title */}
                <p
                    className={`rounded-[8px] p-[12px] mb-[30px] text-[#FF1313] font-bold text-[16px] cursor-pointer font-title`}
                >
                    {isCollapsed ? "Rn" : "RecipeNest"}
                </p>

                {/* Navigation Links */}
                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer font-body ${
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
                            <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark font-body ">
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
                        <ListIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Chef List
                        </p>
                    )}
                </div>
                

                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${
                        pageSelected === "foodLover-list"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                    onClick={() => setPageSelected("foodLover-list")}
                >
                    <i>
                        <HeartIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            FoodLover List
                        </p>
                    )}
                </div>

                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${
                        pageSelected === "category"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                    onClick={() => setPageSelected("category")}
                >
                    <i>
                        <LoverIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Category
                        </p>
                    )}
                </div>


                

             

               
            </div>

            {/* Collapse, Logout, and Profile Icon */}
            <div className="flex flex-col gap-y-[20px] text-justify">
                <div
                    className="flex items-center gap-x-[16px] cursor-pointer"
                    onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse state
                >
                    <i>
                        <CollapseIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
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


                <div className="flex items-center gap-x-[16px] cursor-pointer">
                    <img
                        src={pakhrin}
                        alt="pakhrin"
                        className="w-[24px] h-[24px] rounded-full"
                    />
                    {!isCollapsed && (
                        <p className="text-[16px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%] font-body">
                            Profile
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminSideBar;