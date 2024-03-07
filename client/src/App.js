import './App.css';
import Header from './components/Header';
import {  Route,Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Tickets from './components/Tickets';
import User from './components/User';
import Login from './components/Login';
import Travel from './components/BookInterface'



function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Routes>  
    <Route path="/home" element={<Home/>} /> 
    <Route path="/Tickets" element={<Tickets/>} />
    <Route path="/Travel" element={<Travel/>} />
    <Route path="/User" element={<User/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    </div>
  );
}


export default App;