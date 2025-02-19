import { Link } from 'react-router-dom';
import HeroSection from '../hersection';
import Login from '../loginPage';
import SignUp from '../signupPage/SignUp';

const Navbar = () => {
  return (
    <nav className="left-1/2 transform -translate-x-1/2  max-w-[1120px]  fixed w-[1120px] z-10 px-[24px] py-[16px] mt-[16px] ">
      
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <Link to="/HeroSection" className="flex items-center">
            <h1 className="text-[20px] font-rock text-[#BE1E1E]">RecipeHut</h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-[46px]">
            <Link to="/HeroSection" className="text-[#000000] text-[14px] font-medium">Home</Link>
            <Link to="/about" className="text-[#000000] text-[14px] font-medium">About</Link>
            <Link to="/recipes" className="text-[#000000] text-[14px] font-medium">Recipes</Link>
            <Link to="/blog" className="text-[#000000] text-[14px] font-medium">Blog</Link>
            <Link to="/contact" className="text-[#000000] text-[14px] font-medium">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-[12px]">
            <Link
              to="/login"
              className="px-[16px] py-[8px] bg-[#BE1E1E] text-white rounded-[8px]"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-[16px] py-[8px] bg-[#F2994B] text-white rounded-[8px]"
            >
              Sign up
            </Link>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
