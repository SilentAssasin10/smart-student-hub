import React from 'react';
import Stats from './Stats';
import './App.css';
import Button from './Button';
import landingVideo from './assets/landing-page-background.mp4';
import hackathon from './assets/hackathon.png';
import github from './assets/github.png';
import lb from './assets/leaderboard.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="home-container d-flex flex-column flex-md-row align-items-center justify-content-between px-4" style={{
        minHeight: '100vh',
        fontFamily: 'sans-serif, Rajdhani',
        paddingTop: '3rem',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {/* Left Section */}
        <div className="left-section" style={{ flex: '1 1 400px' }}>
          <h1 className="typing-animation" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Welcome to</h1>
          <h1 className="typing-animation" style={{ color: 'aqua', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Smart Student Hub</h1>
          <p className="description" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
            A one-stop destination for coding resources, project ideas, Tech Events, and everything a tech student needs to grow and shine!
          </p>
          <p className="description2 mt-4" style={{ fontFamily: 'Orbitron', fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>
            For more query, use the <span style={{ color: 'aqua' }}>Gemini Co-Pilot</span> in the events page.
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section" style={{
          flex: '1 1 400px',
          width: '100%',
          maxWidth: '500px',
          fontFamily: 'Orbitron'
        }}>
          <Stats />
        </div>
      </div>

      {/* Our Events Section */}
      <div style={{ position: 'relative', minHeight: '110vh', overflow: 'hidden' }}>
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          paddingTop: '3rem',
        }}>
          <h2 style={{
            fontFamily: 'Orbitron',
            color: 'aqua',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)'
          }}>
            Our Events
          </h2>
        </div>

        {/* Background Video */}
        <video
          src={landingVideo}
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

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1
        }} />

        {/* Floating Cards */}
        <div className="d-flex justify-content-center align-items-start flex-wrap gap-4 px-4 py-5">
          {[{
            image: github,
            title: "Join GitHub",
            desc: "Explore collaboration, version control, and showcase your code portfolio with GitHub.",
            btn: "Join Now",
            link: "https://github.com/login"

          }, {
            image: hackathon,
            title: "Tech Hackathons",
            desc: "Compete in real-world coding challenges and collaborate with peers to solve tech problems.",
            btn: "Register Now"
          }, {
            image: lb,
            title: "Campus Leaderboard",
            desc: "Track your rankings in coding, projects, and events all in one dynamic leaderboard.",
            btn: "View Leaderboard",
            link: "https://smart-student-hub-3778d.web.app/LeaderBoard"
          }].map((card, i) => (
            <div key={i} className="card p-4 text-light" style={{
              width: 'min(90vw, 22rem)',
              borderRadius: '1rem',
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              border: '2px solid #0ff',
              boxShadow: '0 0 15px #0ff',
              transition: 'transform 0.3s ease'
            }}>
              <img src={card.image} alt="Event Logo"
                className="mx-auto d-block mb-3"
                style={{ width: '10rem', height: '10rem', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h4 className="card-title fw-bold text-center">{card.title}</h4>
                <p className="card-text text-center">{card.desc}</p>
                <div className="text-center">
                  {card.link ? (
  <a href={card.link} target="_blank" rel="noopener noreferrer">
    <Button title={card.btn} />
  </a>
) : (
  <Button title={card.btn} />
)}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
