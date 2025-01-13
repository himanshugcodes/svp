"use client";
import React, { useEffect } from "react";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import ProcessSection from "@/component/ProcessSection";
import Link from "next/link";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 1000, // Animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <main>
        <section className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>
                  Cut your bills, <br />
                  not your budget- <br />
                  <span>invest in solar now</span>
                </h1>
                <p>
                  Start saving immediately with a CAPEX solar project tailored
                  to slash your operational costs
                </p>
                <Link className="btn" href="">
                  Book A Free Consultation
                </Link>
                <Link className="btn btnbg" href="">
                  Calculate My Solar Needs
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="partner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="text-center pt-4 scroll">
                  <a href="/#main-down">
                    <p>
                      Scroll down{" "}
                      <span className="arrow">
                        <LiaAngleDoubleDownSolid />
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partner section-padding pt-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="main-heading">
                  <h2 className="main-heading text-center">
                    Trusted by Top Leaders<span></span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-2 text-center pb-5">
                <img
                  className="mt-5 img-fluid"
                  src="assets/img/partner1.png"
                  alt=""
                />
              </div>
              <div className="col-md-2 text-center pb-5">
                <img
                  className="mt-5 img-fluid"
                  src="assets/img/partner1.png"
                  alt=""
                />
              </div>
              <div className="col-md-2 text-center pb-5">
                <img
                  className="mt-5 img-fluid"
                  src="assets/img/partner1.png"
                  alt=""
                />
              </div>
              <div className="col-md-2 text-center pb-5">
                <img
                  className="mt-5 img-fluid"
                  src="assets/img/partner1.png"
                  alt=""
                />
              </div>
              <div className="col-md-2 text-center pb-5">
                <img
                  className="mt-5 img-fluid"
                  src="assets/img/partner1.png"
                  alt=""
                />
              </div>
              <div className="col-md-2 text-center pb-5">
                <img
                  className="mt-5 img-fluid"
                  src="assets/img/partner1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="plans section-padding pb-3" id="main-down">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-heading">
                  <h2
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    Transparent <span> Pricing Plans</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    The price of your plant depends on many factors, including
                  </p>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-3">
                <div
                  className="plans-box-white"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img1.png"
                    alt="plans"
                  />
                  <h4>Plant size</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="plans-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img2.png"
                    alt="plans"
                  />
                  <h4>
                    Type of solar <br /> panel
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="plans-box-white"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img3.png"
                    alt="plans"
                  />
                  <h4>
                    Type of plant (off-grid, <br />
                    on-grid, hybrid)
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="plans-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="700"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img4.png"
                    alt="plans"
                  />
                  <h4>Choice of inverter</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="plans-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img5.png"
                    alt="plans"
                  />
                  <h4>
                    Mounting structure <br /> and installation
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="plans-box-white"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img6.png"
                    alt="plans"
                  />
                  <h4>Battery storage</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="plans-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img7.png"
                    alt="plans"
                  />
                  <h4>
                    Additional components <br />
                    and accessories
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="plans-box-white"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="700"
                >
                  <img
                    className="img-fluid"
                    src="assets/img/plans-img8.png"
                    alt="plans"
                  />
                  <h4>Government subsidy </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="table-plan pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  But you can’t make a decision without an estimate of cost. We
                  understand that. 
                </p>
                <p className="mb-5">
                  Here’s a breakdown of how much you can expect to save when you
                  switch to solar.
                </p>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          System <br /> Capacity
                        </th>
                        <th>
                          Cost of <br /> Solar Plant
                        </th>
                        <th>
                          Average <br /> Annual Savings
                        </th>
                        <th>
                          Return on <br /> Investment
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>50 kWp</td>
                        <td>₹22,50,000</td>
                        <td>₹6,29,000</td>
                        <td rowSpan="6">
                          3.5 years for self-funded solar plants, 5 to 6 years
                          if financed through a loan
                        </td>
                      </tr>
                      <tr>
                        <td>100 kWp</td>
                        <td>₹35,00,000</td>
                        <td>₹12,57,000</td>
                      </tr>
                      <tr>
                        <td>200 kWp</td>
                        <td>₹60,00,000</td>
                        <td>₹25,14,000</td>
                      </tr>
                      <tr>
                        <td>300 kWp</td>
                        <td>₹90,00,000</td>
                        <td>₹40,21,000</td>
                      </tr>
                      <tr>
                        <td>500 kWp</td>
                        <td>₹1,50,00,000</td>
                        <td>₹67,00,000</td>
                      </tr>
                      <tr>
                        <td>1000 kWp</td>
                        <td>₹3,00,00,000</td>
                        <td>₹1,34,00,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="video-text">
                  <h4>
                    {" "}
                    <span>“SVPL Solar </span> made it so easy. They handled
                    everything, and before I knew it, our panels were up and
                    running. Honestly, I was worried this would just add
                    another.
                    <span></span>
                  </h4>
                </div>
                <div className="video">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/s-pzOS2Ez7k?si=0OG3pAr4_k1wnUVJ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="text-center">
                  <Link className="btn btn-lg mt-4" href="">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-choose section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-md-12"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div className="main-heading pb-4">
                  <h2 className="text-center">
                    Why choose<span> SVPL Solar?</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="row justify-content-evenly align-items-center">
                  {/* Left Column */}
                  <div className="col-lg-4 pe-5">
                    <div
                      className="icon-text"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/why-choose1.png"
                        alt="why choose us"
                      />
                      <h5>
                        25-year performance <br /> guarantee
                      </h5>
                      <p>
                        We promise our solar power plants will operate
                        efficiently for the next 25 years, maintaining at least
                        85% panel efficiency. That’s our guarantee.
                      </p>
                    </div>
                    <div
                      className="icon-text"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="400"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/why-choose2.png"
                        alt="why choose us"
                      />
                      <h5>
                        Unmatched safety <br /> standards
                      </h5>
                      <p>
                        Safety is paramount to us. In our 8 years of operation,
                        none of our plants have experienced accidents. Also
                        expect zero rusting and no water leakage.
                      </p>
                    </div>
                    <div
                      className="icon-text"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/why-choose3.png"
                        alt="why choose us"
                      />
                      <h5>
                        Long-term cost <br /> savings
                      </h5>
                      <p>
                        Save money with durable components. Our solar plants use
                        only the highest-quality components, designed to last.
                      </p>
                    </div>
                  </div>

                  {/* Center Image */}
                  <div
                    className="col-lg-4 section-image"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/why-choose.png"
                      alt=""
                    />
                  </div>

                  {/* Right Column */}
                  <div className="col-lg-4 ps-5">
                    <div
                      className="icon-text"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/why-choose4.png"
                        alt="why choose us"
                      />
                      <h5>
                        Worry-free 5 year <br /> warranty
                      </h5>
                      <p>
                        Enjoy a complete 5-year warranty on your entire solar
                        plant, including free replacements. Plus, ongoing
                        service is available for a nominal fee after these 5
                        years.
                      </p>
                    </div>
                    <div
                      className="icon-text"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      data-aos-delay="400"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/why-choose5.png"
                        alt="why choose us"
                      />
                      <h5>
                        Step-by-step expert
                        <br /> guidance
                      </h5>
                      <p>
                        Solar can be complex, but we simplify it. Our
                        experienced team provides expert guidance every step of
                        the way.
                      </p>
                    </div>

                    <div
                      className="icon-text"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      data-aos-delay="600"
                    >
                      <img
                        className="img-fluid"
                        src="assets/img/why-choose6.png"
                        alt="why choose us"
                      />
                      <h5>
                        27x7 reliable
                        <br /> support
                      </h5>
                      <p>
                        Count on us for 24/7 reliable support. We respond within
                        24 hours and start solving your problem right away. No
                        one is left stranded – 8 years of dependable service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section section-padding">
          <div className="container ">
            {/* Left Content */}
            <div className="row justify-content-between">
              <div
                className="col-md-12"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ProcessSection />
              </div>

              {/* Right Image */}
              {/* <div
                className="col-md-6"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/install-engineer.png"
                  alt="Engineer installing solar panel"
                  className="img-fluid"
                />
              </div> */}
            </div>
          </div>
        </section>
        <section className="download download-guide-section">
          <div className="d-flex align-items-center">
            {/* Left Image Section */}
            <div className="image-section flex-shrink-0">
              <img
                src="assets/img/download-now.png"
                alt="Solar installation"
                className="img-fluid rounded-custom"
              />
            </div>

            {/* Right Content Section */}
            <div className="content-section ms-0 pe-5">
              <p className="guide-title">Downloadable guide</p>
              <h2 className="guide-heading">
                The Industrial Owner’s Guide To Going Solar
              </h2>
              <p className="guide-description">
                Discover everything about going solar before you take the leap.
                Grab our free handbook!
              </p>
              <ul className="guide-features">
                <li>Calculate your potential savings with solar energy</li>
                <li>Explore financing options for an easy switch</li>
                <li>Understand solar electricity generation in Maharashtra</li>
                <li>Check if your site is solar-ready</li>
                <li>Learn post-installation care and maintenance</li>
              </ul>
              <button className="btn btn-warning download-btn">
                Download Now
              </button>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="row justify-content-center">
                      <div className="col-md-7">
                        <div
                          className="awards-img text-center"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                          data-aos-delay="300"
                        >
                          <img
                            className="award img-fluid"
                            src="assets/img/award1.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="cta-main-heading"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="500"
                    >
                      <h2 className="text-center">
                        Are you an industrial business owner ready to make your{" "}
                        <span> best financial decision? </span>
                      </h2>
                    </div>
                    <div
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="700"
                    >
                      <button className="btn">Book a Free Consultation </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="award-logo section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3 text-center">
                <img src="assets/img/award-footer.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
