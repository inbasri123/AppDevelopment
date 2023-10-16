import React from 'react'
import"./Place.css";
import Sidebar from '../Loginform/Sidebar';
import { Link } from 'react-router-dom';
export default function Place() {
  return (
    <div>
    <Sidebar/>
    <div className='fun'>
       <div className='sq'>
      <div className='pine'></div>
    </div>
    <div className='fk'>
    <p>Pine trees are a type of evergreen coniferous tree that belong to the genus Pinus, which is part of the Pinaceae family.These forests occur at elevations of 7,000-8,500 feet.
    Pine forests usually occur on dry slopes so needles that fall under the trees decompose very slowly.</p>
    <Link to='/pine'>Read More</Link>
    </div>

    <div className='sq1'>
    <div className='man'></div>
    </div>
    <div className='fk1'>
    <p>Pichavaram is a unique and ecologically significant mangrove forest located in the southern Indian state of Tamil Nadu.
    It is situated near the town of Chidambaram, in the Cuddalore district, and is known for its exceptional biodiversity and natural beauty.
    Pichavaram is one of the largest mangrove forests in India and is renowned for its dense mangrove vegetation. </p>
    <button>See <Link to='/animal'>animals</Link> <Link to='/gallery'>images</Link> <Link to='/video2'>videos</Link></button>
    </div>


    <div className='sq2'>
    <div className='gav'></div>
    </div>
    <div className='fk2'>
    <p>Gavi is one of the most pristine eco-tourist spots that is well preserved and untainted by modern civilization 
    and is among the most beautiful forest places to visit in Kerala. This natural beauty is located on the outskirts of Pathanamthitta.</p>
    <Link to='/gavi'>Read More</Link>
    </div>
    
     
     <div className='sq3'>
     <div className='mun'></div>
     </div>
     <div className='fk3'>
     <p>Munnar forest ranges located amidst the hill folds of 
     Western Ghats is one of the dense and largest forest places in Kerala. 
     It is home to Eravikulam National Park which is Kerala’s first National Park. 
     It was established to protect the rare species of Nilgiri Tahr and Neelakurinji. 
     This forest range is rich with eco-diversity of evergreen and deciduous forests, grasslands, hills, medicinal and shrublands.  
     This destination is a unique blend of picturesque beauty, a diverse eco-system, and rare species of flora and fauna. </p>
     <button>See <Link to='/animal'>animals</Link> <Link to='/gallery'>images</Link> <Link to='/video'>videos</Link></button>
     </div>
    </div>
    </div>

  )
}
