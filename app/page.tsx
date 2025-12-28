'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from './utils/assetPath';

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const numDots = 100;

    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="background-canvas" />

      <div className="container">
        <div className="content">
          <div className="header-section">
            <h1 className="name">Sharif (Zico) Zafar</h1>
            <p className="title">AI Developer</p>
            <div className="skills-wrapper">
              <span className="skill-item">Next.js</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Expo & React Native</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">Docker</span>
              <span className="skill-item">Swift</span>
            </div>
          </div>

          <div className="divider"></div>

          <section className="projects-section">
            <h2 className="section-title">Work Experience & Projects</h2>

            <div className="project-grid">
              <Link href="/mobile-app" className="project-card">
                <div className="project-logo">
                  <Image
                    src={getAssetPath("/dofylogogo.png")}
                    alt="Dorfy Logo"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Dorfy Mobile App</h3>
                <p>Community hub for fashion, entertainment & shopping</p>
                <div className="visit-indicator">View Showcase →</div>
              </Link>

              <a
                href="https://zicoz7.github.io/demo_heroxshorts2/Home/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-logo">
                  <Image
                    src={getAssetPath("/favicon-32x32.png")}
                    alt="Herox Shorts Logo"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Herox Shorts</h3>
                <p>Short-form video platform</p>
                <div className="visit-indicator">Visit Site →</div>
              </a>

              <a
                href="https://pollinations.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-logo">
                  <Image
                    src={getAssetPath("/pollinations.png")}
                    alt="Pollinations AI Logo"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Pollinations.ai</h3>
                <p className="opensource-tag">Open-source AI for people who make things</p>
                <p className="project-desc">A community-driven platform where developers, artists, and tinkerers build together. No gatekeeping, no corporate nonsense — just good tools and good people.</p>
                <div className="visit-indicator">Visit Site →</div>
              </a>
            </div>
          </section>

          <div className="divider"></div>

          <section className="gallery-section">
            <h2 className="section-title">Gallery</h2>
            <div className="photo-grid">
              <div className="photo-card">
                <Image
                  src={getAssetPath("/photo.jpg")}
                  alt="Photo 1"
                  width={400}
                  height={400}
                  className="gallery-photo"
                />
              </div>
              <div className="photo-card">
                <Image
                  src={getAssetPath("/photo1.jpg")}
                  alt="Photo 2"
                  width={400}
                  height={400}
                  className="gallery-photo"
                />
              </div>
              <div className="photo-card">
                <Image
                  src={getAssetPath("/photo2.jpg")}
                  alt="Photo 3"
                  width={400}
                  height={400}
                  className="gallery-photo"
                />
              </div>
            </div>
          </section>

          <div className="divider"></div>

          <section className="contact-section">
            <h2 className="section-title">Contact</h2>
            <div className="contact-links">
              <a href="mailto:zicozafar@gmail.com" className="contact-link">
                <span className="icon">✉</span>
                zicozafar@gmail.com
              </a>
              <a href="https://github.com/ZicoZ7" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="icon">⚡</span>
                GitHub
              </a>
              <a href="https://x.com/Zicozafar79" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="icon">𝕏</span>
                Twitter/X
              </a>
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #000;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          overflow-x: hidden;
        }

        .background-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .content {
          max-width: 900px;
          width: 100%;
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .name {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -1px;
        }

        .title {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: #aaa;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .skills {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #666;
          line-height: 1.6;
        }

        .skills-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 20px;
        }

        .skill-item {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 0.9rem;
          color: #aaa;
          animation: skillFadeIn 0.6s ease-out backwards;
          transition: all 0.3s ease;
        }

        .skill-item:nth-child(1) { animation-delay: 0.1s; }
        .skill-item:nth-child(2) { animation-delay: 0.2s; }
        .skill-item:nth-child(3) { animation-delay: 0.3s; }
        .skill-item:nth-child(4) { animation-delay: 0.4s; }
        .skill-item:nth-child(5) { animation-delay: 0.5s; }
        .skill-item:nth-child(6) { animation-delay: 0.6s; }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px) scale(1.05);
          color: #fff;
        }

        @keyframes skillFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #333, transparent);
          margin: 60px 0;
        }

        .section-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 600;
          margin-bottom: 32px;
          text-align: center;
        }

        .projects-section {
          margin-bottom: 60px;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 32px 24px;
          text-decoration: none;
          color: #fff;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .visit-indicator {
          margin-top: auto;
          padding-top: 16px;
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .project-card:hover .visit-indicator {
          color: #fff;
          transform: translateX(4px);
        }

        .project-logo {
          margin-bottom: 20px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-logo img {
          border-radius: 12px;
        }

        .project-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .project-card p {
          font-size: 0.95rem;
          color: #aaa;
          line-height: 1.5;
        }

        .opensource-tag {
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .project-desc {
          margin-top: 8px;
          font-size: 0.9rem;
          color: #888;
        }

        .gallery-section {
          margin-bottom: 60px;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .photo-card {
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: photoFadeIn 0.8s ease-out backwards;
        }

        .photo-card:nth-child(1) { animation-delay: 0.1s; }
        .photo-card:nth-child(2) { animation-delay: 0.2s; }
        .photo-card:nth-child(3) { animation-delay: 0.3s; }

        .photo-card:hover {
          transform: translateY(-8px) scale(1.05);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .gallery-photo {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.4s ease;
        }

        .photo-card:hover .gallery-photo {
          transform: scale(1.1);
        }

        @keyframes photoFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .contact-section {
          margin-bottom: 40px;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          text-decoration: none;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
          min-width: 280px;
          justify-content: center;
        }

        .contact-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateX(4px);
        }

        .icon {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px 16px;
          }

          .project-grid {
            grid-template-columns: 1fr;
          }

          .contact-link {
            min-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
