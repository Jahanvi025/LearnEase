import express from "express";
const router = express.Router();
import auth from "./Auth/index.js";
import course from "./course/index.js";

router.use('/auth' , auth);
router.use('/course' , course);

export default router;