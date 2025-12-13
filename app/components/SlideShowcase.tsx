'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { colors } from '../colors';

export default function SlideShowcase() {
  return (
    <>
      <div className="main-container">
        <IntroSection />
        <FeaturesSection />
        <VisionSection />
        <MarketOpportunitySection />
        <ShopWhatYouSeeSection />
        <OutfitManagementSection />
        <TryOnSection />
        <BrandPartnershipSection />
        <VideoScannerSection />
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
          height: 100%;
        }

        body {
          background-color: ${colors.dark};
          background-image:
            radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          background-position: 0 0;
          background-attachment: fixed;
        }

        .main-container {
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

        @media (max-width: 768px) {
          body {
            background-size: 25px 25px;
          }
        }
      `}</style>
    </>
  );
}

function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="intro-section">
      <div className="intro-content">
        <h1 className={`intro-title ${isVisible ? 'animate-in' : ''}`}>
          What is <span className="brand-name">Dorfy</span>?
        </h1>

        <p className={`intro-description ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          A community hub where you can see what everyone&apos;s watching, playing, and wearing.
        </p>

        <div className={`content-wrapper ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="app-preview">
            <Image
              src="/homepage.jpg"
              alt="Dorfy App Homepage"
              width={300}
              height={600}
              className="phone-mockup"
              priority
            />
          </div>

          <div className="info-container">
            <div className="features-list">
              <div className="feature-item">
                <span className="icon">🛍️</span>
                <span>Build features to shop similar items that people are wearing</span>
              </div>
              <div className="feature-item">
                <span className="icon">👔</span>
                <span>Try outfits on yourself before buying</span>
              </div>
              <div className="feature-item">
                <span className="icon">🤝</span>
                <span>Collaborate with brands and affiliate platforms</span>
              </div>
              <div className="feature-item">
                <span className="icon">🌐</span>
                <span>Shop across eBay, Amazon, AliExpress, Walmart & more</span>
              </div>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.sharifzafar.dorfy"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Download on Google Play
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
        }

        .intro-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        .intro-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0;
          line-height: 1.1;
          text-align: center;
          opacity: 0;
        }

        .brand-name {
          color: ${colors.netflixRed};
        }

        .intro-description {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: ${colors.textLight};
          max-width: 900px;
          line-height: 1.6;
          margin: 0;
          text-align: center;
          opacity: 0;
        }

        .content-wrapper {
          display: flex;
          gap: 60px;
          width: 100%;
          max-width: 1100px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
        }

        .app-preview {
          flex: 0 0 auto;
        }

        .phone-mockup {
          border-radius: 30px;
          box-shadow:
            0 25px 70px rgba(229, 9, 20, 0.4),
            0 0 0 10px rgba(255, 255, 255, 0.1);
          object-fit: cover;
          width: 100%;
          max-width: 300px;
          height: auto;
          transition: transform 0.3s ease;
        }

        .phone-mockup:hover {
          transform: translateY(-10px);
        }

        .info-container {
          flex: 1;
          min-width: 320px;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: ${colors.textLight};
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(229, 9, 20, 0.1);
          border-color: rgba(229, 9, 20, 0.3);
          transform: translateX(10px);
        }

        .icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: ${colors.netflixRed};
          color: ${colors.white};
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(229, 9, 20, 0.4);
          align-self: flex-start;
        }

        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(229, 9, 20, 0.6);
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .phone-container {
            order: -1;
          }

          .phone-mockup {
            max-width: 240px;
          }

          .info-container {
            gap: 30px;
          }

          .download-btn {
            align-self: stretch;
          }
        }

        @media (max-width: 768px) {
          .intro-section {
            padding: 32px 20px;
          }

          .intro-content {
            gap: 40px;
          }

          .content-wrapper {
            gap: 35px;
          }

          .phone-mockup {
            max-width: 200px;
          }

          .features-list {
            gap: 16px;
          }

          .feature-item {
            padding: 12px 16px;
            font-size: 0.95rem;
          }

          .icon {
            font-size: 1.5rem;
          }

          .download-btn {
            padding: 14px 28px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

function VisionSection() {
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
    <section ref={sectionRef} className="vision-section">
      <div className="vision-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          The <span className="highlight">Future</span> Vision
        </h2>

        <p className={`vision-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Transforming how people discover, try, and shop in the real world
        </p>

        {/* YouTube Video Showcase */}
        <div className={`video-container ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Mi4hRzjP-0A?si=IWyXPHpyrxQioV_9"
              title="Dorfy Vision Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Vision Features */}
        <div className={`vision-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="vision-card">
            <div className="vision-icon">👓</div>
            <h3>Smart Glass Integration</h3>
            <p>Seamlessly integrate with Meta Ray-Ban glasses and future AR devices for hands-free shopping experiences</p>
          </div>

          <div className="vision-card">
            <div className="vision-icon">📸</div>
            <h3>Real-World Discovery</h3>
            <p>Take a photo during a film, on the street, or anywhere - instantly shop similar items across Amazon, Walmart, AliExpress, eBay & more</p>
          </div>

          <div className="vision-card">
            <div className="vision-icon">🎭</div>
            <h3>Virtual Try-On</h3>
            <p>Try outfits on yourself, friends, or family instantly using advanced AI - see before you buy, shop directly</p>
          </div>

          <div className="vision-card">
            <div className="vision-icon">🛍️</div>
            <h3>Contextual Commerce</h3>
            <p>Like Humane&apos;s Ai Pin but for shopping - bringing intelligent, context-aware purchasing to your everyday life</p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className={`highlights-container ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.7s' }}>
          <div className="highlight-item">
            <span className="highlight-number">∞</span>
            <span className="highlight-text">Unlimited Product Discovery</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">⚡</span>
            <span className="highlight-text">Instant Virtual Try-On</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">🌍</span>
            <span className="highlight-text">Global Multi-Platform Shopping</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vision-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }

        .vision-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(229, 9, 20, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(229, 9, 20, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .vision-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
          position: relative;
          z-index: 1;
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
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${colors.netflixRed}, #ff4444);
          border-radius: 2px;
        }

        .vision-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          max-width: 700px;
          opacity: 0;
        }

        .video-container {
          width: 100%;
          max-width: 900px;
          opacity: 0;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 25px 70px rgba(229, 9, 20, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          background: rgba(26, 26, 26, 0.8);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-wrapper:hover {
          transform: translateY(-5px);
          box-shadow:
            0 30px 80px rgba(229, 9, 20, 0.5),
            0 0 0 1px rgba(229, 9, 20, 0.3);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .vision-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.6) 100%);
          border: 2px solid rgba(229, 9, 20, 0.2);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .vision-card::before {
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

        .vision-card:hover::before {
          opacity: 1;
        }

        .vision-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: transparent;
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.5);
        }

        .vision-icon {
          font-size: 3.5rem;
          margin-bottom: 16px;
          filter: drop-shadow(0 4px 10px rgba(229, 9, 20, 0.3));
        }

        .vision-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .vision-card p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        .highlights-container {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          padding: 30px;
          background: rgba(26, 26, 26, 0.5);
          border-radius: 20px;
          border: 1px solid rgba(229, 9, 20, 0.2);
          opacity: 0;
        }

        .highlight-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 20px;
          transition: transform 0.3s ease;
        }

        .highlight-item:hover {
          transform: scale(1.1);
        }

        .highlight-number {
          font-size: 3rem;
          font-weight: 900;
          color: ${colors.netflixRed};
          text-shadow: 0 0 20px rgba(229, 9, 20, 0.5);
        }

        .highlight-text {
          font-size: 1rem;
          font-weight: 600;
          color: ${colors.white};
          text-align: center;
          max-width: 180px;
        }

        @media (max-width: 1024px) {
          .vision-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .vision-section {
            padding: 60px 20px;
          }

          .vision-content {
            gap: 35px;
          }

          .video-wrapper {
            border-radius: 16px;
          }

          .vision-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .vision-card {
            padding: 28px 20px;
          }

          .vision-icon {
            font-size: 3rem;
          }

          .vision-card h3 {
            font-size: 1.2rem;
          }

          .vision-card p {
            font-size: 0.95rem;
          }

          .highlights-container {
            gap: 24px;
            padding: 24px;
          }

          .highlight-item {
            flex: 1;
            min-width: 140px;
          }

          .highlight-number {
            font-size: 2.5rem;
          }

          .highlight-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .highlights-container {
            flex-direction: column;
            gap: 20px;
          }

          .highlight-item {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

function MarketOpportunitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCharts, setAnimateCharts] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setAnimateCharts(true), 300);
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

  const marketData = {
    global: { value: 325, label: 'Global Market', description: 'E-commerce Fashion & Entertainment' },
    us: { value: 98, label: 'US Market', description: 'North America' },
    europe: { value: 87, label: 'Europe Market', description: 'European Union' },
    asia: { value: 140, label: 'Asia-Pacific', description: 'Emerging Markets' }
  };

  return (
    <section ref={sectionRef} className="market-section">
      <div className="market-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Market <span className="highlight">Opportunity</span>
        </h2>

        <p className={`market-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Tapping into the $325B+ global social commerce & entertainment discovery market
        </p>

        {/* Global Market Overview */}
        <div className={`market-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          {Object.entries(marketData).map(([key, data], index) => (
            <div key={key} className="market-card" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <div className="market-value">
                <span className="currency">$</span>
                <span className={`amount ${animateCharts ? 'count-up' : ''}`}>
                  {data.value}
                </span>
                <span className="unit">B</span>
              </div>
              <h3>{data.label}</h3>
              <p>{data.description}</p>
              <div className="market-bar">
                <div
                  className="market-fill"
                  style={{
                    width: animateCharts ? `${(data.value / 325) * 100}%` : '0%',
                    transitionDelay: `${0.3 + index * 0.1}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className={`metrics-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="metric-card">
            <div className="metric-icon">📈</div>
            <div className="metric-value">47%</div>
            <div className="metric-label">Annual Growth Rate</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <div className="metric-value">$12B</div>
            <div className="metric-label">Target Market Share</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💰</div>
            <div className="metric-value">85%</div>
            <div className="metric-label">Gross Margin Potential</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🌍</div>
            <div className="metric-value">2.5B</div>
            <div className="metric-label">Addressable Users</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .market-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229, 9, 20, 0.05) 50%, rgba(0,0,0,0) 100%);
        }

        .market-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          text-align: center;
          margin: 0;
          opacity: 0;
        }

        .market-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          max-width: 800px;
          opacity: 0;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .market-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .market-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .market-card::before {
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

        .market-card:hover::before {
          transform: scaleX(1);
        }

        .market-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.4);
        }

        .market-value {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: ${colors.white};
          margin-bottom: 12px;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 4px;
        }

        .currency, .unit {
          font-size: 0.5em;
          color: ${colors.netflixRed};
          font-weight: 700;
        }

        .amount {
          display: inline-block;
        }

        .amount.count-up {
          animation: countUp 1.5s ease-out forwards;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .market-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 8px 0;
        }

        .market-card p {
          font-size: 0.9rem;
          color: ${colors.textLight};
          margin: 0 0 16px 0;
        }

        .market-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          margin-top: 16px;
        }

        .market-fill {
          height: 100%;
          background: linear-gradient(90deg, ${colors.netflixRed}, #ff4444);
          border-radius: 10px;
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 20px rgba(229, 9, 20, 0.6);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          width: 100%;
          opacity: 0;
        }

        .metric-card {
          background: rgba(26, 26, 26, 0.8);
          border: 1px solid rgba(229, 9, 20, 0.2);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .metric-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 10px 30px rgba(229, 9, 20, 0.3);
        }

        .metric-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .metric-value {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 900;
          color: ${colors.netflixRed};
          margin-bottom: 8px;
        }

        .metric-label {
          font-size: 0.95rem;
          color: ${colors.textLight};
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .market-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .market-section {
            padding: 60px 20px;
          }

          .market-content {
            gap: 35px;
          }

          .market-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .market-card {
            padding: 24px 20px;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .metric-card {
            padding: 20px 16px;
          }

          .metric-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

function ShopWhatYouSeeSection() {
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
    <section ref={sectionRef} className="shop-section">
      <div className="shop-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Shop <span className="highlight">What You See</span>
        </h2>

        <p className={`shop-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Instant visual search and discovery from anywhere
        </p>

        <div className={`content-layout ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          {/* Left side - Image showcase */}
          <div className="image-showcase">
            <div className="showcase-wrapper">
              <Image
                src="/scanitem.png"
                alt="Shop What You See - Scan and Find Similar Items"
                width={400}
                height={800}
                className="showcase-image"
                priority
              />
              <div className="glow-effect"></div>
            </div>
          </div>

          {/* Right side - Features and Revenue */}
          <div className="features-content">
            <div className="feature-box">
              <div className="box-icon">📸</div>
              <h3>Capture & Upload</h3>
              <p>Take a photo or screenshot from Instagram stories, TikTok, movies, or anywhere - upload it to Dorfy and let AI do the work</p>
            </div>

            <div className="feature-box">
              <div className="box-icon">🔍</div>
              <h3>AI-Powered Scan</h3>
              <p>Advanced visual recognition instantly identifies items and finds similar products across multiple platforms</p>
            </div>

            <div className="feature-box">
              <div className="box-icon">🛒</div>
              <h3>Shop Similar Items</h3>
              <p>Browse matching products from Amazon, Walmart, AliExpress, eBay, and more - all in one place</p>
            </div>

            {/* Revenue Model */}
            <div className="revenue-box">
              <div className="revenue-header">
                <div className="revenue-icon">💰</div>
                <h3>Revenue Model</h3>
              </div>
              <div className="revenue-details">
                <div className="revenue-item">
                  <span className="percentage">9-10%</span>
                  <span className="description">Commission per sale via affiliate platforms</span>
                </div>
                <div className="platforms-list">
                  <span className="platform-tag">Amazon Associates</span>
                  <span className="platform-tag">Walmart Affiliates</span>
                  <span className="platform-tag">eBay Partner Network</span>
                  <span className="platform-tag">AliExpress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shop-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          position: relative;
          background: linear-gradient(180deg, rgba(229, 9, 20, 0.03) 0%, rgba(0,0,0,0) 100%);
        }

        .shop-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
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

        .shop-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          max-width: 700px;
          opacity: 0;
        }

        .content-layout {
          display: flex;
          gap: 60px;
          width: 100%;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
        }

        .image-showcase {
          flex: 0 0 auto;
          position: relative;
        }

        .showcase-wrapper {
          position: relative;
          display: inline-block;
        }

        .showcase-image {
          border-radius: 30px;
          box-shadow:
            0 30px 80px rgba(229, 9, 20, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          object-fit: cover;
          width: 100%;
          max-width: 350px;
          height: auto;
          transition: transform 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .showcase-image:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(229, 9, 20, 0.3) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }

        .features-content {
          flex: 1;
          min-width: 320px;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-box {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(40, 40, 40, 0.6) 100%);
          border: 1px solid rgba(229, 9, 20, 0.2);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .feature-box:hover {
          transform: translateX(10px);
          border-color: rgba(229, 9, 20, 0.5);
          box-shadow: 0 10px 40px rgba(229, 9, 20, 0.3);
        }

        .box-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .feature-box h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 10px 0;
        }

        .feature-box p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        .revenue-box {
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 20px;
          padding: 28px;
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 50px rgba(229, 9, 20, 0.4);
        }

        .revenue-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .revenue-icon {
          font-size: 2.5rem;
        }

        .revenue-header h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0;
        }

        .revenue-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .revenue-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .percentage {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: ${colors.netflixRed};
          text-shadow: 0 0 30px rgba(229, 9, 20, 0.6);
        }

        .description {
          font-size: 1.1rem;
          color: ${colors.textLight};
          font-weight: 500;
        }

        .platforms-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 8px;
        }

        .platform-tag {
          background: rgba(229, 9, 20, 0.2);
          border: 1px solid rgba(229, 9, 20, 0.4);
          color: ${colors.white};
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .platform-tag:hover {
          background: rgba(229, 9, 20, 0.3);
          border-color: ${colors.netflixRed};
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .content-layout {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .shop-section {
            padding: 60px 20px;
          }

          .shop-content {
            gap: 35px;
          }

          .content-layout {
            gap: 30px;
          }

          .showcase-image {
            max-width: 280px;
          }

          .features-content {
            gap: 20px;
          }

          .feature-box {
            padding: 20px;
          }

          .box-icon {
            font-size: 2rem;
          }

          .feature-box h3 {
            font-size: 1.2rem;
          }

          .feature-box p {
            font-size: 0.95rem;
          }

          .revenue-box {
            padding: 24px;
          }

          .revenue-icon {
            font-size: 2rem;
          }

          .revenue-header h3 {
            font-size: 1.3rem;
          }

          .percentage {
            font-size: 2.5rem;
          }

          .description {
            font-size: 1rem;
          }

          .platform-tag {
            font-size: 0.8rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
}

function OutfitManagementSection() {
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
    <section ref={sectionRef} className="outfit-section">
      <div className="outfit-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Build Your <span className="highlight">Digital Closet</span>
        </h2>

        <p className={`outfit-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Organize, create, and monetize your wardrobe with AI-powered features
        </p>

        {/* GIF Showcases */}
        <div className={`gif-showcase ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="gif-wrapper">
            <Image
              src="/fits.gif"
              alt="Create and organize your outfits"
              width={300}
              height={600}
              className="gif-image"
              unoptimized
            />
            <div className="gif-label">Create Fits</div>
          </div>
          <div className="gif-wrapper">
            <Image
              src="/pieces.gif"
              alt="Categorize your wardrobe pieces"
              width={300}
              height={600}
              className="gif-image"
              unoptimized
            />
            <div className="gif-label">Organize Pieces</div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className={`outfit-features-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="outfit-feature-card">
            <div className="feature-icon">👕</div>
            <h3>Add Your Outfits</h3>
            <p>Upload photos of your wardrobe items and let Dorfy automatically identify and categorize each piece using AI</p>
          </div>

          <div className="outfit-feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Create Fits</h3>
            <p>Mix and match your items to create stunning outfit combinations. Dorfy helps you visualize different looks effortlessly</p>
          </div>

          <div className="outfit-feature-card">
            <div className="feature-icon">🏷️</div>
            <h3>Smart Categorization</h3>
            <p>AI automatically organizes your items by type, color, season, and style - making it easy to find what you need</p>
          </div>

          <div className="outfit-feature-card">
            <div className="feature-icon">💸</div>
            <h3>Resell & Discover</h3>
            <p>List items you no longer wear and discover unique pieces from other users in the community marketplace</p>
          </div>
        </div>

        {/* Marketplace Revenue Model */}
        <div className={`marketplace-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.7s' }}>
          <div className="marketplace-header">
            <h3>🛍️ Community Marketplace</h3>
          </div>
          <div className="marketplace-content">
            <div className="marketplace-feature">
              <div className="feature-number">1</div>
              <div className="feature-text">
                <h4>Users Resell Their Items</h4>
                <p>Built-in marketplace where users can list and sell their pre-owned fashion items to the community</p>
              </div>
            </div>
            <div className="marketplace-feature">
              <div className="feature-number">2</div>
              <div className="feature-text">
                <h4>Deep Link Integration</h4>
                <p>Seamless third-party platform integration with deep link affiliate tracking for every transaction</p>
              </div>
            </div>
            <div className="marketplace-feature">
              <div className="feature-number">3</div>
              <div className="feature-text">
                <h4>Commission on Sales</h4>
                <p>We earn commission on marketplace transactions while connecting buyers with sellers efficiently</p>
              </div>
            </div>
          </div>
          <div className="marketplace-stats">
            <div className="stat-item">
              <span className="stat-icon">💰</span>
              <span className="stat-text">Revenue from Marketplace Fees</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🔗</span>
              <span className="stat-text">Affiliate Commission via Deep Links</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outfit-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          background:
            radial-gradient(circle at 80% 20%, rgba(229, 9, 20, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229, 9, 20, 0.03) 100%);
        }

        .outfit-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
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

        .outfit-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          max-width: 700px;
          opacity: 0;
        }

        .gif-showcase {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
        }

        .gif-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .gif-image {
          border-radius: 30px;
          box-shadow:
            0 30px 80px rgba(229, 9, 20, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 280px;
          height: auto;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .gif-image:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow:
            0 35px 90px rgba(229, 9, 20, 0.6),
            0 0 0 2px ${colors.netflixRed};
        }

        .gif-label {
          font-size: 1.2rem;
          font-weight: 700;
          color: ${colors.white};
          text-align: center;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(26, 26, 26, 0.8) 100%);
          border: 1px solid rgba(229, 9, 20, 0.4);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .outfit-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .outfit-feature-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.2);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .outfit-feature-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.5);
        }

        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 16px;
          filter: drop-shadow(0 4px 10px rgba(229, 9, 20, 0.3));
        }

        .outfit-feature-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .outfit-feature-card p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        .marketplace-box {
          width: 100%;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(40, 40, 40, 0.8) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 24px;
          padding: 40px 32px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.4);
          opacity: 0;
        }

        .marketplace-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .marketplace-header h3 {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0;
        }

        .marketplace-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 32px;
        }

        .marketplace-feature {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 24px;
          background: rgba(229, 9, 20, 0.08);
          border-radius: 16px;
          border: 1px solid rgba(229, 9, 20, 0.3);
          transition: all 0.3s ease;
        }

        .marketplace-feature:hover {
          background: rgba(229, 9, 20, 0.15);
          border-color: ${colors.netflixRed};
          transform: translateX(8px);
        }

        .feature-number {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: ${colors.netflixRed};
          color: ${colors.white};
          font-size: 1.5rem;
          font-weight: 900;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(229, 9, 20, 0.5);
        }

        .feature-text h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0 0 8px 0;
        }

        .feature-text p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
        }

        .marketplace-stats {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 24px;
          border-top: 1px solid rgba(229, 9, 20, 0.3);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: rgba(229, 9, 20, 0.1);
          border-radius: 12px;
          border: 1px solid rgba(229, 9, 20, 0.2);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(229, 9, 20, 0.2);
          border-color: ${colors.netflixRed};
          transform: scale(1.05);
        }

        .stat-icon {
          font-size: 2rem;
        }

        .stat-text {
          font-size: 1rem;
          font-weight: 600;
          color: ${colors.white};
        }

        @media (max-width: 1024px) {
          .outfit-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .outfit-section {
            padding: 60px 20px;
          }

          .outfit-content {
            gap: 35px;
          }

          .gif-showcase {
            gap: 30px;
          }

          .gif-image {
            max-width: 240px;
          }

          .gif-label {
            font-size: 1.1rem;
            padding: 10px 20px;
          }

          .outfit-features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .outfit-feature-card {
            padding: 28px 20px;
          }

          .feature-icon {
            font-size: 3rem;
          }

          .outfit-feature-card h3 {
            font-size: 1.2rem;
          }

          .outfit-feature-card p {
            font-size: 0.95rem;
          }

          .marketplace-box {
            padding: 32px 24px;
          }

          .marketplace-feature {
            flex-direction: column;
            gap: 16px;
            padding: 20px;
          }

          .feature-number {
            width: 44px;
            height: 44px;
            font-size: 1.3rem;
          }

          .feature-text h4 {
            font-size: 1.15rem;
          }

          .feature-text p {
            font-size: 0.95rem;
          }

          .marketplace-stats {
            flex-direction: column;
            gap: 16px;
          }

          .stat-item {
            padding: 14px 20px;
          }

          .stat-icon {
            font-size: 1.8rem;
          }

          .stat-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}

function TryOnSection() {
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
    <section ref={sectionRef} className="tryon-section">
      <div className="tryon-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Virtual <span className="highlight">Try-On</span> Experience
        </h2>

        <p className={`tryon-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Try outfits from your closet or discover looks from other users - then shop instantly
        </p>

        {/* GIF Showcases */}
        <div className={`tryon-gifs ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="tryon-gif-wrapper">
            <Image
              src="/tryoutfit.gif"
              alt="Try on outfits virtually"
              width={300}
              height={600}
              className="tryon-gif-image"
              unoptimized
            />
            <div className="tryon-gif-label">Virtual Try-On</div>
          </div>
          <div className="tryon-gif-wrapper">
            <Image
              src="/trytab.gif"
              alt="Browse and try outfits from feed"
              width={300}
              height={600}
              className="tryon-gif-image"
              unoptimized
            />
            <div className="tryon-gif-label">Try-On Tab</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`tryon-features-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="tryon-feature-card">
            <div className="tryon-feature-icon">🎭</div>
            <h3>Try Your Closet</h3>
            <p>Virtually try on any outfit from your digital wardrobe. See how different combinations look on you before wearing them</p>
          </div>

          <div className="tryon-feature-card">
            <div className="tryon-feature-icon">👥</div>
            <h3>Discover User Fits</h3>
            <p>Browse the community feed and try on outfits from created fits by other users. Get inspired by trending looks and styles</p>
          </div>

          <div className="tryon-feature-card">
            <div className="tryon-feature-icon">🛍️</div>
            <h3>Shop Similar</h3>
            <p>Love an outfit? Hit "Shop Similar" to find and purchase matching items across Amazon, Walmart, eBay, and more platforms</p>
          </div>

          <div className="tryon-feature-card">
            <div className="tryon-feature-icon">💳</div>
            <h3>Direct Purchase</h3>
            <p>If users are reselling items from their closet, buy directly from them instantly through the integrated marketplace</p>
          </div>
        </div>

        {/* Shopping Flow Box */}
        <div className={`shopping-flow-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.7s' }}>
          <div className="flow-header">
            <h3>⚡ Seamless Shopping Journey</h3>
          </div>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Browse & Try</h4>
                <p>Explore outfits from your closet or community feed. Try them on virtually using AI</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Choose Path</h4>
                <p>Click "Shop Similar" for alternatives or "Buy Now" if the user is reselling the item</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Complete Purchase</h4>
                <p>Buy directly from users or through affiliate platforms - we earn commission on both</p>
              </div>
            </div>
          </div>
          <div className="flow-benefits">
            <div className="benefit-badge">
              <span className="badge-icon">✨</span>
              <span className="badge-text">Instant Virtual Try-On</span>
            </div>
            <div className="benefit-badge">
              <span className="badge-icon">🎯</span>
              <span className="badge-text">Multiple Purchase Options</span>
            </div>
            <div className="benefit-badge">
              <span className="badge-icon">💰</span>
              <span className="badge-text">Dual Revenue Streams</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tryon-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          background: linear-gradient(180deg, rgba(229, 9, 20, 0.03) 0%, rgba(0,0,0,0) 50%, rgba(229, 9, 20, 0.05) 100%);
        }

        .tryon-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
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
          background: linear-gradient(90deg, ${colors.netflixRed}, #ff4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tryon-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          max-width: 750px;
          opacity: 0;
        }

        .tryon-gifs {
          display: flex;
          gap: 50px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
        }

        .tryon-gif-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .tryon-gif-image {
          border-radius: 32px;
          box-shadow:
            0 35px 90px rgba(229, 9, 20, 0.6),
            0 0 0 2px rgba(255, 255, 255, 0.15);
          width: 100%;
          max-width: 300px;
          height: auto;
          transition: all 0.5s ease;
          position: relative;
        }

        .tryon-gif-image:hover {
          transform: translateY(-15px) scale(1.08);
          box-shadow:
            0 40px 100px rgba(229, 9, 20, 0.7),
            0 0 0 3px ${colors.netflixRed},
            0 0 60px rgba(229, 9, 20, 0.4);
        }

        .tryon-gif-label {
          font-size: 1.3rem;
          font-weight: 800;
          color: ${colors.white};
          text-align: center;
          padding: 14px 28px;
          background: linear-gradient(135deg, ${colors.netflixRed} 0%, #ff4444 100%);
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.5);
          transition: all 0.3s ease;
        }

        .tryon-gif-label:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 35px rgba(229, 9, 20, 0.7);
        }

        .tryon-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 28px;
          width: 100%;
          opacity: 0;
        }

        .tryon-feature-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(40, 40, 40, 0.8) 100%);
          border: 2px solid rgba(229, 9, 20, 0.25);
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
        }

        .tryon-feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .tryon-feature-card:hover::before {
          opacity: 1;
        }

        .tryon-feature-card:hover {
          transform: translateY(-12px) scale(1.03);
          border-color: ${colors.netflixRed};
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.6);
        }

        .tryon-feature-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          filter: drop-shadow(0 6px 15px rgba(229, 9, 20, 0.4));
          transition: transform 0.3s ease;
        }

        .tryon-feature-card:hover .tryon-feature-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .tryon-feature-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 14px 0;
        }

        .tryon-feature-card p {
          font-size: 1.05rem;
          color: ${colors.textLight};
          line-height: 1.7;
          margin: 0;
        }

        .shopping-flow-box {
          width: 100%;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(40, 40, 40, 0.9) 100%);
          border: 3px solid ${colors.netflixRed};
          border-radius: 28px;
          padding: 48px 40px;
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.5);
          opacity: 0;
          position: relative;
          overflow: hidden;
        }

        .shopping-flow-box::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(229, 9, 20, 0.15) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .flow-header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .flow-header h3 {
          font-size: clamp(2rem, 4.5vw, 2.8rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0;
          text-shadow: 0 0 30px rgba(229, 9, 20, 0.5);
        }

        .flow-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .flow-step {
          flex: 1;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 28px 24px;
          background: rgba(229, 9, 20, 0.1);
          border: 2px solid rgba(229, 9, 20, 0.4);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .flow-step:hover {
          background: rgba(229, 9, 20, 0.18);
          border-color: ${colors.netflixRed};
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(229, 9, 20, 0.4);
        }

        .step-number {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, ${colors.netflixRed} 0%, #ff4444 100%);
          color: ${colors.white};
          font-size: 1.8rem;
          font-weight: 900;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.6);
        }

        .step-content h4 {
          font-size: 1.3rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 10px 0;
          text-align: center;
        }

        .step-content p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.6;
          margin: 0;
          text-align: center;
        }

        .flow-arrow {
          font-size: 2.5rem;
          color: ${colors.netflixRed};
          font-weight: 900;
          flex-shrink: 0;
        }

        .flow-benefits {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 32px;
          border-top: 2px solid rgba(229, 9, 20, 0.3);
          position: relative;
          z-index: 1;
        }

        .benefit-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid rgba(229, 9, 20, 0.4);
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .benefit-badge:hover {
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.3) 0%, rgba(26, 26, 26, 1) 100%);
          border-color: ${colors.netflixRed};
          transform: scale(1.08);
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
        }

        .badge-icon {
          font-size: 1.8rem;
        }

        .badge-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: ${colors.white};
        }

        @media (max-width: 1024px) {
          .tryon-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .flow-steps {
            flex-direction: column;
          }

          .flow-arrow {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 768px) {
          .tryon-section {
            padding: 60px 20px;
          }

          .tryon-content {
            gap: 35px;
          }

          .tryon-gifs {
            gap: 35px;
          }

          .tryon-gif-image {
            max-width: 260px;
          }

          .tryon-gif-label {
            font-size: 1.15rem;
            padding: 12px 24px;
          }

          .tryon-features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .tryon-feature-card {
            padding: 32px 24px;
          }

          .tryon-feature-icon {
            font-size: 3.5rem;
          }

          .tryon-feature-card h3 {
            font-size: 1.3rem;
          }

          .tryon-feature-card p {
            font-size: 1rem;
          }

          .shopping-flow-box {
            padding: 36px 28px;
          }

          .flow-step {
            min-width: 100%;
            padding: 24px 20px;
          }

          .step-number {
            width: 52px;
            height: 52px;
            font-size: 1.6rem;
          }

          .step-content h4 {
            font-size: 1.2rem;
          }

          .step-content p {
            font-size: 0.95rem;
          }

          .flow-benefits {
            flex-direction: column;
            gap: 16px;
          }

          .benefit-badge {
            padding: 12px 20px;
          }

          .badge-icon {
            font-size: 1.6rem;
          }

          .badge-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

function BrandPartnershipSection() {
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
    <section ref={sectionRef} className="partnership-section">
      <div className="partnership-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Brand <span className="highlight">Partnership</span> & Growth
        </h2>

        <p className={`partnership-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Accelerating growth through strategic brand collaborations and premium subscription services
        </p>

        {/* Free Integration Offer */}
        <div className={`free-offer-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="offer-header">
            <div className="offer-icon">🤝</div>
            <h3>Free Brand Integration</h3>
          </div>
          <div className="offer-content">
            <p className="offer-description">
              We collaborate with small to mid-sized clothing brands, offering <strong>FREE integration</strong> of their products into our app&apos;s Brand Store feed. We negotiate affiliate partnerships and introduce the Dorfy platform to their existing customer base.
            </p>
            <div className="win-win-grid">
              <div className="win-box">
                <h4>🎯 Brands Win</h4>
                <ul>
                  <li>Virtual try-on for their customers</li>
                  <li>Free product promotion & exposure</li>
                  <li>Access to our growing user base</li>
                  <li>No upfront costs or risks</li>
                </ul>
              </div>
              <div className="win-box">
                <h4>✨ We Win</h4>
                <ul>
                  <li>Gain their customer base</li>
                  <li>Rapid content & product growth</li>
                  <li>Increased platform credibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Subscription Features */}
        <div className={`subscription-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="subscription-header">
            <h3>💎 Premium Monthly Subscription For Brands</h3>
            <p>Unlock powerful growth tools and placement options</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="item-icon">📍</div>
              <h4>Multi-Feed Placement</h4>
              <p>Showcase products in Bees feed (user feed), Fits feed (outfit inspiration), Brand Store feed, and Home page prime locations</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">🔔</div>
              <h4>Notification Promotions</h4>
              <p>Send rich push notifications with product images directly to targeted users, driving immediate engagement and sales</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">📊</div>
              <h4>Analytics Dashboard</h4>
              <p>Comprehensive charts showing user visits, page clicks, conversion rates, engagement metrics, and detailed performance insights</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">🎨</div>
              <h4>AI Image Studio</h4>
              <p>Generate studio-quality product photos using our AI model - create professional ads without expensive photoshoots</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">🎬</div>
              <h4>Video Ad Generation</h4>
              <p>Automatically create engaging video advertisements for your products using cutting-edge AI technology</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">🏪</div>
              <h4>Custom Pages</h4>
              <p>Dedicated brand profile and custom product view pages with full personalization and branding control</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">⚡</div>
              <h4>FOMO Features</h4>
              <p>Real-time order notifications, live purchase counts, and urgency indicators that boost sales by up to 20%</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">🚀</div>
              <h4>Priority Support</h4>
              <p>Dedicated account manager, priority customer support, and exclusive early access to new features and tools</p>
            </div>
          </div>
        </div>

        {/* Video Generation Demo */}
        <div className={`video-demo-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="demo-title">🎥 AI Video Generation in Action</h3>
          <p className="demo-subtitle">See how our AI creates professional video ads automatically</p>
          <div className="twitter-video-wrapper">
            <blockquote className="twitter-tweet">
              <a href="https://x.com/i/status/1998720751806066916">View Video Demo</a>
            </blockquote>
            <div className="twitter-video-placeholder">
              <div className="placeholder-content">
                <div className="play-icon">▶</div>
                <p>AI-Generated Product Video Ad</p>
                <a
                  href="https://x.com/i/status/1998720751806066916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-demo-btn"
                >
                  Watch Demo on Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Impact Summary */}
        <div className={`impact-stats ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.9s' }}>
          <div className="stat-box">
            <div className="stat-number">20%</div>
            <div className="stat-label">Sales Increase with FOMO</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">5X</div>
            <div className="stat-label">Brand Visibility Boost</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">∞</div>
            <div className="stat-label">Scalable Growth Potential</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partnership-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          background:
            radial-gradient(circle at 30% 40%, rgba(229, 9, 20, 0.12) 0%, transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(229, 9, 20, 0.05) 100%);
          position: relative;
        }

        .partnership-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
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
          position: relative;
          display: inline-block;
        }

        .partnership-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          max-width: 800px;
          opacity: 0;
        }

        .free-offer-box {
          width: 100%;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(40, 40, 40, 0.85) 100%);
          border: 3px solid ${colors.netflixRed};
          border-radius: 28px;
          padding: 44px 40px;
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.5);
          opacity: 0;
        }

        .offer-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .offer-icon {
          font-size: 3.5rem;
          filter: drop-shadow(0 4px 15px rgba(229, 9, 20, 0.5));
        }

        .offer-header h3 {
          font-size: clamp(2rem, 4.5vw, 2.8rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0;
        }

        .offer-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .offer-description {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          color: ${colors.textLight};
          line-height: 1.8;
          text-align: center;
          margin: 0;
        }

        .offer-description strong {
          color: ${colors.netflixRed};
          font-weight: 800;
        }

        .win-win-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .win-box {
          background: rgba(229, 9, 20, 0.08);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.3s ease;
        }

        .win-box:hover {
          background: rgba(229, 9, 20, 0.15);
          border-color: ${colors.netflixRed};
          transform: translateY(-6px);
          box-shadow: 0 15px 45px rgba(229, 9, 20, 0.4);
        }

        .win-box h4 {
          font-size: 1.5rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 20px 0;
          text-align: center;
        }

        .win-box ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .win-box li {
          font-size: 1.05rem;
          color: ${colors.textLight};
          padding-left: 28px;
          position: relative;
          line-height: 1.6;
        }

        .win-box li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: ${colors.netflixRed};
          font-weight: 900;
          font-size: 1.3rem;
        }

        .subscription-box {
          width: 100%;
          background: linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%);
          border: 2px solid rgba(229, 9, 20, 0.4);
          border-radius: 24px;
          padding: 48px 40px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.3);
          opacity: 0;
        }

        .subscription-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .subscription-header h3 {
          font-size: clamp(2rem, 4.5vw, 2.6rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .subscription-header p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: ${colors.textLight};
          margin: 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .feature-item {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.6) 100%);
          border: 2px solid rgba(229, 9, 20, 0.2);
          border-radius: 18px;
          padding: 28px 24px;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .feature-item:hover {
          transform: translateY(-8px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 20px 60px rgba(229, 9, 20, 0.5);
          background: linear-gradient(135deg, rgba(40, 40, 40, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%);
        }

        .item-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          filter: drop-shadow(0 4px 10px rgba(229, 9, 20, 0.3));
        }

        .feature-item h4 {
          font-size: 1.3rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .feature-item p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.7;
          margin: 0;
        }

        .video-demo-box {
          width: 100%;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(40, 40, 40, 0.85) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 24px;
          padding: 44px 40px;
          backdrop-filter: blur(10px);
          opacity: 0;
          text-align: center;
        }

        .demo-title {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .demo-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: ${colors.textLight};
          margin: 0 0 32px 0;
        }

        .twitter-video-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }

        .twitter-tweet {
          display: none;
        }

        .twitter-video-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(40, 40, 40, 0.8) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .twitter-video-placeholder:hover {
          border-color: #ff4444;
          box-shadow: 0 15px 50px rgba(229, 9, 20, 0.5);
        }

        .twitter-video-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(229, 9, 20, 0.2) 0%, transparent 70%);
          animation: pulse 3s ease-in-out infinite;
        }

        .placeholder-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .play-icon {
          width: 80px;
          height: 80px;
          background: ${colors.netflixRed};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: ${colors.white};
          box-shadow: 0 10px 40px rgba(229, 9, 20, 0.6);
          transition: all 0.3s ease;
        }

        .twitter-video-placeholder:hover .play-icon {
          transform: scale(1.15);
          box-shadow: 0 15px 50px rgba(229, 9, 20, 0.8);
        }

        .placeholder-content p {
          font-size: 1.2rem;
          font-weight: 700;
          color: ${colors.white};
          margin: 0;
        }

        .view-demo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 32px;
          background: linear-gradient(135deg, ${colors.netflixRed} 0%, #ff4444 100%);
          color: ${colors.white};
          font-size: 1.05rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
        }

        .view-demo-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(229, 9, 20, 0.6);
        }

        .impact-stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          opacity: 0;
        }

        .stat-box {
          flex: 1;
          min-width: 220px;
          max-width: 320px;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .stat-box:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.6);
          border-color: #ff4444;
        }

        .stat-number {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 900;
          color: ${colors.netflixRed};
          text-shadow: 0 0 40px rgba(229, 9, 20, 0.7);
          margin-bottom: 12px;
          line-height: 1;
        }

        .stat-label {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 600;
          color: ${colors.white};
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .win-win-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .partnership-section {
            padding: 60px 20px;
          }

          .partnership-content {
            gap: 35px;
          }

          .free-offer-box {
            padding: 36px 28px;
          }

          .offer-header {
            flex-direction: column;
            gap: 12px;
          }

          .offer-icon {
            font-size: 3rem;
          }

          .win-box {
            padding: 28px 24px;
          }

          .win-box h4 {
            font-size: 1.35rem;
          }

          .win-box li {
            font-size: 1rem;
          }

          .subscription-box {
            padding: 36px 28px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-item {
            padding: 24px 20px;
          }

          .item-icon {
            font-size: 2.5rem;
          }

          .feature-item h4 {
            font-size: 1.2rem;
          }

          .feature-item p {
            font-size: 0.95rem;
          }

          .video-demo-box {
            padding: 32px 24px;
          }

          .play-icon {
            width: 70px;
            height: 70px;
            font-size: 2rem;
          }

          .placeholder-content p {
            font-size: 1.1rem;
          }

          .view-demo-btn {
            padding: 12px 28px;
            font-size: 1rem;
          }

          .impact-stats {
            gap: 20px;
          }

          .stat-box {
            min-width: 100%;
            padding: 32px 24px;
          }
        }

        @media (max-width: 480px) {
          .offer-description {
            font-size: 1rem;
          }

          .stat-number {
            font-size: 3rem;
          }

          .stat-label {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

function VideoScannerSection() {
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
    <section ref={sectionRef} className="video-scanner-section">
      <div className="scanner-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          AI-Powered <span className="highlight">Video Scanner</span>
        </h2>

        <p className={`scanner-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          Scan and analyze videos from anywhere - local files, Instagram, TikTok, or YouTube
        </p>

        {/* Platform Integration */}
        <div className={`platform-badges ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="platform-badge">
            <span className="badge-emoji">📱</span>
            <span>Local Videos</span>
          </div>
          <div className="platform-badge">
            <span className="badge-emoji">📷</span>
            <span>Instagram</span>
          </div>
          <div className="platform-badge">
            <span className="badge-emoji">🎵</span>
            <span>TikTok</span>
          </div>
          <div className="platform-badge">
            <span className="badge-emoji">▶️</span>
            <span>YouTube</span>
          </div>
        </div>

        {/* Video GIF Showcases */}
        <div className={`video-showcase ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="video-example">
            <div className="video-gif-wrapper">
              <Image
                src="/videoshows.gif"
                alt="Video Scanner - Movies & TV Shows Analysis"
                width={300}
                height={600}
                className="video-gif"
                unoptimized
              />
            </div>
            <div className="example-label">
              <div className="label-icon">🎬</div>
              <h3>Movies & TV Shows</h3>
              <p>Identify content, watch trailers, see ratings</p>
            </div>
          </div>

          <div className="video-example">
            <div className="video-gif-wrapper">
              <Image
                src="/videocook.gif"
                alt="Video Scanner - Cooking & Recipe Analysis"
                width={300}
                height={600}
                className="video-gif"
                unoptimized
              />
            </div>
            <div className="example-label">
              <div className="label-icon">👨‍🍳</div>
              <h3>Cooking & Recipes</h3>
              <p>Get recipes, calorie estimates, instructions</p>
            </div>
          </div>
        </div>

        {/* AI Features Grid */}
        <div className={`ai-features-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="ai-feature-card">
            <div className="feature-icon">🎭</div>
            <h3>Ask About Content</h3>
            <p>&quot;What show is this?&quot; - Instantly identify movies and TV shows with direct integration to watch trailers and see ratings</p>
          </div>

          <div className="ai-feature-card">
            <div className="feature-icon">🍳</div>
            <h3>Cooking Guidance</h3>
            <p>&quot;How to cook this?&quot; - Get step-by-step recipes, ingredient lists, and calorie estimations for any dish in the video</p>
          </div>

          <div className="ai-feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>How-To Instructions</h3>
            <p>&quot;How to do this?&quot; - Receive detailed instructions and guidance for activities, projects, or tasks shown in videos</p>
          </div>

          <div className="ai-feature-card">
            <div className="feature-icon">📝</div>
            <h3>Smart Summaries</h3>
            <p>&quot;Summarize it&quot; - Get concise, AI-generated summaries of video content with key points and timestamps</p>
          </div>

          <div className="ai-feature-card">
            <div className="feature-icon">💬</div>
            <h3>Ask Anything</h3>
            <p>Natural language queries about any aspect of the video - characters, locations, objects, actions, or context</p>
          </div>

          <div className="ai-feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Time-Based Analysis</h3>
            <p>Jump to specific moments, get frame-by-frame breakdowns, and explore detailed scene analysis with timestamps</p>
          </div>
        </div>

        {/* Future Feature - Video Shopping */}
        <div className={`future-feature-box ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="future-header">
            <div className="future-badge">Coming Soon</div>
            <h3>🛍️ Shop Items from Videos</h3>
          </div>
          <p className="future-description">
            We&apos;re working on revolutionary technology to identify and shop products directly from any video content.
            Imagine seeing an outfit, furniture, or gadget in a video and buying it instantly - all powered by AI visual recognition.
          </p>
          <div className="future-benefits">
            <div className="benefit-item">
              <span className="check-icon">✓</span>
              <span>Identify products in real-time</span>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✓</span>
              <span>Find similar items across platforms</span>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✓</span>
              <span>One-click purchase integration</span>
            </div>
          </div>
        </div>

        {/* Capability Stats */}
        <div className={`capability-stats ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '1s' }}>
          <div className="capability-stat">
            <div className="stat-icon">🎯</div>
            <div className="stat-value">99%</div>
            <div className="stat-label">Content Recognition Accuracy</div>
          </div>
          <div className="capability-stat">
            <div className="stat-icon">⚡</div>
            <div className="stat-value">&lt;10-20s</div>
            <div className="stat-label">Average Analysis Time</div>
          </div>
          <div className="capability-stat">
            <div className="stat-icon">🌐</div>
            <div className="stat-value">50+</div>
            <div className="stat-label">Supported Languages</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-scanner-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          background:
            radial-gradient(circle at 70% 30%, rgba(229, 9, 20, 0.1) 0%, transparent 60%),
            linear-gradient(180deg, rgba(229, 9, 20, 0.05) 0%, rgba(0,0,0,0) 100%);
          position: relative;
        }

        .scanner-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
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
          background: linear-gradient(135deg, ${colors.netflixRed}, #ff4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .scanner-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: ${colors.textLight};
          text-align: center;
          margin: -20px 0 0 0;
          max-width: 800px;
          opacity: 0;
        }

        .platform-badges {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
        }

        .platform-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 600;
          color: ${colors.white};
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .platform-badge:hover {
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.25) 0%, rgba(26, 26, 26, 1) 100%);
          border-color: ${colors.netflixRed};
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
        }

        .badge-emoji {
          font-size: 1.4rem;
        }

        .video-showcase {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          opacity: 0;
        }

        .video-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          flex: 0 0 auto;
        }

        .video-gif-wrapper {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow:
            0 35px 90px rgba(229, 9, 20, 0.6),
            0 0 0 2px rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
        }

        .video-gif-wrapper:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow:
            0 40px 100px rgba(229, 9, 20, 0.7),
            0 0 0 3px ${colors.netflixRed},
            0 0 60px rgba(229, 9, 20, 0.5);
        }

        .video-gif {
          border-radius: 32px;
          width: 100%;
          max-width: 300px;
          height: auto;
          display: block;
        }

        .example-label {
          text-align: center;
          padding: 20px 28px;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(40, 40, 40, 0.85) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          max-width: 340px;
          transition: all 0.3s ease;
        }

        .example-label:hover {
          border-color: ${colors.netflixRed};
          box-shadow: 0 10px 40px rgba(229, 9, 20, 0.4);
        }

        .label-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
          filter: drop-shadow(0 4px 12px rgba(229, 9, 20, 0.4));
        }

        .example-label h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 8px 0;
        }

        .example-label p {
          font-size: 1rem;
          color: ${colors.textLight};
          margin: 0;
          line-height: 1.5;
        }

        .ai-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          width: 100%;
          opacity: 0;
        }

        .ai-feature-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.25);
          border-radius: 20px;
          padding: 32px 28px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .ai-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${colors.netflixRed}, #ff4444);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .ai-feature-card:hover::before {
          transform: scaleX(1);
        }

        .ai-feature-card:hover {
          transform: translateY(-10px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.5);
          background: linear-gradient(135deg, rgba(40, 40, 40, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%);
        }

        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 16px;
          filter: drop-shadow(0 4px 12px rgba(229, 9, 20, 0.3));
          transition: transform 0.3s ease;
        }

        .ai-feature-card:hover .feature-icon {
          transform: scale(1.15) rotate(-5deg);
        }

        .ai-feature-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 12px 0;
        }

        .ai-feature-card p {
          font-size: 1rem;
          color: ${colors.textLight};
          line-height: 1.7;
          margin: 0;
        }

        .future-feature-box {
          width: 100%;
          background: linear-gradient(135deg, rgba(40, 40, 40, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 3px dashed rgba(229, 9, 20, 0.4);
          border-radius: 24px;
          padding: 44px 40px;
          backdrop-filter: blur(10px);
          opacity: 0;
          position: relative;
          overflow: hidden;
        }

        .future-feature-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(229, 9, 20, 0.1) 0%, transparent 70%);
          animation: pulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .future-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .future-badge {
          display: inline-block;
          padding: 8px 20px;
          background: linear-gradient(135deg, ${colors.netflixRed} 0%, #ff4444 100%);
          color: ${colors.white};
          font-size: 0.9rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 50px;
          box-shadow: 0 4px 15px rgba(229, 9, 20, 0.5);
        }

        .future-header h3 {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0;
          text-align: center;
        }

        .future-description {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          color: ${colors.textLight};
          line-height: 1.8;
          text-align: center;
          margin: 0 0 28px 0;
          position: relative;
          z-index: 1;
        }

        .future-benefits {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          background: rgba(229, 9, 20, 0.1);
          border: 1px solid rgba(229, 9, 20, 0.3);
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 600;
          color: ${colors.white};
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          background: rgba(229, 9, 20, 0.2);
          border-color: ${colors.netflixRed};
          transform: translateX(8px);
        }

        .check-icon {
          font-size: 1.5rem;
          color: ${colors.netflixRed};
          font-weight: 900;
          flex-shrink: 0;
        }

        .capability-stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          opacity: 0;
        }

        .capability-stat {
          flex: 1;
          min-width: 220px;
          max-width: 300px;
          background: linear-gradient(135deg, rgba(229, 9, 20, 0.12) 0%, rgba(26, 26, 26, 0.9) 100%);
          border: 2px solid ${colors.netflixRed};
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .capability-stat:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 25px 70px rgba(229, 9, 20, 0.6);
          border-color: #ff4444;
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 12px;
          filter: drop-shadow(0 4px 15px rgba(229, 9, 20, 0.5));
        }

        .stat-value {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: ${colors.netflixRed};
          text-shadow: 0 0 30px rgba(229, 9, 20, 0.6);
          margin-bottom: 12px;
          line-height: 1;
        }

        .stat-label {
          font-size: clamp(1rem, 2vw, 1.1rem);
          font-weight: 600;
          color: ${colors.white};
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .ai-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .video-scanner-section {
            padding: 60px 20px;
          }

          .scanner-content {
            gap: 35px;
          }

          .platform-badges {
            gap: 12px;
          }

          .platform-badge {
            padding: 10px 20px;
            font-size: 1rem;
          }

          .badge-emoji {
            font-size: 1.2rem;
          }

          .video-showcase {
            gap: 40px;
          }

          .video-gif {
            max-width: 260px;
          }

          .example-label {
            padding: 18px 24px;
            max-width: 300px;
          }

          .label-icon {
            font-size: 2rem;
          }

          .example-label h3 {
            font-size: 1.25rem;
          }

          .example-label p {
            font-size: 0.95rem;
          }

          .ai-features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .ai-feature-card {
            padding: 28px 24px;
          }

          .feature-icon {
            font-size: 3rem;
          }

          .ai-feature-card h3 {
            font-size: 1.25rem;
          }

          .ai-feature-card p {
            font-size: 0.95rem;
          }

          .future-feature-box {
            padding: 36px 28px;
          }

          .future-badge {
            font-size: 0.85rem;
            padding: 7px 18px;
          }

          .future-description {
            font-size: 1rem;
          }

          .benefit-item {
            padding: 14px 20px;
            font-size: 1rem;
          }

          .check-icon {
            font-size: 1.3rem;
          }

          .capability-stats {
            gap: 20px;
          }

          .capability-stat {
            min-width: 100%;
            padding: 32px 24px;
          }

          .stat-icon {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .platform-badges {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
          }

          .platform-badge {
            justify-content: center;
          }

          .video-gif {
            max-width: 240px;
          }

          .future-benefits {
            gap: 12px;
          }

          .benefit-item {
            padding: 12px 18px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}

function FeaturesSection() {
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
    <section ref={sectionRef} className="features-section">
      <div className="features-content">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          Main <span className="highlight">Features</span>
        </h2>

        <div className={`features-grid ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="feature-card" style={{ animationDelay: '0.1s' }}>
            <div className="card-icon">👗</div>
            <h3>Closet & Try On</h3>
            <p>Build your digital wardrobe and try outfits virtually</p>
          </div>

          <div className="feature-card" style={{ animationDelay: '0.2s' }}>
            <div className="card-icon">🔍</div>
            <h3>Image Search</h3>
            <p>Find similar items by uploading any image & Shop</p>
          </div>

          <div className="feature-card" style={{ animationDelay: '0.3s' }}>
            <div className="card-icon">📹</div>
            <h3>Video Scanner</h3>
            <p>Scan videos to identify Movies/Games/summerize & more..</p>
          </div>

          <div className="feature-card" style={{ animationDelay: '0.4s' }}>
            <div className="card-icon">🛒</div>
            <h3>Multi-Platform</h3>
            <p>Compare and shop products across multiple platforms in one place</p>
          </div>
        </div>

        <div className={`screenshots-container ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="screenshot-item">
            <Image
              src="/6.png"
              alt="Feature 1"
              width={220}
              height={440}
              className="app-screenshot"
            />
          </div>
          <div className="screenshot-item">
            <Image
              src="/5.png"
              alt="Feature 2"
              width={220}
              height={440}
              className="app-screenshot"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .features-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        .features-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 12px 40px rgba(229, 9, 20, 0.4);
          background: rgba(26, 26, 26, 0.85);
        }

        .card-icon {
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

        .screenshots-container {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
          opacity: 0;
        }

        .screenshot-item {
          position: relative;
        }

        .app-screenshot {
          width: 100%;
          max-width: 220px;
          height: auto;
          border-radius: 24px;
          box-shadow:
            0 20px 60px rgba(229, 9, 20, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease;
        }

        .app-screenshot:hover {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 60px 20px;
          }

          .features-content {
            gap: 40px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 24px 20px;
          }

          .card-icon {
            font-size: 2.5rem;
            margin-bottom: 12px;
          }

          .feature-card h3 {
            font-size: 1.1rem;
          }

          .feature-card p {
            font-size: 0.9rem;
          }

          .screenshots-container {
            gap: 24px;
          }

          .app-screenshot {
            max-width: 160px;
          }
        }
      `}</style>
    </section>
  );
}
