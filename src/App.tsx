import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './landingpage/Navbar';
import Login from './landingpage/loginPage';
import SignUp from './landingpage/signupPage/SignUp';
import HeroSection from './landingpage/hersection';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup']; // Hide Navbar for login & signup

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar should not move on route change */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      {/* Page Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<Navigate to="/" />} /> {/* Redirect /home to / */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
