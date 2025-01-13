import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

import "swiper/css";
import "swiper/css/pagination";

const ProcessSection = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={2}
      spaceBetween={30}
      mousewheel
      // pagination={{ clickable: true }}
      loop={true} // Enable looping
      autoplay={{
        delay: 5000, // Time between transitions (in milliseconds)
        disableOnInteraction: false, // Keep autoplay running after user interaction
      }}
      modules={[Mousewheel, Pagination, Autoplay]} // Include Autoplay module
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="step">
          <div className="step-number">
            <span className="normal">01</span>
          </div>
          <div>
            <h5 className="step-title">Start with a free site survey</h5>
            <p className="step-description">
              Our engineer visits your site. We analyse your energy needs.
              Estimate your solar plant’s capacity. Discuss technology options
              with you.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step">
          <div className="step-number">
            <span className="normal">02</span>
          </div>
          <div>
            <h5 className="step-title">Dive into your free proposal</h5>
            <p className="step-description">
              On our second visit, see a digital model of your future solar
              plant. Get a detailed generation report and ROI analysis.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step">
          <div className="step-number">
            <span className="normal">03</span>
          </div>
          <div>
            <h5 className="step-title">We handle it all</h5>
            <p className="step-description">
              We manage paperwork. Liaise with local authorities. Create
              detailed layouts for easy maintenance and permissions.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step">
          <div className="step-number">
            <span className="normal">04</span>
          </div>
          <div>
            <h5 className="step-title">We manage every detail</h5>
            <p className="step-description">
              Our ERP system tracks your project. From grid connectivity to a
              smooth installation. We ensure your plant is up and running on
              time.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step">
          <div className="step-number">
            <span className="normal">05</span>
          </div>
          <div>
            <h5 className="step-title">We keep watch</h5>
            <p className="step-description">
              Our team monitors your plant online. Receive monthly reports,
              alerts, and recommendations. We ensure your system runs at peak
              performance.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="step">
          <div className="step-number">
            <span className="normal">06</span>
          </div>
          <div>
            <h5 className="step-title">We maintain your plant</h5>
            <p className="step-description">
              We provide free annual maintenance for 5 years, including
              quarterly check-ups, deep cleaning, and all repairs to keep your
              solar plant running at peak efficiency.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProcessSection;
