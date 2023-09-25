import React from 'react'
import "./Contacts.css";
import Sidebar from '../Loginform/Sidebar';
export default function Contacts() {
  return (
    <div>
    <Sidebar/>
    <div className='panda'>
   
          <div className="hea">GET IN TOUCH
      </div>
          <div className="inn">
            
            <div className="sect">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-mail" />
              <textarea placeholder="Write your message..." defaultValue={""} />
              <button type='submit'class="but1">send</button>
            </div>
          </div>
        </div>
      </div>
   
   
  )
}
