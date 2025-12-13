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
