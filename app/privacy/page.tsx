'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { colors } from '../colors';
import { getAssetPath } from '../utils/assetPath';
import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <>
      <div className="privacy-container">
        <Navigation />
        <PrivacyContent />
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

        .privacy-container {
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
      `}</style>
    </>
  );
}

function Navigation() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToHome = () => {
    router.push('/dorfyplan');
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>
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
          <button onClick={handleBackToHome} className="back-btn">
            Back to Home
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
        }

        .back-btn {
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

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(229, 9, 20, 0.6);
        }

        @media (max-width: 768px) {
          .back-btn {
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

function PrivacyContent() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="privacy-section">
      <div className="privacy-content">
        <div className={`privacy-header ${isVisible ? 'animate-in' : ''}`}>
          <h1>Privacy Policy</h1>
          <div className="privacy-dates">
            <p><strong>Effective Date:</strong> January 28, 2025</p>
            <p><strong>Last Updated:</strong> November 4, 2025</p>
          </div>
        </div>

        <div className={`privacy-body ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <Section title="Introduction">
            <p>
              Dorfy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered super app and related services (collectively, the "Service").
            </p>
          </Section>

          <Section title="Information We Collect">
            <SubSection title="Personal Information">
              <ul>
                <li><strong>Account Information:</strong> Name, email address, encrypted password, age, gender</li>
                <li><strong>Profile Data:</strong> Name, User Name, pet information</li>
                <li><strong>Health Data:</strong> Height, weight, health goals, training frequency, daily caloric intake targets</li>
                <li><strong>Fitness Data:</strong> Workout routines, exercise preferences, gym statistics, personal records, training history</li>
                <li><strong>Authentication Data:</strong> Google OAuth credentials when using Google Sign-In</li>
                <li><strong>Subscription Information:</strong> Plan type (Free/Pro/Premium), billing cycle, payment information (processed by third-party payment processors)</li>
              </ul>
            </SubSection>

            <SubSection title="Usage Information">
              <ul>
                <li><strong>Chat Data:</strong> Messages and conversations with our AI agent, selected AI models, conversation tones</li>
                <li><strong>Voice Data:</strong> Audio recordings (processed via speech recognition APIs)</li>
                <li><strong>Image Data:</strong> Photos uploaded for calorie scanning, barcode scanning, image generation requests & Items</li>
                <li><strong>Video Data:</strong> Video URLs shared for analysis, video content temporarily downloaded and processed, video metadata (title, duration, platform)</li>
                <li><strong>Video Analysis Results:</strong> AI-generated summaries, extracted instructions, categorization data, cooking/exercise analysis</li>
                <li><strong>Mind Map Data:</strong> Created mind maps, text inputs, visualization preferences</li>
                <li><strong>Nutrition Data:</strong> Scanned food items, calorie tracking, macro nutrients, goal progress</li>
                <li><strong>Workout Data:</strong> Exercise sets, reps, weights, workout duration, rest periods, completed workouts, workout volume calculations</li>
                <li><strong>Gym Statistics:</strong> Muscle group distribution, performance analytics, body mapping data, progress charts, exercise records</li>
                <li><strong>Fitness Tracking:</strong> Workout streaks, diamond rewards for gym activities, routine usage patterns, exercise preferences</li>
                <li><strong>App Usage:</strong> Feature usage patterns, daily quote preferences, notification styles, diamonds earned</li>
                <li><strong>Game Data:</strong> Mini-game scores and progress (processed locally)</li>
              </ul>
            </SubSection>

            <SubSection title="Entertainment Tracking Data">
              <ul>
                <li><strong>Movie & TV Ratings:</strong> Personal ratings (favorite, like, meh, dislike) for movies and TV shows</li>
                <li><strong>Watch Status:</strong> Content watchlist, currently watching, up next, and completed status tracking</li>
                <li><strong>Viewing History:</strong> Movies and TV shows marked as watched with timestamps</li>
                <li><strong>Search Queries:</strong> Entertainment content searches and discovery patterns</li>
                <li><strong>AI Recommendations:</strong> Interaction data with AI-powered content suggestions</li>
                <li><strong>Game Ratings:</strong> Personal ratings for video games (favorite, like, meh, dislike)</li>
                <li><strong>Play Status:</strong> Game playlist, currently playing, up next, and completed status tracking</li>
                <li><strong>Gaming History:</strong> Games marked as played with timestamps</li>
                <li><strong>Game Search Data:</strong> Video game searches and discovery patterns</li>
              </ul>
            </SubSection>

            <SubSection title="Virtual Closet & Fashion Data">
              <ul>
                <li><strong>Clothing Items:</strong> Uploaded images of clothing, accessories, footwear, bags, perfumes, and other fashion items</li>
                <li><strong>Item Details:</strong> Brand names, sizes, styles, materials, colors, conditions, categories, and layer types</li>
                <li><strong>Pricing Information:</strong> Dorfy AI-estimated market values and original purchase prices for closet items</li>
                <li><strong>Outfit Combinations (Fits):</strong> User-created outfit combinations with multiple clothing pieces</li>
                <li><strong>Collections:</strong> Organized groupings of outfit combinations</li>
                <li><strong>Try-On Photos:</strong> Personal photos (you/friends/family) uploaded for virtual try-on purposes</li>
                <li><strong>AI Try-On Results:</strong> AI-generated images showing virtual outfit try-ons with selected clothing pieces</li>
                <li><strong>Fashion Preferences:</strong> Style choices, clothing categories, and outfit creation patterns</li>
              </ul>
            </SubSection>

            <SubSection title="Social Matching Data (Bees)">
              <ul>
                <li><strong>Profile Interactions:</strong> Like and dislike actions on other user profiles</li>
                <li><strong>Profile Views:</strong> Records of which user profiles you have viewed (including credit costs)</li>
                <li><strong>Search History:</strong> User searches by name/username within the social matching platform</li>
                <li><strong>Interaction History:</strong> Complete history of likes, dislikes, and views with other users</li>
              </ul>
            </SubSection>

            <SubSection title="Multi-Language Preferences">
              <ul>
                <li><strong>Language Settings:</strong> Selected app language and interface preferences</li>
                <li><strong>Localization Data:</strong> Regional content preferences and localized feature usage</li>
              </ul>
            </SubSection>

            <SubSection title="Device Information">
              <ul>
                <li><strong>Device Details:</strong> Device type, operating system, app version, unique device identifiers</li>
                <li><strong>Technical Data:</strong> IP address, crash logs, performance metrics, API response times</li>
                <li><strong>Permissions:</strong> Camera, microphone, notification, and calendar permissions as granted</li>
                <li><strong>Location:</strong> General location data for localized content (not precise location tracking)</li>
              </ul>
            </SubSection>

            <SubSection title="Automatically Collected Data">
              <ul>
                <li><strong>Usage Analytics:</strong> Session duration, feature interaction frequency, error rates</li>
                <li><strong>Performance Data:</strong> App loading times, API latency metrics, crash reports</li>
                <li><strong>Notification Data:</strong> Quote delivery times, notification preferences, interaction rates</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use your information to:</p>

            <SubSection title="Core Functionality">
              <ul>
                <li>Provide AI-powered chat, search capabilities</li>
                <li>Analyze food images for nutritional information and calorie tracking</li>
                <li>Process and analyze video content from social media platforms for cooking, DIY, exercise, and general summaries</li>
                <li>Temporarily download and convert video content for AI analysis purposes</li>
                <li>Extract actionable insights from video content (recipes, instructions, workout routines)</li>
                <li>Generate personalized mind maps and visualizations</li>
                <li>Create AI-generated images based on your requests</li>
                <li>Deliver personalized daily quotes in your preferred language and style</li>
                <li>Track workout sessions, exercises, sets, reps, and weights for fitness progress monitoring</li>
                <li>Generate gym statistics, muscle distribution charts, and body mapping visualizations</li>
                <li>Maintain workout history and calculate personal exercise records</li>
                <li>Provide fitness progress analytics and performance trends over time</li>
                <li>Analyze uploaded clothing and fashion items using AI to estimate market values and identify details</li>
                <li>Generate virtual try-on images showing how clothing items would look on uploaded photos</li>
                <li>Create and manage digital wardrobe with outfit combinations and collections</li>
              </ul>
            </SubSection>

            <SubSection title="Personalization">
              <ul>
                <li>Provide culturally appropriate translations and content for your selected language</li>
                <li>Tailor notification styles (DorfyMotive, DorfyDeep, DorfyMode, DorfyMovieGame) to your preferences</li>
                <li>Track nutrition goals and provide personalized health recommendations</li>
                <li>Customize workout routines and exercise recommendations based on your fitness history and preferences</li>
                <li>Provide personalized gym analytics and progress insights tailored to your training patterns</li>
              </ul>
            </SubSection>

            <SubSection title="Account Management">
              <ul>
                <li>Manage user authentication and account security</li>
                <li>Process subscription payments and manage plan features</li>
                <li>Track usage limits and billing cycles</li>
                <li>Maintain conversation history and user preferences</li>
              </ul>
            </SubSection>

            <SubSection title="Service Improvement">
              <ul>
                <li>Analyze usage patterns to improve AI model selection and response quality</li>
                <li>Monitor API performance and implement failover systems</li>
                <li>Identify and fix bugs, crashes, and performance issues</li>
                <li>Develop new features based on user behavior insights</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Third-Party Services and APIs">
            <p>We integrate with the following third-party services:</p>

            <SubSection title="AI Services">
              <ul>
                <li><strong>Google Gemini API:</strong> Chat responses, image analysis, content generation, video content analysis, clothing/fashion item analysis, virtual try-on processing, Web search</li>
                <li><strong>Pollinations OpenAI API:</strong> Alternative AI responses and creative content, Vision Mode and Text-to-text</li>
                <li><strong>Llama Sonar API:</strong> Web search and fact-checking capabilities</li>
                <li><strong>Speech Recognition APIs:</strong> Voice-to-text conversion</li>
              </ul>
            </SubSection>

            <SubSection title="Video Processing Services">
              <ul>
                <li><strong>Rapid API Service:</strong> Video extraction from Instagram, TikTok, YouTube, and other platforms</li>
                <li><strong>Base64 Conversion Services:</strong> Video encoding for AI processing</li>
              </ul>
            </SubSection>

            <SubSection title="Backend Infrastructure">
              <ul>
                <li><strong>Appwrite Cloud:</strong> Database storage, user authentication, file storage, real-time updates</li>
                <li><strong>Expo Services:</strong> App distribution, over-the-air updates, push notifications</li>
                <li><strong>AsyncStorage:</strong> Local device storage for preferences and cache</li>
              </ul>
            </SubSection>

            <SubSection title="Image & Video Hosting Services">
              <ul>
                <li><strong>Appwrite Storage:</strong> Permanent storage of AI-generated try-on results and user-uploaded fashion images</li>
                <li><strong>tmpfiles.org:</strong> Temporary file hosting for AI processing including video scanner analysis and virtual try-on (automatically deleted within 24 hours - NOT permanent storage)</li>
              </ul>
            </SubSection>

            <SubSection title="External Content">
              <ul>
                <li>Web Search APIs: Real-time information retrieval and fact verification</li>
                <li>Image Search APIs: Relevant image discovery for chat responses</li>
                <li>Browser Integration: Mini-games and web content via WebView</li>
              </ul>
            </SubSection>

            <SubSection title="Payment Processing">
              <ul>
                <li>Third-party payment processors for subscription management (we do not store payment card information)</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Data Storage and Security">
            <SubSection title="Storage Locations">
              <ul>
                <li><strong>Appwrite Cloud:</strong> Secure cloud storage for user profiles, chat history, mind maps, usage data, video analysis results, workout data, gym statistics, exercise records, and fitness routines, virtual closet items, outfit combinations, collections, and try-on results</li>
                <li><strong>Local Device Storage:</strong> User preferences, language settings, cached quotes, diamonds, offline data, video analysis consent settings, workout settings and preferences</li>
                <li><strong>Temporary Processing:</strong> Voice data, images, and videos processed temporarily for AI analysis and automatically deleted</li>
                <li><strong>Third-Party APIs:</strong> Video content temporarily transmitted to AI services (Google Gemini) for analysis</li>
                <li><strong>Temporary File Hosting:</strong> Videos and images temporarily uploaded to tmpfiles.org for AI scanner processing (auto-deleted within 24 hours - NOT permanent storage)</li>
              </ul>
            </SubSection>

            <SubSection title="Security Measures">
              <ul>
                <li><strong>Encryption:</strong> All data transmission encrypted using industry-standard TLS protocols</li>
                <li><strong>Authentication:</strong> Secure user authentication with encrypted password storage</li>
                <li><strong>API Security:</strong> Multiple API keys with rotation and rate limiting for redundancy</li>
                <li><strong>Access Controls:</strong> Role-based access to user data with strict permission controls</li>
                <li><strong>Data Validation:</strong> Input sanitization and validation to prevent malicious data injection</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="Health Information Disclaimer">
            <div className="disclaimer-box">
              <p><strong>Important Health Reminder:</strong> Our food scanning and nutrition tracking features are designed to provide general information only. We strongly recommend that users consult a healthcare professional for medical advice, diagnosis, or treatment. Do not rely solely on the app's analysis for health decisions.</p>
              <ul>
                <li>Health and nutrition information is for general guidance only and not medical advice</li>
                <li>Consult healthcare professionals for medical decisions and dietary recommendations</li>
              </ul>
            </div>
          </Section>

          <Section title="Data Retention">
            <ul>
              <li><strong>Active Account Data:</strong> Retained while your account is active</li>
              <li><strong>Chat History:</strong> Stored according to your settings, with automatic cleanup options</li>
              <li><strong>Voice Data:</strong> Processed immediately and not permanently stored</li>
              <li><strong>Video Content:</strong> Downloaded videos are processed immediately and deleted within 24 hours</li>
              <li><strong>Video Analysis Results:</strong> Processed immediately and not permanently stored</li>
              <li><strong>Video URLs:</strong> Processed URLs are not permanently stored beyond analysis session</li>
              <li><strong>Workout Data:</strong> Stored with your account for progress tracking and can be deleted upon request</li>
              <li><strong>Gym Statistics:</strong> Historical fitness data retained for analytics and progress visualization</li>
              <li><strong>Exercise Records:</strong> Personal bests and workout history maintained for performance tracking</li>
              <li><strong>Virtual Closet Items:</strong> Clothing images and details stored with your account until manually deleted</li>
              <li><strong>Try-On Photos:</strong> Personal photos for virtual try-on retained until manually deleted</li>
              <li><strong>AI Try-On Results:</strong> Generated try-on images stored permanently until user deletion</li>
              <li><strong>Outfit Combinations & Collections:</strong> Saved fits and collections retained with your account</li>
              <li><strong>Cached Data:</strong> Automatically expires and refreshes based on usage patterns</li>
              <li><strong>Usage Analytics:</strong> Aggregated and anonymized data retained for service improvement</li>
            </ul>
          </Section>

          <Section title="Your Privacy Rights">
            <p>Depending on your location, you may have the following rights:</p>

            <SubSection title="Access and Control">
              <ul>
                <li><strong>Data Access:</strong> Request a copy of all personal data we have about you</li>
                <li><strong>Data Correction:</strong> Update or correct inaccurate personal information</li>
                <li><strong>Data Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Data Portability:</strong> Export your data in a machine-readable format</li>
              </ul>
            </SubSection>

            <SubSection title="Communication Preferences">
              <ul>
                <li><strong>Notification Control:</strong> Customize or disable daily quote notifications</li>
                <li><strong>Marketing Opt-out:</strong> Unsubscribe from promotional communications</li>
                <li><strong>Language Preferences:</strong> Change app language and content localization</li>
              </ul>
            </SubSection>

            <SubSection title="Usage Controls">
              <ul>
                <li><strong>Chat History:</strong> Delete individual conversations or entire chat history</li>
                <li><strong>Mind Maps:</strong> Make mind maps private or delete them entirely</li>
                <li><strong>Voice Data:</strong> Opt-out of voice features and speech recognition</li>
                <li><strong>Video Analysis:</strong> Disable video analysis features</li>
                <li><strong>Video Consent:</strong> Revoke video processing consent at any time in app settings</li>
                <li><strong>Platform Restrictions:</strong> Choose which platforms (Instagram/TikTok/YouTube) you allow for analysis</li>
                <li><strong>Workout Data:</strong> Delete individual workouts, exercise records, or entire gym history</li>
                <li><strong>Fitness Analytics:</strong> Opt-out of gym statistics generation and muscle distribution tracking</li>
                <li><strong>Exercise Tracking:</strong> Disable workout features and delete stored fitness progress data</li>
                <li><strong>Entertainment Tracking:</strong> Delete movie/TV ratings, watch status, viewing history, and search data</li>
                <li><strong>Game Tracking:</strong> Delete game ratings, play status, gaming history, and search data</li>
                <li><strong>Social Matching Data:</strong> Delete profile interactions, likes/dislikes, and interaction history</li>
                <li><strong>Profile Views:</strong> Clear history of viewed profiles and associated credit usage</li>
                <li><strong>Search History:</strong> Clear entertainment and user search queries across all features</li>
                <li><strong>Language Preferences:</strong> Reset localization settings and regional content preferences</li>
                <li><strong>Virtual Closet:</strong> Delete individual clothing items, entire closet, outfit combinations, and collections</li>
                <li><strong>Try-On Photos:</strong> Remove personal photos uploaded for virtual try-on purposes</li>
                <li><strong>AI Try-On Results:</strong> Delete all AI-generated try-on images and results</li>
                <li><strong>Fashion Data:</strong> Clear all clothing analysis data, market values, and item details</li>
              </ul>
            </SubSection>

            <p className="rights-contact">To exercise these rights, contact us using the information provided below.</p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our Service is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take immediate steps to delete such information.
            </p>
          </Section>

          <Section title="International Data Transfers">
            <p>Your information may be transferred to and processed in countries other than your own, including but not limited to:</p>
            <ul>
              <li>United States (Appwrite Cloud, Google Services, OpenAI Services)</li>
              <li>European Union (GDPR-compliant data centers)</li>
            </ul>
            <p>We ensure appropriate safeguards are in place for international transfers in compliance with applicable data protection laws.</p>
          </Section>

          <Section title="Data Breach Notification">
            <p>In the event of a data breach that may affect your personal information, we will:</p>
            <ul>
              <li>Notify affected users within 72 hours of discovery</li>
              <li>Provide details about the nature and scope of the breach</li>
              <li>Explain steps we're taking to address the breach</li>
              <li>Offer guidance on how you can protect yourself</li>
            </ul>
          </Section>

          <Section title="Cookies and Tracking Technologies">
            <p>While our mobile app does not use traditional web cookies, we use similar technologies:</p>
            <ul>
              <li><strong>Local Storage:</strong> For user preferences and app settings</li>
              <li><strong>Session Tokens:</strong> For maintaining authenticated sessions</li>
              <li><strong>Analytics Identifiers:</strong> For usage analytics and crash reporting</li>
              <li><strong>Notification Tokens:</strong> For delivering push notifications</li>
            </ul>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>We may update this Privacy Policy periodically. We will notify you of material changes by:</p>
            <ul>
              <li>Displaying a prominent notice within the app</li>
              <li>Sending push notifications or email notifications</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Requiring acceptance of updated terms for continued service use</li>
            </ul>
          </Section>

          <Section title="Contact Information">
            <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
            <div className="contact-box">
              <ul>
                <li><strong>Developer:</strong> Sharif Zafar</li>
                <li><strong>App:</strong> Dorfy</li>
                <li><strong>Bundle ID:</strong> com.sharifzafar.dorfy</li>
                <li><strong>Support:</strong> contact@dorfy.app</li>
              </ul>
            </div>
          </Section>

          <Section title="Legal Compliance">
            <p>This Privacy Policy is designed to comply with:</p>
            <ul>
              <li>GDPR (General Data Protection Regulation) - European Union</li>
              <li>CCPA (California Consumer Privacy Act) - California, USA</li>
              <li>PIPEDA (Personal Information Protection and Electronic Documents Act) - Canada</li>
              <li>APP (Australian Privacy Principles) - Australia</li>
              <li>Other applicable privacy laws and regulations</li>
            </ul>
          </Section>

          <Section title="Data Processing Legal Basis">
            <p>Under GDPR, our legal basis for processing your data includes:</p>
            <ul>
              <li><strong>Consent:</strong> When you explicitly agree to data processing</li>
              <li><strong>Contract Performance:</strong> To provide services you've requested</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </Section>

          <div className="final-notice">
            <p>
              This Privacy Policy was last updated on November 4, 2025. Please review it periodically for any changes. By continuing to use Dorfy, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privacy-section {
          width: 100%;
          min-height: 100vh;
          padding: 120px 24px 80px;
        }

        .privacy-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .privacy-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .privacy-header h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: ${colors.white};
          margin-bottom: 20px;
        }

        .privacy-dates {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .privacy-dates p {
          font-size: 1rem;
          color: ${colors.textLight};
          margin: 0;
        }

        .privacy-body {
        }

        .disclaimer-box,
        .contact-box {
          background: rgba(229, 9, 20, 0.1);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 12px;
          padding: 24px;
          margin: 20px 0;
        }

        .disclaimer-box p,
        .contact-box p {
          color: ${colors.white};
          margin-bottom: 12px;
        }

        .disclaimer-box ul,
        .contact-box ul {
          margin-top: 12px;
        }

        .rights-contact {
          font-style: italic;
          color: ${colors.textLight};
          margin-top: 20px;
        }

        .final-notice {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(40, 40, 40, 0.7) 100%);
          border: 2px solid rgba(229, 9, 20, 0.3);
          border-radius: 16px;
          padding: 32px;
          margin-top: 60px;
          text-align: center;
        }

        .final-notice p {
          color: ${colors.white};
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .privacy-section {
            padding: 100px 20px 60px;
          }

          .privacy-dates {
            flex-direction: column;
            gap: 12px;
          }

          .disclaimer-box,
          .contact-box {
            padding: 20px;
          }

          .final-notice {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="section-block">
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>

      <style jsx>{`
        .section-block {
          margin-bottom: 48px;
        }

        h2 {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          color: ${colors.netflixRed};
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 2px solid rgba(229, 9, 20, 0.3);
        }

        .section-content {
          color: ${colors.textLight};
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .section-content :global(p) {
          margin-bottom: 16px;
        }

        .section-content :global(ul) {
          margin: 16px 0;
          padding-left: 24px;
        }

        .section-content :global(li) {
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .section-content :global(strong) {
          color: ${colors.white};
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .section-block {
            margin-bottom: 40px;
          }

          .section-content {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="subsection-block">
      <h3>{title}</h3>
      <div className="subsection-content">
        {children}
      </div>

      <style jsx>{`
        .subsection-block {
          margin: 24px 0;
          padding-left: 20px;
          border-left: 3px solid rgba(229, 9, 20, 0.3);
        }

        h3 {
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          font-weight: 700;
          color: ${colors.white};
          margin-bottom: 16px;
        }

        .subsection-content {
          color: ${colors.textLight};
        }

        .subsection-content :global(ul) {
          margin: 12px 0;
          padding-left: 20px;
        }

        .subsection-content :global(li) {
          margin-bottom: 10px;
          line-height: 1.7;
        }

        .subsection-content :global(strong) {
          color: ${colors.white};
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .subsection-block {
            padding-left: 16px;
          }
        }
      `}</style>
    </div>
  );
}
