import React from 'react';
import video from './assets/blue-tech-background.mp4';
import pic from './assets/tech.png';
import SecondHero from './SecondHero';

export default function Events() {
  return (
    <>
      {/* Hero Section with Background Video */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }} id='hero'>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '13rem' }}>
          <h2 style={{
            fontFamily: '"Press Start 2P",cursive',
            color: 'aqua',
            fontSize: '2.8rem',
            marginBottom: '0.5rem'
          }}>
            Next Big Thing
          </h2>
          <h5 style={{
            background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>
            From Campus to Code – We’ve Got You Covered.
          </h5>
          <h5 style={{
            color: 'white',
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginTop: '1em'
          }}>
            Discover competitions, track your progress, and unlock exclusive tech events – all in one futuristic hub designed for student innovators.
          </h5>
        </div>

        {/* Background Video */}
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
            zIndex: -2
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: -1
        }} />
      </div>

      {/* Events Second Hero Section */}
      <div className="second-hero-section d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem'
        }}
      >
        <SecondHero />
      </div>
    </>
  );
}
