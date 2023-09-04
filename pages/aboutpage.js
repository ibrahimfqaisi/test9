
import { useRouter } from 'next/router'; // Import the useRouter hook
import { useAuth } from '@/context/auth';
import Cookies from "js-cookie"; // Import Cookies
import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '@/components/aboutheader';
import Footer from '@/components/Footer';
// import styled from 'styled-components';


const teamMembers = [
  {
    name: 'Ibrahem ',
    major: 'Full stack developer',
    image: '/images/ibrahem.jpg',
  },
  {
    name: 'Sakher',
    major: 'Full stack developer',
    image: '/images/sakher.jpg',
  },
  {
    name: 'Malik',
    major: 'Full stack developer',
    image: '/images/malik.jpg',
  },
  {
    name: 'Bayan',
    major: 'Full stack developer',
    image: '/images/bayan.jpg',
  },
  {
    name: 'sajeda',
    major: 'Full stack developer',
    image: '/images/saj.jpg',
  },
  {
    name: 'Wallaw',
    major: 'Full stack developer',
    image: '/images/wallaw.jpg',
  },
];
const AboutPage = () => {
  const router = useRouter();
  const { user, setToken } = useAuth();
  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    const initializeAuthStateFromCookies = async () => {
      const tokenFromCookie = Cookies.get("token");
      if (tokenFromCookie) {
        setToken(tokenFromCookie);
      }
    };
    if (tokenFromCookie && !user) {
      initializeAuthStateFromCookies()
    }
  }, [user, router]);
  return (
    <div >
      <Header />
      <div style={{ margin: '100px' }}>

        <div id='about' className="flex items-center justify-center ">
          <div className="grid grid-cols-1 gap-40 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={member.image} alt={member.name} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-3xl font-bold text-white font-dmserif">{member.name}</h1>
                  <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">{member.major}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};
export default AboutPage;