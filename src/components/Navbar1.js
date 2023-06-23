import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar1() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Techo Online Tutor</Link>
  <form className="d-flex">
  <Link className="btn btn-primary mx-2" to="/Forms">
                 Login
                </Link>
                <Link className="btn btn-primary mx-2" to="#">
                 Logout
                </Link>

    </form>
  </div>
</nav>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                     <li>
                    <Link className="dropdown-item" to="/welcomepage">
                      Welcomepage
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Onlinecource">
                      Online Course
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/About1">
                      About 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/About2">
                      About 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Course">
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/Contactus">
                  ContactUs
                </Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
 
    </>
  )
}
