'use client';

import Image from 'next/image';
import { colors } from '../colors';

export default function SlideShowcase() {
  return (
    <>
      <div className="main-container">
        <IntroSection />
        <FeaturesSection />
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
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
  return (
    <section className="intro-section">
      <div className="intro-content">
        <h1 className="intro-title">
          What is <span className="brand-name">Dorfy</span>?
        </h1>

        <p className="intro-description">
          A community hub where you can see what everyone&apos;s watching, playing, and wearing.
        </p>

        <div className="content-wrapper">
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

          <div className="features-list-wrapper">
            <div className="intro-features-list">
              <div className="feature-point">
                <span className="bullet">•</span>
                <span>Build features to shop similar items that people are wearing</span>
              </div>
              <div className="feature-point">
                <span className="bullet">•</span>
                <span>Try outfits on yourself before buying</span>
              </div>
              <div className="feature-point">
                <span className="bullet">•</span>
                <span>Collaborate with brands and affiliate platforms</span>
              </div>
              <div className="feature-point">
                <span className="bullet">•</span>
                <span>Shop across eBay, Amazon, AliExpress, Walmart & more</span>
              </div>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.sharifzafar.dorfy"
              target="_blank"
              rel="noopener noreferrer"
              className="google-play-button"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" className="play-icon">
                <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>Download on Google Play</span>
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
        }

        .content-wrapper {
          display: flex;
          gap: 60px;
          width: 100%;
          max-width: 1100px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
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
        }

        .features-list-wrapper {
          flex: 1;
          min-width: 320px;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .intro-features-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-point {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: ${colors.textLight};
          line-height: 1.6;
        }

        .bullet {
          color: ${colors.netflixRed};
          font-size: 2rem;
          font-weight: bold;
          flex-shrink: 0;
          line-height: 1;
        }

        .google-play-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          background: ${colors.netflixRed};
          color: ${colors.white};
          padding: 18px 36px;
          border-radius: 12px;
          text-decoration: none;
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 6px 25px rgba(229, 9, 20, 0.5);
        }

        .google-play-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(229, 9, 20, 0.7);
          background: #f40612;
        }

        .play-icon {
          flex-shrink: 0;
        }

        @media (max-width: 968px) {
          .content-wrapper {
            flex-direction: column;
            gap: 40px;
          }

          .features-list-wrapper {
            width: 100%;
          }

          .google-play-button {
            width: 100%;
            max-width: 400px;
          }
        }

        @media (max-width: 768px) {
          .intro-section {
            padding: 40px 20px;
          }

          .intro-content {
            gap: 35px;
          }

          .phone-mockup {
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-content">
        <h2 className="features-title">
          Main <span className="highlight">Features</span>
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">👗</div>
            <h3>Closet & Try Outfit</h3>
            <p>Build your digital wardrobe and virtually try on outfits before you buy</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Image Search</h3>
            <p>Find similar items instantly by uploading or searching any image</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📹</div>
            <h3>Video Scanner</h3>
            <p>Scan videos to identify and shop products you see in real-time</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3>Cross-Platform Shopping</h3>
            <p>Compare and shop products across multiple platforms in one place</p>
          </div>
        </div>

        <div className="app-screenshots">
          <div className="screenshot-wrapper">
            <Image
              src="/6.png"
              alt="Dorfy App Feature 1"
              width={280}
              height={560}
              className="screenshot"
            />
          </div>
          <div className="screenshot-wrapper">
            <Image
              src="/5.png"
              alt="Dorfy App Feature 2"
              width={280}
              height={560}
              className="screenshot"
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
          padding: 80px 20px;
        }

        .features-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }

        .features-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          margin: 0;
          text-align: center;
        }

        .highlight {
          color: ${colors.netflixRed};
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          width: 100%;
          max-width: 1100px;
        }

        .feature-card {
          background: rgba(26, 26, 26, 0.8);
          border: 2px solid rgba(229, 9, 20, 0.4);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 15px 50px rgba(229, 9, 20, 0.6);
          background: rgba(26, 26, 26, 0.95);
        }

        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: clamp(1.3rem, 2.5vw, 1.6rem);
          font-weight: 800;
          color: ${colors.white};
          margin: 0 0 15px 0;
        }

        .feature-card p {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          color: ${colors.textLight};
          line-height: 1.7;
          margin: 0;
        }

        .app-screenshots {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
        }

        .screenshot-wrapper {
          position: relative;
        }

        .screenshot {
          border-radius: 28px;
          box-shadow:
            0 20px 60px rgba(229, 9, 20, 0.35),
            0 0 0 8px rgba(255, 255, 255, 0.08);
          transition: transform 0.4s ease;
          object-fit: cover;
          width: 100%;
          max-width: 280px;
          height: auto;
        }

        .screenshot:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 60px 20px;
          }

          .features-content {
            gap: 45px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .feature-card {
            padding: 30px;
          }

          .screenshot {
            max-width: 220px;
          }

          .app-screenshots {
            gap: 30px;
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
