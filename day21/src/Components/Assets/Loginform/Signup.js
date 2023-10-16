

import React, { useState } from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function()
{
const[username,setFirstname]=useState(''); 
const[emailid,setEmail]=useState(''); 
const[mobileno,setPhoneno]=useState(''); 
const[password,setPassword]=useState(''); 

{/*const[confirmPassword,setConfirmpassword]=useState(''); 
const[lastName,setLastname]=useState(''); */}

const navigate=useNavigate();
 const formHolder=async(e)=>
 {
   e.preventDefault();
   if(emailid.length===0)
   {
      alert("Enter Email");
   }
   else
   {
   await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno,password});
    navigate("/")
   }
 }
return (
<div>
<div className='ima'>

<div className='rectangle22'></div>
<div className='head22'>
<p>SIGNUP</p>
</div>
<div className='form22'>

<form onSubmit={formHolder}>
<label for="firstname">
<input type="text200" value={username} placeholder="FirstName	"onChange={(e)=>setFirstname(e.target.value)}/></label><br/><br/>

{/*<label for="lastname">
<input type="text200" value={lastName} placeholder="LastName	"onChange={(e)=>setLastname(e.target.value)}/></label><br/><br/>*/}

<label for="email">
<input type="text200" value={emailid} placeholder="Email"onChange={(e)=>setEmail(e.target.value)} /></label><br/><br/>

<label for="phoneno">
<input type="text200" value={mobileno} placeholder="PhoneNo"onChange={(e)=>setPhoneno(e.target.value)}/></label><br/><br/>

<label for="password">
<input type="text200" value={password} placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/></label><br/><br/>

{/*<label for="confirmpassword">
<input type="text200" value={confirmPassword} placeholder="Confirm Password	"onChange={(e)=>setConfirmpassword(e.target.value)}/></label><br/><br/><br/>*/}


<button type="submit" class="but22">Create Account</button>
</form>
</div>
</div>
</div>
)
}