"use client";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const sustainability = ({ children }) => {
  return (
    <Layout>
      <Hero
        title="Sustainability"
        imgPath="/assets/images/sustain-hero-img.png"
      />

      <section className="careers">
        <div className="container grid-container careers">
          <div className="col-span-6">
            <h2>
              Growing responsibly <br></br>by building a sustainable future
              <br></br> for everyone.
            </h2>
          </div>
          <div className="col-span-6 sustainability-matrix">
            <p>
              At Matrix Pharma Corp, sustainability is not just a goal, but the
              very core of our operations. Guided by our strong legacy of
              innovation and excellence, we are committed to charting a
              responsible future with our ESG roadmap, integrating sustainable
              practices across every facet of our business. We prioritise the
              health and well-being of our employees, value chain partners, and
              communities, fostering a safe, inclusive, and supportive ecosystem
              where every stakeholder thrives. Ensuring that our actions today
              lay the groundwork for a healthier and more sustainable tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Sustanibility two column start*/}
      <section className="esg-two-col">
        <div className="container grid-container">
          <div className="col-span-5">
            <img src="/assets/images/sustainability-img1.png" />
          </div>
          <div
            className="col-span-6 col-7 mb-2"
            style={{ marginBottom: "100px" }}
          >
            <h2 className="mg-bottom-large">Resource management</h2>
            <p className="mg-bottom-large">
              We are always seeking to reduce our environmental footprint, while
              maintaining the highest standards of quality and performance.
              Through innovative practices and thoughtful planning, we
              continuously evaluate the best use of resources across our
              operations, and the most efficient methods to minimise waste.
            </p>
            <div className="esg-two-col-card">
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Green chemistry principles</h3>
                <span className="esg-visually-box1" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  Our R&D teams apply green chemistry principles to minimise use
                  of hazardous substances, and optimise reaction conditions to
                  reduce energy consumption and waste generation. This approach
                  fosters a safer work environment for our teams, and ensures
                  that we create more sustainable products for our customers.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Water and energy conservation</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p>
                  We implement technologies that reduce energy and water
                  consumption without compromising on product quality. At the
                  shopfloor level, dedicated water conservation teams lead
                  initiatives to optimise usage, implement recycling practices,
                  and minimise waste.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>


         <section className="esg-two-col">
            <div className="container grid-container">
            <div className="col-span-5 esg-order1">
            <h2 className="mg-bottom-large">Waste management and reduction</h2>
            <p className="mg-bottom-large">
              We take a proactive approach to managing and reducing waste across
              all our operations. Our waste management philosophy include:
            </p>
            <div className="esg-two-col-card">
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Zero Liquid Discharge (ZLD) Systems</h3>
                <span className="esg-visually-box1" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  We have implemented state-of-the-art Zero Liquid Discharge
                  (ZLD) systems across our manufacturing facilities. By treating
                  and recycling all water used in our operations, we minimise
                  our water consumption and eliminate the environmental impact
                  of wastewater.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Segregation and recycling</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  We segregate hazardous and non-hazardous waste at the source,
                  ensuring materials are either recycled or disposed of safely.
                  By focusing on waste reduction and recycling, we aim to
                  minimise landfill waste. Our goal is to achieve zero waste to
                  landfill, and we are steadily progressing toward it.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Waste-to-energy initiatives</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  We explore innovative solutions to convert waste into energy,
                  reducing our reliance on conventional energy sources and
                  lowering our carbon footprint.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 col-7 esg-order2" style={{ marginBottom: "100px" }}>
            <img src="/assets/images/sustainability-img2.png" />
          </div>
            </div>
         </section>


         <section className="esg-two-col">
         <div className="container grid-container">
          <div className="col-span-5 esg-order1">
            <img src="/assets/images/sustainability-img3.png" />
          </div>
          <div className="col-span-6 col-7 esg-order2" style={{ marginBottom: "100px" }}>
            <h2 className="mg-bottom-large">
              Renewable solar energy initiative
            </h2>
            <p className="mg-bottom-large">
              As part of our commitment to reducing our carbon footprint, we’ve
              integrated solar energy into our manufacturing operations,
              reducing reliance on non-renewable sources and cutting greenhouse
              gas emissions. This transition strengthens our pledge to a
              cleaner, climate-resilient future.
            </p>
            <div className="esg-two-col-card">
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Sustainable packaging</h3>
                <span className="esg-visually-box1" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  At Matrix Pharma Corp, we’re committed to minimising the
                  environmental impact of our packaging materials. We
                  continuously explore sustainable packaging options that are
                  recyclable or made from renewable resources, reducing plastic
                  waste.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Upholding standards</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  Matrix Pharma Corp adheres to the highest standards of
                  environmental protection and sustainability. All our sites
                  have implemented environmental, occupational safety, and
                  energy management systems, earning certifications for ISO
                  14001, ISO 45001, and ISO 50001.
                </p>
              </div>
            </div>
          </div>
          </div>
          </section> 

            <section className="esg-two-col">
            <div className="container grid-container">
          <div className="col-span-5 esg-order1">
            <h2 className="mg-bottom-large">Workplace health and safety</h2>
            <p className="mg-bottom-large">
              At Matrix Pharma Corp, we proactively safeguard our workforce
              through integrated risk assessments, a strengthened incident
              reporting system, and continuous process improvements.
            </p>
            <div className="esg-two-col-card">
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Risk prevention</h3>
                <span className="esg-visually-box1" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  Hazards are identified early through thorough risk
                  assessments, allowing us to implement controls that mitigate
                  potential harm.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Incident reporting and prevention</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  Our Incident Prevention Opportunity program tracks
                  near-misses, enabling a proactive approach to refining safety
                  measures and preventing future risks.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Engagement and awareness</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="mg-bottom-large">
                  Our monthly safety campaigns empower employees to recognise
                  risks and take preventive actions. A recent "Electrostatic
                  Safety Month" initiative focused on equipping production areas
                  with advanced safety controls.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Process safety first</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p>
                  Every new and existing process prioritises safety at every
                  step – from development to execution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 col-7 esg-order2">
            <img src="/assets/images/sustainability-img4.png" />
          </div>
        </div>
      </section>
      {/* Sustanibility two column end */}
    </Layout>
  );
};

export default sustainability;
