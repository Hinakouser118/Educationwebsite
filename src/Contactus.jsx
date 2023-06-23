import React from 'react'

export default function Contactus() {
  return (
    <>
      <section className="section-padding bg-gray">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-7 order-1 order-lg-0">
        <div className="mb-5">
          <h2 className="text-secondary font-weight-bold mb-2">Send a Message</h2>
          <p>
            Your email address will not be published. <br /> Required fields are
            marked.
          </p>
        </div>
        <form action="#">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-30">
                <label for="name">Name*</label>
                <input
                  type="text"
                  className="form-control rounded-sm"
                  id="name"
                  placeholder="Jack Barker"
                  fdprocessedid="01yzc"
                />
              </div>
            </div>
            <br/>
            <div className="col-md-6">
              <div className="mb-30">
                <label for="email">Email*</label>
                <input
                  type="email"
                  className="form-control rounded-sm"
                  id="emailL"
                  placeholder="jack@email.com"
                  fdprocessedid="z06zai"
                />
              </div>
            </div>
            <br/>
            <div className="col-md-12">
              <div className="mb-30">
                <label for="sub">Subject</label>
                <input
                  type="text"
                  className="form-control rounded-sm"
                  id="sub"
                  placeholder="I want to know about course."
                  fdprocessedid="v9sxth"
                />
              </div>
            </div>
            <br/>
            <div className="col-md-12">
              <div className="mb-30">
                <label for="message">Message</label>
                <textarea
                  className="form-control rounded-sm"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <br/>
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-primary rounded-sm"
                fdprocessedid="7lj40d"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-xl-4 col-lg-5 mb-5 mb-lg-0 order-0 order-lg-1">
        <div className="mb-5">
          <h2 className="text-secondary font-weight-bold mb-2">Contact Info</h2>
          <p>
            Welcome to our Website. <br /> We are glad to have you around.
          </p>
        </div>
        <div className="shadow-sm p-20 mt-4 rounded-sm bg-white d-block d-sm-flex align-items-center">
          <i className="fas fa-phone fa-2x text-primary"></i>
          <div className="ml-sm-4 mt-3 mt-sm-0">
            <h4 className="text-secondary font-weight-600 mb-1">Contact Details</h4>
            <p>
              Phone:{" "}
              <a href="tel:+7800123452" className="text-dark">
                +780 123 452
              </a>
            </p>
            <p>
              Mail:{" "}
              <a href="mailto:contact@eduskill.com" className="text-dark">
                contact@eduskill.com
              </a>
            </p>
          </div>
        </div>
        <div className="shadow-sm p-20 mt-4 rounded-sm bg-white d-block d-sm-flex align-items-center">
          <i className="fas fa-map-marked-alt fa-2x text-primary"></i>
          <div className="ml-sm-4 mt-3 mt-sm-0">
            <h4 className="text-secondary font-weight-600 mb-1">Location</h4>
            <p>PO Box 97845 Baker st. 567, Los Angeles, California, US.</p>
          </div>
        </div>
        <div className="shadow-sm p-20 mt-4 rounded-sm bg-white d-block d-sm-flex align-items-center">
          <i className="fas fa-user-clock fa-2x text-primary"></i>
          <div className="ml-sm-4 mt-3 mt-sm-0">
            <h4 className="text-secondary font-weight-600 mb-1">Opening Hours</h4>
            <p>Monday-Friday</p>
            <p>10:30a.m-7:00p.m</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="footer-bottom py-3 border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 text-center text-lg-left mb-3 mb-lg-0">
              © Copyright All Review <span className="text-primary">Techo</span>
              Skills
            </div>
            <div className="col-lg-3 text-center text-lg-right">
              <ul className="list-unstyled list-inline font-weight-500">
                <li className="list-inline-item">
                  <a
                    className="p-2 d-block text-link initiate-scripts"
                    href="#/home-one"
                  >
                    Privacy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="p-2 d-block text-link initiate-scripts"
                    href="#/home-one"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

