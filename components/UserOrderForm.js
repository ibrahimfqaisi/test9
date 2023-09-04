import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/auth';
import Footer from './Footer';
import styles from '../styles/orderuser.module.css';

const UserOrderForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const urlenv = process.env.NEXT_PUBLIC_URL;
  const auth = useAuth();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const token = auth.token;
    formData.append('description', event.target.description.value);
    formData.append('location', event.target.location.value);
    formData.append('technician_type', event.target.TechnicianType.value);
    formData.append('image', selectedImage);
    formData.append('address', event.target.address.value);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = urlenv + '/createorder/';
    const data = await axios.post(url, formData, config);
    alert('Created successfully!');
    event.target.reset();
  };

  return (
    <div className={styles.background}>
      <section className={styles.loginSection}>
        <div className={styles['form-box']}>
          <div className={styles['form-value']}>
            <form onSubmit={handleOrderSubmit}>
              <h2 className={styles.h2}>User Order Form</h2>
              <div className={styles['inputbox']}>
                <ion-icon name="person-outline"></ion-icon>
                <input
                  className={`${styles.input} w-full p-2 border rounded-md`}
                  type="text"
             
                  name="description"
                  required
                />
                <label className={styles.label}>Description</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  className={`${styles.input} w-full p-2 border rounded-md`}
                  type="text"
                 
                  name="location"
                  required
                />
                <label className={styles.label}>Location</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  className={`${styles.input} w-full p-2 border rounded-md`}
                  type="text"
                 
                  name="TechnicianType"
                  required
                />
                <label className={styles.label}>Technician Type</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="image-outline"></ion-icon>
                <input
                  className={`${styles.input} w-full p-2 border rounded-md`}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  name="image"
                  required
                />
                <label className={styles.label} style={{ position: 'absolute', top: 0, left: '10px' }}>Image</label>
              </div>
              <div className={styles['inputbox']}>
                <ion-icon name="location-outline"></ion-icon>
                <input
                  className={`${styles.input} w-full p-2 border rounded-md`}
                  type="text"
                  
                  name="address"
                  required
                />
                <label className={styles.label}>Address</label>
              </div>
              <button
                type="submit"
                className={`${styles.button} w-full p-2 text-gray bg-green-500 rounded-md hover:bg-gray-600 focus:outline-none`}
              >
                Create Order
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserOrderForm;
