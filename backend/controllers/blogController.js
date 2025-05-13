import Blog from '../models/Blog.js';

export const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body
        const newBlog = await Blog.create({ title, content, author: req.user.userId })

        res.status(201).json({ data: newBlog, status: 201, message: "Blog posted successfully" })
    } catch (err) {
        res.status(500).json({ message: 'Failed to post blog', err, status: 500 })
    }
};

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username email phone_number').sort({ updatedAt: -1 })
        if (!blogs?.length) {
            return res.status(404).json({ message: "No blogs found", status: 404 })
        }

        res.status(200).json({ data: blogs, status: 200, message: "Blogs found" })
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch blogs', err, status: 500 })
    }
};

export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author', 'username')
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found', status: 404 })
        }

        res.status(200).json({ data: blog, status: 200, message: "Blogs found" })
    } catch (err) {
        res.status(500).json({ message: 'Error fetching blog', err, status: 500 })
    }
};

export const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found', status: 404 })
        }

        if (blog.author.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized', status: 403 });
        }

        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;

        const updatedPost = await blog.save();
        res.status(200).json({ data: updatedPost, message: 'Blog updated successfully', status: 200 });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update blog', err, status: 500 });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found', status: 404 })
        }

        if (blog.author.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized', status: 403 });
        }

        await blog.deleteOne();
        res.status(200).json({ message: 'Blog deleted', status: 200 });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete blog', err });
    }
};
