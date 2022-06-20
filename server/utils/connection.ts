import mongoose from "mongoose";
import 'dotenv/config'

export const connection = async () => {
    try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}`)
    console.log("Database Connection Established")
    } catch (error) {
    throw new Error(error)
    }
}