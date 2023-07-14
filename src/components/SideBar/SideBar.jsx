import React from 'react'
import logo from  '../../imgs/logo.png'
import  './SideBar.css'
import { useState } from 'react'
 
import { SideBarData } from '../../Data/Data'

import {  
   UilSignOutAlt,
} from "@iconscout/react-unicons";

 function SideBar() {
 
 const [selected , setselcted] =useState(0);   

return (
    <div className='Sidebar'>
      <div className="logo">
      <img src={logo} alt="" />
       <span> Sh<span>0</span>ps</span>
      </div>

{/* menu */}

<div className="menu">

{ SideBarData.map((item ,index )=> 
     (
<div className={selected===index?'MenuItems active' :  'MenuItems' }

      key={index}  
      onClick={()=>setselcted(index)}  
>
     
      
      <div>

      <item.icon/> 

      </div>
   <span>
        {item.heading}
    </span>

 
  </div>
     )
)}



<div className="MenuItems">
    <UilSignOutAlt/>
  </div>
  

  
</div>


    </div>
  )
}


export default SideBar
