import React from 'react';
import Image from 'next/image';

const TrustedPartnerSection: React.FC = () => {
  const cities = ["Toronto", "Mississauga", "Brampton", "Hamilton", "Cambridge"];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hp-partner-section {
          padding: 100px 0;
          background-color: #0f172a;
          position: relative;
          overflow: hidden;
          font-family: "Plus Jakarta Sans", system-ui, sans-serif;
        }

        .hp-partner-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hp-partner-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        /* Mockup Container */
        .hp-partner-mockup-wrapper {
          width: 100%;
          max-width: 540px;
          border-radius: 16px;
          background: #1e293b;
          border: 1px solid #334155;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .hp-partner-mockup-wrapper:hover {
          transform: translateY(-6px);
        }

        /* Browser Header Mockup */
        .hp-partner-mockup-header {
          background: #1e293b;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid #334155;
        }
        .hp-partner-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
        .hp-partner-dot--red { background: #ef4444; }
        .hp-partner-dot--yellow { background: #f59e0b; }
        .hp-partner-dot--green { background: #10b981; }

        .hp-partner-mockup-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .hp-partner-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hp-partner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #60a5fa;
          background: rgba(96, 165, 251, 0.08);
          border: 1px solid rgba(96, 165, 251, 0.2);
          border-radius: 100px;
          padding: 8px 18px;
          margin-bottom: 20px;
        }

        .hp-partner-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #60a5fa;
        }

        .hp-partner-h2 {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 24px 0;
          letter-spacing: -0.025em;
        }

        .hp-partner-h2 span.text-highlight {
          color: #60a5fa;
        }

        .hp-partner-desc {
          font-size: 1.0625rem;
          color: #94a3b8;
          line-height: 1.75;
          margin: 0 0 20px 0;
          font-weight: 400;
        }
        .hp-partner-desc:last-of-type {
          margin-bottom: 30px;
        }

        /* Locations Row */
        .hp-partner-locations {
          width: 100%;
          border-top: 1px solid #334155;
          padding-top: 24px;
        }
        .hp-partner-locations-title {
          font-size: 0.8125rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          display: block;
        }
        .hp-partner-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .hp-partner-pill {
          background: #1e293b;
          border: 1px solid #334155;
          color: #e2e8f0;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8125rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .hp-partner-pill:hover {
          background: rgba(96, 165, 251, 0.1);
          border-color: rgba(96, 165, 251, 0.3);
          color: #60a5fa;
          transform: translateY(-2px);
        }

        @media (max-width: 968px) {
          .hp-partner-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hp-partner-section {
            padding: 80px 0;
          }
        }
      `}} />
      <section className="hp-partner-section" id="trusted-partner">
        <div className="hp-partner-container">
          <div className="hp-partner-left" data-aos="fade-right">
            <div className="hp-partner-mockup-wrapper">
              <div className="hp-partner-mockup-header">
                <span className="hp-partner-dot hp-partner-dot--red" />
                <span className="hp-partner-dot hp-partner-dot--yellow" />
                <span className="hp-partner-dot hp-partner-dot--green" />
              </div>
              <Image 
                src="/web_design_dashboard.png" 
                alt="Web Design and Growth Dashboard illustration" 
                width={540} 
                height={380} 
                className="hp-partner-mockup-image"
                priority
              />
            </div>
          </div>
          
          <div className="hp-partner-right" data-aos="fade-left">
            <span className="hp-partner-badge">
              <span className="hp-partner-badge-dot" />
              Local Expertise
            </span>
            <h2 className="hp-partner-h2">
              Ontario&apos;s Trusted Partner for <span className="text-highlight">Web Design</span> &amp; <span className="text-highlight">Digital Growth</span>
            </h2>
            <p className="hp-partner-desc">
              At Proxen, we help businesses across Ontario and Canada build a stronger digital presence through innovative web design, strategic development, and results-driven digital solutions. As a trusted web design company, our experienced team works with businesses in Toronto, Mississauga, Brampton, Hamilton, and Cambridge, creating high-performing websites designed to engage users, generate qualified leads, and support long-term business growth.
            </p>
            <p className="hp-partner-desc">
              Recognized as a top web design agency, Proxen combines creativity, technology, and digital expertise to deliver exceptional online experiences. Whether you&apos;re a startup, growing business, or established brand, we create custom websites tailored to your goals. From Toronto and Mississauga to Brampton, Hamilton, and Cambridge, we help businesses attract more customers, strengthen their brand presence, and achieve measurable results online.
            </p>
            
            {/* <div className="hp-partner-locations">
              <span className="hp-partner-locations-title">Serving Communities In</span>
              <div className="hp-partner-pills">
                {cities.map((city) => (
                  <span key={city} className="hp-partner-pill">
                    📍 {city}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedPartnerSection;
