import './App.css';

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
      
      <Router>
        <Navbar/>
        <Routes>
        <Route  exact path="/" element={<Login/>} />  
        <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
  );
}

export default App;
