import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import AuthContext from '../../utils/AuthContext';
import { BlogHooks } from '../../containers/blog/Hooks';
import { blogFormStyle } from './blogStyles';

const BlogForm = () => {
    const [form, setForm] = useState({ title: '', content: '' });
    const { user } = useContext(AuthContext);
    const params = useParams();

    const { createBlogApiCall, updateBlogApiCall, getBlogByIdApiCall } = BlogHooks();

    const isEdit = Boolean(params.id);

    useEffect(() => {
        const getBlogDataForEdit = async () => {
            if (!isEdit) {
                return;
            }

            const blog = await getBlogByIdApiCall(params.id);
            if (blog) {
                setForm({ title: blog.title, content: blog.content });
            }
        };

        getBlogDataForEdit();
    }, [params.id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await updateBlogApiCall(params.id, form);
        } else {
            await createBlogApiCall(form);
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div style={blogFormStyle.container}>
            <div style={blogFormStyle.formWrapper}>
                <h2 style={blogFormStyle.heading}>{isEdit ? 'Edit Post' : 'Create New Post'}</h2>
                <form onSubmit={handleSubmit} style={blogFormStyle.form}>
                    <input
                        name="title"
                        placeholder="Enter title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        style={blogFormStyle.input}
                    />
                    <textarea
                        name="content"
                        placeholder="Enter content"
                        rows="5"
                        value={form.content}
                        onChange={handleChange}
                        required
                        style={blogFormStyle.textarea}
                    />
                    <button type="submit" style={blogFormStyle.button}>
                        {isEdit ? 'Update' : 'Create'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
