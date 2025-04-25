import AdminSidebarWrapper from "./Component/Admin/SideBar";
import LandingPage from "./Component/Landing-Page/index";
import { useSelector } from "react-redux";
import UserSidebarWrapper from "./Component/User/SideBar/index";
import ChefSidebarWrapper from "./Component/Chef/SideBar/index";
// import Modal from "./UI/Modal";
const App = () => {
  const role=useSelector((state:any)=>state.role.role);
  return (
    
    <div>
      
      {(() => {
  switch (role) {

    case "0":
      return (
        <UserSidebarWrapper/>
      );

    case "1":
      return (
        <ChefSidebarWrapper/>
      );
    
    case "2":
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
