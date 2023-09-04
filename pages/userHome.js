import React, { useEffect } from 'react';
import UserOrderForm from '../components/ElectricianImage';
import ElectricianImage from '../components/UserOrderForm';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth';
import Footer from '@/components/Footer';
import Cookies from "js-cookie"; // Import Cookies

const UserHome = () => {
  const { user, setToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    const initializeAuthStateFromCookies = async () => {
      const tokenFromCookie = Cookies.get("token");
      if (tokenFromCookie) {
        setToken(tokenFromCookie);
      }
    };
    if (tokenFromCookie && !user ){
      initializeAuthStateFromCookies()
    }
    if (user) {
      if (user.is_technician) {
        router.push('./TechHome'); // Redirect to the technician's home
      }
    }
    else if(!tokenFromCookie && !user) {
            router.push('../');
    }
  }, [user, router, setToken]);

  if (user && !user.is_technician) {
    return (
<div
  style={{
    backgroundImage: 'url("https://images-ext-1.discordapp.net/external/9hFL7z4ploGR5eVlhFB9-aFfhM4B2AKqCga34S-uqic/%3Fw%3D1060/https/img.freepik.com/premium-photo/carpenter-shop-background-photo-carpenter-male-worker_982005-5260.jpg?width=1170&height=669")', // Replace with your image path
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    width: '100%',
    height: 'auto', // Adjust the height as needed
  }}
>
        <Header />
        <div className="flex items-center justify-center min-h-screen gap-9">
          <div className="flex w-full max-w-screen-xl p-8 mx-auto">
            <UserOrderForm />
            <ElectricianImage />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

  return null;
};

export default UserHome;
