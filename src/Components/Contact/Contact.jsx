import React from 'react'

function Contact() {
  return (
    <>
    <section className="contact py-5 text-center scale-up " id="contact" style={{height:'710px' }}>
  <div className="container">
    <h2 className="text-uppercase fw-bold " style={{ color:"#364356ff" }}>Contact Section</h2>

    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="line fw-bold " style={{width:'80px' , height:'4.5px ' , backgroundColor:'#3a4a61ff'}}></div>
      <i className="fa-solid fa-star mx-3 fw-bold " style ={{ color:'#3a4a61ff'}}></i>
      <div className="line fw-bold" style={{width:'80px', height:'4.5px' , backgroundColor:'#3a4a61ff'}}></div>
    </div>

    <form className="w-50 mx-auto text-start scale-up" style={{ marginTop:'90px'}}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control border-0 border-bottom" id='name' />
        <label htmlFor="name">userName</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control border-0 border-bottom" id='age' />
        <label htmlFor="age">userAge</label>
      </div>

     <div className="form-floating mb-3">
        <input type="email" className="form-control border-0 border-bottom"id='email' />
        <label htmlFor="email">userEmail</label>
      </div>



       <div className="form-floating mb-3">
        <input type="password" className="form-control border-0 border-bottom" id='password'/>
        <label htmlFor="password">userPassword</label>
      </div>

    </form>

    <button  className="btn  text-white mt-3 "  style={{backgroundColor:'#3ab19be7'}}
     >Send Message </button>
  </div>
</section>

    
    </>
  )
}

export default Contact