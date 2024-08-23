import dotenv from 'dotenv';
import twilio from 'twilio';
import express from "express";

dotenv.config();
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client =  twilio(accountSid, authToken);

router.post('/',async (req,res) =>{
    try{
        const {message, number} = req.body;
        const response = await client.messages.create({
            body: message,
            from: +14439633154,
            to: number
        })
        res.status(200).json({response});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

export default router;