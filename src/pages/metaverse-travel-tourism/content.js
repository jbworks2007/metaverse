import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

const Content = () => {
  return (
    <section className="crypto-cta ptb-120" id='content'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h2 className="text-white mb-4">Metaverse for Travel & Tourism</h2>
              <p className="text-muted mb-30">
                Give your customers great travel excursions in the metaverse. 
                Pitch them for the perfect tourism packages and a wonderful 
                experience in the metaverse with virtual tours of the hotels or venues.
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
          className="row justify-content-center text-left"
          style={{ textAlign: "left" }}
        >
          <div className="col-xl-10 col-lg-12 col-md-12">
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
                    <h4>Build Metaverse Tourism with Anyverse </h4>
                  </strong>
                  Get ready to transform the traditional mode of travelling into
                  digital mode with an immersive experience. The world of
                  metaverse tourism offers virtual worlds and experiences like
                  never before. The possibilities are endless, from virtual
                  reality theme parks to virtual reality hotels and even virtual
                  reality vacations. Let your customers experience virtual
                  travel while sitting at home with Anyverse.
                  <br></br>
                  <br></br>
                  <strong>
                    <h5>What is Metaverse Tourism?</h5>
                  </strong>
                  Integrating the Metaverse into the tourism industry is an
                  evolution, as tourism has always been closely tied to advances
                  in information and communication technologies. With the
                  ability to create virtual counterparts of real-world objects
                  and environments, the Metaverse offers endless possibilities
                  for virtual tourism experiences. Through virtual reality (VR)
                  headsets, travellers can visit distant locations and have
                  almost real experiences from the comfort of their own homes.
                  Metaverse encompasses much more than just VR technology and
                  has the potential to revolutionize the way we think about
                  tourism products and services. Whether it's virtual reality
                  theme parks, virtual reality hotels, or even virtual reality
                  vacations, the Metaverse can change how we travel and
                  experience the world around us.
                  <br></br>
                  <br></br>
                  <strong>
                    <h5>Benefits of Metaverse Tourism </h5>
                  </strong>
                  The Metaverse is a growing trend in travel technology that has
                  the potential to help companies attract more customers. As a
                  business owner, entrepreneur, or decision-maker, it is
                  important to be aware of the potential benefits of the
                  Metaverse for the travel industry and hospitality sectors.
                  Some examples of how the Metaverse could benefit businesses in
                  the travel and hospitality industries include:
                  <br></br>
                  <ol>
                    <li>
                      Promoting the purchase of virtual tourism - One of the
                      main benefits of Metaverse for tourism is that it can
                      encourage travelers to try out virtual visits to places on
                      their wish list
                    </li>
                    <li>
                      Streamlining the booking procedure - Metaverse Tourism
                      also significantly improves the booking experience by
                      offering useful information that has never been offered
                      before.
                    </li>
                    <li>
                      The growing number of bookings - The Metaverse can raise
                      the booking volume, representing their value throughout
                      the booking process.
                    </li>
                    <li>
                      Virtual tours - With the Metaverse, businesses can offer
                      virtual tours of their hotels, resorts, and other
                      destinations, allowing potential customers to explore and
                      experience the location before they book a trip.
                    </li>
                    <li>
                      Virtual events - The Metaverse can also host virtual
                      events, such as conferences, workshops, and trade shows.
                      This can be especially useful for businesses unable to
                      host in-person events due to COVID-19 or other reasons.
                    </li>
                    <li>
                      Enhanced customer experiences - The Metaverse can create
                      immersive and interactive customer experiences, such as
                      virtual reality experiences or augmented reality
                      activities. This can help businesses stand out and offer
                      unique and memorable experiences to their customers.
                    </li>
                    <li>
                      Increased accessibility - The Metaverse can also make
                      travel and hospitality services more accessible to people
                      with disabilities or those who may have difficulty
                      travelling due to location or other factors.
                    </li>
                  </ol>
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