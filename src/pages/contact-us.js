"use client";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FormContactus from "../components/FormContactus";
import Link from "next/link";

const ContactPage = () => {
  return (
    <Layout>
      <Hero
        title="Contact Us"
        imgPath="/assets/images/contact-us-hero-img.png"
      />
      {/*Contact Us creting execllance starts */}

      <section className="contact-address">
        <div className="container grid-container">
          <div className="col-span-6">
            <div className="office-card">
              <h2 className="office-title">Corporate office</h2>
              <p className="office-bold">Matrix Pharma Corp</p>
              <p className="office-address">
                Plot No. 1-60/35/A, Gachibowli Village, Beside Holiday Inn
                Hotel, Phoenix Avance Campus, Serilingampally Mandal, Ranga
                Reddy District, Hyderabad, Telangana, India - 500 081
              </p>
              <Link href="https://maps.app.goo.gl/e8SdfaxWEj1g33C67" target="_blank" className="office-link">
                VIEW LOCATION <svg width="17" height="17" viewBox="0 0 17 17">
              <g></g>
              <path
                d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"
                fill="#f04f3f"
              />
            </svg>
              </Link>
            </div>
          </div>
          <div className="col-span-6">
          <div className="office-card">
            <h2 className="office-title">Registered office</h2>
            <p className="office-bold">Matrix Pharma Corp</p>
            <p className="office-address">
              Plot No. 564/A/22 Road No. 92, Jubilee Hills, Hyderabad,
              Telangana, India - 500096
            </p>
            <Link href="https://maps.app.goo.gl/brpCbgg1VNsKeJSs6" target="_blank" className="office-link">
              VIEW LOCATION <svg width="17" height="17" viewBox="0 0 17 17">
              <g></g>
              <path
                d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"
                fill="#f04f3f"
              />
            </svg>
            </Link>
          </div>
          
          </div>
        </div>
      </section>

      <section className="contactus-from-section">
        <div className="container grid-container">
          <div className="col-span-6 text-white left-container ">
            <h2 className="text-white">
              Great partnerships
              <br />
              drive excellence.
            </h2>
            <p>Enter your details and we'll get in touch with you.</p>
          </div>
          <div className="col-span-6  form-container">
          
                <FormContactus />
              
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
