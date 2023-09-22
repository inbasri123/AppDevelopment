import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

import * as AiIcons from "react-icons/ai";

import './Sidebar.css';

export default function className () {
  return (
    <div>
      <div className='full22'>
          
           <div class="navbar">
              <div class="menu">
               <ul>

                  <li><Link to='/'>HOME</Link></li>
                  <li><a href="#">ABOUT</a></li>
                  <li><Link to='/contactus'>CONTACT US</Link></li>
                  <li><Link to='/login'>LOGIN</Link></li>
                  <li><Link to='/register'>REGISTER</Link></li>
                </ul>
             </div>
          </div>
        
          
          <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar'><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
      
      
          <div className="sidebar">
            <h2>My App</h2>
            <ul>
              <li><a href="#sellers">Place</a></li>
              <li><Link to="/animel">Animels</Link></li>
              <li><Link to="#">Galery</Link></li>
              <li><Link to="#">Videos</Link></li>
              <li><Link to="#">Logout</Link></li>
            </ul>
          </div>

      </div>

    
    
    </div>
   
    
  )
}