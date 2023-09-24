import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroTwelve() {
  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2000,
    },
  };
  return (
    <div className="hero-twelve">
    <div
            className="slider-one slider on-sm"
            style={{
              background: "url('/main-five.jpg') no-repeat center center/cover",
            }}
          >
            <div className="container">
              <div className="">
                <div className="col-lg-12">
                  <div className="hero-content text-center">
                    <h1
                      className="fw-bold display-5 text-white mb-4"
                      data-aos="fade-up"
                    >
                      Enter the Metaverse with AnyVerse<br/>
                      <span className="text-danger ms-2 w-stroke">Metaverse Development Solutions.</span>
                    </h1>
                    <h5 className="text-light">
                      Deliver the future of virtual reality to your existing and potential customers with our cutting-edge metaverse development solutions. 
                      Let's together empower your metaverse vision and make it a reality. 
                    </h5>
                    <p className="lead text-info">Convert your Ideas into Virtual Reality with Us</p>
                    <Link href="/#metaverse-solutions">
                      <a className="btn-gradient mt-2 link-with-icon">Know More<i className="far fa-arrow-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      {/* <Swiper {...swiperOption}>
        <SwiperSlide>
          <div
            className="slider-one slider"
            style={{
              background: "url('/slider/sl-1-1.jpg') no-repeat center center/cover",
            }}
          >
            <div className="container">
              <div className="">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1
                      className="fw-bold display-5 text-white mb-4"
                      data-aos="fade-up"
                    >
                      Reliable Hosting For Game
                      <span className="gr-text ms-2">Solutions.</span>
                    </h1>
                    <p className="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <Link href="/request-for-demo">
                      <a className="btn-gradient mt-4 link-with-icon">Order Now <i className="far fa-arrow-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-one slider"
            style={{
              background: "url('/slider/sl-2-2.jpg') no-repeat center center/cover",
            }}
          >
            <div className="container">
              <div className="">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1
                      className="fw-bold display-5 text-white mb-4"
                      data-aos="fade-up"
                    >
                      Reliable Hosting For Game
                      <span className="gr-text ms-2">Solutions.</span>
                    </h1>
                    <p className="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <Link
                      href="/request-for-demo" >
                      <a className="btn-gradient mt-4 link-with-icon"> Order Now <i className="far fa-arrow-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-one slider"
            style={{
              background: "url('/slider/sl-1-1.jpg') no-repeat center center/cover",
            }}
          >
            <div className="container">
              <div className="">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1
                      className="fw-bold display-5 text-white mb-4"
                      data-aos="fade-up"
                    >
                      Reliable Hosting For Game
                      <span className="gr-text ms-2">Solutions.</span>
                    </h1>
                    <p className="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <Link
                      href="/request-for-demo" >
                      <a className="btn-gradient mt-4 link-with-icon"> Order Now <i className="far fa-arrow-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
