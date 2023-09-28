import React, { useEffect, useState,useRef } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";
import emailjs from 'emailjs-com'



const Contact = () => {
  //submit button enable all fileds submited
  const form = useRef();
  const inputRef = useRef(null);


  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // destructure all object values
  const { username, email, subject, message } = inputFields;

  // check the form fileds lenth
  const validateValues = (inputValues) => {
    let errors = {};

    if (inputValues.username.length < 2) {
      errors.username = "userName is too short";
    }
    if (inputValues.email.length < 5) {
      errors.email = "Email is too short";
    }
    if (inputValues.subject.length < 5) {
      errors.subject = "Subject is too short";
    }
    if (inputValues.message.length < 10) {
      errors.message = "Subject is too short";
    }

    return errors;
  };

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);

    // email configure
    emailjs.sendForm('service_k80xoyk', 'template_q6z4pl4', form.current, 'yV95_dZd7WA5uN3f7')
      .then((result) => {
          //console.log(result.text);
          //console.log("Message sent successfully")
         
      }, (error) => {
          console.log(error.text);
      });
      //nputRef.current.value = ''; 
      setInputFields({username: "",
      email: "",
      subject: "",
      message: ""})
  };

  const finishSubmit = () => {
    console.log(inputFields);   
   //inputRef.current.value = '';
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
      }
  }, [errors]);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Contact Us"} img={contactHeader} />
      <main id="main">
        <section id="contact" className="contact">
          <div className="container position-relative" data-aos="fade-up">
            <div className="section-header">
              <h2> Lets have a TALK </h2>
            </div>

            <div className="row gy-4 d-flex justify-content-end">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <h5>India:</h5>
                    <p>
                      # 1,Sundaram Illam,Chellamal Street, <br /> Shenoy Nagar,
                      Chennai - 600 030.
                    </p>
                    <br />
                    <h5>U.A.E:</h5>
                    <p>P.O.Box No 95114,Abu Dhabi,UAE </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:info@symbioticinfo.com">
                        info@symbioticinfo.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+91 - 44 - 4208 2102</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <form ref={form} className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input  ref={inputRef}
                        onChange={handleChange}
                        value={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your Name"
                        style={{
                          border: errors.username ? "1px solid red" : null,
                        }}
                      />
                      {errors.username ? (
                        <small className="error">
                          Username should be at least 3 characters long
                        </small>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input ref={inputRef}
                        onChange={handleChange}
                        value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="E-mail"
                        style={{
                          border: errors.email ? "1px solid red" : null,
                        }}
                      />
                      {errors.email ? (
                        <small className="error">Enter valid email id </small>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input 
                   ref={inputRef}
                      onChange={handleChange}
                      value={subject}
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      style={{ border: errors.message ? "1px solid red" : null }}
                    />
                    {errors.subject ? (
                      <small className="error">
                        Subject should be at least 5 characters long
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group mt-3">
                    <textarea  ref={inputRef}
                      onChange={handleChange}
                      value={message}
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      style={{
                        border: errors.message ? "1px solid red" : null,
                      }}
                    ></textarea>
                    {errors.message ? (
                      <small className="error">
                        message should be at least 10 characters long
                      </small>
                    ) : null}
                  </div>

                  <p className="text-center">
                    {Object.keys(errors).length === 0 && submitting ? (
                      <div className="alert alert-success p-2 ">
                        Successfully submitted ✓
                      </div>
                    ) : null}
                  </p>

                  <div className="text-center">
                    <button className="btn btn-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
