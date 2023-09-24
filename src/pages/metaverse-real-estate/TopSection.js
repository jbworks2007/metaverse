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
          background: "url('/main-1.jpg') no-repeat center center/cover",
        }}
      >
        <div className="container">
          <div className="">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1
                  className="mt-5 fw-bold display-5 text-white mb-4"
                  data-aos="fade-up"
                >
                  Metaverse solution for <br/>
                  <span className="gr-text ms-2">Real Estate </span>
                </h1>
                {/* <p className="lead text-off-white m-0">
                Revolutionize your real estate business by entering metaverse real estate, which not only gives your potential customers options to 
                visit the virtual property in the metaverse but also transforms the buying and selling experience.
                </p> */}
                <Link href="/metaverse-real-estate/#content-re">
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
