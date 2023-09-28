import React from "react";
import careerHeader from "../img/blog-header.jpg";
import noData from "../img/no-data.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Page Not Found"} img={careerHeader} />

      <main id="main">
        <section id="blog" className="blog text-center">
         <div>
         <img src={noData} alt="" title = "404 Error"  className="img-fluid"/>
        </div> 
         <Link to = "/" className="btn btn-primary btn-lg my-3">Back to Home </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoPage;
