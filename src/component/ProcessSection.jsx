import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
  const [isSliderVisible, setIsSliderVisible] = useState(false); // Track visibility of the slider
  const swiperRef = useRef(null); // Reference to the swiper instance
  const sliderRef = useRef(null); // Reference to the slider container

  // Slides data
  const slides = [
    {
      step: "01",
      title: "Start with a free site survey",
      description:
        "Our engineer visits your site. We analyse your energy needs. Estimate your solar plant’s capacity. Discuss technology options with you.",
      image: "assets/img/step1.png", // Replace with actual image path
    },
    {
      step: "02",
      title: "Dive into your free proposal",
      description:
        "On our second visit, see a digital model of your future solar plant. Get a detailed generation report and ROI analysis.",
      image: "assets/img/step2.png", // Replace with actual image path
    },
    {
      step: "03",
      title: "We handle it all",
      description:
        "We manage paperwork. Liaise with local authorities. Create detailed layouts for easy maintenance and permissions.",
      image: "assets/img/step3.png", // Replace with actual image path
    },
    {
      step: "04",
      title: "We manage every detail",
      description:
        "Our ERP system tracks your project. From grid connectivity to a smooth installation. We ensure your plant is up and running on time.",
      image: "assets/img/step4.png", // Replace with actual image path
    },
    {
      step: "05",
      title: "We keep watch",
      description:
        "Our team monitors your plant online. Receive monthly reports, alerts, and recommendations. We ensure your system runs at peak performance.",
      image: "assets/img/step5.png", // Replace with actual image path
    },
    {
      step: "06",
      title: "We maintain your plant",
      description:
        "We provide free annual maintenance for 5 years, including quarterly check-ups, deep cleaning, and all repairs to keep your solar plant running at peak efficiency.",
      image: "assets/img/step6.png", // Replace with actual image path
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSliderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the slider is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Start or stop autoplay based on slider visibility
    if (swiperRef.current && isSliderVisible) {
      swiperRef.current.swiper.autoplay.start(); // Start autoplay when visible
    } else if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop(); // Stop autoplay when not visible
    }
  }, [isSliderVisible]);

  return (
    <div className="row justify-content-between">
      {/* Left Section: Content */}
      <div
        className="col-md-5"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="main-heading pb-4">
              <h2 className="text-white" style={{ fontSize: "48px" }}>
                SVPL Solar<span> Process</span>
              </h2>
            </div>
          </div>
        </div>
        <div ref={sliderRef}>
          <Swiper
            direction="vertical"
            slidesPerView={2}
            spaceBetween={30}
            mousewheel
            loop={true}
            autoplay={{
              delay: 5000, // Time between transitions (in milliseconds)
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use realIndex
            modules={[Mousewheel, Pagination, Autoplay]}
            className="mySwiper"
            ref={swiperRef} // Attach swiper instance to ref
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="step">
                  <div className="step-number">
                    <span className="normal">{slide.step}</span>
                  </div>
                  <div>
                    <h5 className="step-title">{slide.title}</h5>
                    <p className="step-description">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Right Section: Image */}
      <div
        className="col-md-6 d-flex align-items-center justify-content-center"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <img
          src={slides[activeIndex].image}
          alt={slides[activeIndex].title}
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default ProcessSection;
