'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { colors } from '../colors';

interface Slide {
  id: number;
  component: React.ReactNode;
}

export default function SlideShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      component: <IntroSlide />,
    },
    {
      id: 2,
      component: <FeaturesSlide />,
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 600);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTransitioning]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 10) {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isTransitioning]);

  return (
    <>
      <div className="slide-container">
        <div
          className="slides-wrapper"
          style={{
            transform: `translateY(-${currentSlide * 100}vh)`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              {slide.component}
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="nav-arrow nav-arrow-up"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="nav-arrow nav-arrow-down"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
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
          overflow: hidden;
        }

        .slide-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: ${colors.dark};
          background-image:
            radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          background-position: 0 0;
        }

        .slides-wrapper {
          width: 100%;
          height: 100%;
        }

        .slide {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .nav-arrow {
          position: fixed;
          background: rgba(229, 9, 20, 0.9);
          border: none;
          color: ${colors.white};
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 1000;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-arrow:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-arrow:not(:disabled):hover {
          background: ${colors.netflixRed};
          transform: translateX(-50%) scale(1.1);
        }

        .nav-arrow-up {
          top: 20px;
        }

        .nav-arrow-down {
          bottom: 80px;
        }

        .slide-indicators {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 1000;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid ${colors.white};
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator:disabled {
          cursor: not-allowed;
        }

        .indicator.active {
          background: ${colors.netflixRed};
          border-color: ${colors.netflixRed};
          transform: scale(1.3);
        }

        .indicator:not(:disabled):not(.active):hover {
          transform: scale(1.2);
          border-color: ${colors.netflixRed};
        }

        @media (max-width: 768px) {
          .slide-container {
            background-size: 25px 25px;
          }

          .nav-arrow {
            width: 45px;
            height: 45px;
          }

          .nav-arrow-down {
            bottom: 70px;
          }

          .indicator {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </>
  );
}

function IntroSlide() {
  return (
    <div className="intro-slide">
      <div className="intro-content">
        <h1 className="intro-title">
          What is <span className="brand-name">Dorfy</span>?
        </h1>

        <p className="intro-description">
          A community hub where you can see what everyone&apos;s watching, playing, and wearing.
        </p>

        <div className="content-grid">
          <div className="features-section">
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

          <div className="app-preview">
            <Image
              src="/homepage.jpg"
              alt="Dorfy App Homepage"
              width={280}
              height={560}
              className="phone-mockup"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro-slide {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px 120px;
        }

        .intro-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
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
          display: inline-block;
        }

        .intro-description {
          font-size: clamp(1.15rem, 2.5vw, 1.6rem);
          color: ${colors.textLight};
          max-width: 900px;
          line-height: 1.6;
          margin: 0;
          text-align: center;
        }

        .content-grid {
          display: flex;
          gap: 60px;
          width: 100%;
          max-width: 1100px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .features-section {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .intro-features-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
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

        .app-preview {
          flex: 0 0 auto;
        }

        .phone-mockup {
          border-radius: 30px;
          box-shadow:
            0 25px 70px rgba(229, 9, 20, 0.35),
            0 0 0 10px rgba(255, 255, 255, 0.08);
          object-fit: cover;
          width: 100%;
          max-width: 280px;
          height: auto;
        }

        .google-play-button {
          display: inline-flex;
          align-items: center;
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

        @media (max-width: 768px) {
          .intro-slide {
            padding: 70px 20px 120px;
          }

          .content-grid {
            gap: 40px;
            flex-direction: column-reverse;
          }

          .features-section {
            width: 100%;
          }

          .intro-features-list {
            gap: 15px;
          }

          .feature-point {
            font-size: 1rem;
          }

          .phone-mockup {
            max-width: 240px;
          }

          .google-play-button {
            padding: 16px 28px;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

function FeaturesSlide() {
  return (
    <div className="features-slide">
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
              width={260}
              height={520}
              className="screenshot"
            />
          </div>
          <div className="screenshot-wrapper">
            <Image
              src="/5.png"
              alt="Dorfy App Feature 2"
              width={260}
              height={520}
              className="screenshot"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .features-slide {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px 120px;
        }

        .features-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
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
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          width: 100%;
          max-width: 1100px;
        }

        .feature-card {
          background: rgba(26, 26, 26, 0.7);
          border: 2px solid rgba(229, 9, 20, 0.4);
          border-radius: 20px;
          padding: 35px;
          text-align: center;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: ${colors.netflixRed};
          box-shadow: 0 12px 40px rgba(229, 9, 20, 0.5);
          background: rgba(26, 26, 26, 0.9);
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
          margin-top: 30px;
        }

        .screenshot-wrapper {
          position: relative;
        }

        .screenshot {
          border-radius: 28px;
          box-shadow:
            0 20px 60px rgba(229, 9, 20, 0.3),
            0 0 0 8px rgba(255, 255, 255, 0.06);
          transition: transform 0.4s ease;
          object-fit: cover;
          width: 100%;
          max-width: 260px;
          height: auto;
        }

        .screenshot:hover {
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          .features-slide {
            padding: 70px 20px 120px;
          }

          .features-content {
            gap: 35px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .feature-card {
            padding: 28px;
          }

          .feature-icon {
            font-size: 3rem;
          }

          .app-screenshots {
            gap: 30px;
          }

          .screenshot {
            max-width: 220px;
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
