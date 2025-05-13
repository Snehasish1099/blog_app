import React, { useState } from 'react';
import styles from './authStyles'

const LoginPage = ({ LoginApiCall, error }) => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form, "# form")
    await LoginApiCall(form);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>

        {error && <p style={styles.error}>{error.message || String(error)}</p>}
        <p style={styles.heading}>Don't have an account? <a href='/register'>Register</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
