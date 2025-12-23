'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { colors } from '../colors';
import { getAssetPath } from '../utils/assetPath';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleMobileAppPlan = () => {
    router.push('/mobile-app');
  };

  return (
    <>
      <div className="landing-container">
        <Navigation onMobileAppClick={handleMobileAppPlan} />
        <HeroSection />
        <BusinessOverviewSection />
        <HowWePromoteSection />
        <TrafficSourcesSection />
        <AudienceSection />
        <MonetizationSection />
        <CurrentStatusSection />
        <ComplianceSection />
        <ContactSection />
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        html, body {
          width: 100%;
          min-height: 100%;
        }

        body {
          background-color: ${colors.dark};
          background-image:
            radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          background-position: 0 0;
          background-attachment: fixed;
        }

        .landing-container {
          width: 100%;
          min-height: 100vh;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        body {
          background-size: clamp(25px, 5vw, 40px) clamp(25px, 5vw, 40px);
        }
      `}</style>
    </>
  );
}

function Navigation({ onMobileAppClick }: { onMobileAppClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Image
            src={getAssetPath("/dofylogogo.png")}
            alt="Dorfy Logo"
            width={40}
            height={40}
            className="logo-image"
          />
          <span className="logo-text">Dorfy</span>
        </div>

        <div className="nav-links">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#audience" className="nav-link">Audience</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="/dorfyplan/privacy" className="nav-link">Privacy</a>
          <button onClick={onMobileAppClick} className="mobile-app-btn">
            Mobile App Plan
          </button>
        </div>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navigation.scrolled {
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 30px rgba(229, 9, 20, 0.2);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-image {
          border-radius: 8px;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 900;
          color: ${colors.white};
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: ${colors.textLight};
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: ${colors.netflixRed};
        }

        .mobile-app-btn {
          background: ${colors.netflixRed};
          color: ${colors.white};
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(229, 9, 20, 0.4);
        }

        .mobile-app-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(229, 9, 20, 0.6);
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 16px;
          }

          .nav-link {
            display: none;
          }

          .mobile-app-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .logo-text {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
}

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <div className="hero-content">
        <div className="hero-logo">
          <Image
            src={getAssetPath("/dofylogogo.png")}
            alt="Dorfy Logo"
            width={120}
            height={120}
            className={`hero-logo-image ${isVisible ? 'animate-in' : ''}`}
          />
        </div>

        <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          Welcome to <span className="brand-name">Dorfy</span>
        </h1>

        <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          Your Ultimate Product Discovery & Price Comparison Platform
        </p>

        <p className={`hero-description ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          Find, compare, and choose the best products across multiple online retailers.
          Make informed purchasing decisions with transparent pricing and comprehensive product comparisons.
        </p>

        <p className="verification-text">
          Impact-Site-Verification: a0d434f3-ca6a-4244-8ea8-631eb75e83cf
        </p>

        <div className={`hero-buttons ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <a href="#contact" className="cta-primary">Get in Touch</a>
          <a href="#overview" className="cta-secondary">Learn More</a>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 50% 50%, rgba(229, 9, 20, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .hero-logo {
          opacity: 0;
        }

        .hero-logo-image {
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.4);
        }

        .hero-title {
          font-size: clamp(2.5rem, 7vw, 5rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
          line-height: 1.1;
        }

        .brand-name {
          color: ${colors.netflixRed};
          position: relative;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 600;
          color: ${colors.textLight};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: ${colors.textLight};
          text-align: center;
          max-width: 700px;
          line-height: 1.6;
          margin: 0;
          opacity: 0;
        }

        .verification-text {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.3);
          text-align: center;
          margin: 8px 0 0 0;
          font-family: monospace;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
        }

        .cta-primary, .cta-secondary {
          padding: 16px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-primary {
          background: ${colors.netflixRed};
          color: ${colors.white};
          box-shadow: 0 8px 30px rgba(229, 9, 20, 0.4);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(229, 9, 20, 0.6);
        }

        .cta-secondary {
          background: transparent;
          color: ${colors.white};
          border: 2px solid ${colors.netflixRed};
        }

        .cta-secondary:hover {
          background: rgba(229, 9, 20, 0.1);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 20px 60px;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

function BusinessOverviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="overview" className="section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Business <span className="highlight">Overview</span>
        </h2>

        <div className={`content-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <p className="description">
            Dorfy is a product discovery and price comparison platform designed to help users find, compare, and choose the best products across multiple online retailers.
          </p>

          <p className="description">
            Our platform allows users to search for a product or product category and view comparable offers from different merchants, including pricing, availability, and key product attributes, enabling informed purchasing decisions.
          </p>
        </div>

        <div className={`features-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Search</h3>
            <p>Search across multiple retailers simultaneously</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Price Comparison</h3>
            <p>Compare prices and find the best deals</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Product Analysis</h3>
            <p>View key attributes and availability</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Informed Decisions</h3>
            <p>Make confident purchasing choices</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .content-box {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          padding: 40px;
          max-width: 900px;
          width: 100%;
          backdrop-filter: blur(10px);
          opacity: 0;
        }

        .description {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: ${colors.textLight};
          line-height: 1.8;
          margin: 0 0 20px 0;
        }

        .description:last-child {
          margin-bottom: 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .feature-card {
          background: rgba(26, 26, 26, 0.6);
          border: 1px solid rgba(229, 9, 20, 0.3);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 12px 40px rgba(229, 9, 20, 0.4);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .feature-card p {
          font-size: 0.95rem;
          color: ${colors.textLight};
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .content-box {
            padding: 28px 24px;
          }

          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
    </section>
  );
}

function HowWePromoteSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section promote-section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          How We Promote <span className="highlight">Brands & Products</span>
        </h2>

        <div className={`content-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <p className="description">
            We promote partner brands through a search and comparison experience:
          </p>
        </div>

        <div className={`steps-container ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Active Search</h3>
            <p>Users actively search for specific products or product categories</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Display Results</h3>
            <p>Dorfy displays relevant products from approved affiliate partners</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Neutral Format</h3>
            <p>Products are presented in a neutral, comparison-focused format</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>User Action</h3>
            <p>Users click through to the merchant's website to complete purchases</p>
          </div>
        </div>

        <div className={`highlight-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="highlight-icon">🎯</div>
          <p>All traffic is high-intent, as users are already in a buying or research phase.</p>
        </div>
      </div>

      <style jsx>{`
        .promote-section {
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229, 9, 20, 0.05) 50%, rgba(0,0,0,0) 100%);
        }

        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .content-box {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          padding: 32px 40px;
          max-width: 900px;
          width: 100%;
          backdrop-filter: blur(10px);
          opacity: 0;
        }

        .description {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: ${colors.textLight};
          line-height: 1.8;
          margin: 0;
          text-align: center;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .step-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.2);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${colors.netflixRed}, #ff4444);
          transform: scaleX(0);
          transition: transform 0.6s ease;
        }

        .step-card:hover::before {
          transform: scaleX(1);
        }

        .step-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.4);
        }

        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: ${colors.netflixRed};
          color: ${colors.white};
          font-size: 2rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 20px rgba(229, 9, 20, 0.4);
        }

        .step-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .step-card p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        .highlight-box {
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 20px;
          padding: 32px;
          max-width: 700px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 50px rgba(229, 9, 20, 0.4);
          opacity: 0;
        }

        .highlight-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .highlight-box p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 600;
          color: ${colors.white};
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .content-box {
            padding: 24px 28px;
          }

          .steps-container {
            grid-template-columns: 1fr;
          }

          .highlight-box {
            flex-direction: column;
            text-align: center;
            padding: 28px 24px;
          }
        }
      `}</style>
    </section>
  );
}

function TrafficSourcesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Traffic <span className="highlight">Sources</span>
        </h2>

        <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Our primary traffic sources include:
        </p>

        <div className={`traffic-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="traffic-card">
            <div className="traffic-icon">🔍</div>
            <h3>Organic Search</h3>
            <p>SEO-driven product and category searches bringing qualified traffic</p>
          </div>

          <div className="traffic-card">
            <div className="traffic-icon">🌐</div>
            <h3>Direct Traffic</h3>
            <p>Users directly accessing the platform for product discovery</p>
          </div>

          <div className="traffic-card">
            <div className="traffic-icon">📱</div>
            <h3>Mobile & Browser</h3>
            <p>Future expansion into mobile applications and browser-based tools</p>
          </div>
        </div>

        <div className={`disclaimer-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <p>We do not use incentivized traffic, misleading ads, or prohibited promotional methods.</p>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .section-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .traffic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .traffic-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          padding: 40px 28px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .traffic-card:hover {
          transform: translateY(-10px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.4);
        }

        .traffic-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 10px rgba(229, 9, 20, 0.3));
        }

        .traffic-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 16px 0;
        }

        .traffic-card p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        .disclaimer-box {
          background: rgba(26, 26, 26, 0.8);
          border: 1px solid rgba(229, 9, 20, 0.2);
          border-radius: 16px;
          padding: 24px 32px;
          max-width: 800px;
          width: 100%;
          text-align: center;
          backdrop-filter: blur(10px);
          opacity: 0;
        }

        .disclaimer-box p {
          font-size: 1rem;
          font-weight: 600;
          color: ${colors.white};
          margin: 0;
        }

        @media (max-width: 768px) {
          .traffic-grid {
            grid-template-columns: 1fr;
          }

          .disclaimer-box {
            padding: 20px 24px;
          }
        }
      `}</style>
    </section>
  );
}

function AudienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="audience" className="section audience-section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Our <span className="highlight">Audience</span>
        </h2>

        <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Dorfy's audience consists of:
        </p>

        <div className={`audience-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="audience-card">
            <div className="audience-icon">🛍️</div>
            <h3>Price Comparison Shoppers</h3>
            <p>Online shoppers comparing prices and options before purchasing</p>
          </div>

          <div className="audience-card">
            <div className="audience-icon">💡</div>
            <h3>Deal-Conscious Consumers</h3>
            <p>Research-driven consumers seeking the best value for their money</p>
          </div>

          <div className="audience-card">
            <div className="audience-icon">🔍</div>
            <h3>Informed Buyers</h3>
            <p>Users seeking transparency and efficiency in online shopping</p>
          </div>
        </div>

        <div className={`global-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="global-icon">🌍</div>
          <p>The platform is designed to support users across multiple regions and retailers.</p>
        </div>
      </div>

      <style jsx>{`
        .audience-section {
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229, 9, 20, 0.05) 50%, rgba(0,0,0,0) 100%);
        }

        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .section-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .audience-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          padding: 40px 28px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .audience-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, ${colors.netflixRed}, #ff4444, ${colors.netflixRed});
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .audience-card:hover::before {
          opacity: 1;
        }

        .audience-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: transparent;
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.5);
        }

        .audience-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 10px rgba(229, 9, 20, 0.3));
        }

        .audience-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 16px 0;
        }

        .audience-card p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        .global-box {
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 20px;
          padding: 32px;
          max-width: 700px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 50px rgba(229, 9, 20, 0.4);
          opacity: 0;
        }

        .global-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .global-box p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 600;
          color: ${colors.white};
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .audience-grid {
            grid-template-columns: 1fr;
          }

          .global-box {
            flex-direction: column;
            text-align: center;
            padding: 28px 24px;
          }
        }
      `}</style>
    </section>
  );
}

function MonetizationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Monetization <span className="highlight">Model</span>
        </h2>

        <div className={`monetization-container ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="monetization-hero">
            <div className="monetization-icon">💰</div>
            <h3>Affiliate Partnerships</h3>
            <p className="hero-text">Dorfy monetizes through affiliate partnerships</p>
          </div>

          <div className="monetization-details">
            <div className="detail-item">
              <div className="detail-icon">✅</div>
              <p>When a user clicks on a product and completes a purchase on a partner merchant's site, we may earn a commission</p>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🎁</div>
              <p>At no additional cost to the user</p>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🔒</div>
              <p>We do not alter pricing, apply unauthorized discounts, or interfere with merchant checkout flows</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 1000px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .monetization-container {
          width: 100%;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 24px;
          padding: 48px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 70px rgba(229, 9, 20, 0.4);
          opacity: 0;
        }

        .monetization-hero {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 2px solid rgba(229, 9, 20, 0.3);
        }

        .monetization-icon {
          font-size: 5rem;
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 20px rgba(229, 9, 20, 0.5));
        }

        .monetization-hero h3 {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 16px 0;
        }

        .hero-text {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          margin: 0;
        }

        .monetization-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: rgba(26, 26, 26, 0.6);
          border: 1px solid rgba(229, 9, 20, 0.2);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .detail-item:hover {
          transform: translateX(10px);
          border-color: rgba(229, 9, 20, 0.5);
          box-shadow: 0 10px 30px rgba(229, 9, 20, 0.3);
        }

        .detail-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .detail-item p {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .monetization-container {
            padding: 32px 24px;
          }

          .monetization-hero {
            margin-bottom: 32px;
            padding-bottom: 32px;
          }

          .detail-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

function CurrentStatusSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section status-section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Current <span className="highlight">Status</span>
        </h2>

        <div className={`status-container ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="status-badge">
            <div className="badge-icon">🚀</div>
            <h3>In Development</h3>
          </div>

          <div className="status-grid">
            <div className="status-item">
              <div className="status-check">✓</div>
              <p>Onboarding affiliate partners</p>
            </div>

            <div className="status-item">
              <div className="status-check">✓</div>
              <p>Integrating product catalogs via approved APIs</p>
            </div>

            <div className="status-item">
              <div className="status-check">✓</div>
              <p>Preparing the platform for public launch</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .status-section {
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229, 9, 20, 0.05) 50%, rgba(0,0,0,0) 100%);
        }

        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .status-container {
          width: 100%;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 24px;
          padding: 48px;
          backdrop-filter: blur(10px);
          opacity: 0;
        }

        .status-badge {
          text-align: center;
          margin-bottom: 40px;
        }

        .badge-icon {
          font-size: 5rem;
          margin-bottom: 20px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .status-badge h3 {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 800;
          color: ${colors.netflixRed};
          margin: 0;
          text-shadow: 0 0 30px rgba(229, 9, 20, 0.6);
        }

        .status-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(229, 9, 20, 0.1);
          border: 1px solid rgba(229, 9, 20, 0.3);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .status-item:hover {
          transform: translateX(10px);
          border-color: ${colors.netflixRed};
          background: rgba(229, 9, 20, 0.15);
        }

        .status-check {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: ${colors.netflixRed};
          color: ${colors.white};
          font-size: 1.5rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(229, 9, 20, 0.4);
        }

        .status-item p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 600;
          color: ${colors.white};
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .status-container {
            padding: 32px 24px;
          }

          .status-item {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}

function ComplianceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Compliance & <span className="highlight">Transparency</span>
        </h2>

        <div className={`compliance-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="compliance-card">
            <div className="compliance-icon">📋</div>
            <h3>Disclosed Relationships</h3>
            <p>All affiliate relationships are disclosed</p>
          </div>

          <div className="compliance-card">
            <div className="compliance-icon">🚫</div>
            <h3>No Violations</h3>
            <p>No cookie stuffing, brand bidding abuse, or trademark violations</p>
          </div>

          <div className="compliance-card">
            <div className="compliance-icon">✓</div>
            <h3>Honest Marketing</h3>
            <p>No misleading claims or false scarcity</p>
          </div>

          <div className="compliance-card">
            <div className="compliance-icon">🔒</div>
            <h3>Full Compliance</h3>
            <p>Complete compliance with Impact and advertiser terms</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .compliance-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .compliance-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${colors.netflixRed}, #ff4444);
          transform: scaleX(0);
          transition: transform 0.6s ease;
        }

        .compliance-card:hover::before {
          transform: scaleX(1);
        }

        .compliance-card:hover {
          transform: translateY(-10px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.4);
        }

        .compliance-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 10px rgba(229, 9, 20, 0.3));
        }

        .compliance-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .compliance-card p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .compliance-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const emails = [
    'contact@dorfy.app',
    'zicospace711@gmail.com',
    'zicozafar@gmail.com'
  ];

  return (
    <section ref={sectionRef} id="contact" className="section contact-section">
      <div className="section-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Contact <span className="highlight">Information</span>
        </h2>

        <div className={`contact-container ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="contact-header">
            <Image
              src={getAssetPath("/dofylogogo.png")}
              alt="Dorfy Logo"
              width={80}
              height={80}
              className="contact-logo"
            />
            <h3>Dorfy</h3>
          </div>

          <div className="contact-info">
            <div className="info-label">Business Name</div>
            <div className="info-value">Dorfy</div>
          </div>

          <div className="contact-emails">
            <div className="info-label">Contact Emails</div>
            <div className="emails-list">
              {emails.map((email, index) => (
                <a
                  key={index}
                  href={`mailto:${email}`}
                  className="email-link"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <span className="email-icon">✉️</span>
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-cta">
            <p>Ready to partner with Dorfy?</p>
            <a href={`mailto:${emails[0]}`} className="contact-btn">
              Get in Touch
            </a>
          </div>
        </div>

        <footer className={`footer ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <p>&copy; {new Date().getFullYear()} Dorfy. All rights reserved.</p>
          <div className="footer-links">
            <a href="/dorfyplan/privacy" className="footer-link">Privacy Policy</a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229, 9, 20, 0.08) 100%);
        }

        .section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .section-content {
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .contact-container {
          width: 100%;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(26, 26, 26, 0.95) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 24px;
          padding: 48px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 70px rgba(229, 9, 20, 0.4);
          opacity: 0;
        }

        .contact-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 2px solid rgba(229, 9, 20, 0.3);
        }

        .contact-logo {
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(229, 9, 20, 0.4);
        }

        .contact-header h3 {
          font-size: 2.5rem;
          font-weight: 900;
          color: ${colors.white};
          margin: 0;
        }

        .contact-info {
          text-align: center;
          margin-bottom: 32px;
        }

        .info-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: ${colors.textLight};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .info-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${colors.white};
        }

        .contact-emails {
          margin-bottom: 40px;
        }

        .emails-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }

        .email-link {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(26, 26, 26, 0.6);
          border: 1px solid rgba(229, 9, 20, 0.3);
          border-radius: 12px;
          padding: 16px 20px;
          color: ${colors.white};
          text-decoration: none;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .email-link:hover {
          background: rgba(229, 9, 20, 0.2);
          border-color: ${colors.netflixRed};
          transform: translateX(10px);
        }

        .email-icon {
          font-size: 1.5rem;
        }

        .contact-cta {
          text-align: center;
          padding-top: 40px;
          border-top: 2px solid rgba(229, 9, 20, 0.3);
        }

        .contact-cta p {
          font-size: 1.2rem;
          color: ${colors.textLight};
          margin: 0 0 20px 0;
        }

        .contact-btn {
          display: inline-block;
          background: ${colors.netflixRed};
          color: ${colors.white};
          padding: 16px 48px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(229, 9, 20, 0.4);
        }

        .contact-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(229, 9, 20, 0.6);
        }

        .footer {
          text-align: center;
          padding: 24px;
          opacity: 0;
        }

        .footer p {
          font-size: 0.9rem;
          color: ${colors.textLight};
          margin: 0 0 12px 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 12px;
        }

        .footer-link {
          color: ${colors.textLight};
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: ${colors.netflixRed};
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 32px 24px;
          }

          .contact-header {
            margin-bottom: 32px;
            padding-bottom: 32px;
          }

          .email-link {
            font-size: 0.95rem;
            padding: 14px 16px;
          }

          .contact-cta {
            padding-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}
