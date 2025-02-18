import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './landingpage/Navbar';
import Login from './landingpage/loginPage';
import SignUp from './landingpage/signupPage/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
          
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Placeholder components - you'll want to create proper components for these


export default App;
