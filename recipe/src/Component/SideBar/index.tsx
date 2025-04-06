// SidebarWrapper.tsx
import { useState } from "react";
import Favourites from "./pages/Favourites";
import ChefList from "./pages/chef-List";
import Home from "./pages/Home";
import MyList from "./pages/My-List";
import SideBar from "./left-sideBar"; 
import FAQ from "../../UI/Faq";
const SidebarWrapper = () => {
    const [pageSelected, setPageSelected] = useState<"home"|"chef-list"|"favourites"|"my-list"|"FAQ">("home");

    return (
        <div className="flex flex-col h-auto w-[820px] rounded-[24px]">
            <div className="flex ">
                <SideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                {pageSelected==="home" && <Home />}
                {pageSelected==="chef-list" && <ChefList />}
                {pageSelected==="favourites" && <Favourites />}
                {pageSelected==="my-list" && <MyList />}
                {pageSelected==="FAQ" && <FAQ />}
            </div>
        </div>
    );
};

export default SidebarWrapper;
