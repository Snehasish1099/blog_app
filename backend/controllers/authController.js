import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { username, email, phone_number, password } = req.body

        if (!email && !phone_number) {
            return res.status(400).json({ message: "Email or phone number is required", status: 400 })
        }

        const userExists = await User.findOne({
            $or: [{ email }, { phone_number }],
        })

        if (userExists) {
            return res.status(400).json({ message: 'User already exists', status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({ username, email, phone_number, password: hashedPassword })

        res.status(201).json({ message: 'User registered successfully', status: 201, data: newUser })

    } catch (error) {
        res.status(500).json({ message: 'Server error', error, status: 500 })
    }
};

export const login = async (req, res) => {
    try {
        const { email, phone_number, password } = req.body

        const user = await User.findOne({
            $or: [{ email }, { phone_number }],
        })

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: 404 })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials', status: 400 })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.status(200).json({ token, data: { id: user._id, username: user.username, email: user.email, phone_number: user.phone_number }, status: 200, message: "Login Successful" })

    } catch (error) {
        res.status(500).json({ message: 'Server error', error, status: 500 })
    }
};

export async function getProfile(req, res) {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" })
        }

        res.status(200).json({ status: 200, data: user, message: "User Found" })
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    }
}
