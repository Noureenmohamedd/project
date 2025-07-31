import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>

   <footer className="text-white text-center py-5 " style={{
   backgroundColor:"#3a4a61ff" , 
   }}>
  <div className="container">
    <div className="row">
     
      <div className="col-md-4 mb-3">
        <h4 className="text-uppercase mb-3 fw-bold">Location</h4>
        <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
      </div>


      <div className="col-md-4 mb-3">
        <h4 className="text-uppercase mb-3 fw-bold">Around the Web</h4>
        <div className="d-flex justify-content-center gap-3">
          <Link className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-facebook-f"></i></Link>
          <Link className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-twitter"></i></Link>
          <Link className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-linkedin-in"></i></Link>
          <Link className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-dribbble"></i></Link>
        </div>
      </div>


      <div className="col-md-4 mb-3">
        <h4 className="text-uppercase mb-3 fw-bold">About Freelancer</h4>
        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
       </div>    
     

    </div>
  </div>
</footer>


   
   
   
   </>
  )
}

export default Footer