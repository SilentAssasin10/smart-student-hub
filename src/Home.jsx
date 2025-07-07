import React from 'react';
import Stats from './Stats';
import './App.css'; // Make sure this file exists for custom styles
import Button from './Button';
import landingVideo from './assets/landing-page-background.mp4';
import hackathon from './assets/hackathon.png';
import github from './assets/github.png';
import lb from './assets/leaderboard.png';



export default function Home() {
  return (
    <>
    <div className="home-container" style={{height:'100vh', fontFamily: 'sans-serif, Rajdhani'}}>
      <div className="left-section">
        <h1 className="typing-animation">Welcome to</h1>
        <h1 className="typing-animation" style={{color: 'aqua'}}>Smart Student Hub</h1>
        <p className="description">
          A one-stop destination for coding resources, project ideas, Tech Events, and everything a tech student needs to grow and shine!
        </p>
        <p className="description2 mt-5" style={{fontFamily: 'Orbitron'}}>
            For more query, use the <h6 style={{color:"aqua"}}>Gemini Co-Pilot</h6> in the events page   
        </p>
      </div>
      <div className="right-section" style={{color: 'light', fontFamily: 'Orbitron'}}>
        <Stats/>
      </div>
    </div>


    <div style={{ position: 'relative', height: '120vh', overflow: 'hidden' }}>
        <div style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            paddingTop: '3rem',
        }}>
            <h2 style={{ fontFamily: 'Orbitron', color: 'aqua', fontSize: '2.5rem' }}>Our Events</h2>
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

        {/* Dark overlay for visibility */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1
        }} />

        {/* Floating Cards */}
        <div
        className="d-flex justify-content-center align-items-start flex-wrap gap-4"
        style={{
            zIndex: 1,
            position: 'relative',
            marginTop: '2rem',
            padding: '1rem',
            minHeight: '60vh',
        }}
        >
        {/* Card 1 */}
        <div className="card p-4 text-light"
            style={{
                width: '22rem',
                borderRadius: '1rem',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                border: '2px solid #0ff',
                boxShadow: '0 0 15px #0ff'
            }}
        >
              <img src={github} alt="Event Logo"
                    className="mx-auto d-block mb-3"
                    style={{ width: '12rem', height: '12rem' }}
                />

            <div className="card-body">
            <h4 className="card-title fw-bold">Join GitHub</h4>
            <p className="card-text">
                Explore collaboration, version control, and showcase your code portfolio with GitHub.
            </p>
            <Button title="Join Now" />
            </div>
        </div>

        {/* Card 2 */}
        <div className="card p-4 text-light"
            style={{
                width: '22rem',
                borderRadius: '1rem',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                border: '2px solid #0ff',
                boxShadow: '0 0 15px #0ff'
            }}
        >
              <img src={hackathon} alt="Event Logo"
                    className="mx-auto d-block mb-3"
                    style={{ width: '12rem', height: '12rem' }}
                />

            <div className="card-body">
            <h4 className="card-title fw-bold">Tech Hackathons</h4>
            <p className="card-text">
                Compete in real-world coding challenges and collaborate with peers to solve tech problems.
            </p>
            <Button title="Register Now" />
            </div>
        </div>

        {/* Card 3 */}
        <div className="card p-4 text-light"
            style={{
                width: '22rem',
                borderRadius: '1rem',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                border: '2px solid #0ff',
                boxShadow: '0 0 15px #0ff'
            }}
        >
              <img src={lb} alt="Event Logo"
                    className="mx-auto d-block mb-3"
                    style={{ width: '12rem', height: '12rem' }}
                />

            <div className="card-body">
            <h4 className="card-title fw-bold">Campus Leaderboard</h4>
            <p className="card-text">
                Track your rankings in coding, projects, and events all in one dynamic leaderboard.
            </p>
            <Button title="View Leaderboard" />
            </div>
        </div>
        </div>

      </div>
    </>
  );
}
