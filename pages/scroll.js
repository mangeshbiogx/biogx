import React, { useEffect,useState } from 'react'
import Links from 'next/link';
import { Link } from "react-scroll/modules";

const Scroll = () => {

    let divTopOffset = 0;

    /*const getOffset = (element) => {
	    const elementRect = element?.getBoundingClientRect();
	    return elementRect?.top;
    }*/

    const handleScroll = () => {
        //const heightToHide = getOffset(document.getElementById("stickNav"));
        const windowScrollHeight = document.bodyscrollTop || document.documentElement.scrollTop;
        
        if(windowScrollHeight>divTopOffset-50) {
            isSticky==""?setIsSticky("stickScrollNav"):"";
            
        } else {
            setIsSticky("")
            
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

    const handleScrollClick = () => {
        console.log("came")
    }

  return ( <>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>    

 

<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>    

 
    <section  className={` pb-0 pt-0 mainscrolltab ${isSticky}`} id='stickNav'  style={{width:'100%',background:'red',position:'sticky',top:'80px'}} >
                <div className='scrolltabcontent'>
                    <div className='container'>
                        <ul className='list-unstyled'>
                            <li >
                            <Link  href="#productInfo"  duration={500}  activeClass="activeTab" smooth="true" spy="true" to="productInfo" scroll="false"  >
                                Product Information
                            </Link>
                            </li>
                            <li>
                            <Link href="#productRes" duration={500}  activeClass="activeTab"  smooth="true" spy="true" to="productRes"  scroll="false"  >
                                Product Resources
                            </Link>
                            </li>
                            <li>
                            <Link  href="#faqs" duration={500} activeClass="activeTab"  smooth="true" spy="true" to="faqs" scroll="false" >
                                FAQs
                            </Link>
                            </li>
                             
                        </ul>
                    </div>
                </div>
                </section>
 

    <div style={{width:'100%',height:'500px',background:'red',paddingTop:'160px'}} id="productInfo">scroll 1</div>

    <div style={{width:'100%',height:'500px',background:'green',paddingTop:'160px'}} id="productRes">scroll 2</div>

    <div style={{width:'100%',height:'500px',background:'blue',paddingTop:'160px'}} id="faqs">scroll 3</div>

  </>
  )
}

export default Scroll