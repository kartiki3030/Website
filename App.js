import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import ForgotPassword from './components/ForgotPassword';
import SignOut from './components/SignOut';
import Athletics from './components/Athletics';
import Badminton from './components/Badminton';
import TableTennis from './components/TableTennis';
import Sports from './components/sports'; // Import the Sports component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200 relative flex justify-center items-center">
        <div className="absolute left-1 top-50 h-1000 w-28 max-h-screen bg-opacity-100">
          <img src="image1.jpeg" alt="Left Image" className="w-full h-full" />
        </div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/sign-out" component={SignOut} />
          <Route path="/sports" component={Sports} /> {/* Route for the Sports component */}
          <Route path="/athletics" component={Athletics} />
          <Route path="/badminton" component={Badminton} />
          <Route path="/table-tennis" component={TableTennis} />
          {/* Add routes for other sports or pages */}
          <Route path="/" component={Home} />
        </Switch>
        <div className="absolute right-1 top-100 h-1000 w-28 max-h-screen bg-opacity-100">
          <img src="image2.jpeg" alt="Right Image" className="w-full h-full" />
        </div>
      </div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Your Logo</div>
          <ul className="flex space-x-4">
            <li><Link to="/athletics" className="text-white hover:text-gray-300">Athletics</Link></li>
            <li><Link to="/badminton" className="text-white hover:text-gray-300">Badminton</Link></li>
            <li><Link to="/table-tennis" className="text-white hover:text-gray-300">Table Tennis</Link></li>
            <li><Link to="/events-ceremonies" className="text-white hover:text-gray-300">Events & Ceremonies</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-300">About Wellplayed</Link></li>
            <li><Link to="/admin" className="text-white hover:text-gray-300">Admin</Link></li>
            <li><Link to="/sign-out" className="text-white hover:text-gray-300">Sign Out</Link></li>
          </ul>
        </div>
      </nav>
    </Router>
  );
};

export default App;
