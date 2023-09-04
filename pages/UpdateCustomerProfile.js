import UpdateCustomerProfileForm from '../components/UpdateCustomerProfileForm';
import Cookies from "js-cookie"; // Import Cookies
import { useAuth } from '@/context/auth';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const UpdateCustomerProfile = () => {
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
      if (user.is_technician) {
        router.push('./UpdateTechnicianProfile'); // Redirect to the technician's home
      }
    }
    else if(!tokenFromCookie && !user) {
      router.push('../');
    }
  }, [user, router]);
  return (
    <div>
      <UpdateCustomerProfileForm />
    </div>
  );
};

export default UpdateCustomerProfile;