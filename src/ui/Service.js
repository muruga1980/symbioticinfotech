import React from "react";
import education from "../img/education-bg.png";
import entertainment from "../img/entertainment-bg.png";
import games from "../img/games-bg.png";
import sports from "../img/sports-bg.png";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                We are a
                <span style={{ color: "#155bd5" }}> GLOBAL LEADER</span> in
                Telcom VAS, offer Services across Educational Content,
                Entertainment Content, Games and sports
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Educational Content </h4>
                  <p className="description">
                    
                    Education is the key to unlocking the golden door of
                    freedom. Educational content are crucial as it is an
                    investment in human capital that yields tremendous benefits
                    to personal, social and economic development.
                  </p>
                  <p className="description">
                    Our Educational Content spans K-12, Engineering across all
                    disciplines, Soft skills, Skill Development, Vocational,
                    Applied Sciences, Humanities .. etc.
                  </p>
                  <p className="description">
                    
                    we have Animated tutorials, offers practice exercises,
                    Assessments, LIVE Tutor
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                      K-12 Covers Maths, EVS, English, Physics, Chemistry,
                      Biology, Skill Development covers Automobile, Civil,
                      Electrical, Tailoring, Mobile Repair
                    </span>
                    and more..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-collection-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Entertainment Content </h4>
                  <p className="description">
                    Our Entertainment content can keep the consumer engaged for
                    hours if that’s what one is interested in. We have an
                    impressive array of
                    <span className="fw-bold">
                      
                      Content on Movies, Fashion, on Demand Videos
                    </span>
                    and many more...
                  </p>
                  <p className="description">
                    
                    So every time a consumer needs enthralling content, ours is
                    the way to go.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={entertainment} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={games} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-controller"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Games </h4>
                  <p className="description">
                    Get access to a bunch of games ranging from Action,
                    Adventure, Arcade, Board, Cards, Casino ... and many to play
                    on your device.
                  </p>
                  <p className="description">
                    If obvious choice for people whose idea of entertainment
                    involves gaming as one would with a console or a computer,
                    then their search stops here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Sports">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-universal-access-circle"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Sports </h4>
                  <p className="description">
                    Learning a sport is fun and challenging... sports like
                    football, cricket, Tennis, Badminton, Rugby, volleyball and
                    many more as such has tutoring videos talks about the
                    history of the game, rules, knack to learn, skills to
                    develop, details about the sport... so why to wait, let’s
                    play the sport...
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sports} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
