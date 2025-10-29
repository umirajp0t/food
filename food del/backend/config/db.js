import mongoose from "mongoose";
export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://umarjavaid:8833092@cluster0.eywfsin.mongodb.net/food-del').then(()=>console.log("DB connected"))
}