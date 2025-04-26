// SidebarWrapper.tsx
import { useState } from "react";
import ChefList from "./pages/chef-List";
import Home from "./pages/Home";
import SideBar from "./left-sideBar"; 
import FAQ from "../../../UI/Faq";
import Profile from "./pages/profile";
const UserSidebarWrapper = () => {
    const [pageSelected, setPageSelected] = useState<"home"|"chef-list"|"my-list"|"FAQ"|"add-recipe"|"profile">("home");

    return (
        <div className="flex flex-col h-auto w-full rounded-[24px] border border-gray-300">
            <div className="flex ">
                <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                {pageSelected==="home" && <Home />}
                {pageSelected==="chef-list" && <ChefList />}
                {pageSelected==="FAQ" && <FAQ />}
                {pageSelected==="profile" && <Profile />}
            </div>
        </div>
    );
};

export default UserSidebarWrapper;
