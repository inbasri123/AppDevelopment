import React, { useState } from 'react'
import{useNavigate}from 'react-router-dom';
import "./Login.css";

export default 
function Login() 
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const formHolder=(event)=>
    {
      navigate("/Signup")
    }
    
  return(
  <>
  <div>
    
    <div className='image'>
   
    
    <div className='rectangle'></div>

    <div className='head1'>
      <p>Login</p>
    </div>
    <div className='form1'>
    <form onSubmit={formHolder}>
<input type="text100" value={email} placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <br/>
 <input type="Password300" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <br/>
    <button type="submit" class="but">Login</button><br/>
    
    

    
    
    </form>
   
    </div>
  
    
    </div>
    </div>

   </>
  )
}
