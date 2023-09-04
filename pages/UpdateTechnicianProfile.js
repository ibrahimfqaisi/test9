import UpdateTechnicianProfileForm from '../components/UpdateTechnicianProfileForm';
import Cookies from "js-cookie"; // Import Cookies
import { useAuth } from '@/context/auth';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const UpdateTechnicianProfile = () => {
  const router = useRouter();
  const { user,  setToken } = useAuth();
  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    const initializeAuthStateFromCookies = async () => {
      if (tokenFromCookie) {
        await setToken(tokenFromCookie);
      }
    };
    if (tokenFromCookie && !user) {
       initializeAuthStateFromCookies()
    }
    if (user) {
      if (user && !user.is_technician) {
        router.push('./UpdateCustomerProfile'); // Redirect to the technician's home
      } 
    } else if(!tokenFromCookie && !user) {
      router.push('../'); 
    }
  }, [user, router]);
  return (
    <div>
      <UpdateTechnicianProfileForm />
    </div>
  );
};

export default UpdateTechnicianProfile;