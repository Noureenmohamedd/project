import React from 'react'
import { Link ,NavLink } from 'react-router-dom'

function Navbar() {
  return (
  <>
      
      <nav  className="navbar navbar-expand-lg py-4 "  style={{ backgroundColor:"#3a4a61ff" }}>
  <div className="container-fluid ">
    <Link   className="navbar-brand  text-white fw-bold fs-1 " to=""  style={{ marginLeft: "200px" }}>Start Framework </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>



    <div className="collapse navbar-collapse   " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center" style={{ marginRight: "200px" }}>

        <li className="nav-item"  >
          <NavLink className="nav-NavLink" aria-current="page" to="/about" >ABOUT</NavLink>
        </li>
      
       <li className="nav-item">
          <NavLink className="nav-NavLink "  aria-current="page" to="/portfolio" >PORTFOLIO</NavLink>
        </li>
      
       <li className="nav-item">
          <NavLink className="nav-NavLink " aria-current="page" to="/contact" >CONTACT</NavLink>
        </li>
      
        
       
      </ul>
     
    </div>
  </div>
</nav>

  </>
  )
}

export default Navbar