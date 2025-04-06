// SideNavigation.tsx
interface SideBarProps {
    pageSelected: "home" | "chef-list" | "favourites" | "my-list"|"FAQ";
    setPageSelected: (pageSelected: "home" | "chef-list" | "favourites" | "my-list"|"FAQ") => void;
}

const SideBar = ({ pageSelected, setPageSelected }: SideBarProps) => {
    return (
        <div className="flex flex-col h-[656px] min-w-[220px] border-r border-border-dark gap-y-[24px] px-[24px] py-[16px]">
            {/* ------------Profile, Theme , Notifications and Security------------- */}
            <div className="flex flex-col gap-y-[20px]">
                <p className="text-[14px] bg-[#F5F5F5] rounded-[8px] p-[12px] ">
                    RecipeNest
                </p>
                <div className={`flex  gap-x-[16px] items-center ${pageSelected==="home" ? "rounded-[8px] " : ""}`} onClick={()=>setPageSelected("home")}>
                    <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark">
                        Home
                    </p>
                </div>
                <div className={`flex gap-x-[16px] items-center ${pageSelected==="chef-list" ? "rounded-[8px] " : ""}`} onClick={()=>setPageSelected("chef-list")}>
                    <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                        Chef List
                    </p>
                </div>
                <div onClick={()=>setPageSelected("favourites")} className={`flex gap-x-[16px] items-center ${pageSelected==="favourites"?"rounded-[8px]":""}`}>
                    <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                        Favourites
                    </p>
                </div>
                <div className={`flex gap-x-[16px] items-center ${pageSelected==="my-list" ? "rounded-[8px] " : ""}`} onClick={()=>setPageSelected("my-list")}>
                    <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                        My List
                    </p>
                </div>
                <div className={`flex gap-x-[16px] items-center ${pageSelected==="FAQ" ? "rounded-[8px] " : ""}`} onClick={()=>setPageSelected("FAQ")}>
                    <p className="text-[14px] font-regular font-body leading-[20px] dark:text-text-secondary-dark/[60%]">
                        FAQ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
