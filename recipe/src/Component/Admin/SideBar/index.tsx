// SidebarWrapper.tsx
import { useState } from "react";
import ChefList from "./pages/chef-List";
import Home from "./pages/Home";
import AdminSideBar from "./left-sideBar"; 
import FoodLoverList from "./pages/foodLover-list";
import Category from "./pages/Category";
const AdminSidebarWrapper = () => {
    const [pageSelected, setPageSelected] = useState<"home"|"chef-list"|"category"|"foodLover-list">("home");

    return (
        <div className="flex flex-col h-auto w-[820px] rounded-[24px]">
            <div className="flex ">
                <AdminSideBar pageSelected={pageSelected} setPageSelected={setPageSelected} />
                {pageSelected==="home" && <Home />}
                {pageSelected==="chef-list" && <ChefList />}
                {pageSelected==="foodLover-list" && <FoodLoverList />}
                {pageSelected==="category" && <Category />}
            </div>
        </div>
    );
};

export default AdminSidebarWrapper;
