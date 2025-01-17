import React from 'react'
import img from '../../assets/logo.jpg'
export default function Home() {
  return (
<>
<div className='container-fluid bg-main home'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10 mt-5">
          <figure className='text-center'>
            <img src={img} className=' mb-3 mt-5 rounded-circle ' alt="HomeImg" width={250} />
            <h1 className='fw-bolder text-black'>START FRAMEWORK</h1>
          </figure>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='line'></div>
            <i className='fa-solid fa-star text-black mx-3'></i>
            <div className='line'></div>
          </div>
          <div className='text-black text-center mt-3'>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </div>
</>
  )
}
