import React, { useState } from 'react';
import '../styles/Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { email, password });
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
