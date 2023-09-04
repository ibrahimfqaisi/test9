import Link from 'next/link';
import { useAuth } from '@/context/auth';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState('black'); // Set text color to black

  const { user, logout } = useAuth();
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  let techColor = 'white'; // Set text color for "TECH"
  let agentColor = 'orange'; // Set text color for "AGENT"

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('rgba(174, 125, 91, 0.8)');
        setTextColor('orange'); // Set text color to black
      } else {
        setColor('transparent');
        setTextColor('orange');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 z-10 w-full duration-300 ease-in"
    >
      <div className="flex items-center justify-between max-w-6xl p-4 m-auto text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            <span style={{ color: `${techColor}` }}>TECH</span>
            {' '}
            <span style={{ color: `${agentColor}` }}>AGENT</span>
          </h1>
        </Link>
        {user ? (
          <>
            {user.is_technician ? (
              <>
                <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
                  <li className="p-4">
                    <Link href="/AcceptedOrder">
                      <button className="text-white cursor-pointer text-1xl">Accepted Orders</button>
                    </Link>
                  </li>
                  <li className="p-4">
                    <Link href="/techprofile">
                      <button className="text-white cursor-pointer text-1xl">Profile</button>
                    </Link>
                  </li>
                  <li className="p-4">
                    <Link href="/">
                      <button className="text-white cursor-pointer text-1xl" onClick={logout}>Logout</button>
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul style={{ color: `${textColor}` }} className="hidden sm:flex ">
                  <li className="p-4">
                    <a href="/userprofile">
                      <button className="text-white cursor-pointer text-1xl">Profile</button>
                    </a>
                  </li>
                  <li className="p-4">
                    <a href="/CustomerOrder">
                      <button className="text-white cursor-pointer text-1xl">My Order</button>
                    </a>
                  </li>
                  <li className="p-4">
                    <a href="/">
                      <button className="text-white cursor-pointer text-1xl" onClick={logout}>Logout</button>
                    </a>
                  </li>

                </ul>
              </>



            )}
          </>
        ) : (
          <>
            <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
              <li className="p-4">
                <a href="/aboutpage">
                  <button className="text-white cursor-pointer text-1xl">About Us</button>
                </a>
              </li>
              <li className="p-4">
                <a href="#footer">
                  <button className="text-white cursor-pointer text-1xl">Contact Us</button>
                </a>
              </li>
              <li className="p-4">
                <a href="#service">
                  <button className="text-white cursor-pointer text-1xl">Services</button>
                </a>
              </li>
              <li className="p-4">
                <Link href="/LoginPage">
                  <button className="text-white cursor-pointer text-1xl">Login</button>
                </Link>
              </li>
            </ul>

            <div onClick={handleNav} className="z-10 block sm:hidden">
              {nav ? (
                <AiOutlineClose size={50} style={{ color: `${textColor}` }} />
              ) : (
                <AiOutlineMenu size={50} style={{ color: `${textColor}` }} />
              )}
            </div>

            <div
              className={
                nav
                  ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                  : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              }
            >
              <ul>
                <li onClick={handleNav} className="p-4 text-8xl hover:text-gray-500">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-8xl hover:text-gray-500">
                  <Link href="#gallery">About Us</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-8xl hover:text-gray-500">
                  <Link href="/work">Work</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-8xl hover:text-gray-500">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
