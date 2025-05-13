import React, { useContext, useEffect, useState } from 'react'
import DashboardPage from '../../components/blogs/DashboardPage'
import { AuthHooks } from '../auth/Hooks'
import AuthContext from '../../utils/AuthContext'
import { BlogHooks } from './Hooks'

const DashboardIndex = () => {

    const { user, logout } = useContext(AuthContext);
    const { getAllBlogsApiCall, blogs, deleteBlogApiCall } = BlogHooks()

    useEffect(() => {
        getAllBlogsApiCall()
    }, [])

    return (
        <div>
            <DashboardPage user={user} logout={logout} blogs={blogs} deleteBlogApiCall={deleteBlogApiCall} />
        </div>
    )
}

export default DashboardIndex