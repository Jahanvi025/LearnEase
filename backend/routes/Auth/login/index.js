import express from "express";
import {User} from "../../../Database/user/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

/*
Route: /login
Des: Login with email and password
Params: None
*/
router.post('/' ,async (req, res) => {
  const {email, password} = req.body;
  try {
      const existingUser = await User.findOne({email: email});
      if (!existingUser) {
          return res.status(400).json({message: "User does not exist"});
      }
      if (!existingUser.verified) {
          return res.status(400).json({message: "User not verified"});
      }

      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordCorrect) {
          return res.status(400).json({message: "Invalid credentials"});
      }

      const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.SECRET_KEY);
      // res.cookie('token', token, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.status(200).json({user: existingUser, token: token});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
  })

/**
 * Route: /admin/login
 * Des: Login with email and password only for admin
 * Params: None
 */

router.post('/admin' , async (req, res) => {
    const {email, password}  =req.body;
    try{
        const existingUser = await User.findOne({email: email});
        if (!existingUser) {
            return res.status(400).json({message: "User does not exist"});
        }
        if(existingUser.role !== 'Admin'){
            return res.status(400).json({message: "Only admin can login here"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.SECRET_KEY);
        res.status(200).json({user: existingUser, token: token});
    }catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

router.get('/', async (req, res) => {
    res.send('Hello from login');
})

export default router;