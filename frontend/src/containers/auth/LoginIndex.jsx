import React from 'react';
import LoginPage from '../../components/authentication/LoginPage';
import { AuthHooks } from './Hooks';

const LoginIndex = () => {
  const { LoginApiCall, error } = AuthHooks()

  return (
    <div>
      <LoginPage LoginApiCall={LoginApiCall} error={error} />
    </div>
  )
}

export default LoginIndex