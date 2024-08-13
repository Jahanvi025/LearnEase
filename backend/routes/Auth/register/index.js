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
            html: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background: black;
            font-family: sans-serif;
        }
      .head1{
        font-size: medium;
        color: white;
        padding-left: 20px;
      }
       p{
        color: rgb(141, 140, 140);
        font-size: smaller;
      }
    .card{
        text-align: center;
        width: 90%;
        height: auto;
        margin: auto;
    }
    .text1{
        padding: 14px;
        padding-bottom: 0px !important;
    }
    span{
        background-color: rgba(255, 176, 4, 0.468);
        color: white;
    }
    hr{
        margin-top: 0%;
        height: 10px;
        background: linear-gradient(to left, #e16020, #f59840, #f2c00a);
        border: none;
    }
    img{
        width: 34px;
    }
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .title h2{
        color: rgb(58, 58, 58);;
    }
    .first{
        background: rgb(23, 23, 23);
        padding-bottom: 5px;
    }
    .otp{
        color: #e16020;
    }
    .box2{
        padding: 20px;
        background: rgb(23, 23, 23);
    }
    .text2{
       line-height: 3px;
    }
    .plain{
        padding: 20px;
        padding-top: 5px;
    }
    </style>
</head>
<body>
    
    <h2 class="head1">Hi ${userName},</h2>
    <p class="plain">To authenticate, please use the following One Time Password (OTP)</p>
    <div class="card">
    <div class="first">
     <p class="text1"> <span>OTP</span> you requested has been generated</p>
    </div>
     <hr>
     <div class="title">
     <img src="./infinity.png" alt="logo">
     <h2>LearnHub</h2>
    </div>

    <p style="margin-bottom: 40px;">Please use the below <span>OTP</span> to login to our portal.</p>
    <h2 class="otp">${otp}</h2>

    <p style="margin-top: 40px;">This code is valid for the next ten minutes. Please do not share your <span>OTP</span> with anyone.</p>
    <p style="margin-top: 40px;">If you do not make this request, you can safely ignore this email.</p>

    <div class="box2" style="margin-top: 40px;">
        <p class="text2">1800-123-3598</p>
        <p class="text2" style="margin-bottom: 40px;">contact@learnhub.com</p>

        <p>This email has been sent to you because you are subscribed to receive updates from LearnHub.</p>
        <p>Click here to stop receiving these kinds of emails or here to modify your preferences.</p>
    </div>

</div>
</body>`
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
        if (!user && user.otp !== otp && user.otpExpires < Date.now()) {
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