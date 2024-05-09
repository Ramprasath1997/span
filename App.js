import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ClockInOut from './components/ClockInOut';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/clock" component={ClockInOut} />
      </Routes>
    </Router>
  );
}

export default App;
