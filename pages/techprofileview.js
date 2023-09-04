import React, { useEffect } from 'react';

import { useRouter } from 'next/router'; // Import the useRouter hook

import Header from '../components/Header';
import useResource from '@/Hooks/useResource';
import { useAuth , setToken } from '@/context/auth';
import Cookies from "js-cookie"; // Import Cookies
const UserProfile = () => {
  const { user , setToken } = useAuth();  const urlenv = process.env.NEXT_PUBLIC_URL;
  const imageurl = "http://res.cloudinary.com/dt0dx45wy/"

  const router = useRouter(); // Initialize the router object
  const { nametechnitian } = router.query;
  const url = user ? urlenv + `/api/technician/profile/${nametechnitian}/`: null;
  const { response: data1, error: error1, isLoading } = useResource(url);

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
    //     لا تحمسحهم لو سمحت 

    // Check if the user is authenticated and their role
    if (!tokenFromCookie && !user) {
      router.push('../');
    }
  }, [user, router]);

  if (user) {    
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />

        <div className="max-w-2xl p-6 mx-auto">
          {data1 && data1.user && (
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={imageurl+data1.image} alt="User Avatar" className="w-32 h-32 mx-auto mb-4 rounded-full" />
              <h1 className="mb-2 text-2xl font-semibold text-center">{data1.user.username}</h1>
              <p className="mb-4 text-center text-gray-600">Profession: {data1.profession}</p>
              <p className="mb-4 text-gray-600">Description: {data1.description}</p>
              <p className="text-gray-600">Average Rating: {data1.average_rating}</p>
            </div>
          )}

          {error1 && (
            <div className="text-red-500">Error loading profile data: {error1.message}</div>
          )}
        </div>
      </div>
    );
  } else {
    return null; // Render nothing if the user is not authenticated or not a technician
  }
};

export default UserProfile;