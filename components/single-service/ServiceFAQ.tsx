'use client';

// components/single-service/ServiceFAQ.tsx
// Per-service FAQ accordion — reuses hp-faq CSS classes for consistency.

import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import type { FAQItem } from '../../data/services-data';

interface ServiceFAQProps {
  items: FAQItem[];
}

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="svc-faq" className="hp-faq-section">
      <div className="hp-faq-section__container">
        <div className="hp-faq-section__header" data-aos="fade-up">
          <span className="hp-faq-section__eyebrow">FAQs</span>
          <h2 className="hp-faq-section__h2">Frequently Asked Questions</h2>
          <p className="hp-faq-section__desc">
            Can&apos;t find what you&apos;re looking for? Reach out — we reply within 24&nbsp;hours.
          </p>
        </div>

        <div
          className="hp-faq-section__list"
          data-aos="fade-up"
          data-aos-delay="80"
          role="list"
        >
          {items.map((faq, idx) => {
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
                  aria-controls={`svc-faq-body-${idx}`}
                  id={`svc-faq-btn-${idx}`}
                  type="button"
                  aria-label={isOpen ? `Collapse: ${faq.q}` : `Expand: ${faq.q}`}
                >
                  <span className="hp-faq-item__question">{faq.q}</span>
                  <span className="hp-faq-item__icon-wrap" aria-hidden="true">
                    {isOpen ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>

                <div
                  id={`svc-faq-body-${idx}`}
                  role="region"
                  aria-labelledby={`svc-faq-btn-${idx}`}
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
