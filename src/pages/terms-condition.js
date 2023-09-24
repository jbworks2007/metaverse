import React from 'react';
import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import GameFooter from '@layout/Footer/GameFooter';

const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar navDark />
      <section className="crypto-cta ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="mt-5 text-justify">
                <h1 className="text-white mb-4 text-center">Terms & Conditions</h1>
                <h5 className='text-info'>IMPORTANT:</h5>
                <p className="text-muted mb-30">
                  In this page we detail the Terms and Conditions, Privacy Policy, Acceptable Usage Policy, 
                  Refund & cancellation policy governing any communications, contracts, financial transactions 
                  entered between a client (You) and Askgalore Digital India Pvt Ltd or a visitor who has sent 
                  enquiry by filling up the contact form on this website. We reserve the right to modify this 
                  page from time to time, while mentioning the last updated date for your reference. 
                </p>
                <h5 className='text-info'>Disclaimer:</h5>
                <p className="text-muted mb-30">
                  The information contained in this website is for general information purposes only. The information is provided by Askgalore Digital India Pvt Ltd on its official website https://www.askgalore.com/ and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                </p>
                <p className="text-muted mb-30">
                  In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Through this website you are able to link to other websites which are not under the control of Askgalore Digital India Pvt Ltd. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
                <p className="text-muted mb-30">
                  Every effort is made to keep the website up and running smoothly. However, Askgalore Digital India Pvt Ltd takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control. Some logos which may have been used in this website belong to their individual owners and all copyright belongs to them. Product images used herein are for display purpose only and may differ in actuality.
                </p>
                
                
                
                
                
                {/* <h2 className="text-white mb-4">Vision</h2>
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
                <h1 className='text-danger'>S P I R I T</h1> */}
                <h5 className='text-info'>Terms of Service:</h5>
                <p className="text-muted mb-30">
                  <ol>
                    <li>
                      <span className='text-danger'>Payment :</span> All charges for your Projects – Be it Website, Logo , Search Engine Optimization , eCommerce , Mobile Application , Web Hosting , Domain Name , Content Writing , Software Development or any other related item must be paid in advance according to the most current price of the Plan(s). For clients with whom we have specific contracts can pay as per specified Payment Milestones. You may pay for your Plan(s) by a payment gateway like RazorPay or via NEFT or by A/c Payee Check in India. If you choose to pay by check, your work can only start after realisation and transfer of money to our account only. For all clients having projects initiated or ongoing, post August 2017 – should be aware that Goods and Service Tax is mandatory for Askgalore Digital India Pvt Ltd as a service provider. Our GSTIN is 23AAQCA7928N1Z0. Payment of GST is mandatory against all services provided by us and the rate is 18% on Invoice Amount, irrespective of whether it is mentioned in any Proposal Document or Email Quotation or Packages mentioned on this website. For overseas clients, we will follow the prescriptions under the GST law of the Indian Government.
                    </li>
                    <li>
                      <span className='text-danger'>Employee Solicitation :</span> You agree not to approach Askgalore Digital India Pvt Ltd’s employees with a proposal to hire them as your Full Time or Part Time employees or contractors. If you were to hire any of Askgalore Digital India Pvt Ltd’s employees, you agree to pay Askgalore Digital India Pvt Ltd for each employee the greater amount of three year’s salary for that employee or INR 500,000.
                    </li>
                    <li>
                      <span className='text-danger'>Limited Liabilities :</span> Under no circumstances, including, without limitation, negligence or other tort, principles of contract, warranty, breach of any statutory duty, principles of indemnity or contribution, the failure of any limited or exclusive remedy to achieve its essential purpose or otherwise, shall Askgalore Digital India Pvt Ltd in creating, producing or distributing the Plan(s) there under be liable to you for any indirect, special, consequential, incidental or exemplary damages including, without limitation, to damages for lost profits, loss of use, lost of data, errors, defects, phone bills, communication lines bills, loss of privacy, damages to third party even if Askgalore Digital India Pvt Ltd has been advised of the possibility of such damages. In no event will Askgalore Digital India Pvt Ltd or its suppliers have any liability for unauthorized access to, theft or destruction of any content made available for distribution by the Plan(s) through fraud or devices.
                    </li>
                    <li>
                      <span className='text-danger'>Indemnification :</span> You agree that you shall defend by counsel reasonably accepted by Askgalore Digital India Pvt Ltd, protect and hold Askgalore Digital India Pvt Ltd harmless from and against any and all demands, liabilities, losses, costs, expenses, claims, including reasonable attorneys’ and consultants’ fees and court costs, demands, causes of action, or judgment directly or indirectly arising out of or related to the Plan(s) provided by Askgalore Digital India Pvt Ltd to you.
                    </li>
                    <li>
                      <span className='text-danger'>Termination Instructions :</span> To terminate your Plan(s) and Projects or Agreements with Askgalore Digital India Pvt Ltd you must follow these instructions. Any other forms of termination will not be acceptable. You must provide Askgalore Digital India Pvt Ltd with notice of a termination at least 7 days before the end of the Term by e-mail containing the following pieces of information 1) Company/Firm name, 2)Service to be discontinued 3) Date of discontinuation of service. The termination request will be accepted only from the authorized representative of the client/customer. Once we receive your Notice of Termination we will send you a confirmation e-mail. Any attempts to cancel by telephone voice messaging , SMS , Text Messaging system will be rejected and billing will continue until these instructions have been followed. Any and all data and/or material placed by you to Askgalore Digital India Pvt Ltd’s equipment can be suggested to be deleted upon termination. Askgalore Digital India Pvt Ltd is not obligated to back-up any of this data and/or material after a Notice of Termination. Termination of an existing agreement / Website / Mobile Application development / Search Engine Marketing / eCommerce / Software Development / Domain Registration / Web Hosting and any related work can only be requested to be terminated, provided you do not have any pending bills or due Invoices. If you have any unpaid Bills , Askgalore Digital India Pvt Ltd may not agree to such termination intimation untill such payment is completed
                    </li>
                    <li>
                      <span className='text-danger'>Disclosure :</span> Askgalore Digital India Pvt Ltd may reveal any information it deems necessary or appropriate, including, without limitation, user profile (e.g. name, e-mail address, etc.), usage history, material contained on Askgalore Digital India Pvt Ltd’s system in order to abide by any applicable laws, lawful governmental requests, to protect Askgalore Digital India Pvt Ltd’s systems and customers, or to provide and protect the quality, functionality, and integrity of Askgalore Digital India Pvt Ltd’s business and equipment. Askgalore Digital India Pvt Ltd reserves the right to report any activities that it suspects violates any laws or regulations to the appropriate law enforcement officials, regulators or any other appropriate third parties.
                    </li>
                    <li>
                      <span className='text-danger'>Advertising :</span> Askgalore Digital India Pvt Ltd may, free of any obligation to compensation, payment or reward, use your name and refer to you as a client, in advertising, publicity, or similar materials distributed or displayed to current or prospective clients. If you feel that your name should not be used or can not be used for such purposes, you must send an email request to our official email id info@agomic.com from your registered email id – specifying your Sitename / Project Agreement details , with valid cause.
                    </li>
                    <li>
                      <span className='text-danger'>Laws :</span> The entire agreement shall be governed by the laws of India and the state of Madhya Pradesh and its validity constructions, interpretation and legal effect shall be governed by the laws and judicial decisions of the State of Madhya Pradesh applicable to contracts entered into and performed entirely within the State of Madhya Pradesh. You shall at all times accord with all applicable laws and regulations and shall protect and save Askgalore Digital India Pvt Ltd harmless from your failure to stray from accordance. You agree that Askgalore Digital India Pvt Ltd shall not have to perform any obligations set forth in this Agreement if such performance would violate any present or future law, regulation or policy of any applicable government. You shall not use the Plan(s) in any way that violates Indian export laws, including without limitation, uses related to the distribution of weapons of mass destruction, prohibited chemical, biological, or nuclear weapons or missile use.
                    </li>
                    <li>
                      <span className='text-danger'>Refund Policy :</span> Due to the nature of our business we don’t offer 100% refund or money back, be it for custom web development or logo design or blog design , eCommerce , Search Engine Marketing / Mobile Application Development and related items. We offer partial refunds after adjusting the work done – upto 50% of payment till date in any Contract / Project. If you don’t want to agree with these terms of service, then do not proceed any further. Any further action by you is considered as your consent to our Terms and Conditions . Once you cancel the work, your money will be calculated based on the services already executed and delivered. The deliverables would be the source files as well as related database, diagrams and your documents. We’ll issue the refund within 15 working days . No Refund in SEO : This will be defined on a Project to Project basis . Last updated on 30th Dec 2021
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GameFooter />
    </Layout>
  );
};

export default AboutUs;
