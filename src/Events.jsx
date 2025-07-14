import React from 'react';
import video from './assets/blue-tech-background.mp4';
import pic from './assets/tech.png';
import SecondHero from './SecondHero';

export default function Events() {
  return (
    <>
      {/* Hero Section with Background Video */}
      <div
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: '"Press Start 2P", cursive',
              color: 'aqua',
              fontSize: 'clamp(1.5rem, 5vw, 2.8rem)',
              marginBottom: '0.8rem',
            }}
          >
            Next Big Thing
          </h2>

          <h5
            style={{
              background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 'bold',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            }}
          >
            From Campus to Code – We’ve Got You Covered.
          </h5>

          <h5
            style={{
              color: 'white',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 'bold',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              marginTop: '1em',
            }}
          >
            Discover competitions, track your progress, and unlock exclusive tech events – all in one futuristic hub designed for student innovators.
          </h5>
        </div>

        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: -1,
          }}
        />
      </div>

      {/* Events Second Hero Section */}
      <div
        className="second-hero-section"
        style={{
          width: '100%',
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
        }}
      >
        <SecondHero />
      </div>
    </>
  );
}
