import React from 'react';
import { useState } from 'react';
import api from '../../auth/api';
import './styles.css';

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  
  const register = {
    name: name,
    email: email,
    pass: pass,
    passConfirm: passConfirm,
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (pass !== passConfirm) {
      
    }

    await api.post('user', register)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        alert(err);
      })
  }

  return (
    <div className="flex-ctr col margin1">
      <div className="back"></div>
      <div className="margin1"><h2>Register</h2></div>
      <form onSubmit={handleSubmit} className="flex-ctr col">

        <input type="text" name="name" required
          onChange={event => setName(event.target.value)}
        />

        <input type="text" name="email" required
          onChange={event => setEmail(event.target.value)}
        />

        <input type="password" name="pass" required
          onChange={event => setPass(event.target.value)}
        />

        <input type="password" name="passConfirm" required
          onChange={event => setPassConfirm(event.target.value)}
        />

        <button type="submit" className="button1 margin1"><h3>Submit</h3></button>
      </form>
    </div>
  )
};

export default UserRegister;