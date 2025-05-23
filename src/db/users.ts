import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

},{
    timestamps: true
}); 

export const User = mongoose.model('User', userSchema);
export const getUsers = async() => User.find();  
export const getUserById = async(id:string) => User.findById(id);
export const getUserByEmail  = async(email:string ) => User.findOne({email});
export const createUser = async(name:string, email:string, password:string) => User.create({name, email, password});
