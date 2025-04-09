import  { useState } from 'react';
import HomeIcon from '../../../../assets/icons/HomeIcon';
import ListIcon from '../../../../assets/icons/ListIcon';
import CollapseIcon from '../../../../assets/icons/CollapseIcon';
import LogoutIcon from '../../../../assets/icons/LogoutIcon';
import ReportIcon from '../../../../assets/icons/ReportIcon';
import pakhrin from "../../../../assets/Images/Pakhrin.jpg";
import LoverIcon from '../../../../assets/icons/LoverIcon';
interface SideBarProps {
    pageSelected: "home" | "chef-list" | "reports" | "foodLover-list";
    setPageSelected: (pageSelected: "home" | "chef-list" | "reports" | "foodLover-list") => void;
}

const AdminSideBar = ({ pageSelected, setPageSelected }: SideBarProps) => {
    // State to track whether the sidebar is collapsed or not
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`flex flex-col justify-between ${
                isCollapsed ? "min-w-[60px]" : "min-w-[160px]"
            } border-r-2 border-border-dark shadow-lg gap-y-[24px] px-[16px] py-[16px] h-screen transition-all duration-300`}
        >
            {/* Profile, Theme, Notifications, and Security */}
            <div className="flex flex-col gap-y-[20px] text-justify">
                {/* RecipeNest Title */}
                <p
                    className={`rounded-[8px] p-[12px] mb-[30px] text-[#FF1313] font-bold text-[14px] cursor-pointer ${
                        isCollapsed ? "hidden" : ""
                    }`}
                >
                    RecipeNest
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
                        <ListIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Chef List
                        </p>
                    )}
                </div>
                <div
                    className={`flex items-center gap-x-[16px] cursor-pointer ${
                        pageSelected === "reports"
                            ? "text-red-500 underline underline-offset-4 rounded-[8px]"
                            : ""
                    }`}
                    onClick={() => setPageSelected("reports")}
                >
                    <i>
                        <ReportIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Reports
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
                        <LoverIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            FoodLover List
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
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Collapse
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-x-[16px] cursor-pointer">
                    <i>
                        <LogoutIcon className="w-[24px] h-[24px] text-black" />
                    </i>
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Logout
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-x-[16px] cursor-pointer">
                    <img
                        src={pakhrin}
                        alt="pakhrin"
                        className="w-[24px] h-[24px] rounded-full"
                    />
                    {!isCollapsed && (
                        <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                            Profile
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminSideBar;