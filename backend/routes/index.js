import express from "express";
const router = express.Router();
import auth from "./Auth/index.js";

router.use('/auth' , auth);

export default router;