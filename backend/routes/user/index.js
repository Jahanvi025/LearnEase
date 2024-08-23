import {User} from '../../Database/user/user.js'
import express from "express";
import {auth} from "../../middleware/auth.js";

const router = express.Router();

/*
    * Route: /user
    * @description Get user data based on token
    * @access Private
 */

router.get('/', auth, async ( req, res ) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json({user: user})
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
})


/*
    * Route: /user/:id
    * @description Get user data
    * @access Public
 */

router.get('/:id', async ( req, res ) => {
    const {id} = req.params;
    try {
        const getUser = await User.findById(id);
        if (!getUser) {
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json({user: getUser})
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
});
export default router;