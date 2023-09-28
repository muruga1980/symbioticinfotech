import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/revenue-dashboard.png'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>Drive revenue and optimise your Business</h4>
                <p>We have fortified our services with almost two decades of being a VAS major, with our unified experience, coupled with latest product line that interests consumers with their diversified needs of meaningful and engaging content.</p>
                <p> Our abreast technology trends and unabating innovation has always enhanced the business impact for our clients resulting in happy faces seeing the revenue graph.</p>
                <p> We are always focused on unfolding new revenue streams for our operators with our innovative service line and as well meeting clients specific requirements. </p>
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue