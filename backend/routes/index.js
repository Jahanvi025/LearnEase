import express from "express";
const router = express.Router();
import auth from "./Auth/index.js";
import course from "./course/index.js";
import sendSms from "./sendSms.js";
import content from "./content/index.js";
import user from "./user/index.js";

router.use('/auth' , auth);
router.use('/course' , course);
router.use('/sendSms' , sendSms);
router.use('/content' , content);
router.use('/user' , user);
export default router;