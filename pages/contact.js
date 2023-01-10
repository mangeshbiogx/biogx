import React from 'react'

export default function contact() {

  const asset_img = process.env.IMGPATH

  return (
    <>
<section class="page-title parallaxie"  data-bg-img={`${asset_img}'bg/biogx_about.jpg'+`} style={{  backgroundImage: `url(`+asset_img+'bg/biogx_about.jpg'+`)`  }}>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="white-bg p-md-5 p-3 d-inline-block">
        <h1 class="text-theme">Contact <span class="text-black">Us</span></h1>
        <nav aria-label="breadcrumb" class="page-breadcrumb border-top border-light pt-3 mt-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html"><i class="las la-home me-1"></i>Home</a>
            </li>
            <li class="breadcrumb-item">Contact Us
            </li>
            <li class="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="light-bg">
          <div class="row text-center">
            <div class="col-lg-5 col-12">
              <div class="section-title mt-6">
                <h2 class="title">Drop A Line!</h2> 
                <p class="mb-0">Any Question or Remarks ? Just Write Us a Message!</p>
              </div>
            </div>
            <div class="col-lg-7 ps-lg-0">
              <div class="white-bg px-3 py-5 p-md-6 shadow-sm">
                <form id="contact-form" class="row" method="post" action="php/contact.php">
                  <div id="formmessage"></div>
                  <div class="form-group col-md-6">
                    <input id="form_name" type="text" name="name" class="form-control" placeholder="Name" required="required"/>
                  </div>
                  <div class="form-group col-md-6">
                    <input id="form_email" type="email" name="email" class="form-control" placeholder="Email" required="required"/>
                  </div>
                  <div class="form-group col-md-6">
                    <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Phone" required="required"/>
                  </div>
                  <div class="form-group col-md-6">
                    <select name="select" class="form-select form-control">
                      <option>- Choose Service</option>
                      <option>Pathology</option>
                      <option>Diabetes</option>
                      <option>Chemical</option>
                    </select>
                  </div>
                  <div class="form-group col-md-12">
                    <textarea id="form_message" name="message" class="form-control" placeholder="Message" rows="3" required="required"></textarea>
                  </div>
                  <div class="col-md-12 text-center mt-4">
                    <button class="btn btn-theme"><span>Send Messages</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5 pe-lg-0">
        <div class="dark-bg px-3 py-5 p-md-5 mt-n15 custom-mt-0 text-white">
          <div class="contact-media mb-4">
            <h5 class="text-white">Find Office:</h5>
            <span>423B, Road Wordwide Country, USA</span>
          </div>
          <div class="contact-media mb-4">
            <h5 class="text-white">Contact Us:</h5>
            <ul class="list-unstyled">
              <li class="mb-2 text-white">Phone: <a href="tel:+912345678900">+91-234-567-8900</a>
              </li>
              <li className='text-white'>Email: <a href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="contact-media mb-4">
            <h5 class="text-white">Working Hours:</h5>
            <span>Monday - Saturday: 9.30am To 7.00pm</span>
          </div>
          <div class="social-icons">
            <ul class="list-inline">
              <li><a href="#"><i class="lab la-facebook-f"></i></a>
              </li>
              <li><a href="#"><i class="lab la-twitter"></i></a>
              </li>
              <li><a href="#"><i class="lab la-instagram"></i></a>
              </li>
              <li><a href="#"><i class="lab la-dribbble"></i></a>
              </li>
              <li><a href="#"><i class="lab la-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
