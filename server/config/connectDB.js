import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.MONGODB_URL) {
    throw new Error('Please provide MONGODB_URL in the .env file')
}

async function connectDB(params) {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected");

    } catch (error) {
        console.log('MongoDB Connection Error', error);
        process.exit(1)
    }
}

export default connectDB;