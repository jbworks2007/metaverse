import React from "react";
import Link from "next/link";

export default function TopSection() {
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
        className="slider-one slider-2"
        style={{
          background: "url('/main-2.jpg') no-repeat center center/cover",
        }}
      >
        <div className="container">
          <div className="">
            <div className="col-lg-6 offset-lg-6">
              <div className="hero-content text-end">
                <h1
                  className="fw-bold display-5 text-white mb-4"
                  data-aos="fade-up"
                >
                  Metaverse solution for <br/>
                  <span className="gr-text ms-2">E-Commerce</span>
                </h1>
                {/* <p className="lead text-off-white m-0">
                  Give your Website the speed, security, and uptime it
                  deserves and become part of the fastest Web Hosting.
                </p> */}
                <Link href="/metaverse-ecommerce/#content">
                  <a className="btn-gradient mt-4 link-with-icon">Explore More<i className="far fa-arrow-right"></i></a>
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
