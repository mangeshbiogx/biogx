import React from 'react'

export default function Footer() {
  return  <>  
<footer className="footer biogx-dark-bg">
  <div className="primary-footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-12 biogx-dark-bg p-4 p-md-6">
          <a className="footer-logo" href="index.html">
            <img id="footer-logo" className="img-fluid" src={`${process.env.IMGPATH}logo-biogx.png`} alt=""/>
          </a>
          <p className="my-4 text-white">BioGX, Inc. is a global molecular diagnostics company that has been focused on the health and safety of communities all over the world</p>
          <div className="social-icons social-colored footer-social">
            <ul className="list-inline">
              <li><a href="#"><i className="lab la-facebook-f"></i></a>
              </li>
              <li><a href="#"><i className="lab la-twitter"></i></a>
              </li>
              <li><a href="#"><i className="lab la-instagram"></i></a>
              </li>
              <li><a href="#"><i className="lab la-dribbble"></i></a>
              </li>
              <li><a href="#"><i className="lab la-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8 col-12 p-4 p-md-6">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <h4 className="mb-4">Company</h4>
              <div className="footer-list">
                <ul className="list-unstyled">
                  <li><a href="about-us.html">About Us</a>
                  </li>
                  <li><a href="contact.html">Contact Us</a>
                  </li>
                  <li> <a href="privacy-policy.html">Careers</a>
                  </li>
                  <li> <a href="terms-and-conditions.html">Request quote</a>
                  </li>                 
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-6 mt-sm-0">
              <h4 className="mb-4">Resources</h4>
              <div className="footer-list">
                <ul className="list-unstyled">
                  <li><a href="pathologycam-testing.html">Press Releases</a>
                  </li>
                  <li><a href="biochemistry-solution.html">Blog</a>
                  </li>
                  <li><a href="chemical-research.html">Webinar</a>
                  </li>
                  <li><a href="pharmaceutical-research.html">How-to Videos</a>
                  </li>         
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-6 mt-md-0">
            <h4 className="mb-4">Product</h4>
              <div className="footer-list">
                <ul className="list-unstyled">
                  <li><a href="pathologycam-testing.html">Covid-19</a>
                  </li>
                  <li><a href="biochemistry-solution.html">Custom Solutions</a>
                  </li>
                  <li><a href="chemical-research.html">CE-IVD & LUO</a>
                  </li>
                  <li><a href="pharmaceutical-research.html">Food | Water | Pharma QC</a>
                  </li>             
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="copyright p-4 biogx-dark-bg mt-5 ms-md-n6">Copyright © 2022 All rights reserved | BioGX Made by <i className="lar la-heart text-biogx-light heartBeat2"></i>  <u><a href="https://www.biogx.com/">BioGX</a></u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<div className="scroll-top"><a className="smoothscroll" href="#top"><i className="las la-location-arrow"></i></a></div>
 </>
  
}
