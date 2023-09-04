import React, { useEffect } from 'react';
import Header from '../components/Header';
import useResource from '@/Hooks/useResource';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { useAuth } from '@/context/auth';
import Cookies from 'js-cookie'; // Import Cookies
import Footer from '@/components/Footer';

const TechHome = () => {
  const urlenv = process.env.NEXT_PUBLIC_URL;
  const { user, setToken } = useAuth();
  const imageurl = 'http://res.cloudinary.com/dt0dx45wy/';

  const router = useRouter();
  const url = urlenv + '/api/technician/hometechnician/';
  const { response: data1, error: error1, createResource3 } = useResource(url);

  const handleSubmit = async (event, id) => {
    event.preventDefault();
    const arrivalTime = {
      eta_arrival_time: event.target.eta_arrival_time.value,
    };
    createResource3(arrivalTime, id);
    alert('hi');
  };

  useEffect(() => {
    const tokenFromCookie = Cookies.get('token');
    const initializeAuthStateFromCookies = async () => {
      const tokenFromCookie = Cookies.get('token');
      if (tokenFromCookie) {
        setToken(tokenFromCookie);
      }
    };
    if (tokenFromCookie && !user) {
      initializeAuthStateFromCookies();
    }
    if (user) {
      if (!user.is_technician) {
        router.push('./userHome'); // Redirect to the technician's home
      }
    } else if (!tokenFromCookie && !user) {
      router.push('../');
    }
  }, [user, router]);

  if (user) {
    if (user.is_technician) {
      return (
        <div
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42313.jpg?w=996&t=st=1693779709~exp=1693780309~hmac=afb62b2619d27e6270124bdeeeeb40aced315ec35d84c1674e313100665e5ae8")', // Replace with your image path
            backgroundSize: 'cover', // Adjust as needed
            backgroundPosition: 'center', // Adjust as needed
            backgroundRepeat: 'no-repeat', // Adjust as needed
            width: '100%',
            height: 'auto', // Adjust the height as needed

          }}
        >
          <Header />
          <div className="gap-10 p-20" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data1.map((order) => (
              <div key={order.id} className="w-1/3 p-4 border" style={{ flex: '0 0 33.33%' }}>
                <img src={imageurl + order.image} alt={order.description} className="w-full mb-2" />
                <h2 className="text-lg font-semibold">{order.description}</h2>
                <p>Technician Type: {order.technician_type}</p>
                {order.eta_arrival_time && <p>ETA Arrival Time: {order.eta_arrival_time}</p>}

                <form onSubmit={(event) => handleSubmit(event, order.id)}>
                  <input
                    type="datetime-local"
                    placeholder="Arrival Time"
                    className="w-full p-2 mt-2 border rounded-md"
                    name="eta_arrival_time"
                    required
                  />
                  <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md" type="submit">
                    Accept
                  </button>
                </form>
              </div>
            ))}
          </div>
          <Footer/>
        </div>
      );
    }
  }
};

export default TechHome;
