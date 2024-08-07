import express from "express";
import crypto from 'crypto';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../../../Database/user/user.js";
import {transporter} from "../../../config/otpGeneration/transporter.js";

const router = express.Router();

//Generating OTP
const generaterOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
}

router.get("/", async ( req, res ) => {
    let user = await User.find();
    res.status(200).json(user);
})

/*
Route: /register
Des: Register a new user
Params: None
 */

router.post('/', async ( req, res ) => {
    const {userName, email, password, role} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const otp = generaterOTP();
        const otpExpires = Date.now() + 10 * 60 * 1000;
        const user = new User({
            userName,
            email,
            password: hashPassword,
            role,
            otp,
            otpExpires

        })
        await user.save();

        const mailOption = {
            from: process.env.EMAIL,
            to: email,
            subject: "OTP for account verification",
            html: `<p> Enter <b>${otp}</b> in the app to verify your email address and complete the signUp </p>`
        }
        await transporter.sendMail(mailOption);

        res.status(200).json({user: user, message: "OTP Sent Successfully"});
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
Route: /register/verify
Des: Verify OTP
Params: None
 */

router.post('/verify', async ( req, res ) => {
    const {email, otp} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({message: "Invalid OTP or Expired Otp"});
        }
        user.verified = true;
        user.otp = null;
        user.otpExpires = null;
        await user.save();
        const token = jwt.sign({email: user.email, id: user._id}, process.env.SECRET_KEY);
        res.cookie('token', token, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.status(200).json({token: token, message: "User Verified Successfully"});
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Something went wrong"});
    }
})


/*
Route: /register/resend
Des: Resend OTP
Params: None
 */

router.post('/resend', async (req,res) => {
    const{email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User does not exist"});
        }
        if(user.verified){
            return res.status(400).json({message: "User already verified"});
        }
        const otp = generaterOTP();
        const otpExpires = Date.now() + 10 * 60 * 1000;

        user.otp = otp;
        user.otpExpires = otpExpires;
        await user.save();

        const mailOption = {
            from: process.env.EMAIL,
            to: email,
            subject: "OTP for account verification",
            html: `<p> Enter <b>${otp}</b> in the app to verify your email address and complete the signUp </p>`
        }
        await transporter.sendMail(mailOption);
        res.status(200).json({ message: 'OTP resent to your email' });
    }catch (err){
        console.log(err)
        res.status(500).json({message: "Something went wrong"});
    }
})

export default router;