import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './landingpage/Navbar';
import Login from './landingpage/loginPage';
import SignUp from './landingpage/signupPage/SignUp';
import HeroSection from './landingpage/hersection';
function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <Navbar />
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
          
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/HeroSection" element={<HeroSection />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

// Placeholder components - you'll want to create proper components for these


export default App;
