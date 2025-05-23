import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();
const salt:number=10;  


const JWT_SECRET: string | undefined = process.env.JWT_SECRET;  
if(!JWT_SECRET) {
    console.log("Please provide a jwt secret");
    process.exit(1);
}


export const createToken = (id:string,email:string ): string => {
    return jwt.sign({id,email},JWT_SECRET);
}

export const verifyToken = (token:string): any => {
    return jwt.verify(token,JWT_SECRET);
}

export const hashPassword = (password:string): string => {
    return bcrypt.hashSync(password,salt);
}

export const comparePassword = (password:string,hashedPassword:string): boolean => {
    return bcrypt.compareSync(password,hashedPassword);
}

export const validateEmail = (email:string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

