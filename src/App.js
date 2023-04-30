import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Analytics from './pages/Analytics';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={ <Dashboard/>} />
        <Route  path="/users" element={<Users/>} />
        <Route  path="/analytics" element={<Analytics/>} />
       
        </Routes>
    </Router>
    </div>
  );
}

export default App;
