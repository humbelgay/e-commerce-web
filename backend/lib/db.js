import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const coon = await mongoose.connect(process.env.MONGO_URI)
        console.log (`mongoDB connected : ${coon.connection.host}`)
        
    } catch (error) {
        console.log('error connecting with mongos', error.message)
        process.exit[1]
    }
}