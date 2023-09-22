import React from 'react'
import Sidebar from '../Loginform/Sidebar';
import { BiSidebar } from 'react-icons/bi';
import "./Home.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/userSlice';
export default function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div className='pho'>
     
    <Sidebar/>
    <div className='head'>
    {username}
    </div>
    <div className='quotes'>
     Wilderness without wildlife is just scenery..
     
    <div className='footfull'>
       <footer>
       <div class="container">
       
       <div class="footer-content">
         <h3>Contact Us</h3>
         <p>Email:Info@example.com</p>
         <p>Phone:+121 56556 565556</p>
         <p>Address:Your Address 123 street</p>
      </div>
     
      <div class="footer-content">
        <h3>Quick Links</h3>
         <ul class="list">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Register</a></li>
         </ul>
     </div>
    
      <div class="footer-content">
        <h3>Follow Us</h3>
        <ul class="social-icons">
         <li><a href=""><i class="fab fa-facebook"></i></a></li>
         <li><a href=""><i class="fab fa-twitter"></i></a></li>
         <li><a href=""><i class="fab fa-instagram"></i></a></li>
         <li><a href=""><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>

      </div>
   
   <div class="bottom-bar">
    <p>&copy; 2023 your company . All rights reserved</p>
   </div>

   </footer>
 </div>
</div>
 </div>



    
   
  )
}
