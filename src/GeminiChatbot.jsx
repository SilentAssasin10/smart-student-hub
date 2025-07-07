import React, { useState } from 'react';
import axios from 'axios';

const GeminiChatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const API_KEY = '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'; // ✅ Your Groq API key
  const endpoint = 'https://your-vercel-project.vercel.app/api/groqProxy';

  const handleSend = async () => {
    if (!input.trim()) return;

    // Clear chat if 'clear' is typed
    if (input.trim().toLowerCase() === 'clear') {
      setMessages([]);
      setInput('');
      return;
    }

    const userMessage = { role: 'user', parts: [{ text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-8b-8192',
          messages: [
            { role: 'system', content: 'You are Google’s Gemini AI assistant, smart and friendly.' },

            ...messages.map((m) => ({
              role: m.role === 'model' ? 'assistant' : 'user',
              content: m.parts[0].text,
            })),
            { role: 'user', content: input },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`, // ✅ FIXED
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Groq API response:', res.data); // ✅ Helpful for debugging

      const reply = res.data.choices?.[0]?.message?.content ?? '⚠️ No response';
      const aiMessage = { role: 'model', parts: [{ text: reply }] };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Groq API Error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          parts: [{ text: '⚠️ Failed to fetch response.' }],
        },
      ]);
    }
  };

  return (
    <div
      style={{
        flex: '1 1 350px',
        padding: '2rem',
        borderRadius: '1rem',
        background: 'linear-gradient(145deg, rgba(0,0,0,0.6), rgba(30,30,30,0.6))',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
        color: 'white',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <h4
        style={{
          fontFamily: 'Orbitron',
          background: 'linear-gradient(to right, #00ffe0, #ff00c8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '1.6rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        🤖 GPT-3.5 AI
      </h4>

      <div
        style={{
          height: '16rem',
          overflowY: 'auto',
          backgroundColor: '#111',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          color: '#00ffee',
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.role === 'user' ? 'You' : 'GPT'}:</strong> {msg.parts?.[0]?.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            padding: '0.6rem 1rem',
            borderRadius: '0.5rem 0 0 0.5rem',
            border: 'none',
            background: '#1a1a1a',
            color: 'white',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '0.6rem 1.2rem',
            borderRadius: '0 0.5rem 0.5rem 0',
            background: 'linear-gradient(to right, #00bfff, #8a2be2)',
            color: 'white',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default GeminiChatbot;
