import './App.css';
import Header from './components/Header';
import {  Route,Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Tickets from './components/Tickets';
import User from './components/User';
import Login from './components/Login';
import Travel from './components/BookInterface'
import Signup from './components/Signup';
import BusAdd from './components/busAdd.js';
import ContactUs from './components/ContactUs';





function App() {
  const user=localStorage.getItem("token")
  return (
    <div className="App">
      <Header></Header> 
      <Routes>  
    <Route path="/Home" element={<Home/>} /> 
    <Route path="/Tickets" element={<Tickets/>} />
    <Route path="/Travel" element={<Travel/>} />
    <Route path="/ContactUs" element={<ContactUs/>} />
    <Route path="/User" element={<User/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/busAdd" element={<BusAdd/>} />

    </Routes>
    </div>
  );
}


export default App;