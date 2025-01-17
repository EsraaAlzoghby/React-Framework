import React from 'react'

export default function About() {
  return (
    <div className='container-fluid bg-main py-5 about '>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="mt-5">
          <h2 className='fw-bolder fs-1 mb-3 text-center mt-5 text-black'>ABOUT COMPONENT</h2>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='line'></div>
            <i className='fa-solid fa-star text-black mx-3'></i>
            <div className='line'></div>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-4 about-text'>
            <div className="col-md-5">
              <p className='text-black'>
              Freelancer is a free Bootstrap theme. The download includes the complete source files, including HTML, CSS, and JavaScript. By integrating this theme with React, you can transform it into a modern, dynamic single-page application (SPA). 
              </p>
            </div>
            <div className="col-md-5">
              <p className='text-black'>
              Freelancer is a free Bootstrap theme. The download includes the complete source files, including HTML, CSS, and JavaScript. By integrating this theme with React, you can transform it into a modern, dynamic single-page application (SPA). 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
