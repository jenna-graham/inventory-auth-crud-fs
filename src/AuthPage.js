import React from 'react';
import { useState } from 'react';
import { signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  async function handleSubmit(e) {
    e.preventDefault();

    const user = await signUp(email, password);
    setUser(user);
  }
  return (
    <div className='auth'><h3>Rainy Day Reader</h3>
      <div className='auth-form'>
      
        <form onSubmit={handleSubmit} > 
          <p><b>Sign In:</b></p>
          <label>email:
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
          </label>
          <label>
              password:
            <input onChange={e => setPassword(e.target.value)} value ={password} type="password" />
          </label>
          <button className='auth-button'>Sign Up</button>
        </form>
        <form onSubmit={handleSubmit} > 
          <p><b>Sign In:</b></p>
          <label>email:
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
          </label>
          <label>
              password:
            <input onChange={e => setPassword(e.target.value)} value ={password} type="password" />
          </label>
          <button className='auth-button'>Sign In</button>
        </form>
      </div>
    </div>
  );
}
