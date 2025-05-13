import React from 'react'
import RegisterPage from '../../components/authentication/RegisterPage'
import { AuthHooks } from './Hooks'

const RegisterIndex = () => {

  const { RegistrationApiCall, error } = AuthHooks()

  return (
    <div>
      <RegisterPage RegistrationApiCall={RegistrationApiCall} error={error} />
    </div>
  )
}

export default RegisterIndex