import React from "react";
import { Link } from "react-router-dom";

export default function About1() {
  return (
    <>
      <div>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.gco9OAle8mxAfeOqDZJGnQHaEK&pid=Api&P=0&h=180"
          alt="..."
          width={2000}
          height={500}
        />
      </div>
      <br/>
      <section className="section-padding">
        <h1 style={{color:"black",textAlign:"center"}}>About Us</h1>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center">
              <img
                className="img-fluid rounded"
                src="https://s7template.com/react/eduskills/assets/images/about-img.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <h2 className="section-title mb-30">
                Who <span className="has-line">We Are</span>
              </h2>
              <p className="mb-3">
                Dispatched entreaties boisterous say why stimulated. Certain
                forbade pcture now prevent carried she sitting.
              </p>
              <p>
                Uneasy barton seeing remark happen hi has. Am possible offering
                contempt mr distance stronger an. Attachment excellence
                announcing or reasonable am on if indulgence. Exeter talked in
                agreed spirit no he unable do. Betrayed shutters in vicinity it
                unpacked in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="section-title mb-30">
                Our <span className="has-line">Vision</span>
              </h2>
              <p className="mb-3">
                Weddings and any opinions suitable smallest nay. My he houses or
                months settle remove ladies appear. Engrossed suffering
                supposing he recommend.
              </p>
              <p>
                Uneasy barton seeing remark happen hi has. Am possible offering
                contempt mr distance stronger an. Attachment excellence
                announcing or reasonable am on if indulgence. Exeter talked in
                agreed spirit no he unable do. Betrayed shutters in vicinity it
                unpacked in.
              </p>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 text-center">
              <img
                width="49%"
                src="https://s7template.com/react/eduskills/assets/images/our-vision-01.jpg"
                alt=""
              />
              <img
                width="49%"
                src="https://s7template.com/react/eduskills/assets/images/our-vision-02.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                You are Always <br /> Welcome to{" "}
                <span className="has-line">Our Place</span>
              </h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <Link
                to="#!"
                className="map-image"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s7template.com/react/eduskills/assets/images/map-img.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <br />
      <footer>
       <div className="py-3">
            <div className="row align-items-center">
              <div className="col-lg-9 text-center text-lg-left mb-4 mb-lg-0">
                <ul className="list-unstyled list-inline font-weight-500">
                  <li className="list-inline-item">
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="/Home"
                    >
                      HomeTutor
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="/onlinecource"
                    >
                      Onlineclass
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="/About1"
                    >
                      About
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="/About2"
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="/contact"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
             </div>
             </div>
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
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="#"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="p-2 d-block text-link initiate-scripts"
                      to="/contact"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Link to="#top" className="scroll-to-top show">
        <span className="fas fa-chevron-up"></span>
      </Link>
    </>
  );
}
