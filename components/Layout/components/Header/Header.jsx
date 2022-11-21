import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
export default function Header() {
  return (
    <> 
{/*preloader start*/}
<div id="ht-preloader">
  <div className="clear-loader d-flex align-items-center justify-content-center">
    <div className="loader">
     <span className="plus"></span>
    <span className="plus"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    </div>
  </div>
</div>
{/*preloader end*/}


{/*header start*/}
<header id="site-header" className="header">
  <div className="header-top light-bg">
    <div className="container-fluid px-lg-8">
      <div className="row">
        <div className="col d-flex align-items-center justify-content-between">
          <div className="topbar-link d-flex align-items-center text-black">
            <div className="d-none d-sm-flex align-items-center me-3">
              <div> <i className="las la-phone"></i>
              </div>
              <div>Emergency Line: <a className="text-black" href="tel:+912345678900"> +91-234-567-8900</a>
              </div>
            </div>
            <div className="d-none d-md-flex align-items-center me-3">
              <div> <i className="las la-map-marker"></i>
              </div>
              <div>
                <div>Location: Country USA</div>
              </div>
            </div>
            <div className="d-none d-lg-flex align-items-center">
              <div> <i className="las la-business-time"></i>
              </div>
              <div>
                <div>Mon-Sat: 9.30am To 7.00pm</div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center"> <a className="btn btn-white btn-sm py-3" href="#"><span>Login</span></a>
            <div className="social-icons d-none d-lg-inline-block ms-3">
              <ul className="list-inline">
                <li><a href="#"><i className="lab la-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="lab la-twitter"></i></a>
                </li>
                <li><a href="#"><i className="lab la-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
            <div className="language-selection ms-3">
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">English</a>
                  </li>
                  <li><a className="dropdown-item" href="#">Arabic</a>
                  </li>
                  <li><a className="dropdown-item" href="#">French</a>
                  </li>
                  <li><a className="dropdown-item" href="#">Italian</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="header-wrap">
    <div className="container-fluid px-lg-8">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg">
            <a href="#">
              <img   id="logo-img" className="img-fluid" src="images/logo-biogx.png" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto  position-relative">
                
                <li className="nav-item dropdown"> <a className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
                  <ul className="dropdown-menu">
                    <li><a href="index.html">Homepage One</a>
                    </li>
                     
                  </ul>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">About Us</a>
                      <ul className="dropdown-menu">
                        <li><a href="about-us.html">About Us 1</a>
                        </li>
                        <li><a href="about-us-2.html">About Us 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Team</a>
                      <ul className="dropdown-menu">
                        <li><a href="team.html">Our Team</a>
                        </li>
                        <li><a href="team-single.html">Team Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Contact Us</a>
                      <ul className="dropdown-menu">
                        <li><Link href="contact">Contact</Link>
                        </li>
                        <li><Link href="#">Distributors</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Element</a>
                      <ul className="dropdown-menu">
                        <li><a href="shortcode-about.html">About</a>
                        </li>
                        <li> <a href="shortcode-counter.html">Counter</a>
                        </li>
                        <li> <a href="shortcode-feature.html">Feature Box</a>
                        </li>
                        <li><a href="shortcode-pricing.html">Pricing Table</a>
                        </li>
                        <li> <a href="shortcode-progress-bar.html">Progress Bar</a>
                        </li>
                        <li> <a href="shortcode-services.html">Services</a>
                        </li>
                        <li> <a href="shortcode-team.html">Team</a>
                        </li>
                        <li> <a href="shortcode-testimonial.html">Testimonial</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Utilities</a>
                      <ul className="dropdown-menu">
                        <li><a href="faq.html">Faq</a>
                        </li>
                        <li><a href="pricing.html">Pricing</a>
                        </li>
                        <li> <a href="login.html">Login</a>
                        </li>
                        <li><a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li><a href="error-404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Education Center</a>
                  <ul className="dropdown-menu">
                    <li><a href="product-grid.html">Product Grid</a>
                    </li>
                    <li><a href="product-list.html">Product List</a>
                    </li>
                    <li><a href="product-single.html">Product Single</a>
                    </li>
                    <li><a href="product-cart.html">Product Cart</a>
                    </li>
                    <li><a href="product-checkout.html">Product Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Newsroom</a>
                  <ul className="dropdown-menu">
                    <li><a href="pathologycam-testing.html">Pathologycam Testing</a>
                    </li>
                    <li><a href="biochemistry-solution.html">Biochemistry Solution</a>
                    </li>
                    <li><a href="chemical-research.html">Chemical Research</a>
                    </li>
                    <li><a href="pharmaceutical-research.html">Pharmaceutical Research</a>
                    </li>
                    <li><a href="diabetes-testing.html">Diabetes Testing</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                      Contact Us
                    </a>
                  <ul className="dropdown-menu">
                    <li><a href="research-style-1.html">Research Style One</a>
                    </li>
                    <li><a href="research-single.html">Research Single</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About Biogx</a>
                  <ul className="dropdown-menu">
                    <li><Link href="/about" >About Us</Link>
                    </li>
                    <li><a href="blog-right-sidebar.html">Locations</a>
                    </li>
                    <li><a href="blog-single.html">Leadership Team</a>
                    </li>
                    <li><a href="blog-single.html">Careers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="right-nav align-items-center d-flex justify-content-end">
              <div className="search-icon d-sm-inline-block d-none"> <a id="search" href="javascript:void(0)"><i className="las la-search"></i></a>
              </div>
               
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>
<div className="search-input" id="search-input-box">
  <div className="container ">
    <form className="d-flex justify-content-between search-inner">
      <input type="text" className="form-control" id="search-input" placeholder="Search Here" />
      <button type="submit" className="btn"></button> <span className="las la-times" id="close-search" title="Close Search"></span>
    </form>
  </div>
</div>
{/*header end*/}

    </>
  )
}
