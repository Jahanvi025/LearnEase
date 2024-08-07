import express from "express";
const router = express.Router();
import register from "./register/index.js";
import login from "./login/index.js";


router.use("/register", register);
router.use("/login", login);

export default router;
