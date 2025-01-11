import React from "react";
import {
  FaFacebookF,
  FaAngleRight,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="row">
                <div className="col-md-4 pe-md-2">
                  <div className="single-footer">
                    <a href="/">
                      <img alt="Frisky Panda" src="assets/img/logo.png" />
                    </a>
                    <p className="mt-3">
                      Contact us today to explore our services and take
                      advantage of the great deals available from the leading
                      solar and cable companies in the DC, Maryland, and
                      Virginia area. Let us be your trusted partner in finding
                      the best solutions for your energy and connectivity needs.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-3 ps-md-5">
                  <div className="single-footer ps-md-2">
                    <div className="single-footer-head">
                      <h3>Quick Links</h3>
                    </div>
                    <ul className="quick-links">
                      <li>
                        <a href="/">
                          <FaAngleRight /> Career{" "}
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaAngleRight /> Partner with us
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaAngleRight /> Contact us
                        </a>
                      </li>
                      {/* <li><a href="/"><FaAngleRight /> Sign up for our newsletter</a></li> */}
                      <li>
                        <a href="/">
                          <FaAngleRight /> Privacy policy 
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <FaAngleRight /> Terms of service 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-5 ps-md-5">
                  <div className="single-footer footer-add">
                    <div className="single-footer-head">
                      <h3>Contact Us</h3>
                    </div>
                    <ul className="footer-contact">
                      <li>
                        <i>
                          {" "}
                          <FaPhone />
                        </i>
                        <a href="tel:9518798020"> 9518798020</a>
                      </li>
                      <li>
                        <i>
                          <IoMdMail />
                        </i>
                        <a href="mailto:sales@svplsolar.com">
                          {" "}
                          sales@svplsolar.com
                        </a>
                      </li>
                      <li>
                        <i>
                          <FaLocationDot />
                        </i>
                        <a href="" target="_blank">
                          {" "}
                          SVPL Solar, N 101 M.I.D.C. Jalgaon, 425003,
                          Maharashtra
                        </a>
                      </li>
                    </ul>
                    <div className="social pt-3">
                      <FaFacebookF size={20} color="#fff" className="me-3" />
                      <FaXTwitter size={20} color="#fff" className="me-3" />
                      <FaInstagram size={20} color="#fff" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer-bottom">
      <div className="bottom-shape-footer"><img src="assets/images/footer-bottom.png" alt="shape-img"/></div>
      <div className="container">
         <div className="footer-wrapper d-flex align-items-center  justify-content-between flex-wrap">
            <p className="footer-copyright mb-0 pb-3 pb-md-0">© 2024 <a href="https://friskypanda.in/">Frisky Panda</a></p>
            <div className="footer-global-social">
               <ul className="footer-global-social-link">
                  <li><a href="#" target="blank"></a></li>
                  <li><a href="https://www.instagram.com/friskypanda.in/" target="blank"></a></li>
                  <li><a href="" target="blank"></a></li>
               </ul>
            </div>
         </div>
      </div>
   </div> */}
      </footer>
    </>
  );
};

export default Footer;
