// SidebarWrapper.tsx
import { useState } from "react";
import ChefList from "./pages/chef-List";
import Home from "./pages/Home";
import MyList from "./pages/My-List";
import SideBar from "./left-sideBar"; 
import FAQ from "../../../UI/Faq";
import AddRecipePage from "./pages/add-recipe";
import Profile from "./pages/profile";
const ChefSidebarWrapper = () => {
    const [pageSelected, setPageSelected] = useState<"home"|"chef-list"|"my-list"|"FAQ"|"add-recipe"|"profile">("home");

    return (
        <div className="flex flex-col h-auto w-full rounded-[24px] border border-gray-300">
            <div className="flex ">
                <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                {pageSelected==="home" && <Home />}
                {pageSelected==="chef-list" && <ChefList />}
               
                {pageSelected==="my-list" && <MyList />}
                {pageSelected==="FAQ" && <FAQ />}   
                {pageSelected==="add-recipe" && <AddRecipePage />}
                {pageSelected==="profile" && <Profile />}
            </div>
        </div>
    );
};

export default ChefSidebarWrapper;
