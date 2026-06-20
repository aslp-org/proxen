'use client';

// src/components/home/FAQSection.tsx
import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'What other services are offered by Proxen?',
    a: 'In addition to web design and development, we offer SEO, digital marketing, eCommerce development, branding, web applications, mobile app development, and AI-powered digital solutions.',
  },
  {
    q: 'Do you work with businesses across Canada?',
    a: 'Yes. While we proudly serve businesses in Toronto, Mississauga & Brampton, we partner with clients across Canada and internationally, helping them grow through strategic digital solutions.',
  },
  {
    q: 'Do you build websites for trades and home service businesses?',
    a: 'Yes, we create custom websites for plumbers, electricians, HVAC companies, roofing contractors, landscapers, cleaning services, and other home service businesses. Our websites are designed to generate leads, showcase services, and help businesses attract more local customers.',
  },
  {
    q: 'Can you help professional service businesses grow online?',
    a: 'Absolutely. We work with healthcare providers, law firms, consultants, and other professional service businesses to create modern, user-friendly websites that build trust, improve visibility, and convert visitors into clients.',
  },
  {
    q: 'Do you provide web design solutions for restaurants, retail stores, and small businesses?',
    a: 'Yes. Whether you operate a restaurant, retail store, local shop, or growing small business, we develop tailored websites that enhance your brand, improve customer engagement, and support long-term business growth.',
  },
  {
    q: 'How long does it take to design and develop a website?',
    a: 'Most projects take between 4–12 weeks depending on complexity, content requirements, and project scope. We provide a clear timeline before development begins.',
  },
  {
    q: 'Can you integrate websites with ERP, CRM, or other business systems?',
    a: 'Yes. Our development team can integrate websites and eCommerce platforms with CRM systems, payment gateways, inventory management software, marketing tools, and other business applications.',
  },
  {
    q: 'Can you handle website migrations without disrupting our business?',
    a: 'Absolutely. We carefully plan and execute migrations to minimize downtime, preserve SEO performance, and ensure a smooth transition for your business and customers.',
  },
  {
    q: 'Can I track the progress of my project?',
    a: 'Yes. We maintain transparent communication throughout every stage of the project and provide regular updates so you always know what\'s happening.',
  },
  {
    q: 'Can you fix my existing website?',
    a: 'Yes. Whether it\'s design issues, performance problems, technical errors, security concerns, or SEO challenges, our team can help improve and optimize your website.',
  },
  {
    q: 'How do I choose the right web design company in Toronto?',
    a: 'Look for a company with proven experience, transparent communication, a strong portfolio, and a focus on business results. At Proxen, we combine over 10 years of experience with a client-first approach to deliver websites that support long-term growth.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="hp-faq" className="hp-faq-section">
      <div className="hp-faq-section__container">
        <div className="hp-faq-section__header" data-aos="fade-up">
          <span className="hp-faq-section__eyebrow">FAQS</span>
          <h2 className="hp-faq-section__h2">Frequently Asked Questions</h2>
          <p className="hp-faq-section__desc">
            Can&apos;t find what you&apos;re looking for? Reach out — we reply within 24&nbsp;hours.
          </p>
        </div>

        <div className="hp-faq-section__list" data-aos="fade-up" data-aos-delay="80" role="list">
          {FAQS.map((faq, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={idx}
                className={`hp-faq-item${isOpen ? ' hp-faq-item--open' : ''}`}
                role="listitem"
              >
                <button
                  className="hp-faq-item__trigger"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`hp-faq-body-${idx}`}
                  id={`hp-faq-btn-${idx}`}
                  type="button"
                >
                  <span className="hp-faq-item__question">{faq.q}</span>
                  <span className="hp-faq-item__icon-wrap" aria-hidden="true">
                    {isOpen ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>

                <div
                  id={`hp-faq-body-${idx}`}
                  role="region"
                  aria-labelledby={`hp-faq-btn-${idx}`}
                  className="hp-faq-item__body"
                  style={{ maxHeight: isOpen ? '400px' : '0px' }}
                >
                  <p className="hp-faq-item__answer">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
