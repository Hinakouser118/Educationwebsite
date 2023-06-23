import React from "react";
import { Link } from "react-router-dom";

export default function About2() {
  return (
    <>
      <section className="py-80 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title font-weight-bold mb-20">About Us</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 font-weight-600 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link className="text-primary initiate-scripts" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid rounded pr-lg-3"
                src="https://s7template.com/react/eduskills/assets/images/tms.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <h2 className="section-title mb-30">
                About Our <br />
                Tutor Management <br />
                System Online
              </h2>
              <p className="mb-4">
                Dispatched entreaties boisterous say why stimulated. Certain
                forbade pcture now prevent carried she get see sitting.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-star mr-2 text-primary"></i>Uneasy barton
                  seeing remark happen hi has.
                </li>
                <li className="mb-2">
                  <i className="fas fa-star mr-2 text-primary"></i>Am possible
                  offering contempt mr distance stronger an.
                </li>
                <li>
                  <i className="fas fa-star mr-2 text-primary"></i>Attachment
                  excellence announcing or reasonable.
                </li>
              </ul>
              <div className="media has-outline-primary align-items-center mt-35">
                <img
                  className="rounded-circle"
                  src="https://s7template.com/react/eduskills/assets/images/user-07.jpg"
                  alt=""
                />
                <div className="ml-3">
                  <h5 className="text-blue font-weight-600 mb-1">Pianoforall</h5>
                  <p>Released: 2/5/2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                Get Your Quality Skills Certificate Through Online Exam
              </h2>
              <p className="mt-3 mb-40">
                Dispatched entreaties boisterous say why stimulated. Certain
                forbade picture now prevent carried she get see sitting. Up
                twenty limits as months. Inhabit so perhaps of in to certain.
              </p>
              <Link
                className="btn btn-outline-primary initiate-scripts"
                to="/About1"
              >
                Get start now
              </Link>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="https://s7template.com/react/eduskills/assets/images/certificate.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <br/>
      <div classNameName="footer-bottom py-3 border-top">
          <div classNameName="container">
            <div classNameName="row align-items-center">
              <div classNameName="col-lg-9 text-center text-lg-left mb-3 mb-lg-0">
                © Copyright All Review <span classNameName="text-primary">Techo</span>
                Skills
              </div>
              <div classNameName="col-lg-3 text-center text-lg-right">
                <ul classNameName="list-unstyled list-inline font-weight-500">
                  <li classNameName="list-inline-item">
                    <Link
                      classNameName="p-2 d-block text-link initiate-scripts"
                      to="#"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li classNameName="list-inline-item">
                    <Link
                      classNameName="p-2 d-block text-link initiate-scripts"
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
    </>
  );
}
