
import Hstyle from '../styles/Home.module.css'
/*import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
*/

import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}


import { useState,useEffect } from "react"
export default function Home() {
   

   
  
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();
  
  return (

     
     <>
   
   <section className={`banner p-0 pos-r fullscreen-banner ${Hstyle.homeBanner}`} style={{height:size.height}}>

   <OwlCarousel
    className="owl-theme"  loop margin={10}  dots={false} items="1" >
    <div className="item hero-overlay" style={{ 
      backgroundImage: `url("images/bg/biogx_bg1.jpg")` 
    }} data-bg-img="images/bg/biogx_bg1.jpg" data-overlay="0">
      <div className="align-center pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12">
            <p className={Hstyle.bannerSubheading1+` lead font-w-5 text-white`}   >Direct Sample, Simple Yet Superior.</p>

              <h1 className="mb-4 text-white"><span className='text-theme'>Xfree<sup>™</sup> Monkeypox*</span>  Direct RT-PCR</h1>
            
              <p className={Hstyle.bannerSubheading2+` lead font-w-5 text-white`}>Sample-to-Result Solution.</p>

              <div className="btn-box mt-5">
                <a className="btn btn-theme" href="#"> <span>Learn More</span>
                </a>
                {/*}<a className="btn btn-dark" href="#"> <span>Calculate Xfree Savings</span>
                </a>{*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="item hero-overlay" style={{ 
      backgroundImage: `url("images/bg/biogx_bg2.jpg")` 
    }} data-bg-img="images/bg/biogx_bg2.jpg" data-overlay="0">
      <div className="align-center pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12">

            <p className={`lead font-w-5 text-white ${Hstyle.bannerSubheading1} `}>FDA Emergency Use Authorized <br/>  Direct Sample, Extraction-Free. Simple Yet Superior.</p>
              <h1 className="mb-4 text-white"> Xfree<sup>™</sup> COVID-19 Direct RT-PCR</h1>
             
              <p className={`${Hstyle.bannerSubheading3}  lead font-w-5 text-white`}>No extraction reagents required  <br/>96 and 384-well plate PCR platforms <br/>New strains coverage</p>

              <div className="btn-box mt-5">
                <a className="btn btn-theme" href="#"> <span>Learn More</span>
                </a>
                <a className="btn btn-dark" href="#"> <span>Calculate Xfree Savings</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="item hero-overlay" style={{ 
      backgroundImage: `url("images/bg/biogx_bg3.jpg")` 
    }} data-bg-img="images/bg/biogx_bg3.jpg" data-overlay="0">
      <div className="align-center pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12">
              <h1 className="mb-4 text-white" ><span className='text-theme'>COVID-19/Flu Combo</span> for BD MAX<sup>™</sup>  for Testing</h1>
              <p className={`lead font-w-5 text-white ${Hstyle.bannerSubheading2} `}>All the components for a complete<br/>RT-PCR test in one tube.</p>

              <p className={`lead font-w-5 text-white ${Hstyle.bannerSubheading3} `}>Simultaneously detect SARS-CoV-2, Flu A, Flu B, RSV
<br/>Fully Automated
<br/>CE-IVD Marked</p>


              <div className="btn-box mt-5">
                <a className="btn btn-theme" href="about-us.html"> <span>Learn More</span>
                </a>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="item hero-overlay" style={{ 
      backgroundImage: `url("images/bg/biogx_bg4.jpg")` 
    }} data-bg-img="images/bg/biogx_bg4.jpg" data-overlay="0">
      <div className="align-center pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12">
              <h1 className="mb-4 text-white">Customize your  molecular diagnostics portfolio </h1>
              <p className={`lead font-w-5 text-white ${Hstyle.bannerSubheading2} `}>Your Assay. One Tube. Any Platform. <br/>Just Add Water <sup>™</sup></p>

              <div className="btn-box mt-5">
                <a className="btn btn-theme" href="about-us.html"> <span>Learn More </span>
                </a>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  </OwlCarousel>

   </section>
  {/*}section className="banner p-0 pos-r fullscreen-banner">
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
  </section>{*/}
  
  {/*body content start*/}

<div className="page-content">

<section className="p-0">
  <div className="container-fluid p-0">
    <div className="row g-0">
      <div className="col-md-4" data-bg-img="images/about/05.jpg"  style={{ 
      backgroundImage: `url("images/about/05.jpg")`}}></div>
      <div className="col-md-8 theme-bg py-5 px-lg-8 px-5">
      <OwlCarousel
    className="owl-theme"  autoPlay={false} margin={10}  dots={false} items="1" >
          <div className="item">
            <div className="testimonial text-center">
              <div className="testimonial-img mb-2">
                <img className="img-fluid rounded-circle shadow-sm d-inline-block" src="images/testimonial/01.jpg" alt=""/>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-caption mb-3">
                  <h5 className="text-white">Eduardo Almeida</h5>
                  <label className="fst-italic d-block text-light">-WETLAB-2 Scientist Eduardo Almeida, NASA</label>
                </div>
                <p className="fst-italic text-light">“This is really a marvel of biochemistry because we’re able to put in a mixture of around a dozen components—the salts, enzymes, primers, and probes—that are usually assembled at the last minute and freeze-dry it. So everything you need to run RT-qPCR is there, and it can be stored for months until needed.”</p>
              </div>
            </div>
          </div>
           
        </OwlCarousel>
      </div>
    </div>
  </div>
</section>


<section class="position-relative light-bg">
  <div class="container z-index-1">
    <div class="row justify-content-center text-center">
      <div class="col-lg-7 col-12">
        <div class="section-title mb-3">
          <h2 class="title mb-5">YOUR ASSAY. ONE TUBE. ANY PLATFORM.</h2> 
        </div>
      </div>
    </div>
     
     <div className='row'>
        <img src='images/tube_animation.gif' className='img-fluid'></img>
     </div>
  </div>
  <div class="shape-1 overflow-hidden bottom"  style={{bottom:"-152px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1" d="M0,96L21.8,112C43.6,128,87,160,131,154.7C174.5,149,218,107,262,90.7C305.5,75,349,85,393,122.7C436.4,160,480,224,524,234.7C567.3,245,611,203,655,165.3C698.2,128,742,96,785,85.3C829.1,75,873,85,916,117.3C960,149,1004,203,1047,229.3C1090.9,256,1135,256,1178,234.7C1221.8,213,1265,171,1309,154.7C1352.7,139,1396,149,1418,154.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
    </svg>
  </div>
</section>

<section className='p-0 text-center'>
  <div className='container'>
   
  </div>
  
</section>
{/*feature start*/}

<section className="position-relative">
  <div className="container">

    <div className='row' style={{justifyContent:'center'}}>
       <div class="col-lg-7 col-12"><div class="section-title mb-3"><h2 class="title mb-5">YOUR ASSAY. ONE TUBE. ANY PLATFORM.</h2></div></div>
    </div>
    
    <div className="row">
      
      <div className="col-lg-3 col-sm-6">
        <div className="featured-item style-1">
          <div className="featured-icon"> <i className="flaticon-flask"></i>
          </div>
          <div className="featured-title">
            <h5>ONE-TUBE REAGENTS</h5>
          </div>
          <div className="featured-desc">
            <p>Enables any lab to quickly expand their molecular diagnostics menu.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 mt-sm-0">
        <div className="featured-item style-1 active">
          <div className="featured-icon"> <i className="flaticon-laboratory"></i>
          </div>
          <div className="featured-title">
            <h5>FINELY TUNED FORMULAS</h5>
          </div>
          <div className="featured-desc">
            <p>Optimizes testing performance and sensitivity</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
        <div className="featured-item style-1">
          <div className="featured-icon"> <i className="flaticon-biology-1"></i>
          </div>
          <div className="featured-title">
            <h5>EASY TO USE</h5>
          </div>
          <div className="featured-desc">
            <p>Makes molecular easy for any lab</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
        <div className="featured-item style-1">
          <div className="featured-icon"> <i className="flaticon-help-call"></i>
          </div>
          <div className="featured-title">
            <h5>NO REFRIGERATION</h5>
          </div>
          <div className="featured-desc">
            <p>Allows transport and storage at room temperature</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*feature end*/}


{/*about start*/}

<section className="position-relative bg-light">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-lg-6 col-12 order-lg-1">
        <img className="img-fluid" src="images/location/biogx_location1.webp" alt=""/>
      </div>
      <div className="col-lg-6 col-12 mt-6 mt-lg-0">
        <div className="row align-items-end">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">U.S. <img src='images/location/biogx_us.png' className={`${Hstyle.location_titleimage1}`}></img></h2> 
              <p className="text-black font-w-5 mb-3">Expand your molecular diagnostics menu with BioGX Sample-Ready™, custom-designed reagents, mixed and lyophilized in one tube to run on a platform of your choice.  Our Open Source Reagents (OSRs) manufacturing service offers laboratories an excellent option to outsource manufacturing of their Laboratory Developed Tests (LDTs).  The OSRs are fine-tuned to ensure the highest performance in any lab setting, from a sophisticated lab, to a remote lab with limited infrastructure and resources.</p>
            </div>
            
            <ul className="list-unstyled list-icon mt-4">
              <li className="mb-3"><i className="las la-check"></i> FDA/EUA COVID-19 Tests</li>
              <li className="mb-3"><i className="las la-check"></i>Custom-designed reagents for LDTs</li>
              
            </ul>

          </div>
           
        </div>
      </div>
    </div>

    <div className="row align-items-center justify-content-between mt-4">
      
      <div className="col-lg-6 col-12 mt-6 mt-lg-0  order-lg-1">
        <div className="row align-items-end">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">International <img src='images/location/biogx_international.png' className={`${Hstyle.location_titleimage2}`}></img></h2> 
              <p className="text-black font-w-5 mb-3">Our Sample-Ready™ Reagents are CE-IVD Marked and lyophilized in a single tube enabling labs to select a high-performance mix of all the necessary primers and probes to run fast, accurate and efficient RT-PCR tests.  The BioGX Reagents offer laboratories a wide variety of syndromic groups from respiratory to sexual health, enteric pathogens, drug resistance, meningitis, transplant and tropical disease.</p>
            </div>
            
            <ul className="list-unstyled list-icon mt-4">
              <li className="mb-3"><i className="las la-check"></i> COVID-19/Flu Combo Test for BD MAX™</li>
              <li className="mb-3"><i className="las la-check"></i> High volume, multi-platform COVID-19 tests</li>
              <li><i className="las la-check"></i> Extensive portfolio of CE-IVD marked products</li>
            </ul>

          </div>
           
        </div>
      </div>

      <div className="col-lg-6 col-12 order-lg-0">
        <img className="img-fluid" src="images/location/biogx_location2.webp" alt=""/>
      </div>
      
    </div>

  </div>
</section>

{/*about end*/}


 


 

 
 

 

 
 
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
          <img className="card-img-top" src="images/blog/biogxblog_1.webp" alt="Image"/>
          <div className="card-body px-4 pb-4 pt-0">
            <div className="mt-n3">
              <div className="d-inline-block white-bg px-2 py-1 text-black box-shadow">10 November 22</div>
            </div>
            <h2 className="h4 my-3">BioGX Expands FDA EUA with pixl™ Portable qPCR System for its Direct-Sample COVID-19 Assay
              </h2>
             
            <div className="d-flex justify-content-between align-items-center">
              <div><a className="px-3 py-2 btn btn-theme" href="#">Read More  </a>   
              </div> <a className="link-btn" href="blog-single.html"><i className="las la-long-arrow-alt-right"></i></a>
            </div>
          </div>
        </div>
        {/*End Blog Card*/}
      </div>
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
        {/* Blog Card*/}
        <div className="card post-card border-0 rounded-0 shadow-sm bg-transparent">
          <img className="card-img-top" src="images/blog/biogxblog_2.jpg" alt="Image"/>
          <div className="card-body px-4 pb-4 pt-0">
            <div className="mt-n3">
              <div className="d-inline-block white-bg px-2 py-1 text-black box-shadow">20 Octomber 22</div>
            </div>
            <h2 className="h4 my-3">BioGX Announces Availability of Xfree PCR Reagents for Monkeypox
              </h2>
            
            <div className="d-flex justify-content-between align-items-center">
              <div><a className="px-3 py-2 btn btn-theme" href="#">Read More  </a>  
              </div> <a className="link-btn" href="blog-single.html"><i className="las la-long-arrow-alt-right"></i></a>
            </div>
          </div>
        </div>
        {/* End Blog Cardd*/}
      </div>
      <div className="col-md-6 col-lg-4">
        {/*Blog Card*/}
        <div className="card post-card border-0 rounded-0 shadow-sm bg-transparent">
          <img className="card-img-top" src="images/blog/biogxblog_3.jpg" alt="Image"/>
          <div className="card-body px-4 pb-4 pt-0">
            <div className="mt-n3">
              <div className="d-inline-block white-bg px-2 py-1 text-black box-shadow">20 July 22</div>
            </div>
            <h2 className="h4 my-3">BioGX Launches CE-IVD Marked Multi-gene COVID-19 Point-of-Care Test at AACC
              </h2>
             
            <div className="d-flex justify-content-between align-items-center">
              <div><a className="px-3 py-2 btn btn-theme" href="#">Read More  </a>  
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
