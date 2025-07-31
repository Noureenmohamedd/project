import React from 'react'
import img1 from './../../assets/poert1.png'
import img2 from './../../assets/poert2.png'
import img3 from './../../assets/poert3.png'

function Portfolio() {
  return (
    <>
     <section className="contact py-5 text-center" id="contact">
    <div className="container"> 
    <h2 className="text-uppercase fw-bold " style={{ color:"#364356ff" }}>Portfolio Section</h2>

    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="line fw-bold " style={{width:'80px' , height:'4.5px ' , backgroundColor:'#3a4a61ff'}}></div>
      <i className="fa-solid fa-star mx-3 fw-bold " style ={{ color:'#3a4a61ff'}}></i>
      <div className="line fw-bold" style={{width:'80px', height:'4.5px' , backgroundColor:'#3a4a61ff'}}></div>
    </div>


   

      <div className="row g-4">
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img1} alt="portfolio 1" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img2} alt="portfolio 2" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img3} alt="portfolio 3" className="w-100 rounded" />
            </div>
          </div>


           <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img1} alt="portfolio 1" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img2} alt="portfolio 2" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img3} alt="portfolio 3" className="w-100 rounded" />
            </div>
          </div>

           <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img1} alt="portfolio 1" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img2} alt="portfolio 2" className="w-100 rounded" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-item">
              <img src={img3} alt="portfolio 3" className="w-100 rounded" />
            </div>
          </div>
        </div>

        


   
   </div>
</section>
    </>
  )
}

export default Portfolio