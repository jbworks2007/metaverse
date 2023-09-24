import React from "react";
import Link from "next/link";

export default function GameServices() {
  return (
    <section className="game-services ptb-100">
      <div className="game-service-bg pt-60 pb-60">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-5 col-md-8">
              <div className="section-title mb-5 mb-lg-0">
                <h2 className="text-white mb-4">
                Why Choose <span className="text-agomic">Anyverse</span> Metaverse Development Services? 
                </h2>
                <p className="m-0 text-off-white">
                Anyverse offers the best Metaverse development services for businesses to create immersive 
                virtual worlds that mimic the physical world. We integrate advanced technologies 
                like VR, AR, AI and blockchain to provide users with a realistic and engaging experience. 
                </p>
                <Link href="/#gamefooter">
                  <a className="game-btn-mdm mt-4 text-white">Contact Us</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="game-service-right">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row mb--200">
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs1.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            Metaverse Consulting
                          </h4>
                          <p className="m-0 text-off-white">
                            Our team not only delivers the best Metaverse platform 
                            but also provides ongoing support for a seamless experience.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs2.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            Expert Team
                          </h4>
                          <p className="m-0 text-off-white">
                            Our experienced team of full-stack blockchain developers ensure the successful 
                            completion of your metaverse project with optimal technology implementation. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row mt--200">
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs2.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            Technical Prowess
                          </h4>
                          <p className="m-0 text-off-white">
                          Our team's extensive experience with blockchain technology enables swift 
                          problem-solving and efficient delivery of solutions.
                          {" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="game-service-wrapper mb-4">
                          <div className="game-service-icon mb-2">
                            <img src="/gs4.png" alt="icon" />
                          </div>
                          <h4 className="h5 text-white fw-medium m-0 py-3">
                            Fullstack Development
                          </h4>
                          <p className="m-0 text-off-white">
                            Our certified experts offer complete dApp solutions, including front-end, back-end, 
                            and blockchain integration HTML, CSS, ReactJS, NodeJS, Python and Solidity on multiple blockchain networks.
                          {" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
