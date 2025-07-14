import React from 'react';
import vid from './assets/yellow-tech-background.mp4';

const dummyData = [
  { name: 'Arka', points: 11 },
  { name: 'Rounak', points: 6 },
  { name: 'Bidwattar', points: 5 },
  { name: 'Sayan', points: 1 },
];

export default function Leaderboard() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/your-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem'
      }}
    >
        <video
          src={vid}
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
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: -1
        }} />
      <div
        style={{
          background: 'linear-gradient(145deg, rgba(0,0,0,0.7), rgba(30,30,30,0.7))',
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          width: '90%',
          maxWidth: '700px',
          boxShadow: '0 0 30px rgba(0,255,255,0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255,0,255,0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,255,0.3)';
        }}
      >
        <h2 style={{
          fontFamily: 'Orbitron',
          textAlign: 'center',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, aqua, violet)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          📊 Leaderboard
        </h2>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{
                textAlign: 'left',
                padding: '1rem',
                borderBottom: '2px solid violet',
                fontSize: '1.1rem'
              }}>Name</th>
              <th style={{
                textAlign: 'right',
                padding: '1rem',
                borderBottom: '2px solid violet',
                fontSize: '1.1rem'
              }}>Points</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #555' }}>
                <td style={{ padding: '1rem', color: 'aqua' }}>{user.name}</td>
                <td style={{ padding: '1rem', textAlign: 'right', color: '#ff80ff' }}>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


