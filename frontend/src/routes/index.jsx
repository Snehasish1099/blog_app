import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router';
import LoginIndex from "../containers/auth/LoginIndex"
import RegisterIndex from '../containers/auth/RegisterIndex';
import DashboardIndex from '../containers/blog/DashboardIndex';
import BlogForm from '../components/blogs/BlogForm';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    return token ? children : <Navigate to="/login" />;
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<RegisterIndex />} />
            <Route path='login' element={<LoginIndex />} />
            <Route path='register' element={<RegisterIndex />} />
            <Route
                path='dashboard'
                element={
                    <ProtectedRoute>
                        <DashboardIndex />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/create"
                element={
                    <ProtectedRoute>
                        <BlogForm />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/edit/:id"
                element={
                    <ProtectedRoute>
                        <BlogForm />
                    </ProtectedRoute>
                }
            />
        </>
    )
)

export default router