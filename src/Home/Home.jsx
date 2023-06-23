import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => {
      setHover(true);
    };
    const handleMouseLeave = () => {
      setHover(false);
    };
    const [hover1, setHover1] = useState(false);
    const handle1MouseEnter = () => {
      setHover1(true);
    };
    const handle1MouseLeave = () => {
      setHover1(false);
    };
    const [hover2, setHover2] = useState(false);
    const handle2MouseEnter = () => {
      setHover2(true);
    };
    const handle2MouseLeave = () => {
      setHover2(false);
    };
  
    const [data, setData] = useState(false);
    const onMouseEnter = () => {
      setData(true);
    };
  
    const onMouseLeave = () => {
      setData(false);
    };
    const [set, setdata] = useState(false);
    const onMouseclick = () => {
      setdata(true);
    };
  
    const onMouseout = () => {
      setdata(false);
    };
    const [name, setName] = useState(false);
    const mouseoverIn = () => {
      setName(true);
    };
    const mouseoverOut = () => {
      setName(false);
    };
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
 <div className="carousel-inner">
    <div className="carousel-item active">
     <img
                src="https://tse1.mm.bing.net/th?id=OIP.NTDyl_PeW_uxXU6csqZU8AHaE8&pid=Api&P=0&h=180"
                alt="...."
                width={1900}
                height={500}
              />
                        <div className="carousel-caption d-none d-md-block" >
        <h5 style={{color:"Red",size:"25px"}}>Find the perfect education for Online and Offline</h5>
        <p style={{size:"15px"}}>
Education now more easy then before..!
        </p>
      </div>
    </div>
    <div className="carousel-item ">
    <img
                src="https://tse3.mm.bing.net/th?id=OIP.Bv5iuyNCt29spCtsnIAp1gHaES&pid=Api&P=0&h=180"
                alt="...."
                width={1900}
                height={500}
              />
                <div className="carousel-caption d-none d-md-block" >
        <h5 style={{color:"black",size:"25px"}}>Online Tutoring</h5>
        
      </div>
    </div>
    <div className="carousel-item ">
    <img
                src="https://tse4.mm.bing.net/th?id=OIP.MOIoN95yZfcuofEzmgQDCQHaEU&pid=Api&P=0&h=180"
                alt="...."
                width={1900}
                height={500}
              />
                        <div className="carousel-caption d-none d-md-block" >
        <h5 style={{color:"black",size:"25px"}}>Group Tutoring</h5>
        
      </div>
     </div>
     <div className="carousel-item ">
    <img
                src="https://tse1.mm.bing.net/th?id=OIP.wOfkZX_2LzpOuSBLPJlHXQHaDk&pid=Api&P=0&h=180"
                alt="...."
                width={1900}
                height={500}
              />
                        <div className="carousel-caption d-none d-md-block" >
        <h5 style={{color:"black",size:"25px"}}>Package Tutoring</h5>
        
      </div>
     </div>
     <div className="carousel-item ">
    <img
                src="https://tse3.mm.bing.net/th?id=OIP.Otj8fvxBAXfSJRnML5brDgHaEB&pid=Api&P=0&h=180"
                alt="...."
                width={1900}
                height={500}
              />
                        <div className="carousel-caption d-none d-md-block" >
        <h5 style={{color:"black",size:"25px"}}>Home Tutoring</h5>
        
      </div>
     </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
      <div classNameName="container" style={{ textAlign: "center" }}>
      <div className="col-lg-12 text-center"><h2 className="section-title">What <span className="has-line">We Offer</span></h2></div>
        <div className="container my-4" id="demo">
          <div className="row">
            <div className="col-md-4 active">
              <div
                className="card h-100 "
                style={{
                  backgroundColor: data ? "black" : "red",
                  color: data ? "white" : "black",
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://s7template.com/react/eduskills/assets/images/we-offer/01.png"
                      alt=""
                    />
                  </h5>
                  <h2 className="card-subtitle mb-2 text-body-secondary">
                    {" "}
                    Home Tutoring
                  </h2>
                  <p className="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card h-100"
                style={{
                  backgroundColor: set ? "black" : "white",
                  color: set ? "white" : "black",
                }}
                onMouseEnter={onMouseclick}
                onMouseLeave={onMouseout}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://s7template.com/react/eduskills/assets/images/we-offer/02.png"
                      alt=".."
                    />
                  </h5>
                  <h2 className="card-subtitle mb-2 text-body-secondary">
                    Online Tutoring
                  </h2>
                  <p className="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card h-100"
                style={{
                  backgroundColor: hover ? "black" : "red",
                  color: hover ? "white" : "black",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://s7template.com/react/eduskills/assets/images/we-offer/03.png"
                      alt=".."
                    />
                  </h5>
                  <h2 className="card-subtitle mb-2 text-body-secondary ">
                    Group Tutoring
                  </h2>
                  <p className="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-4">
              <div
                className="card h-100"
                style={{
                  backgroundColor: name ? "black" : "white",
                  color: name ? "white" : "black",
                }}
                onMouseEnter={mouseoverIn}
                onMouseLeave={mouseoverOut}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://s7template.com/react/eduskills/assets/images/we-offer/04.png"
                      alt=".."
                    />
                  </h5>
                  <h2 className="card-subtitle mb-2 text-body-secondary">
                    Package Tutoring
                  </h2>
                  <p className="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div
                className="card h-100"
                style={{
                  backgroundColor: hover1 ? "black" : "red",
                  color: hover1 ? "white" : "black",
                }}
                onMouseEnter={handle1MouseEnter}
                onMouseLeave={handle1MouseLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="	https://s7template.com/react/eduskills/assets/images/we-offer/05.png"
                      alt=".."
                    />
                  </h5>
                  <h2 className="card-subtitle mb-2 text-body-secondary">
                    Home Tutoring
                  </h2>
                  <p classNameName="mt-20">
                    {" "}
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div
                className="card h-100"
                style={{
                  backgroundColor: hover2 ? "black" : "white",
                  color: hover2 ? "white" : "black",
                }}
                onMouseEnter={handle2MouseEnter}
                onMouseLeave={handle2MouseLeave}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://s7template.com/react/eduskills/assets/images/we-offer/06.png"
                      alt=".."
                    />
                  </h5>
                  <h2 className="card-subtitle mb-2 text-body-secondary">
                    Offline Tutoring
                  </h2>
                  <p className="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section classNameName="section-padding pt-0 bg-light has-white-half">
        <div classNameName="container">
          <div classNameName="row justify-content-center">
            <div classNameName="col-lg-9">
              <div classNameName="text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=" https://youtu.be/c5Zag_QVRVs"
                  classNameName="d-block has-overlay has-video-popup tansform-none"
                >
                  <img
                    classNameName="img-fluid rounded"
                    src="https://tse2.mm.bing.net/th?id=OIP.X52MxFnfHu-qEWyNc9vZjAHaDm&pid=Api&P=0&h=180"
                    alt=""
                  />
                  <img
                    classNameName="play-btn"
                    src="https://s7template.com/react/eduskills/assets/images/video-btn.png"
                    alt=""
                  />
                </a>
                <h2 classNameName="section-title mt-50 mb-25">
                  What Some Awesome Parent Says{" "}
                  <span classNameName="has-line">About Us</span>
                </h2>
                <p classNameName="mb-40">
                  Weddings and any opinions suitable smallest nay. My he houses
                  or months settle remove <br /> ladies appear. Engrossed
                  suffering supposing he recommend.
                </p>
                <a
                  classNameName="btn btn-lg btn-secondary rounded-pill"
                  href="#/about-one"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <br />
        <section classNameName="section-padding">
          <div classNameName="container">
            <div classNameName="row justify-content-center">
              <div classNameName="col-lg-8 text-center">
                <h2 classNameName="section-title">
                  How <span classNameName="has-line">It Works</span> <br /> For
                  Students/Parents?
                </h2>
              </div>
            </div>
            <div classNameName="row justify-content-center">
              <div classNameName="col-lg-4 col-sm-6 mt-40">
                <div classNameName="how-it-works-item text-center shadow">
                  {" "}
                  <img
                    src="	https://s7template.com/react/eduskills/assets/images/how-it-works/01.png"
                    alt=""
                  />
                  <h3 classNameName="mt-20 font-weight-600 text-secondary">
                    Tell Us Where You <br /> Need Help
                  </h3>
                  <p classNameName="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
              <div classNameName="col-lg-4 col-sm-6 mt-40">
                <div classNameName="how-it-works-item text-center shadow">
                  <img
                    src="https://s7template.com/react/eduskills/assets/images/how-it-works/02.png"
                    alt=""
                  />
                  <h3 classNameName="mt-20 font-weight-600 text-secondary">
                    Choose The Tutor <br /> You Want
                  </h3>
                  <p classNameName="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
              <div classNameName="col-lg-4 col-sm-6 mt-40">
                <div classNameName="how-it-works-item text-center shadow">
                  <img
                    src="https://s7template.com/react/eduskills/assets/images/how-it-works/03.png"
                    alt=""
                  />
                  <h3 classNameName="mt-20 font-weight-600 text-secondary">
                    Book A Tutor <br /> Start Lesson
                  </h3>
                  <p classNameName="mt-20">
                    His exquisite sincerity education shameless ten earnestly
                    breakfast. Scale began quiet up short wrong in Personal
                    attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section classNameName="section-padding pt-0">
          <div classNameName="container">
            <div classNameName="row align-items-center">
              <div classNameName="col-lg-7 text-center">
                <img
                  classNameName="img-fluid"
                  src="https://tse2.mm.bing.net/th?id=OIP.YGyllfJF6SZVUZpIOm9ptgHaC9&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
              <div classNameName="col-lg-5 mt-5 mt-lg-0">
                <h2 classNameName="section-title mb-30">
                  Request A className{" "}
                  <span classNameName="has-line">for FREE Trail</span>
                </h2>
                <p classNameName="mb-4">
                  Weddings and any opinions suitable smallest nay. My he houses
                  or months settle remove ladies appear. Engrossed suffering
                  supposing he recommend. Commanded no of depending extremity
                  recommend attention tolerably.
                </p>
                <a
                  classNameName="btn btn-lg btn-secondary rounded-pill initiate-scripts"
                  href="#/home-one"
                >
                  Search Tutor
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <div classNameName="container" style={{ backgroundColor: "grey" }}>
        <div classNameName="row justify-content-center">
          <div classNameName="col-lg-8 text-center">
            <h2 classNameName="container" style={{ color: "black" }}>
              Find <span classNameName="has-line">Online Tutors</span>
              <br /> In Any Subject
            </h2>
          </div>
        </div>
        <div classNameName="row">
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.E769XUeZHFBeRjEnmhG4HgHaFS&pid=Api&P=0&h=180"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">Math</h3>
            </div>
          </div>
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://s7template.com/react/eduskills/assets/images/subject/02.png"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">English</h3>
            </div>
          </div>
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.BOafAA8YrPDy-qQgojOFIgHaFj&pid=Api&P=0&h=180"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">Kannada</h3>
            </div>
          </div>
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.cwnPtICHZCmKYmPF1yaPOwAAAA&pid=Api&P=0&h=180"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">Social</h3>
            </div>
          </div>
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://s7template.com/react/eduskills/assets/images/subject/05.png"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">Science</h3>
            </div>
          </div>
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://s7template.com/react/eduskills/assets/images/subject/06.png"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">Computer Science</h3>
            </div>
          </div>
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.7DndHmUDg-LzL9GfbeVTXwHaEF&pid=Api&P=0&h=180"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">Hindi</h3>
            </div>
          </div>
          <div classNameName="col-lg-3 col-md-4 col-6">
            <div classNameName="mt-40 text-center hover-grayscale">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.BgWmZesyek43Jrq5LglhWwAAAA&pid=Api&P=0&h=180"
                alt=""
              />
              <h3 classNameName="mt-15 font-weight-600">General knowledge</h3>
            </div>
          </div>
          <div classNameName="col-lg-12 text-center mt-80">
            <Link
              classNameName="btn btn-lg  btn-dark rounded-pill initiate-scripts"
              to="/onlineCource"
            >
              See all Subjects
            </Link>
          </div>
        </div>
      </div>
      <br/>
      
      
      <div className="footer-bottom py-3 border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 text-center text-lg-left mb-3 mb-lg-0">
              © Copyright All Review <span className="text-primary">Techo</span>Skills
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
