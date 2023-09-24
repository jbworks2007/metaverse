import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GameServer() {
  return (
    <section className='ptb-120' id="metaverse-solutions">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h2 className='text-white mb-3'>Our <span className='gr-text'>Metaverse</span> Development Services </h2>
              <p className='text-off-white'>Virtual Reality is a new Reality, and we are here to make it happen for you. Explore a range of metaverse opportunities and metaverse development services by Anyverse.</p>
            </div>
          </div>
        </div>
        <div className="row pt-30">
          <div className="col-lg-6 mt-4">
            <div className="position-relative d-flex flex-column h-100 flex-wrap game-service-wrapper p-5 rounded-custom">
              <div className="cta-left-info mb-2">
                <h5 className='text-agomic'>Metaverse for Real Estate</h5>
                <p className='text-light'>
                  Revolutionize your real estate business by entering metaverse real estate, which not ... 
                {' '}
                </p>
              </div>
              <div className="action-btns mt-auto">
                <Link href="/metaverse-real-estate">
                  <a className="btn btn-outline-light btn-sm">
                    {' '}
                    Read More
                  </a>
                </Link>
              </div>
              <div className="cta-img position-absolute right-0 bottom-0">
                <Image
                  width={223}
                  height={223}
                  src="/cta-img-1.png"
                  alt="cta"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="position-relative d-flex flex-column h-100 flex-wrap game-service-wrapper p-5 rounded-custom">
              <div className="cta-left-info mb-2">
                <h5 className='text-agomic'>Metaverse for Banking</h5>
                <p className='text-light'>
                Banking in Metaverse is the next frontier for financial services. Become a global banking ...
                {' '}
                </p>
              </div>
              <div className="action-btns mt-auto">
                <Link href="/metaverse-banking">
                  <a className="btn btn-outline-light btn-sm">
                    Read More
                  </a>
                </Link>
              </div>
              <div className="cta-img position-absolute right-0 bottom-0">
                <Image
                  width={223}
                  height={223}
                  layout="responsive"
                  src="/cta-img-2.png"
                  alt="cta img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-30">
          <div className="col-lg-6 mt-4">
            <div className="position-relative d-flex flex-column h-100 flex-wrap game-service-wrapper p-5 rounded-custom">
              <div className="cta-left-info mb-2">
                <h5 className='text-agomic'>Metaverse for Corporate Branding</h5>
                <p className='text-light'>
                Elevate your corporate branding to the next level with metaverse, creating a virtual ...
                {' '}
                </p>
              </div>
              <div className="action-btns mt-auto">
                <Link href="/metaverse-corporate-branding">
                  <a className="btn btn-outline-primary btn-sm">
                    {' '}
                    Read More
                  </a>
                </Link>
              </div>
              <div className="cta-img position-absolute right-0 bottom-0">
                <Image
                  width={223}
                  height={223}
                  src="/cta-img-3.png"
                  alt="cta"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="position-relative d-flex flex-column h-100 flex-wrap game-service-wrapper p-5 rounded-custom">
              <div className="cta-left-info mb-2">
                <h5 className='text-agomic'>Metaverse for Travel & Tourism</h5>
                <p className='text-light'>
                Give your customers great travel excursions in the metaverse. Pitch them for the perfect ...
                {' '}
                </p>
              </div>
              <div className="action-btns mt-auto">
                <Link href="/metaverse-travel-tourism">
                  <a className="btn btn-outline-primary btn-sm">
                    Read More
                  </a>
                </Link>
              </div>
              <div className="cta-img position-absolute right-0 bottom-0">
                <Image
                  width={223}
                  height={223}
                  layout="responsive"
                  src="/cta-img-4.png"
                  alt="cta img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-30">
          <div className="col-lg-6 mt-4">
            <div className="position-relative d-flex flex-column h-100 flex-wrap game-service-wrapper p-5 rounded-custom">
              <div className="cta-left-info mb-2">
                <h5 className='text-agomic'>Metaverse for E-Commerce</h5>
                <p className='text-light'>
                Transform the way your customers shop online with Metaverse e-commerce ...
                {' '}
                </p>
              </div>
              <div className="action-btns mt-auto">
                <Link href="/metaverse-ecommerce">
                  <a className="btn btn-outline-danger btn-sm">
                    {' '}
                    Read More
                  </a>
                </Link>
              </div>
              <div className="cta-img position-absolute right-0 bottom-0">
                <Image
                  width={223}
                  height={223}
                  src="/cta-img-5.png"
                  alt="cta"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="position-relative d-flex flex-column h-100 flex-wrap game-service-wrapper rounded-custom p-5">
              <div className="cta-left-info mb-2 ">
                <h5 className='text-agomic'>Metaverse for Government & NGOs</h5>
                <p className='text-light'>
                Metaverse for Government & NGOs offers organizations a realistic and immersive ...
                  {' '}
                </p>
              </div>
              <div className="action-btns mt-auto">
                <Link href="/metaverse-gov-np">
                  <a className="btn btn-outline-danger btn-sm">
                    Read More
                  </a>
                </Link>
              </div>
              <div className="cta-img position-absolute right-0 bottom-0">
                <Image
                  width={223}
                  height={223}
                  layout="responsive"
                  src="/cta-img-6.png"
                  alt="cta img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="server-left position-relative z-5">
              <div className="server-list mb-3">
                <Link href='/'>
                  <a className='text-decoration-none'>
                    <div className='d-flex align-items-center'>
                      <img src="/server/s1.png" className='img-fluid me-3' alt="server" />
                      <h5 className='m-0 text-white fw-medium'>7 Days to Die</h5>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="server-list mb-3">
                <Link href='/'>
                  <a className='text-decoration-none'>
                    <div className='d-flex align-items-center'>
                      <img src="/server/s2.png" className='img-fluid me-3' alt="server" />
                      <h5 className='m-0 text-white fw-medium'>Ark Survival Evolved</h5>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="server-list mb-3">
                <Link href='/'>
                  <a className='text-decoration-none'>
                    <div className='d-flex align-items-center'>
                      <img src="/server/s3.png" className='img-fluid me-3' alt="server" />
                      <h5 className='m-0 text-white fw-medium'>Counter Strike GO</h5>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="server-list mb-3">
                <Link href='/'>
                  <a className='text-decoration-none'>
                    <div className='d-flex align-items-center'>
                      <img src="/server/s4.png" className='img-fluid me-3' alt="server" />
                      <h5 className='m-0 text-white fw-medium'>Call of Duty</h5>
                    </div>
                  </a>
                </Link>
              </div>
              <img
                src="/circle.png"
                className="server-circle z-2"
                alt="cicle"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="game-card">
              <div className="card-top">
                <img src="/server/card-img.png"
                  className='img-fluid w-100' alt="game" />
                <h4 className='mt-4 mb-3'>Battlefield Bad Company-2
                  Ranked Servers.</h4>
                <p className='m-0 text-off-white'>Our custom control panel allows you to configure and customize & Administrators.</p>
              </div>
              <div className="card-bottom">
                <Link href="/" >
                  <a className='d-flex justify-content-between'>From $6.00/GB Per Month
                    <img src="/server/arrows.svg" alt="" /></a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="server-list mb-3">
              <Link href='/'>
                <a className='text-decoration-none'>
                  <div className='d-flex align-items-center'>
                    <img src="/server/s5.png" className='img-fluid me-3' alt="server" />
                    <h5 className='m-0 text-white fw-medium'>7 Days to Die</h5>
                  </div>
                </a>
              </Link>
            </div>
            <div className="server-list mb-3">
              <Link href='/'>
                <a className='text-decoration-none'>
                  <div className='d-flex align-items-center'>
                    <img src="/server/s6.png" className='img-fluid me-3' alt="server" />
                    <h5 className='m-0 text-white fw-medium'>Ark Survival Evolved</h5>
                  </div>
                </a>
              </Link>
            </div>
            <div className="server-list mb-3">
              <Link href='/'>
                <a className='text-decoration-none'>
                  <div className='d-flex align-items-center'>
                    <img src="/server/s1.png" className='img-fluid me-3' alt="server" />
                    <h5 className='m-0 text-white fw-medium'>Unreal Tournament 3 </h5>
                  </div>
                </a>
              </Link>
            </div>
            <div className="server-list mb-3">
              <Link href='/'>
                <a className='text-decoration-none'>
                  <div className='d-flex align-items-center'>
                    <img src="/server/s8.png" className='img-fluid me-3' alt="server" />
                    <h5 className='m-0 text-white fw-medium'>Garry's Mod</h5>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        {/* <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-lg-4 col-md-7">
                        <div className="game-server-lists d-flex align-items-center justify-content-between">
                            <div className='d-none d-md-block'>
                                <img src="/server/c-arrow.png" alt="shape" />
                            </div>
                            <ul className='list-unstyled d-flex game-img'>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e1.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e2.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e3.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e4.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <Link href='/'>
                                <a className="fw-medium text-white">More Games</a>
                            </Link>
                        </div>
                    </div>
                </div> */}
      </div>
    </section>
  )
}
