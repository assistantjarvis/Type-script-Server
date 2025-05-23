import { getUserByEmail,createUser } from "../db/users";
import { Request, Response } from "express";
import {hashPassword,validateEmail,createToken,comparePassword} from "../helpers/index"

export const register = async (req:Request, res:Response):Promise<void> => {
    const {name,email,password} = req.body;
    if(!name || !email || !password) {
        res.status(400).json({message:"Please provide all the fields"});
        return 
    }
    if(!validateEmail(email)) {
        res.status(400).json({message:"Please provide a valid email"});
        return
    }
    const user = await getUserByEmail(email); 
    if(user) {
        res.status(400).json({message:"User already exists"});
        return
    }
    const hashedPassword = await  hashPassword(password);
    await createUser(name,email,hashedPassword);
    res.status(201).json({message:"User created successfully"});
    return 
}

export const login = async (req:Request, res:Response):Promise<void> => {
    const {email,password} = req.body;
    if(!email || !password) {
        res.status(400).json({message:"Please provide all the fields"});
        return
    }
    if(!validateEmail(email)) {
        res.status(400).json({message:"Please provide a valid email"});
    }
    const user = await getUserByEmail(email);
    if(!user) {
        res.status(400).json({message:"User does not exist"});
        return
    }
    if(!(await comparePassword(password, user.password)))  {
        res.status(400).json({message:"Invalid credentials"});
        return
    }
    const id = user._id.toString();
    const token = createToken(id,user.email);
    res.cookie("token",token,{httpOnly:true});
    res.status(200).json({message:"Login successful", user});
    return 
}

