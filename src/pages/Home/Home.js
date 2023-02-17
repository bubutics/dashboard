import React from 'react'
import './Home.css'

const home = () => {
  return (
    <div>
      
      <div class="sidebar">
       
       <h2>MEULABS</h2>
       <a href="/Orders">
           Order 
       </a>
       <a href="productpop">
           Products 
       </a>
       <a href="/">
           Suppliers 
       </a>
       <a href="/my-app/src/pages/profile/profile.js">
           Profile
       </a>
       <a href="/dashboard/logout.html">
           Logout?   
       </a>
      
       </div>
       <div class="pagecontent">
           <div class="pagetext">
           <h2>hello!</h2>
           </div>
       </div>
    </div>
  )
}

export default home
