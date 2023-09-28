import React from "react";
import career from "../img/careers-img.jpg";
import careerHeader from "../img/blog-header.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Careers"} img={careerHeader} />

      <main id="main">
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                Do what you LOVE, Inviting you to build a great future with us
              </h2>
            </div>

            <div className="row gy-4 blog-details">
              <div className="col-lg-6">
                <img
                  src={career}
                  className="img-fluid"
                  alt="Do what you LOVE, Inviting you to build a great future with us"
                  title="Do what you LOVE, Inviting you to build a great future with us"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  People! An essential part of any successful business, drive
                  the Organization in the right direction. With our accelerated
                  business expansion, we are always on the lookout for a
                  talented pool of resources to grow with our organization.
                </p>
                <p>
                  We look at talent with a long-term plan where they can be
                  groomed for different roles People with the right attitude and
                  great aspirations. At Symbiotic, we have an exciting work
                  atmosphere with exceptional growth opportunities.
                </p>
                <div className="content">
                  <blockquote>
                    <p>
                      Please send your resumes to
                      <a href="mailto:hr@symbioticinfo.com">
                        hr@symbioticinfo.com
                      </a>
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Career;
