'use client';
import "../styles/globals.css";
import { useState } from "react";
import Layout from '../components/Layout'; 
import Hero from '../components/Hero';

const ContactPage = () => {
   const [formData, setFormData] = useState({
      name: '',
      company: '',
      email: '',
      phone: '',
    });
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
    
  return (
    <Layout>
      <Hero title="Contact Us" imgPath="/assets/images/contact-us-hero-img.png" />
       {/*Contact Us creting execllance starts */}
      <section className="contactus-creting-excellance ">
      <div className="offices-container container grid-container">
      <div className="office-card">
        <h2 className="office-title">Corporate office</h2>
   
        <p className="office-bold">Matrix Pharma Corp</p>
        <p className="office-address">
          Plot No. 1-60/35/A, Gachibowli Village, Beside Holiday Inn Hotel,
          Phoenix Avance Campus, Serilingampally Mandal, Ranga Reddy District,
          Hyderabad, Telangana, India - 500 081
        </p>
        
        <a href="#" className="office-link">VIEW LOCATION →</a>
      </div>
    
      <div className="office-card ">
        <h2 className="office-title">Registered office</h2>
        <p className="office-bold">Matrix Pharma Corp</p>
        <p className="office-address">
          Plot No. 564/A/22 Road No. 92, Jubilee Hills,
          Hyderabad, Telangana, India - 500096
        </p>
        <a href="#" className="office-link">VIEW LOCATION →</a>
      </div>
    </div>
      </section >
      
      <section className="contactus-from-section contactus-form-section">
      <div className="box-pattern">
          <div className="box-pattern1"></div>
          {/* <div className="box-pattern2"></div>
          <div className="box-pattern3"></div>
          <div className="box-pattern4"></div> */}
        </div>
        <div className="container grid-container">
        <div className="col-span-6 text-white left-container ">
          <h2 className="text-white">Great partnerships<br/>
            drive excellence.</h2>
          <p>Enter your details and we'll get in touch with you.</p>
        </div>
        <div className="col-span-6 "> 
        <div className="col-span-6 ">
            <div className='form-container '>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="input text-white"
                  />
                  <span className="input-underline"></span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input"
                  />
                  <span className="input-underline"></span>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                  />
                  <span className="input-underline"></span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                  />
                  <span className="input-underline"></span>
                </div>
                <button type="submit" className="buttonsub">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
