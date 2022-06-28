import React from 'react';
import { useState } from 'react';
import { signUp, signIn } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    const user = await signUp(signUpEmail, signUpPassword);
    setUser(user);
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();

    const user = await signIn(signInEmail, signInPassword);
    setUser(user);
  }


  return (
    <div className='auth'><h3>Rainy Day Reader</h3>
      <div className='auth-form'>
        <form onSubmit={handleSignUpSubmit} > 
          <p><b>Sign Up:</b></p>
          <label>email:
            <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" />
          </label>
          <label>
              password:
            <input onChange={e => setSignUpPassword(e.target.value)} value ={signUpPassword} type="password" />
          </label>
          <button className='auth-button'>Sign Up</button>
        </form>
        <form onSubmit={handleSignInSubmit} > 
          <p><b>Sign In:</b></p>
          <label>email:
            <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email" />
          </label>
          <label>
              password:
            <input onChange={e => setSignInPassword(e.target.value)} value ={signInPassword} type="password" />
          </label>
          <button className='auth-button'>Sign In</button>
        </form>
      </div>
    </div>
  );
}
