import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import Home from './Home';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Events from './Events';
import Leaderboard from './LeaderBoard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path='/Events' element={<Events/>} />
        <Route path='/LeaderBoard' element={<Leaderboard/>} />
      </Routes>
    </>
  );
}

export default App;
