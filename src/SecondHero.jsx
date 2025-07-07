import React from 'react';
import Countdown from 'react-countdown';
import GeminiChatbot from './GeminiChatbot'; // ✅ Import GeminiChatbot

export default function SecondHero() {
  const countdownDate = Date.now() + 20 * 24 * 60 * 60 * 1000;

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1rem'
    }}>
      {[{ label: "Days", value: days }, { label: "Hours", value: hours },
        { label: "Minutes", value: minutes }, { label: "Seconds", value: seconds }]
        .map((time, i) => (
          <div key={i} style={{
            background: '#111',
            padding: '1rem',
            borderRadius: '1rem',
            minWidth: '70px',
            textAlign: 'center',
            flex: '1 1 80px'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{String(time.value).padStart(2, '0')}</div>
            <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{time.label}</div>
          </div>
        ))}
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '3rem',
        padding: '2rem',
        width: '100%',
        maxWidth: '1300px',
        margin: '0 auto',
      }}
    >
      {/* CP Contest Timer Card */}
      <div
        style={{
          flex: '1 1 350px',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'linear-gradient(145deg, rgba(0,0,0,0.6), rgba(30,30,30,0.6))',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 20px rgba(255, 0, 255, 0.4)',
          color: 'white',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.4)';
        }}
      >
        <h2 style={{
          fontFamily: 'Orbitron',
          background: 'linear-gradient(to right, #00ffff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2rem',
          marginBottom: '1rem',
        }}>
          Monthly CP Contest
        </h2>
        <p style={{ color: '#ccc', marginBottom: '1rem' }}>
          Solve algorithmic challenges and rise to the top of the leaderboard every month.
        </p>
        <h5 style={{
          color: '#00f0ff',
          fontWeight: 'bold',
          letterSpacing: '1px',
          marginBottom: '0.5rem'
        }}>
          TIME REMAINING
        </h5>
        <Countdown date={countdownDate} renderer={renderer} />
        <button style={{
          marginTop: '1.5rem',
          padding: '0.8rem 2rem',
          background: 'linear-gradient(to right, #00bfff, #8a2be2)',
          border: 'none',
          borderRadius: '2rem',
          fontWeight: 'bold',
          color: 'white',
          cursor: 'pointer'
        }}>
          Participate Now
        </button>
      </div>

      {/* Gemini Chatbot */}
      <GeminiChatbot />
    </div>
  );
}
