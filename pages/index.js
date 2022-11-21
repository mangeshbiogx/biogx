import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from "react"
export default function Home() {
  useEffect(() => {
    
    bannerslider(),
    owlcarousel()
     
  })
  
  return (
     <>
   
  <section className="banner p-0 pos-r fullscreen-banner">
  <div className="banner-slider owl-carousel no-pb" data-dots="false" data-nav="true">
    <div className="item hero-overlay" data-bg-img="images/bg/01.jpg" data-overlay="6">
      <div className="align-center pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12">
              <h1 className="mb-4 text-black">Research & Verify <span className="text-theme">Laboratory</span> for Testing</h1>
              <p className="lead font-w-5 text-black">Labortech is modern laboratory services Delivering newer flows by their place website is the first impression.</p>
              <div className="btn-box mt-5">
                <a className="btn btn-theme" href="about-us.html"> <span>More About</span>
                </a>
                <a className="btn btn-dark" href="#"> <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item hero-overlay" data-bg-img="images/bg/02.jpg" data-overlay="6">
      <div className="align-center pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12">
              <h1 className="mb-4 text-black">Research & Verify <span className="text-theme">Laboratory</span> for Testing</h1>
              <p className="lead font-w-5 text-black">Labortech is modern laboratory services Delivering newer flows by their place website is the first impression.</p>
              <div className="btn-box mt-5">
                <a className="btn btn-theme" href="about-us.html"> <span>More About</span>
                </a>
                <a className="btn btn-dark" href="#"> <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
  {/*body content start*/}

<div className="page-content">

{/*feature start*/}

<section className="pb-0">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="featured-item style-1">
          <div className="featured-icon"> <i className="flaticon-laboratory-1"></i>
          </div>
          <div className="featured-title">
            <h5>High-End Latest Technology</h5>
          </div>
          <div className="featured-desc">
            <p>Our firm is expert to create an efficient user interface that.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 mt-sm-0">
        <div className="featured-item style-1 active">
          <div className="featured-icon"> <i className="flaticon-laboratory"></i>
          </div>
          <div className="featured-title">
            <h5>Medical laboratory Technician</h5>
          </div>
          <div className="featured-desc">
            <p>Our firm is expert to create an efficient user interface that.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
        <div className="featured-item style-1">
          <div className="featured-icon"> <i className="flaticon-biology-1"></i>
          </div>
          <div className="featured-title">
            <h5>Highest Quality Pathologycam Testing</h5>
          </div>
          <div className="featured-desc">
            <p>Our firm is expert to create an efficient user interface that.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
        <div className="featured-item style-1">
          <div className="featured-icon"> <i className="flaticon-help-call"></i>
          </div>
          <div className="featured-title">
            <h5>Emergency Help Available 24/7</h5>
          </div>
          <div className="featured-desc">
            <p>Our firm is expert to create an efficient user interface that.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*feature end*/}


{/*about start*/}

<section>
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-lg-5 col-12 order-lg-1">
        <img className="img-fluid" src="images/about/01.jpg" alt=""/>
      </div>
      <div className="col-lg-7 col-12 mt-6 mt-lg-0">
        <div className="row align-items-end">
          <div className="col-md-7">
            <div className="section-title">
              <h2 className="title">We Employ Latest Research Technology & Company</h2> 
              <p className="text-black font-w-5 mb-3">We’re here to care for you and your entire family doctor will general health!</p>
              <p>Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills.</p>
            </div>
            <a className="btn btn-theme" href="about-us.html"> <span>More About</span>
            </a>
          </div>
          <div className="col-md-5 mt-6 mt-md-0">
            <p className="mb-4">Our administration and support staff all have exceptional people skills around the world.</p>
            <img className="img-fluid" src="images/sign.png" alt=""/>
            <ul className="list-unstyled list-icon mt-4">
              <li className="mb-3"><i className="las la-check"></i> Home medicine review</li>
              <li className="mb-3"><i className="las la-check"></i> Highest Quality Results</li>
              <li><i className="las la-check"></i> We Ensure Safe Diagnosis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*about end*/}


{/*service start*/}

<section className="position-relative light-bg">
  <div className="container z-index-1">
    <div className="row justify-content-center text-center">
      <div className="col-lg-7 col-12">
        <div className="section-title mb-3">
          <h2 className="title mb-0">We Provide All Aspects Of Medical Practice For Your Whole Family!</h2> 
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="owl-carousel" data-items="3" data-md-items="2" data-sm-items="1" data-xs-items="1" data-margin="30">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/services/01.jpg" alt=""/>
                <div className="service-icon"> <i className="flaticon-biology-1"></i>
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title">
                  <h4>Biochemistry Solution</h4>
                </div>
                <p>We have put protocols to protect our patients and staff care.</p> <a className="link-btn" href="biochemistry-solution.html"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="service-item style-1 active">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/services/02.jpg" alt=""/>
                <div className="service-icon"> <i className="flaticon-research"></i>
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title">
                  <h4>Pharmaceutical Research</h4>
                </div>
                <p>We have put protocols to protect our patients and staff care.</p> <a className="link-btn" href="pharmaceutical-research.html"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/services/03.jpg" alt=""/>
                <div className="service-icon"> <i className="flaticon-test"></i>
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title">
                  <h4>Pathologycam Testing</h4>
                </div>
                <p>We have put protocols to protect our patients and staff care.</p> <a className="link-btn" href="pathologycam-testing.html"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/services/04.jpg" alt=""/>
                <div className="service-icon"> <i className="flaticon-research"></i>
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title">
                  <h4>Chemical Research</h4>
                </div>
                <p>We have put protocols to protect our patients and staff care.</p> <a className="link-btn" href="chemical-research.html"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shape-1 overflow-hidden bottom">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fillOpacity="1" d="M0,96L21.8,112C43.6,128,87,160,131,154.7C174.5,149,218,107,262,90.7C305.5,75,349,85,393,122.7C436.4,160,480,224,524,234.7C567.3,245,611,203,655,165.3C698.2,128,742,96,785,85.3C829.1,75,873,85,916,117.3C960,149,1004,203,1047,229.3C1090.9,256,1135,256,1178,234.7C1221.8,213,1265,171,1309,154.7C1352.7,139,1396,149,1418,154.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
    </svg>
  </div>
</section>

{/*service end*/}




{/*counter start 

<section className="p-0">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="white-bg p-5 z-index-1">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter d-flex">
                <div className="counter-icon me-3"> <i className="flaticon-medical-laboratory-1"></i>
                </div>
                <div className="counter-desc"> <span className="count-number text-black" data-to="24" data-speed="2000">24</span>
                  <h6>Our Equipments</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-5 mt-sm-0">
              <div className="counter d-flex">
                <div className="counter-icon me-3"> <i className="flaticon-heathcare-and-medical"></i>
                </div>
                <div className="counter-desc"> <span className="count-number text-black" data-to="272" data-speed="2000">272</span>
                  <h6>Field Expertise</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
              <div className="counter d-flex">
                <div className="counter-icon me-3"> <i className="flaticon-pharmacy"></i>
                </div>
                <div className="counter-desc"> <span className="count-number text-black" data-to="423" data-speed="2000">423</span>
                  <h6>Complete Cases</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
              <div className="counter d-flex">
                <div className="counter-icon me-3"> <i className="flaticon-award"></i>
                </div>
                <div className="counter-desc"> <span className="count-number text-black" data-to="576" data-speed="2000">576</span>
                  <h6>Awards Winning</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

counter end*/}


{/*multi-sec start*/}

<section className="p-0 mt-n6">
  <div className="container-fluid ps-0">
    <div className="row">
      <div className="col-lg-7 col-md-10 col-11">
        <div className="dark-bg p-lg-7 p-4 pb-10 custom-pt-1" data-bg-img="images/pattern/02.png">
          <div className="section-title ms-md-5">
            <h2 className="title">We’re Setting the New Standards in Laboratory & Research Professional.</h2> 
            <p className="lead text-light">We Provide All Aspects Of Medical Practice For Your Whole Family!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-8 pe-md-0">
        <div className="light-bg p-5 z-index-1 mt-n7">
          <div className="ht-progress-bar mb-4">
            <h4>Environmental Testing</h4>
            <div className="progress" data-value="85">
              <div className="progress-bar">
                <div className="progress-parcent"><span>85</span>%</div>
              </div>
            </div>
          </div>
          <div className="ht-progress-bar mb-4">
            <h4>Immune system</h4>
            <div className="progress" data-value="75">
              <div className="progress-bar">
                <div className="progress-parcent"><span>75</span>%</div>
              </div>
            </div>
          </div>
          <div className="ht-progress-bar mb-4">
            <h4>Advanced Microscopy</h4>
            <div className="progress" data-value="95">
              <div className="progress-bar">
                <div className="progress-parcent"><span>95</span>%</div>
              </div>
            </div>
          </div>
          <div className="ht-progress-bar">
            <h4>Management</h4>
            <div className="progress" data-value="80">
              <div className="progress-bar">
                <div className="progress-parcent"><span>80</span>%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-10 col-12 ms-auto ps-0">
        <div className="position-relative overflow-hidden img-border mt-n15 custom-mt-0">
          <img className="img-fluid w-100" src="images/about/02.jpg" alt=""/>
          <div className="video-btn video-btn-pos"> <a className="play-btn popup-youtube mr-3" href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"><i className="las la-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*multi-sec end*/}

{/*client start*/}

<section className="pb-0">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="owl-carousel no-pb" data-dots="false" data-items="6" data-md-items="4" data-sm-items="3" data-xs-items="2" data-margin="20" data-autoplay="true">
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/09.png" alt=""/>
            </div>
          </div>
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/10.png" alt=""/>
            </div>
          </div>
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/11.png" alt=""/>
            </div>
          </div>
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/12.png" alt=""/>
            </div>
          </div>
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/13.png" alt=""/>
            </div>
          </div>
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/14.png" alt=""/>
            </div>
          </div>
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/15.png" alt=""/>
            </div>
          </div>
          <div className="item">
            <div className="client-logo">
              <img className="img-fluid" src="images/client/16.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*client end*/}


{/*project start*/}

<section className="pb-0">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8">
        <div className="section-title">
          <h2 className="title">Weve Done A Lots, Lets Check Some<br/>Our Latest Research</h2> 
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="owl-carousel no-pb popup-gallery" data-dots="false" data-items="5" data-md-items="3" data-sm-items="2" data-xs-items="1" data-margin="10">
          <div className="item">
            <div className="cases-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src="images/project/01.jpg" alt=""/>
              <a className="popup-img" href="images/project/large/01.jpg"> <i className="las la-plus"></i>
              </a>
              <div className="cases-title"> <span>Pathology</span>
                <h4><a href="research-single.html">Personnel Competence</a></h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src="images/project/02.jpg" alt=""/>
              <a className="popup-img" href="images/project/large/02.jpg"> <i className="las la-plus"></i>
              </a>
              <div className="cases-title"> <span>Pathology</span>
                <h4><a href="research-single.html">Personnel Competence</a></h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src="images/project/03.jpg" alt=""/>
              <a className="popup-img" href="images/project/large/03.jpg"> <i className="las la-plus"></i>
              </a>
              <div className="cases-title"> <span>Pathology</span>
                <h4><a href="research-single.html">Personnel Competence</a></h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src="images/project/04.jpg" alt=""/>
              <a className="popup-img" href="images/project/large/04.jpg"> <i className="las la-plus"></i>
              </a>
              <div className="cases-title"> <span>Pathology</span>
                <h4><a href="research-single.html">Personnel Competence</a></h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src="images/project/05.jpg" alt=""/>
              <a className="popup-img" href="images/project/large/05.jpg"> <i className="las la-plus"></i>
              </a>
              <div className="cases-title"> <span>Pathology</span>
                <h4><a href="research-single.html">Personnel Competence</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*project end*/}


{/*call us start*/}

<section className="theme-bg py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <h3 className="text-light">Need a Help for Check-up? Call for an Emergency Laboratory Services</h3>
      </div>
      <div className="col-md-5 col-12 ms-auto mt-3 mt-lg-0">
        <div className="d-flex align-items-start justify-content-end">
          <div className="text-white text-end"> <span>Help Desk 24/7</span>
            <h3 className="font-w-4"><a className="text-decoration-underline text-white" href="tel:+(01)24665813917">(01)-246-6581-3917</a></h3>
          </div> <span className="white-bg d-inline-block p-2 ms-4"><i className="las la-phone ic-3x text-theme"></i></span>
        </div>
      </div>
    </div>
  </div>
</section>

{/*call us end*/}


{/*team start*/}

<section>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="accordion" id="accordion">
          <div className="accordion-item mb-4">
            <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Can we take a second opinion ?
      </button>
    </h2>
            <div id="collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
              <div className="accordion-body">Discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
            </div>
          </div>
          <div className="accordion-item mb-4">
            <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Is the treatment at Hospital is affordable ?
      </button>
    </h2>
            <div id="collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
              <div className="accordion-body">Discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
            </div>
          </div>
          <div className="accordion-item mb-4">
            <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        which is the same as saying through ?
      </button>
    </h2>
            <div id="collapseThree" className="accordion-collapse border-0 collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
              <div className="accordion-body">Discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        When our power of choice Labortech ?
      </button>
    </h2>
            <div id="collapseFour" className="accordion-collapse border-0 collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
              <div className="accordion-body">Discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 ms-auto mt-5 mt-lg-0">
        <div className="row">
          <div className="col-sm-6">
            <div className="team-member">
              <div className="team-images">
                <img className="img-fluid" src="images/team/01.jpg" alt=""/>
              </div>
              <div className="team-description">
                <h5><a href="team-single.html">Dr.Shiran Reni</a></h5>
                <span>Pathology Special</span> 
              </div>
              <ul className="team-social-icon list-inline">
                <li><a href="#"><i className="lab la-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="lab la-twitter"></i></a>
                </li>
                <li><a href="#"><i className="lab la-pinterest-p"></i></a>
                </li>
                <li><a href="#"><i className="lab la-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 mt-5 mt-sm-0">
            <div className="team-member">
              <div className="team-images">
                <img className="img-fluid" src="images/team/02.jpg" alt=""/>
              </div>
              <div className="team-description">
                <h5><a href="team-single.html">Dr.Kamal Leno</a></h5>
                <span>Chemist Expert</span> 
              </div>
              <ul className="team-social-icon list-inline">
                <li><a href="#"><i className="lab la-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="lab la-twitter"></i></a>
                </li>
                <li><a href="#"><i className="lab la-pinterest-p"></i></a>
                </li>
                <li><a href="#"><i className="lab la-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="team-member">
              <div className="team-images">
                <img className="img-fluid" src="images/team/03.jpg" alt=""/>
              </div>
              <div className="team-description">
                <h5><a href="team-single.html">Dr.Melena Jos</a></h5>
                <span>Lab Head</span> 
              </div>
              <ul className="team-social-icon list-inline">
                <li><a href="#"><i className="lab la-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="lab la-twitter"></i></a>
                </li>
                <li><a href="#"><i className="lab la-pinterest-p"></i></a>
                </li>
                <li><a href="#"><i className="lab la-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="team-member">
              <div className="team-images">
                <img className="img-fluid" src="images/team/04.jpg" alt=""/>
              </div>
              <div className="team-description">
                <h5><a href="team-single.html">Dr.Leena Ivy</a></h5>
                <span>Research Expert</span> 
              </div>
              <ul className="team-social-icon list-inline">
                <li><a href="#"><i className="lab la-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="lab la-twitter"></i></a>
                </li>
                <li><a href="#"><i className="lab la-pinterest-p"></i></a>
                </li>
                <li><a href="#"><i className="lab la-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*team end*/}


{/*blog start*/}

<section>
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-12">
        <div className="section-title">
          <h2 className="title">From our blog list Latest News</h2>
          <p className="lead">Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
        {/*Blog Card*/}
        <div className="card post-card border-0 rounded-0 shadow-sm bg-transparent">
          <img className="card-img-top" src="images/blog/01.jpg" alt="Image"/>
          <div className="card-body px-4 pb-4 pt-0">
            <div className="mt-n3">
              <div className="d-inline-block white-bg px-2 py-1 text-black box-shadow">20 February</div>
            </div>
            <h2 className="h4 my-3">Equipping Researchers in the Developing World
              </h2>
            <ul className="list-inline mb-0 border-top border-bottom border-light py-2 mb-4">
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="lar la-user-circle me-1"></i> Admin</a>
              </li>
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="las la-eye me-1"></i> 275</a>
              </li>
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="lar la-comments me-1"></i> 300</a>
              </li>
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <div><a className="px-3 py-2 light-bg text-black" href="#">Equipment</a>  <a className="px-3 py-2 light-bg text-black" href="#">Sass</a>
              </div> <a className="link-btn" href="blog-single.html"><i className="las la-long-arrow-alt-right"></i></a>
            </div>
          </div>
        </div>
        {/*End Blog Card*/}
      </div>
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
        {/* Blog Card*/}
        <div className="card post-card border-0 rounded-0 shadow-sm bg-transparent">
          <img className="card-img-top" src="images/blog/02.jpg" alt="Image"/>
          <div className="card-body px-4 pb-4 pt-0">
            <div className="mt-n3">
              <div className="d-inline-block white-bg px-2 py-1 text-black box-shadow">20 February</div>
            </div>
            <h2 className="h4 my-3">Patient experience better Health Your Doctor Wishes
              </h2>
            <ul className="list-inline mb-0 border-top border-bottom border-light py-2 mb-4">
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="lar la-user-circle me-1"></i> Admin</a>
              </li>
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="las la-eye me-1"></i> 275</a>
              </li>
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="lar la-comments me-1"></i> 300</a>
              </li>
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <div><a className="px-3 py-2 light-bg text-black" href="#">Equipment</a>  <a className="px-3 py-2 light-bg text-black" href="#">Sass</a>
              </div> <a className="link-btn" href="blog-single.html"><i className="las la-long-arrow-alt-right"></i></a>
            </div>
          </div>
        </div>
        {/* End Blog Cardd*/}
      </div>
      <div className="col-md-6 col-lg-4">
        {/*Blog Card*/}
        <div className="card post-card border-0 rounded-0 shadow-sm bg-transparent">
          <img className="card-img-top" src="images/blog/03.jpg" alt="Image"/>
          <div className="card-body px-4 pb-4 pt-0">
            <div className="mt-n3">
              <div className="d-inline-block white-bg px-2 py-1 text-black box-shadow">20 February</div>
            </div>
            <h2 className="h4 my-3">Standards of treatment Improved Detection of Disease
              </h2>
            <ul className="list-inline mb-0 border-top border-bottom border-light py-2 mb-4">
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="lar la-user-circle me-1"></i> Admin</a>
              </li>
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="las la-eye me-1"></i> 275</a>
              </li>
              <li className="list-inline-item"> <a href="#" className="text-black"><i className="lar la-comments me-1"></i> 300</a>
              </li>
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <div><a className="px-3 py-2 light-bg text-black" href="#">Equipment</a>  <a className="px-3 py-2 light-bg text-black" href="#">Sass</a>
              </div> <a className="link-btn" href="blog-single.html"><i className="las la-long-arrow-alt-right"></i></a>
            </div>
          </div>
        </div>
        {/*End Blog Card*/}
      </div>
    </div>
  </div>
</section>

{/*blog end*/}

 
</div>

{/*body content end*/}


  
  
     </>
  )
}
