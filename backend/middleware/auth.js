import jwt from "jsonwebtoken";

import {User} from "../Database/user/user.js";

export const auth  = async (req, res, next) =>{
    try{
        let token = req.headers.authorization;
        if(!token){
            return res.status(401).json({message: " Token is not found Unauthorized"})
        }
        token = token.split(" ")[1]
        let decodedData;
        try {
            decodedData = jwt.verify(token, process.env.SECRET_KEY);
        }catch (err) {
            return res.status(401).json({message: "Invalid Token"})
        }
        req.userId = decodedData.id;
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        next();
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
}

export const adminOnly = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (user.role !== "Admin") {
            return res.status(400).json({message: "Access denied. Only Admin can access this route"});
        }
        next();
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
}
