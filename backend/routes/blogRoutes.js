import express from 'express';
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from '../controllers/blogController.js';
import authMiddleware from '../middleware/authmiddleware.js';

const router = express.Router();

router.get('/', getBlogs);
router.post('/', authMiddleware, createBlog);
router.get('/:id', getBlogById);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

export default router;
