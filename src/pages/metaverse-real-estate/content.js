import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import {FiEdit} from 'react-icons/fi';

const Content = () => {
  return (
    <section className="crypto-cta ptb-120" id='content-re'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h2 className="text-white mb-4">Metaverse for Real Estate</h2>
              <p className="text-muted mb-30">
                Revolutionize your real estate business by entering metaverse real estate, 
                which not only gives your potential customers options to visit the virtual 
                property in the metaverse but also transforms the buying and selling experience. 
              </p>
              {/* <Link href="/about-us" >
                <a className="btn rounded-pill btn-primary">
                  <span className='pe-1'>Read Reviews</span>
                  <FaArrowRight />
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center text-left "
          style={{ textAlign: "left" }}
        >
          <div className="col-xl-10 col-lg-12 col-md-12 ">
            <div
              className="app-two-single-feature d-md-flex align-items-start mb-30"
              id="info-section"
            >
              <div className="app-two-single-feature-icon box-one me-3 mb-4 mb-md-0">
                <i className="far">
                  <FiEdit />
                </i>
              </div>
              <div className="app-two-single-feature-content text-left">
                <p>
                  <strong>
                    <h4>Develop Real Estate in Metaverse with Anyverse</h4>
                  </strong>
                  Metaverse and Real Estate are the trends in today's world. The
                  Metaverse is a dynamic virtual environment with numerous
                  virtual worlds where users can interact with their avatars.
                  Many of these virtual worlds include photorealistic avatars
                  that give them the appearance of virtual recreations of the
                  actual world. The question now arises, how does the land
                  appear in the Metaverse? Well, we are here to assist you with
                  how Metaverse Real Estate works.
                  <br></br>
                  <br></br>
                  <h5>
                    <strong>What is Metaverse Real Estate? </strong>
                  </h5>
                  Metaverse Real Estate refers to plots of land or residential
                  or commercial structures in a virtual environment. Real Estate
                  in Metaverse allows one to navigate and feel like the real
                  world. So, no matter if your clients are far away, you can
                  sell your property with Metaverse real estate, making your
                  buyers feel the place virtually
                  <br></br>
                  <br></br>
                  <h5>
                    <strong>Metaverse for Real Estate</strong>
                  </h5>
                  The metaverse real estate is pixels on the computer screen.
                  Many platforms have been built to be programmable environments
                  where users can interact socially, trade NFTs, play games,
                  promote their business, and even attend meetings using 3D
                  avatars.
                  <br></br>
                  <br></br>
                  Virtual real estate is expected to increase in value with the
                  evolution of the metaverse. After Facebook changed its name to
                  META and showed targeted interest in the metaverse, metaverse
                  real estate was booming in the last quarter of 2021. The price
                  of metaverse real estate is expected to increase by 45.2% CAGR
                  from 2020 to 2025.
                  <br></br>
                  <br></br>
                  Like traditional real estate, properties can be constructed,
                  purchased, and sold easily in metaverse real estate. Being the
                  property owner, you can easily rent it to other people.
                  Compared to traditional real estate transactions, Metaverse
                  transactions are far less complicated because users may
                  identify suitable properties, handle the paperwork, and
                  communicate with brokers and agents from their homes. Users
                  can also purchase metaverse land and afterwards rent it out.
                  <br></br>
                  <br></br>
                  <h5>
                    <strong>
                      How do Anyverse help develop metaverse real estate?
                    </strong>
                  </h5>
                  Metaverse real estate provides people with a place to connect
                  with people located in distant locations across the globe.
                  Investing in metaverse real estate can be profitable for key
                  players in the AEC industry. Anyverse is a metaverse real
                  estate development firm that can help you transform your real
                  estate business into metaverse real estate. We develop
                  successful metaverse real estate and help you grow your
                  business into the blockchain world. Transform your physical
                  asset in the virtual world using Anyverse Metaverse Real
                  Estate solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content