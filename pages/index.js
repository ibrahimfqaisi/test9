import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/styles.module.css';
import { useAuth } from '@/context/auth';
import AboutPagetext from '@/components/AboutPagetext';
import HeaderWithVideo from '@/components/video';
import { useRouter } from 'next/router'; // Import the useRouter hook
// import AboutPage from '@/pages/aboutpage';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State to control text visibility
  const { user } = useAuth();
  const router = useRouter();
  const [textIndex, setTextIndex] = useState(0);

  const images = [
    'https://images-ext-2.discordapp.net/external/8m0RVq909JGwZOZOf-7Q37hZtVM-IAkH2iE3lTql8tM/%3Fw%3D1060/https/img.freepik.com/premium-photo/carpenter-shop-background-photo-carpenter-male-worker_982005-5253.jpg?width=1170&height=669',
    'https://th.bing.com/th/id/OIP.9QYlHI6VK7Siqu87uwkFYAHaEK?pid=ImgDet&rs=1'

  ];


  const currentImage = images[activeIndex];

  const backgroundImageStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url('${currentImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const dynamicText = [
    {
      title: 'Welcome to Tech Agent',
      description: 'Your source for the latest technology news and trends.',
    },
    {
      title: 'Stay Informed and Inspired',
      description: 'We provide in-depth articles, reviews, and insights on gadgets, software, AI, and more.',
    },
    {
      title: 'Explore the World of Technology',
      description: 'Discover the future of innovation with Tech Agent.',
    },
  ];

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    backdropFilter: 'blur(5px)', // Apply a blur effect to the overlay
  };

  useEffect(() => {
    // Check if the user is authenticated and their role
    if (user) {
      if (user.is_technician) {
        router.push('./TechHome'); // Redirect to the technician's home
      } else {
        router.push('./userHome'); // Redirect to the user's home
      }
    } else {
      // When the component mounts, set a delay to make the text appear
      const delay = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Adjust the delay as needed

      // Cycle through the dynamic text every 3 seconds (faster transition)
      const textInterval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % dynamicText.length);
      }, 3000); // Adjust the interval duration as needed for faster transition

      return () => {
        clearTimeout(delay); // Cleanup the timeout on unmount
        clearInterval(textInterval); // Cleanup the interval on unmount
      };
    }
  }, [user, router]);
  if (!user) {
    const currentText = dynamicText[textIndex];
    return (
      <div >
        <div className={styles.container} >
          <Header />
          
          {/* Create a parent container with a consistent width */}
          <div className="container" style={{ width: '100%' }}>
            {/* First div */}
            <div style={backgroundImageStyle}>
              <div style={overlayStyle}></div>
              <div className={styles.content}>
                <h1 className={`text-3xl font-bold text-white font-dmserif ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 transition-all duration-500'}`}>
                  {currentText.title}
                </h1>
                <p className={`mb-3 text-lg italic text-white ${isVisible ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}>
                  {currentText.description}
                </p>
              </div>
            </div>
  
            {/* Second div */}
            <div className="container p-0 m-0">
              <AboutPagetext />
            </div>
            {/* <div style={{ border: '2px solid black' }}></div> */}


            <div className="container p-0 m-0">
              <HeaderWithVideo />
            </div>
            {/* <div style={{ border: '10px solid black' }}></div> */}


            {/* <div className="container p-0 m-0">
              <AboutPage />
            </div> */}
          </div>
  
          <div id='footer' style={{ flex: 1 }}>{/* Your main content here */}</div>
          <Footer style={{ flexShrink: 0 }} />
        </div>
      </div>
    );
  };
}

export default Home;
