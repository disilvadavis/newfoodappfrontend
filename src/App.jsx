import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MexicanPage from './pages/Mexican';
import IndianPage from './pages/Indian';
import ItalianPage from './pages/Italian';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mexican" element={<MexicanPage />} />
        <Route path="/indian" element={<IndianPage />} />
        <Route path="/italian" element={<ItalianPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
