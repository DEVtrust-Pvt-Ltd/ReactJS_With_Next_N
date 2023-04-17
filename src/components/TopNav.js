import React from 'react'


const TopNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" id="header">
        <div className="container" style={{maxWidth:'1330px'}}> 
          <a className="d-lg-none" href="index.html"> 
            <img src="/static/images/logo.png" className="logo" alt="Logo" /> 
          </a>
          <ul className="mb-left-nav d-flex align-items-center d-lg-none">
            <li className="nav-item">
              <div className="search-icon"> <a data-bs-toggle="collapse" href="#mbsearch" role="button" aria-expanded="false" aria-controls="search">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.75 22.75L16.25 16.25M18.4167 10.8333C18.4167 15.0215 15.0215 18.4167 10.8333 18.4167C6.64517 18.4167 3.25 15.0215 3.25 10.8333C3.25 6.64517 6.64517 3.25 10.8333 3.25C15.0215 3.25 18.4167 6.64517 18.4167 10.8333Z" stroke="#25394F" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </a> </div>
            </li>
            <li className="nav-item">
              <button type="submit" className="btn btn-primary header_login_btn">Enroll Now</button>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right collapsed" id="toggleBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span className="close">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0235 20L32.2774 7.77734C32.4493 7.57422 32.3048 7.26562 32.0391 7.26562H28.9219C28.7384 7.26562 28.5626 7.34766 28.4415 7.48828L19.9844 17.5703L11.5274 7.48828C11.4102 7.34766 11.2344 7.26562 11.0469 7.26562H7.92976C7.66413 7.26562 7.5196 7.57422 7.69148 7.77734L17.9454 20L7.69148 32.2227C7.65297 32.2679 7.62827 32.3233 7.62031 32.3822C7.61234 32.4411 7.62144 32.501 7.64653 32.5549C7.67162 32.6088 7.71164 32.6543 7.76184 32.6862C7.81205 32.718 7.87032 32.7347 7.92976 32.7344H11.0469C11.2305 32.7344 11.4063 32.6523 11.5274 32.5117L19.9844 22.4297L28.4415 32.5117C28.5587 32.6523 28.7344 32.7344 28.9219 32.7344H32.0391C32.3048 32.7344 32.4493 32.4258 32.2774 32.2227L22.0235 20Z" fill="#F72585"/>
          </svg>
          </span> <span className="navbar-toggler-icon"></span> </button>
          <a className="d-none d-lg-block" href="index.html"> <img src="/static/images/logo.png" className="logo" alt="Logo" /> </a>
          <div className="collapse navbar-collapse nav_body w-100" id="navbarCollapse">
            <ul className="navbar-nav nav_block ">
              <li className="nav-item dropdown z-index-9">
                <a href="#"><img src="" /></a> 
              </li>
              <li className="nav-item dropdown z-index-9">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><span>Home</span>
                </a> 
              </li>
              <li className="nav-item dropdown z-index-9"> 
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><span>About Us</span>
                </a> 
              </li>
              <li className="nav-item dropdown z-index-9"> <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><span>Services</span></a> 
              </li>
              <li className="nav-item dropdown z-index-9"> <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><span> Contact Us</span></a> 
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse  d-none d-lg-block navbar-search">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <button type="submit" className="btn btn-primary header_login_btn">Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopNav
