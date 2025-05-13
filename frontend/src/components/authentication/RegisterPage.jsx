import React, { useState } from 'react';
import styles from './authStyles'

const RegisterPage = ({ RegistrationApiCall, error }) => {
    const [form, setForm] = useState({ username: '', email: '', phone_number: '', password: '', confirmPassword: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await RegistrationApiCall(form)
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <h2 style={styles.heading}>Register</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        style={styles.input}
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
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
                        name="phone_number"
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone_number}
                        onChange={handleChange}
                        maxLength={10}
                        pattern="\d{10}"
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
                    <input
                        style={styles.input}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" style={styles.button}>Register</button>
                </form>

                {error && <p style={styles.error}>{error}</p>}
                <p style={styles.heading}>Already have an account? <a href='/login'>Login</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;
