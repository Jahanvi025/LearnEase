import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../../../Database/user/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let user = await User.find();
    res.status(200).json(user);
})

/*
Route: /register
Des: Register a new user
Params: None
 */

router.post('/', async (req, res) => {
    const {userName, email, password, role} = req.body;
    try {
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
        userName,
        email,
        password: hashPassword,
        role
    })
        await user.save();

    const token =jwt.sign({email: user.email, id: user._id}, process.env.SECRET_KEY);
    res.cookie('token', token, {httpOnly: true, maxAge: 24*60*60*1000});
    res.status(200).json({user: user, token: token});
    }catch (err){
    console.log(err)
        res.status(500).json({message: "Something went wrong"});
    }
})

export default router;