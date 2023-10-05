import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{

    const {username,email,password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUSer = new User({username,email,password:hashedPassword});
    try {
        await newUSer.save()
    res.status(201).json("User creates sucessfully");
    }catch(error){
        res.status(500).json(error.message);
    }
    
};