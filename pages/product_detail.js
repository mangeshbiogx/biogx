import React from 'react'
import Links from 'next/link';
import { Link } from "react-scroll/modules";
import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

const asset_img = process.env.IMGPATH
  
function product_detail() {
  return (<>
    <section className="page-title parallaxie" data-bg-img={`${asset_img}'bg/biogx_about.jpg'+`} style={{  backgroundImage: `url(`+asset_img+'bg/biogx_about.jpg'+`)`  }}>
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="white-bg p-md-5 p-3 d-inline-block">
                <h1 className="text-theme">Xfree™ Monkeypox </h1>
                <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Links href="/"><i className="las la-home me-1"></i>Home</Links>
                    </li>
                    <li className="breadcrumb-item">Products
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Xfree™ Monkeypox</li>
                </ol>
                </nav>
                </div>
            </div>
            </div>
        </div>
    </section>

    <div className="page-content">
        <section>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-5 text-center">
                        <img className="img-fluid" src="https://www.biogx.com/wp-content/uploads/2022/09/400x600.png" alt="" style={{maxHeight:"500px",marginTop:"-20px"}} />
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="product-details">
                        <h3>
                        XFREE™ MONKEYPOX DIRECT PCR ASSAY
                        </h3>
                         
                        <p className="my-4">The BioGX Xfree™ Monkeypox PCR Assay is offered in the lyophilized “Just Add Sample” format within single PCR tubes where no other reagent is required. The test is available for BioGX pixl.16 real-time PCR instrument. Nucleic acid extraction is not needed, and the lyophilized PCR reagents are simply rehydrated and patient sample is directly added. The fast and simple workflow is designed to help laboratories to increase their testing capacity without adding expert molecular staff or new automation.</p>
                         
                        <ul className="list-unstyled mt-5">
                            <li className="mb-2" style={{fontSize:"12px"}}><span className="text-black font-w-5">*</span>  This product is for Research Use Only.</li>

                            <li className="mt-5">
                                <button className='btn btn-theme'>Read More Info</button>
                            </li>

                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section  className="py-5 scrolltabcontent">
                <div className='container'>
                    <ul className='list-unstyled'>
                        <li>
                        <Link href="#about" activeClass="activeTab" smooth="true" spy="true" to="about" scroll="false">
                            ABOUT
                        </Link>
                        </li>
                        <li>
                        <Link href="#projects" activeClass="activeTab"  smooth="true" spy="true" to="projects"  scroll="false">
                            PROJECTS
                        </Link>
                        </li>
                        <li>
                        <Link  href="#blog" activeClass="activeTab"  smooth="true" spy="true" to="blog" scroll="false">
                            BLOG
                        </Link>
                        </li>
                        <li>
                        <Link href="#contact" activeClass="activeTab"  smooth="true" spy="true" to="contact" scroll="false">
                            CONTACT ME
                        </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="about" style={{minHeight:"500px"}}>ABOUT</section>
            <section id="projects" style={{minHeight:"500px"}}>PROJECTS</section>
            <section id="blog" style={{minHeight:"500px"}}>BLOG</section>
            <section id="contact" style={{minHeight:"500px"}}>CONTACT ME</section>

    </div>
  </>
    
  )
}

export default product_detail