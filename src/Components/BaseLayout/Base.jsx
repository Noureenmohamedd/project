import React from 'react'
  import myImage from './../../assets/welcome.png'

function Base() {
  return (
    <>
    <section className="vh-100 d-flex justify-content-center align-items-center text-white text-center" style={{ backgroundColor: '#1abc9c' }}>
  <div>
   


    <img src={myImage} alt="My Image" 
      className="mb-4"
      style={{ width: '250px' }}
    />
    <h1 className="text-uppercase fw-bold">Start Framework</h1>

    <div className="d-flex justify-content-center align-items-center my-3">
      <div className="line bg-white" style={{ width: '80px', height: '4.5px' }}></div>
      <i className="fa-solid fa-star mx-3"></i>
      <div className="line bg-white" style={{ width: '80px', height: '4.5px' }}></div>
    </div>

    <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</section>

    </>
  )
}

export default Base;