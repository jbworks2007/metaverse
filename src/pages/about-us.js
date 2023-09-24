import React from 'react';
import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import GameFooter from '@layout/Footer/GameFooter';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar navDark />
      <section className="crypto-cta ptb-120">
        <div className="container">
        <div className="row justify-content-center">
          <div className='col-lg-6'>
          {/* <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <h1 className='text-agomic'>Anyverse.me</h1>
            <p className='sub-text'>A product of AskGalore Digital India Pvt Ltd</p>
          </div> */}
          </div>
          <div className='col-lg-6'>
            
          </div>
        </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mt-5 text-justify">
                <h2 className="text-white mb-4">About Us</h2>
                <p className="text-muted mb-30">
                  <b className='lead'><span className='text-agomic'>Anyverse.me</span> is a product of <a href="https://www.askgalore.com/">AskGalore Digital India Pvt Ltd (AskGalore.com)</a></b><br/>
                  AskGalore Digital India Pvt Ltd incorporated as <b>Private Limited Company</b> recognized as a startup by the 
                  Department for Promotion of Industry and Internal Trade (<b>DPIIT</b>).
                  We are committed to constant value creation through technology advancements in New Age tech!
                  Ideas find wings when the right steps are followed to transform them into pragmatic solutions. 
                  Meticulous planning, a hawk-eye on details and precision in execution is key to creating scalable products and solutions – and thereby lasting value.
                </p>
                <Image
                  width={700}
                  height={492}
                  layout="responsive"
                  src="/certficate.jpg"
                  alt="certificate"
                  className="img-fluid"
                />
                <h2 className="mt-5 text-white mb-4">Vision</h2>
                <p className="text-muted mb-30">
                  To build a technology company focused on Blockchain, AI/ML, RPA, AR/VR, Data Sciences & Cybersecurity.
                  AskGalore’s vision is to build scalable and robust software for clients; and to build in-house niche products for targeted and select industry applications.
                  By following the best product and software development methodologies, our goal is to create products that deliver awesome user experience and create value for all stakeholders.
                </p>
                <h2 className="text-white mb-4">Mission</h2>
                <p className="text-muted mb-30">
                  AskGalore’s mission is to establish a credible presence in the DApps space by 2023. With the objective of creating value for all stakeholders, AskGalore will target to grow its presence globally across markets, to develop products focused on Blockchain, AI/ML, RPA, AR/VR, Data Sciences & Cybersecurity.
                  With a people focus at the core of the company’s growth strategy, AskGalore will create COEs in all the above areas and develop an entrepreneurial culture.
                </p>
                <h2 className="text-white mb-4">Our Values</h2>
                <h1 className='text-danger'>S P I R I T</h1>
                <p className="text-muted mb-30">
                  Core values at AskGalore that drives results and keeps the momentum going.
                  <ul>
                    <li>
                      <span className='text-danger'>S</span>ERVICE: We seem to have a flair for almost all your requirements! We don’t just develop our products and services, we craft them from the scratch.
                    </li>
                    <li>
                      <span className='text-danger'>P</span>ERFORMANCE: The drive to work towards an effective and optimum outcome results from our objective of customer satisfaction and client’s happiness.
                    </li>
                    <li>
                      <span className='text-danger'>I</span>NTEGRITY:
                        We deliver results without compromising on our or the clients’ integrity. We go that extra mile always, yet contained by the boundaries of the law.
                    </li>
                    <li>
                      <span className='text-danger'>R</span>IGOUR:
                        Our diligence stems from the sundry creative areas our team focuses on and has a knack for. Our proficiency helps us deliver high-quality results.
                    </li>
                    <li>
                      <span className='text-danger'>I</span>NNOVATION:
                        We strive to drive away from the mainstream; breaking the fourth wall is all about outdoing the clients’ expectations into leading-edge products.
                    </li>
                    <li>
                      <span className='text-danger'>T</span>EAMWORK:
                        Our team believes in closely working on project, we provide an approach of extended team support to the companies rather than merely working on the project.
                    </li>
                  </ul>
                </p>
                {/* <Link href="/" >
                  <a className="btn rounded-pill btn-primary">
                    <span className='pe-1'>Read Reviews</span>
                    <FaArrowRight />
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <SupportOne className="true" /> */}
      <GameFooter />
    </Layout>
  );
};

export default AboutUs;
