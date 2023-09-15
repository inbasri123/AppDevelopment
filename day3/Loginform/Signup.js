

import React, { useState } from 'react'
import './Signup.css';

export default function()
{
const[firstname,setFirstname]=useState(''); 
const[lastname,setLastname]=useState(''); 
const[email,setEmail]=useState(''); 
const[phoneno,setPhoneno]=useState(''); 
const[password,setPassword]=useState(''); 
const[confirmpassword,setConfirmpassword]=useState(''); 
const list={firstname,lastname,email,phoneno,password,confirmpassword}

return (
<div>
<div className='ima'>

<div className='rectangle22'></div>
<div className='head22'>
<p>SIGNUP</p>
</div>
<div className='form22'>


<label for="firstname">
<input type="text200" value={firstname} placeholder="FirstName	"onChange={(e)=>setFirstname(e.target.value)}/></label><br/><br/>

<label for="lastname">
<input type="text200" value={lastname} placeholder="LastName	"onChange={(e)=>setLastname(e.target.value)}/></label><br/><br/>

<label for="email">
<input type="text200" value={email} placeholder="Email"onChange={(e)=>setEmail(e.target.value)} /></label><br/><br/>

<label for="phoneno">
<input type="text200" value={phoneno} placeholder="PhoneNo"onChange={(e)=>setPhoneno(e.target.value)}/></label><br/><br/>

<label for="password">
<input type="text200" value={password} placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/></label><br/><br/>

<label for="confirmpassword">

<input type="text200" value={confirmpassword} placeholder="Confirm Password	"onChange={(e)=>setConfirmpassword(e.target.value)}/></label><br/><br/><br/>

<button type="submit" class="but22">Create Account</button>

</div>
</div>
</div>
)
}