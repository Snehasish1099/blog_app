import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { doGetApiCall, doPostApiCall } from '../../utils/ApiConfig'
import AuthContext from "../../utils/AuthContext";

export const AuthHooks = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const { loginData } = useContext(AuthContext);

    // Registration API call
    const RegistrationApiCall = async (formData) => {

        if (formData?.password !== formData?.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!/^\d{10}$/.test(formData?.phone_number)) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }

        try {
            const data = {
                url: `${import.meta.env.VITE_API_URL}/auth/register`,
                bodyData: {
                    username: formData?.username,
                    email: formData?.email,
                    phone_number: formData?.phone_number,
                    password: formData?.password,
                }
            }
            const res = await doPostApiCall(data)
            if (res?.status === 201) {
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Login API call 
    const LoginApiCall = async (formdata) => {
        try {
            const data = {
                url: `${import.meta.env.VITE_API_URL}/auth/login`,
                bodyData: {
                    email: formdata?.email,
                    password: formdata?.password
                }
            }

            const res = await doPostApiCall(data)
            if (res?.status === 200) {
                loginData(res.data, res.token)
                navigate(`/dashboard`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return {
        RegistrationApiCall,
        LoginApiCall,
        error,
    }
}