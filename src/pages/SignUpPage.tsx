import { Helmet } from '@/gui'

import React from 'react';
import SignUp from '@/components/auth/SignUp';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up - Hanzo AI</title>
      </Helmet>
      <SignUp />
    </>
  );
};

export default SignUpPage;
