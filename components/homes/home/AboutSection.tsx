import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hp-about-section {
          padding: 100px 0;
          background: #ffffff;
          font-family: "Plus Jakarta Sans", system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .hp-about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* Top Header Row */
        .hp-about-header {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .hp-about-header-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hp-about-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #086CFE;
          background: rgba(8, 108, 254, 0.06);
          border: 1px solid rgba(8, 108, 254, 0.15);
          border-radius: 100px;
          padding: 8px 18px;
          margin-bottom: 16px;
        }

        .hp-about-h2 {
          font-size: clamp(2.25rem, 4vw, 3rem);
          font-weight: 800;
          color: #0d1829;
          line-height: 1.15;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .hp-about-subtitle {
          font-size: 1.125rem;
          color: #596170;
          font-weight: 500;
          line-height: 1.6;
          margin: 0;
        }

        .hp-about-intro {
          font-size: 1.1875rem;
          font-weight: 500;
          color: #0d1829;
          line-height: 1.75;
          margin: 0;
          border-left: 4px solid #086CFE;
          padding-left: 24px;
        }

        /* Bottom Grid Layout */
        .hp-about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .hp-about-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .hp-about-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #086CFE, #60a5fa);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hp-about-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(13, 24, 41, 0.05);
          border-color: #cbd5e1;
        }

        .hp-about-card:hover::before {
          opacity: 1;
        }

        .hp-about-card-stat {
          font-size: 3rem;
          font-weight: 800;
          color: #086CFE;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          display: block;
        }

        .hp-about-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0d1829;
          margin: 0 0 16px 0;
        }

        .hp-about-card-desc {
          font-size: 0.9375rem;
          color: #596170;
          line-height: 1.7;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 968px) {
          .hp-about-header {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hp-about-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .hp-about-section {
            padding: 80px 0;
          }
        }
      `}} />
      <section className="hp-about-section" id="about-us">
        <div className="hp-about-container">
          {/* Top Row: Headers and Main Statement */}
          <div className="hp-about-header">
            <div className="hp-about-header-left" data-aos="fade-right">
              <span className="hp-about-badge">Who We Are</span>
              <h2 className="hp-about-h2">About us</h2>
              <p className="hp-about-subtitle">
                At Proxen, we combine technology, creativity, and AI-driven growth to help clients scale with confidence.
              </p>
            </div>
            
            <div data-aos="fade-left">
              <p className="hp-about-intro">
                For over 10 years, we&apos;ve helped companies across Toronto, Mississauga, Brampton, Hamilton, Cambridge, and throughout Ontario strengthen their online presence through innovative web design, strategic development, and results-driven digital solutions.
              </p>
            </div>
          </div>
          
          {/* Bottom Row: 3 Core Pillars Cards */}
          <div className="hp-about-grid" data-aos="fade-up" data-aos-delay="100">
            {/* Card 1: Experience / Approach */}
            <div className="hp-about-card">
              <span className="hp-about-card-stat">10+</span>
              <h3 className="hp-about-card-title">Years of Passion</h3>
              <p className="hp-about-card-desc">
                What started as a passion for creating exceptional websites has evolved into a trusted partnership with businesses across Canada. Our approach is simple: understand our clients&apos; goals, deliver outstanding work, and create solutions that drive measurable growth.
              </p>
            </div>
            
            {/* Card 2: Track Record / Impact */}
            <div className="hp-about-card">
              <span className="hp-about-card-stat">50+</span>
              <h3 className="hp-about-card-title">Projects Launched</h3>
              <p className="hp-about-card-desc">
                With 50+ successful projects launched, our team has helped startups, growing businesses, and established brands build websites that not only look impressive but also generate leads, engage customers, and support long-term success.
              </p>
            </div>
            
            {/* Card 3: AI Innovation / Future */}
            <div className="hp-about-card">
              <span className="hp-about-card-stat">AI</span>
              <h3 className="hp-about-card-title">Future-Ready Vision</h3>
              <p className="hp-about-card-desc">
                As technology continues to evolve, Proxen stays at the forefront by combining creativity, advanced development, and AI-driven innovation to deliver smarter digital experiences. Every website we build and every strategy we create is focused on one goal, helping our clients grow with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
