import React from 'react'

export default function Contact() {
  return (
    <div className='container py-5'>
      <div className="row justify-content-center gy-5 align-items-center mt-5">
        <div className="col-md-12">
          <h2 className='fw-bolder fs-1 text-center mb-0'>CONTACT SECTION</h2>
          <div className='d-flex align-items-center justify-content-center mt-3 mb-5'>
            <div className='line2'></div>
            <i className='fa-solid fa-star mx-3'></i>
            <div className='line2'></div>
          </div>
          <form>
            <div className="row">
              <div className='col-md-8 mx-auto'>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control bor" id="floatingInput" placeholder="Name"/>
                      <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control bor" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="number" class="form-control bor" id="floatingInput" placeholder="Phone Number"/>
                      <label for="floatingInput">Phone Number</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control bor" id="floatingInput" placeholder="Message"/>
                      <label for="floatingInput">Message</label>
                    </div>
              </div>
              <div className="col-md-8 mx-auto">
                <button type="button" className="border-0 rounded bg-green text-black py-2 px-5 fit-content d-block mt-4">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
