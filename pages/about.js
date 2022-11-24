import React from 'react'

import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}


export default function about() {

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  return (
    <>
        
<section className="page-title parallaxie" data-bg-img="./images/bg/biogx_about.jpg" style={{  backgroundImage: `url("./images/bg/biogx_about.jpg")`  }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="white-bg p-md-5 p-3 d-inline-block">
        <h1 className="text-theme">About <span className="text-black">Biogx</span></h1>
        <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html"><i className="las la-home me-1"></i>Home</a>
            </li>
            <li className="breadcrumb-item">About Biogx
            </li>
            <li className="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="page-content">

<section className="p-0">
  <div className="container-fluid ps-0">
    <div className="row">
      <div className="col-lg-12 col-md-10 col-11">
        <div className="dark-bg p-lg-7 p-4 pb-10" data-bg-img="./images/pattern/02.png">
          <div className="section-title ms-md-5">
            <h4 className='text-white'>BioGX, Inc. is a global molecular diagnostics company that has been focused on the health and safety of communities all over the world from its inception in 2007, originally developing tests for Water Quality, Food Safety and Pharma Quality Control.  The company has since grown into a formidable contender in the molecular diagnostics industry, leading the way for simple yet superior molecular diagnostics testing.</h4> 
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-8 pe-md-0">
        <div className="light-bg p-5 z-index-1 mt-n7">
          <div className="ht-progress-bar mb-4">
            <h4>Sweet Home Alabama</h4>
            <p>
              Headquartered in Alabama, USA, BioGX’s American footprint allows for the manufacture of custom-designed, platform agnostic Sample-Ready™ reagents for Laboratory Developed Tests (USA only).  Using real-time PCR, BioGX makes molecular testing easy for labs with its novel Sample-Ready™ approach to LDTs, which enable a lab to specify its choice of test and receive a high-performance mix of all the necessary reagents, primers and probes, lyophilized and in one tube without the need for refrigeration. The proprietary Sample-Ready™ technology is at the core of the company’s worldwide offerings across clinical, food safety, pharma and water quality testing.

            </p>
          </div>
          <div className="ht-progress-bar mb-4">
            <h4>A Global Reach</h4>
            <p>Wholly owned subsidiary, BioGX BV, is located in Amsterdam, The Netherlands and boasts a large portfolio of CE-IVD marked tests, spread across a wide variety of infectious diseases ranging from COVID-19, respiratory to sexual health, enteric pathogens, drug resistance, meningitis, transplant and tropical disease.  With our Global Partnership Initiative, we can supply the rest of the world with our products, fast and effectively.</p>

            <p>All BioGX reagents are fine-tuned to ensure the highest performance in any lab setting, even outer space, where our products are currently used in the International Space Station.  Through continuous innovation our team of scientists aim to make RT-PCR as simple, robust and efficient for laboratories all over the world.</p>
          </div>
           
        </div>
      </div>
       
    </div>
  </div>
</section>

<section className="custom-pb-2 theme-bg">
  <div className="container">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 col-md-7">
        <div className="section-title mb-0">
          <h2 className="title text-white mb-0">Our Locations </h2> 
        </div>
      </div>
       
    </div>
  </div>
</section>

<section className="pt-0 mt-n15">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 col-md-6">
        <div className="service-item style-3 text-center">
          <div className="service-img">
            <img className="img-fluid" src="images/about/biogx_albama_location.webp" alt=""/>
          </div>
          <div className="service-desc pt-3 white-bg shadow-none">
             
            <div className="service-title">
              <h4>Birmingham, Alabama</h4>
            </div>
            <p>2450 Valleydale Road Birmingham,<br/> Alabama 35244</p>
            <div className="pt-4   border-top border-light"> <a className="btn-link btn btn-theme" href="biochemistry-solution.html">View on Map</a> 
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
        <div className="service-item style-3 text-center active">
          <div className="service-img">
            <img className="img-fluid" src="images/about/biogx_texas_location.webp" alt=""/>
          </div>
          <div className="service-desc pt-3 white-bg shadow-none">
             
            <div className="service-title">
              <h4>Frisco, TEXAS</h4>
            </div>
            <p>2591 Dallas Parkway Suite 200 Frisco, <br/> TX 75034</p>
            <div className="pt-4 border-top border-light"> <a className="btn-link btn btn-theme" href="pharmaceutical-research.html">View on Map</a> 
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
        <div className="service-item style-3 text-center">
          <div className="service-img">
            <img className="img-fluid" src="images/about/biogx_amsterdam_location.webp" alt=""/>
          </div>
          <div className="service-desc pt-3 white-bg shadow-none">
             
            <div className="service-title">
              <h4>Amsterdam, Netherlands</h4>
            </div>
            <p>Science Park 408, 1098 XH Amsterdam, Netherlands</p>
            <div className="pt-4  border-top border-light"> <a className="btn-link btn btn-theme" href="pathologycam-testing.html">View on Map</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="position-relative light-bg">
  <div className="container z-index-1">
    <div className="row justify-content-center text-center">
      <div className="col-lg-7 col-12">
        <div className="section-title mb-3">
          <h2 className="title mb-0">Leadership Team</h2> 
          <p className="lead">We have assembled a highly talented management team with decades of individual experience successfully developing and commercializing innovative clinical and molecular diagnostic products.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4  col-md-6 mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/shazi-bio.jpg" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>Shazi Iqbal, Ph.D.</h4>
                  <span style={{fontSize:"14px"}}>President, CEO</span>
                </div>
                <p>Dr. Iqbal has over 20 years of experience building healthcare technologies and businesses in business development, corporate sales, global marketing and product development.</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/michael-bio.jpg" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>Michael Vickery, Ph.D.</h4>
                  <span style={{fontSize:"14px"}}>EVP, Chief Scientific Officer</span>
                </div>
                <p>Dr. Vickery founded BioGX in 2007 and served as President and CEO until 2011.</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/Richard1.webp" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>	Richard Innenberg</h4>
                  <span style={{fontSize:"14px"}}>Chief Financial Officer</span>
                </div>
                <p>Richard Innenberg joined BioGX in 2022 as consulting CFO. Mr. Innenberg has over 30 years of experience in finance and the medical device industry</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/shahin-bio.jpg" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>Shahin Iqbal, Ph.D.</h4>
                  <span style={{fontSize:"14px"}}>Sr. VP Global Operations</span>
                </div>
                <p>Dr. Iqbal has over 20 years of experience in clinical and molecular diagnostics and is responsible for overall operations.</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/chris-bio.jpg" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>Christopher Hughes</h4>
                  <span style={{fontSize:"14px"}}>Sr. Director, Quality and Regulatory Affairs</span>
                </div>
                <p>Prior to joining BioGX, Mr. Hughes led efforts for a diverse range of companies with the development and implementation of certified quality management systems.</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/george-bio.jpg" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>George Blackstone</h4>
                  <span style={{fontSize:"14px"}}>Sr. Director, Product Development</span>
                </div>
                <p>Mr. Blackstone has served at BioGX in various senior R&D and quality management roles prior to his current position.</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/robert-bio.jpg" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>Robert Martinez, Ph.D.</h4>
                  <span style={{fontSize:"14px"}}>Sr. Director, Scientific Affairs and Strategic Partnerships</span>
                </div>
                <p>Dr. Martinez has over 20 years of experience in molecular biology, and manages global marketing and technical support efforts.</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/mohammed-bio.jpg" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>Mohammed Merchant</h4>
                  <span style={{fontSize:"14px"}}>Sr. Director, Marketing</span>
                </div>
                <p>Mr. Merchant brings over 20 years of experience in digital technology, e-commerce, and software product management in various industries. Read more</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

      <div className="col-lg-4  col-md-6  mb-5">
          <div className="item">
            <div className="service-item style-1">
              <div className="service-img mx-4 z-index-1 overflow-hidden">
                <img className="img-fluid" src="images/about/Brent-Headshot-PNG.webp" alt=""/>
                <div className="service-icon" style={{background:"transparent"}}> 
                </div>
              </div>
              <div className="service-desc white-bg mt-n5 pt-7">
                <div className="service-title mb-3">
                  <h4 className='mb-0'>Brent Scott</h4>
                  <span style={{fontSize:"14px"}}>Director of Operations</span>
                </div>
                <p>Mr. Scott is is responsible for Manufacturing, Production, QC Testing, and Operations for BioGX.</p> <a className="link-btn" href="#"><i className="las la-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
      </div>

    </div>
  </div>
  <div className="shape-1 overflow-hidden bottom">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1" d="M0,96L21.8,112C43.6,128,87,160,131,154.7C174.5,149,218,107,262,90.7C305.5,75,349,85,393,122.7C436.4,160,480,224,524,234.7C567.3,245,611,203,655,165.3C698.2,128,742,96,785,85.3C829.1,75,873,85,916,117.3C960,149,1004,203,1047,229.3C1090.9,256,1135,256,1178,234.7C1221.8,213,1265,171,1309,154.7C1352.7,139,1396,149,1418,154.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
    </svg>
  </div>
</section>

<section class="bg-effect right position-relative">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="section-title">
          <h2 class="title">Careers at BioGX</h2> 
        </div>
      </div>
    </div>
    <div class="row">
      <div className='col-lg-6'>
        <h4>Join the Team</h4>
        <p>BioGX is a growing company.  We are always on the lookout for talented scientists and technicians with an entrepreneurial spirit, a dedication to excellence, and experience with molecular biology.  We offer a competitive salary and benefits package.</p>
      </div>
      <div class="col-lg-6">
        <OwlCarousel className="owl-theme"  loop margin={10}   items="3" >
        <div class="item">
            <div class="cases-item position-relative overflow-hidden">
              <img class="img-fluid w-100" src="images/about/biogx_team1.jpg" alt=""/>
               
            </div>
          </div>
          <div class="item">
            <div class="cases-item position-relative overflow-hidden">
              <img class="img-fluid w-100" src="images/about/biogx_team2.jpg" alt=""/>
                 
            </div>
          </div>
          <div class="item">
            <div class="cases-item position-relative overflow-hidden">
              <img class="img-fluid w-100" src="images/about/biogx_team1.jpg" alt=""/>
                
            </div>
          </div>
           
          <div class="item">
            <div class="cases-item position-relative overflow-hidden">
              <img class="img-fluid w-100" src="images/about/biogx_team2.jpg" alt=""/>
                 
            </div>
          </div>
          <div class="item">
            <div class="cases-item position-relative overflow-hidden">
              <img class="img-fluid w-100" src="images/about/biogx_team1.jpg" alt=""/>
                
            </div>
          </div>
           

        </OwlCarousel>
      </div>
    </div>
  </div>
</section>

<section className="p-0">
  <div className="container-fluid p-0">
    <div className="row">
      <div className="col">
        <div className="p-md-8 p-4 text-center parallaxie" style={{  backgroundImage: `url("./images/about/biogx_covidbg.jpg")`  }} data-bg-img="images/about/biogx_covidbg.jpg" data-overlay="4">
          <h4 className="text-white mb-5">BioGX is headquartered in Birmingham, Alabama.  This location hosts the company’s research and development laboratories and a fully scaled production and manufacturing facility.  The company also holds a subsidiary in Amsterdam, The Netherlands, BioGX BV.  Acting as the BioGX source for global distribution to over 100 countries worldwide.</h4>
          <a className="btn btn-white" href="#"><span>Contact Us</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    </>
  )
}
