import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { UserProfile } from './pages/UserProfile';
import { DriverProfile } from './pages/DriverProfile';
import { SearchDrivers } from './pages/SearchDrivers';
import { Messages } from './pages/Messages';
import { AdminDashboard } from './pages/AdminDashboard';
import { FAQ } from './pages/FAQ';
import { TermsOfService } from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/driver-profile" element={<DriverProfile />} />
          <Route path="/search" element={<SearchDrivers />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;