import React from 'react'

function About() {
  return (
    <>

     
     <section className="py-5" style={{ backgroundColor: '#3ab19be7', color: 'white' ,height:'700px'}}>
  <div className="container text-center" style={{marginTop:'200px'}}>
    <h2 className="text-uppercase fw-bold mb-4" >About Component</h2>

    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="line bg-white fw-bold" style={{ width: '80px', height: '4.5px' }}></div>
      <i className="fa-solid fa-star mx-3 fw-bold "></i>
      <div className="line bg-white fw-bold" style={{ width: '80px', height: '4.5px' }}></div>
    </div>

    <div className="row">
      <div className="col-md-6">
        <p className="px-3">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete
          source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
          easy customization.
        </p>
      </div>
      <div className="col-md-6">
        <p className="px-3">
          You can create your own custom avatar for the masthead, change the icon in the dividers,
          and add your email address to the contact form to make it fully functional!
        </p>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default About