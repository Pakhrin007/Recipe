import AdminSidebarWrapper from "./Component/Admin/SideBar";
import LandingPage from "./Component/Landing-Page/index";
import { useSelector } from "react-redux";
import UserSidebarWrapper from "./Component/User/SideBar/index";
import ChefSidebarWrapper from "./Component/Chef/SideBar/index";
const App = () => {
  const role=useSelector((state:any)=>state.role.role);
  return (
    
    <div>
      
      {(() => {
  switch (role) {

    case "FoodLover":
      return (
        <UserSidebarWrapper/>
      );

    case "Chef":
      return (
        <ChefSidebarWrapper/>
      );
    
    case "admin":
      return (
        <AdminSidebarWrapper/>
      );
    default:
      return (
        <LandingPage/>
         
      );
  }
})()}
      
    </div>
   
  );
};

export default App;
