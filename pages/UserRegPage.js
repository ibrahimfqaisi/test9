import React from 'react';
import { useRouter } from 'next/router';
import UserRegForm from   '../components/UserRegForm'
import Header from '../components/Header';
const UserRegPage = () => {
  const router = useRouter();


  return (
    <div>

      <UserRegForm  />

    </div>
  );
};

export default UserRegPage;