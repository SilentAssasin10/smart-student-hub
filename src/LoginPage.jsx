import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from './Firebase';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // optional
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setError(""); // clear error if successful
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/');
    // onLogin(); ❌ Remove this
  } catch (err) {
    setError("❌ Invalid credentials");
  }
};

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    setError(""); // clear error if successful
    await signInWithPopup(auth, provider);
    navigate('/');
    // onLogin(); ❌ Remove this
  } catch (err) {
    setError("❌ Google login failed");
  }
};

  return (
    <Container
      fluid
      className="bg-dark text-light d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Card
        className="bg-secondary text-light p-4 shadow-lg mt-4"
        style={{
          width: '25rem',
          border: '2px solid #0ff',
          boxShadow: '0 0 20px #0ff, 0 0 30px #0ff'
        }}
      >
        <Card.Body>
          <h3 className="text-info text-center fw-bold my-1">🚀 Smart Login</h3>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Form.Check type="checkbox" label="Remember Me" className="mb-3" />

            <Button
              type="submit"
              className="w-100 btn btn-info fw-bold mb-2"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            <Button
              type="button"
              onClick={handleGoogleLogin}
              className="w-100 btn btn-danger fw-bold"
              disabled={loading}
            >
              <i className="bi bi-google me-2"></i>
              Sign in with Google
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
