import React, { useEffect,useState } from 'react'
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

const getOffset = (element) => {
	const elementRect = element?.getBoundingClientRect();
	return elementRect?.top;
}



const asset_img = process.env.IMGPATH
  
function product_detail() {
   let divTopOffset = 0;
    const handleScroll = () => {
        const heightToHide = getOffset(document.getElementById("stickNav"));
        const windowScrollHeight = document.bodyscrollTop || document.documentElement.scrollTop;
        
        if(windowScrollHeight>divTopOffset-100) {
            isSticky==""?setIsSticky("stickScrollNav"):"";
            console.log("came 1",isSticky)
        } else {
            setIsSticky("")
            console.log("came 2",isSticky)
        }
    }

    const [isSticky,setIsSticky] = useState("");
     

    useEffect(()=> {
        
        divTopOffset = document.getElementById("stickNav").offsetTop;
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

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

            <section  className={` mainscrolltab ${isSticky}`} id='stickNav' >
                <div className='scrolltabcontent py-4'>
                    <div className='container'>
                        <ul className='list-unstyled'>
                            <li>
                            <Link href="#productInfo"   activeClass="activeTab" smooth="true" spy="true" to="productInfo" scroll="false" >
                                Product Information
                            </Link>
                            </li>
                            <li>
                            <Link href="#productRes"   activeClass="activeTab"  smooth="true" spy="true" to="productRes"  scroll="false">
                                Product Resources
                            </Link>
                            </li>
                            <li>
                            <Link  href="#faqs"  activeClass="activeTab"  smooth="true" spy="true" to="faqs" scroll="false">
                                FAQs
                            </Link>
                            </li>
                             
                        </ul>
                    </div>
                </div>

                <div className='container tabcontent'>

                    <div id="productInfo" className='tabcontentInner'  >
                        <div className='row'>
                            <div className='col-6'>
                                <h3>The Need</h3>
                                <hr/>
                                <ul className='px-3  '>
                                    <li  className='py-1'>Detection and differentiation of flu, RSV, and COVID-19 which all present with similar symptoms</li>
                                    <li className='py-1'>Insights for effective triage and patient management</li>
                                    <li className='py-1'>Risk assessment for patients and staff while resuming traditional healthcare procedures</li>
                                    <li className='py-1'>Identify potential cases of co-infections during respiratory season</li>
                                    <li className='py-1'>Current flu and SARS-CoV-2 therapies need definitive diagnosis for each pathogen</li>
                                </ul>
                            </div>

                            <div className='col-6'>
                                <h3>The Solution</h3>
                                <hr/>
                                <ul className='px-3'>
                                    <li className='py-1'>Actionable detection of SARS-CoV-2, Flu A, Flu B, and RSV in as little as 25 minutes</li>
                                    <li className='py-1'>Actionable on-demand results with 1 sample collection</li>
                                    <li className='py-1'>Optimizes GeneXpert® System module capacity by combining 2 Xpress tests into 1</li>
                                    <li className='py-1'>Standardization of results between the central lab and near patient testing sites</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="productRes" className='tabcontentInner'  >
                        

                        <div className='row'>
                            <div className='col-12'>
                                <h3 className='text-center'>Product Resources</h3>

                                <h4 className=' mt-5'>Product Information</h4>

                                <div className='d-flex ' style={{gap:"10px"}}>
                                    <div className='presourcebox'>
                                        Xpert Xpress SARS-CoV-2/Flu/RSV Flyer
                                    </div>

                                    <div className='presourcebox'>
                                        Xpert Xpress SARS-CoV-2/Flu/RSV Datasheet
                                    </div>

                                    <div className='presourcebox'>
                                        Xpert Xpress Respiratory Product Comparison
                                    </div>
                                </div>

                                <h4 className=' mt-5'>Package Inserts & MSDS</h4>

                                <div className='d-flex ' style={{gap:"10px"}}>
                                    <div className='presourcebox'>  Package Inserts   </div>

                                    <div className='presourcebox'> Safety Data Sheets  </div>
                                </div>

                                <h4 className=' mt-5'>Technical Documentation</h4>

                                <div className='d-flex' style={{gap:"10px"}}>
                                    <div className='presourcebox'> Xpert Xpress SARS-CoV-2-Flu-RSV EUA QRI Hub  </div>
                                    <div className='presourcebox'> Xpert Xpress SARS-CoV-2-Flu-RSV EUA QRI Tablet </div>

                                    <div className='presourcebox'> Xpert Xpress SARS-CoV-2-Flu-RSV Verification Protocol </div>
                                </div>

                                <div className='d-flex mt-3' style={{gap:"10px"}}>
                                    <div className='presourcebox'> SARS-CoV-2-Flu-RSV Patient Fact Sheet </div>
                                    <div className='presourcebox'> SARS-CoV-2-Flu-RSV Healthcare Providers Fact Sheet</div>

                                    <div className='presourcebox'> LIS Guidance for Xpert Xpress SARS-CoV-2-Flu-RSV</div>

                                   
                                </div>

                                <div className='d-flex  mt-3' style={{gap:"10px"}}>
                                    <div className='presourcebox'> Reimbursement CodeMap</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="faqs" className='tabcontentInner'  >
                        <div className='row'>
                            <div className='col-12'>
                                <h3 className='text-center'>Frequently Asked Questions</h3>

                                <div class="accordion mt-5" id="accordion">
                                    <div class="accordion-item mb-4">
                                        <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What are my options for Viral Transport Media for Xpert Xpress SARS-CoV-2/FLU/RSV
                                </button>
                                </h2>
                                        <div id="collapseOne" class="accordion-collapse border-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                        <div class="accordion-body">Viral transport media is available from several commercial vendors who may use the terminology VTM (Viral Transport Medium).  Alternate transport media, not identified in the package inserts (302-4421 Xpert Xpress SARS-CoV-2 Flu RSV EUA English Package Insert, 302-5159 Xpert Xpress SARS-CoV-2 Flu RSV CE IVD English Package Insert), should not be used with Xpert® Xpress SARS-CoV-2/Flu/RSV.  

Due to the limited supply of commercial collection devices and transport media, the FDA has posted some information on their website including the “COVID-19 Transport Media Policy” and “Testing Supply Substitution Strategies” slides, which can be accessed on their “FAQs on Testing for SARS-CoV-2” webpage: https://www.fda.gov/medical-devices/emergency-situations-medical-devices/faqs-testing-sars-cov-2#testingsupply. For additional questions, please contact Cepheid's Technical Support team.

All inquiries about off-label use, including those pertaining to transport media/transport media containing inactivation reagents, need to be addressed to Medical Affairs for support (MedSci.Affairs@cepheid.com).</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-4">
                                        <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What are the requirements for verification and what guidelines do you have for transitioning from my current Xpert Xpress SARS-CoV-2 and/or Xpert Xpress Flu/RSV tests to the Xpert Xpress
                                </button>
                                </h2>
                                        <div id="collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                        <div class="accordion-body">Before going live with a new test, a verification study may be necessary.  A verification guide that describes the preparation of contrived positive specimens (prepared by spiking commercial reference material into negative specimens) is available for download.  Alternatively, customers can also use previously tested patient specimens for a verification study. Please follow your laboratory and regulatory requirements when instituting a new test in your laboratory. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-4">
                                        <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What external quality control (QC) material options are available for SARS CoV-2/FLU/RSV?
                                </button>
                                </h2>
                                        <div id="collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                        <div class="accordion-body">The listed external controls are Zeptometrix SARS-COV2/FLU/RSV Positive Control (PN: NATFRC-6C) and Negative Control (PN: NATCV9-6C). These are described in the “materials available but not provided” section of the Package Insert. Please consult with Cepheid’s Technical Support team to inquire about additional commercial options. Customers may also elect to use other commercial sources or previous patient specimens.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What sample types and collection devices can be used with Xpert® Xpress SARS CoV-2-FLU-RSV?
                                </button>
                                </h2>
                                        <div id="collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                                        <div class="accordion-body"><strong>Sample Types:</strong>
GeneXpert Dx and Infinity Systems: Nasopharyngeal swab, nasal swab and nasal/wash aspirate specimens in 3mL of VTM (EUA) or 3mL of VTM or saline (CE-IVD). 
GeneXpert Xpress Systems (Hub and Tablet): Nasopharyngeal swab and nasal swab specimens in 3mL of VTM (EUA) or 3mL of VTM or saline (CE-IVD). </div>
                                        </div>
                                    </div>
                                    </div>
                                    
                            </div>
                        </div>
                    </div>
                     

                </div>
            </section>

            

    </div>
  </>
    
  )
}

export default product_detail