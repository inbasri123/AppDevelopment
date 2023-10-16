import React, { useState } from 'react';
import "./Contacts.css";
import Sidebar from '../Loginform/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Contacts() {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('');
const details={username,email,message};
  const navigate=useNavigate();

  const formHolder=async(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/auth/postContact",details)
    navigate("/home");
  }

  return (
    <div>
    <Sidebar/>
    <div className='panda'>
   
          <div className="hea">GET IN TOUCH
     
          <div className="inn">
          
            <div className="sect">
            <form onSubmit={formHolder}>
              <input type="text" value={username} placeholder="Name" onChange={(e)=>setUsername(e.target.value)}/>
              <input type="email"  value={email} placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
              <textarea type="text" value={message} placeholder="Write your message..." onChange={(e)=>setMessage(e.target.value)} />
              <button type="submit" class="but1">send</button>
             </form>
            </div>
          </div>
        </div>
        </div>
      </div>
   
   
  )
}
