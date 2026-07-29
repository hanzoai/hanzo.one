import { Helmet } from '@/gui'

import React from 'react';
import Login from '@/components/auth/Login';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - Hanzo AI</title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
