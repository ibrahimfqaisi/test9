import styles from '../styles/login.module.css'; // Import your CSS module
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/auth';
// import 'ionicons/dist/css/ionicons.min.css';

const LoginForm = () => {
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    try {
      await login(username, password);
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
            <form action="" onSubmit={handleLogin}>
              <h2 className={styles.h2}>Login</h2>
              <div className={styles['inputbox']}>
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required name="username" className={styles.input} />
                <label className={styles.label}>UserName</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required name="password" className={styles.input} />
                <label className={styles.label}>Password</label>
              </div>
              
              <button className={styles.button} type='submit'>Log in</button>
              <div className={styles['register']}>
                <p style={{padding:"20px"}}>
                  Don't have an account? 
                </p>
                <div className="flex justify-between">
                  <Link href="/TechRegPage" legacyBehavior>
                    <a className={`p-2 mr-1 ${styles.registerLink} hover:bg-orange-400`}>
                      Register as Technician
                    </a>
                  </Link>
                  <Link href="/UserRegPage" legacyBehavior>
                    <a className={`p-2 ml-1 ${styles.registerLink} hover:bg-orange-400`}>
                      Register as Customer
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
