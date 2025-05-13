import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

const port = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    } catch (err) {
        console.error("MONGO DB connection failed!!!", err);
        process.exit(1);
    }
};

startServer();
