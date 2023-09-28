import React, { useEffect, useState } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";

const Contact = () => {

  //const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    
 //submit button enable all fileds submited 
//const [isEnable, setEnable]=useState(true);
  //get value from feedback form
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
// destructure all object values
  const {username,email,subject,message} = formValues;

  // check the form fileds lenth
  // const handleKeyUp = ()=>{
  //   if(username.length>0 && email.length>0 && subject.length>0 &&message.length>0){
  //     setEnable(false)
  //     }
  //     else{
  //       setEnable(true)
  //     }
  // }

  const handleChange = (event) => {
    setFormValues({...formValues, [event.target.name] : event.target.value} );  
  };


  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formErrors);
    }
}, [])

  const handleSubmit =(e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
}


  // validations

  const validate =(values)=>{
    const errors = {};
    const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;
    
    if (!values.username){
        errors.username = "Username is required!";
    }

    if(!values.email){
        errors.email= "Email is required!";
    }else if(!regex.test(values.email)){
        errors.email = "This is not a valid email format!";
    }

    if(!values.password){
        errors.password= "Password is required!";
    } else if(values.password <4){
        errors.password = "Password must be more than 4 characters";
    } else if(values.password>16){
        errors.password = "Password cannot be more than 16 characters";
    }
    return errors;
}


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

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <form className="php-email-form needs-validation" onSubmit={handleSubmit }>
                {Object.keys(formErrors).length === 0 && isSubmit ? <p>successful</p>: <p>unsuccessful</p>} 
                <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                      //onKeyUp={handleKeyUp}
                      onChange={handleChange}
                      value={username}
                        type="text"
                        name="username"
                        className="form-control"                      
                        placeholder="Your Name"
                        required
                        maxlength="3"
                      />  
                    <p>{ formErrors.username}</p>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                         //onKeyUp={handleKeyUp}
                       onChange={handleChange}
                       value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"                       
                        required
                      />
                 <p>{ formErrors.username}</p>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      // onKeyUp={handleKeyUp}
                     onChange={handleChange}
                     value={subject}
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"                   
                      required
                      maxlength="4"
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                       //onKeyUp={handleKeyUp}
                     onChange={handleChange}
                     value={message}
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"                 
                      required
                      maxlength="10"
                    ></textarea>
                    <div className="valid-feedback">Max 100 characters</div>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" >Send Message</button>
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
