// HeroSection.tsx
import React from "react";
import {
  HiOutlineChartBar,
  HiRocketLaunch,
  HiShieldCheck,
  HiOutlineCodeBracket,
} from "react-icons/hi2";
import { HeroH1Typed, HeroEyebrowTyped } from "./HeroTyping";

// --- Types ---
interface FeatureCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  variant: "white" | "blue";
  children?: React.ReactNode;
}

// --- Data ---
const featureData: Omit<FeatureCardProps, "children">[] = [
  {
    id: "growth",
    icon: <HiOutlineChartBar />,
    title: "Growth Dashboard",
    subtitle: "Real-time analytics for every campaign we run for you.",
    variant: "white",
  },
  {
    id: "launch",
    icon: <HiRocketLaunch />,
    title: "Launch Ready",
    subtitle: "Shipped on time, every time.",
    variant: "blue",
  },
  {
    id: "brand",
    icon: <HiShieldCheck />,
    title: "Brand Identity",
    subtitle: "Design systems that scale with your business.",
    variant: "white",
  },
  {
    id: "code",
    icon: <HiOutlineCodeBracket />,
    title: "Clean Code",
    subtitle: "Performant, accessible, and maintainable.",
    variant: "white",
  },
];

// --- Sub-component ---
const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  icon,
  title,
  subtitle,
  variant,
  children,
}) => (
  <div className={`hp-feat-card hp-feat-card--${variant} hp-feat-card--${id}`}>
    <div className="hp-feat-icon-wrapper">{icon}</div>
    <span className="hp-feat-title">{title}</span>
    <p className="hp-feat-sub">{subtitle}</p>
    {children && <div className="hp-feat-decor">{children}</div>}
  </div>
);

// --- Main Component ---
const HeroSection: React.FC = () => {
  return (
    <section id="hp-hero" className="hp-hero-section">
      {/* ── Background Layers ── */}
      <div className="hp-hero-dots-bg" aria-hidden="true" />
      <div className="hp-hero-blob" aria-hidden="true" />
      <div className="hp-hero-blob-2" aria-hidden="true" />

      <div className="container hp-hero-container">
        {/* ════════════════════════════════
            Left Column
        ════════════════════════════════ */}
        <div className="hp-hero-left">
          
          {/* Eyebrow badge — Floating pill with Typing Effect */}
          <div className="hp-eyebrow-badge" data-aos="fade-up" data-aos-delay="0">
            <span className="hp-eyebrow-dot" aria-hidden="true" />
            <HeroEyebrowTyped />
          </div>

          {/* Headline — uppercase, heavy with Typing Effect */}
          <h1 className="hp-hero-h1" data-aos="fade-up" data-aos-delay="80">
            <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
              AI-Powered Web Design Agency
            </span>
            We Build
            <br />
            Strategic <br />
            <HeroH1Typed />
            <br />
            That Actually Grow
          </h1>

          {/* Description */}
          <p className="hp-hero-desc" data-aos="fade-up" data-aos-delay="160">
            As a premier web design agency in Ontario, we employ AI-driven strategies, user-focused design, and advanced development to create websites that deliver measurable business results.
          </p>

          {/* CTAs */}
          <div className="hp-hero-ctas" data-aos="fade-up" data-aos-delay="240">
            <a href="/contact-us" className="hp-btn-primary">
              Book a Discovery Call
            </a>
            <a href="/work" className="hp-btn-outline">
              View Portfolio
            </a>
          </div>

          {/* Social proof — plain inline dots */}
          <p className="hp-hero-proof" data-aos="fade-up" data-aos-delay="320">
            <span>50+ products launched</span>
            <span className="hp-proof-dot" aria-hidden="true">·</span>
            <span>Canada-led team</span>
            <span className="hp-proof-dot" aria-hidden="true">·</span>
            <span>Startup to enterprise</span>
          </p>
        </div>

        {/* ════════════════════════════════
            Right Column — Floating Cards
        ════════════════════════════════ */}
        <div
          className="hp-hero-right"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="hp-feature-cards-wrap">
            {/* ① Growth Dashboard — large white, top-left */}
            <FeatureCard {...featureData[0]}>
              {/* Horizontal progress-bar style chart */}
              <div className="hp-feat-hbars" aria-hidden="true">
                <div className="hp-feat-hbar">
                  <span className="hp-feat-hbar-fill hp-feat-hbar-fill--blue" style={{ width: "58%" }} />
                </div>
                <div className="hp-feat-hbar">
                  <span className="hp-feat-hbar-fill hp-feat-hbar-fill--indigo" style={{ width: "78%" }} />
                </div>
                <div className="hp-feat-hbar">
                  <span className="hp-feat-hbar-fill hp-feat-hbar-fill--sky" style={{ width: "40%" }} />
                </div>
              </div>
            </FeatureCard>

            {/* ② Launch Ready — blue, top-right */}
            <FeatureCard {...featureData[1]} />

            {/* ③ Brand Identity — white, bottom-right */}
            <FeatureCard {...featureData[2]} />

            {/* ④ Clean Code — white, bottom-left */}
            <FeatureCard {...featureData[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;