import React from 'react';
import Link from 'next/link';
import useResource from '@/Hooks/useResource';
import { useRouter } from 'next/router';
import styles from '../styles/register.module.css'; 

export default function TechRegForm() {
  const { createResource2 } = useResource();
  const router = useRouter();

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const newCustomer = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password2: event.target.password2.value,
    };

    try {
      await createResource2(newCustomer);
      router.push('/LoginPage');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.background}>
      <section className={styles.loginSection}>
        <div className={styles['form-box']}>
          <div className={styles['form-value']}>
            <form onSubmit={handleRegisterSubmit}>
              <h2 className={styles.h2}>Register as Customer</h2>
              <div className={styles['inputbox']}>
                <ion-icon name="person-outline"></ion-icon>
                <input
                  type="text"
                  name="username"
                  required
                  className={styles.input}
                />
                <label className={styles.label}>Username</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  name="email"
                  required
                  className={styles.input}
                />
                <label className={styles.label}>Email</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  name="password"
                  required
                  className={styles.input}
                />
                <label className={styles.label}>Password</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  name="password2"
                 
                  required
                  className={styles.input}
                />
                <label className={styles.label}>Confirm Password</label>
              </div>
              <button className={styles.button} type="submit">
                Register
              </button>
              <div className={styles['register']}>
                <p>Already have an account?                 <Link href="/LoginPage" legacyBehavior>
                  <a className={`${styles.loginLink} hover:bg-orange-400`}>SignIN</a>
                </Link></p>

              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}