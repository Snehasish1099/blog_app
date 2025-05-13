import express from 'express';
import { register, login, getProfile } from '../controllers/authController.js';
// import authMiddleware from '../middleware/authmiddleware.js';

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
// router.get("/users/:id", authMiddleware, getProfile);

export default router
