import React from 'react';
import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import GameFooter from '@layout/Footer/GameFooter';
import SupportOne from '@components/support/SupportOne';



const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar navDark />
      <section className="crypto-cta ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className='mt-5 text-justify'>
              <h1 className='text-primary text-center'>Privacy Policy</h1>
              <p className='text-muted'>
                The privacy policy (“Policy”) is an explanation of the policy regarding the collection, use and disclosure of Information by Askgalore Digital India Private Limited and/or its subsidiary(ies) and/or affiliate(s) (collectively referred to as the “Company”), which operates various websites, including sub-sites and applications. The privacy policy is applicable from the time the user registers on this website and accepts the terms and conditions of the site policy.
                <ol>
                  <li>
                    Personal identification information: The personal information provided by the users to us will not be provided to the third parties (developers/agents/owners) without previous consent of the concerned user. However, information which is general in nature may be revealed to third parties.
                  </li>
                  <li>
                    Non-personal identification information: Every effort will be made to maintain the Confidentiality and Integrity of the information provided by the user. However, the user shall be solely responsible for maintaining the confidentiality of the user password, identification and all other activities performed by the user including both online and offline activities or transactions via debit card, credit card or any other payment mode. Askgalore digital India pvt ltd assumes no responsibility for improper usage of any of the payment instruments such as Debit and Credit Cards.
                  </li>
                  <li>
                    How we protect your information: For registration and such other purposes, we may collect information from the user. Use such information for providing User a better user experience and services as per their preferences. In order to improve the responsiveness of the website, electronic tools such as cookies, etc. may be used and user IP Address may be tracked.
                  </li>
                  <li>
                    Cookies: We employ the use of cookies. By accessing Askgalore.com, you agreed to use cookies in agreement with the AskGalore Digital India Private Limited’s Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                  </li>
                  <li>
                    Sharing your personal information: User agrees that his/her information may be used by Askgalore Digital India pvt ltd for providing services to the user. Users always have the option of not providing the information which is not mandatory.Askgalore digital India Pvt ltd may contact the user by using his/her information to provide information regarding the product and services of user interest. By accepting this Privacy Policy, User expressly agrees to receive this information. If the user does not wish to receive these communications, he/she may opt-out by unsubscribing. You may make changes to your profile at any time.
                  </li>
                  <li>
                    Changes to this privacy policy: Askgalore digital India Pvt ltd complies with all the Indian Laws and Regulations as applicable. It may have to give your information to the law enforcement agencies or such other government authorities if required by them.
                  </li>
                </ol>
                <b>Your acceptance of these terms:</b><br/>
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>
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
