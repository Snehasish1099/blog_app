import React from 'react';
import { Link, useNavigate } from 'react-router';
import { dashBoardBlog } from './blogStyles';

const DashboardPage = ({ user, logout, blogs, deleteBlogApiCall }) => {
    const navigate = useNavigate();

    const logoutFunc = () => {
        logout()
        navigate('/login')
    }

    const deleteBlog = async (blog) => {
        const isConfirmed = window.confirm(`Are you sure you want to delete the blog ${blog?.title}?`)

        if (isConfirmed) {
            await deleteBlogApiCall(blog?._id);
        }
    };


    return (
        <div style={dashBoardBlog.container}>
            <div style={dashBoardBlog.header}>
                <h2 style={dashBoardBlog.heading}>Welcome, {user?.username}</h2>
                <div>
                    <button style={dashBoardBlog.button} onClick={logoutFunc}>Logout</button>
                    <Link to="/create">
                        <button style={{ ...dashBoardBlog.button, ...dashBoardBlog.createBtn }}>Create New Post</button>
                    </Link>
                </div>
            </div>

            <h3>All Blog Posts</h3>

            <div style={dashBoardBlog.blogList}>
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog._id} style={dashBoardBlog.blogCard}>
                            <div style={dashBoardBlog.blogTitle}>{blog.title}</div>
                            <p style={dashBoardBlog.blogAuthor}><strong>Content:</strong>&nbsp;{blog.content}</p>
                            <p style={dashBoardBlog.blogAuthor}><strong>Author:</strong>&nbsp;{blog.author.username}</p>

                            {blog.author._id === user?.id && (
                                <div style={dashBoardBlog.blogButtons}>
                                    <Link to={`/edit/${blog._id}`}>
                                        <button style={dashBoardBlog.button}>Edit</button>
                                    </Link>
                                    <button onClick={() => deleteBlog(blog)} style={{ ...dashBoardBlog.button, ...dashBoardBlog.dangerButton }}>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No blog posts yet.</p>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
