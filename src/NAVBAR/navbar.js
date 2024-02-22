import React from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import About from './about';
import './navbar.css'
const Navbar = () => {
    return (
        <div>
            <ul className='navbar'>
                <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link> </li>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    
    );
}

export default Navbar;
