import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

import 'swiper/css';
import 'swiper/css/pagination';

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
        delay: 3000, // Time between transitions (in milliseconds)
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
              Our engineer visits your site. We analyse your energy needs. Estimate your solar plant’s capacity. Discuss technology options with you.
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
            <h5 className="step-title">Dive into your free <br /> proposal</h5>
            <p className="step-description">
              Our engineer visits your site. We analyse your energy needs. Estimate your solar plant’s capacity. Discuss technology options with you.
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
            <h5 className="step-title">Dive into your free proposal</h5>
            <p className="step-description">
              Our engineer visits your site. We analyse your energy needs. Estimate your solar plant’s capacity. Discuss technology options with you.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProcessSection;
