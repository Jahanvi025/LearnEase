import express from "express";
import notification from "../../Database/Notification/notification.js";

const router = express.Router();

/*
Route: /notification
Des: Fetch all notifications which is unread
Params: None
 */

router.get('/', async ( req, res ) => {
    try {
        let notifications = await notification.find({read: false});
        res.status(200).json(notifications);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
Route: /notification/:id
Des: Mark a notification as read
Params: id
 */

router.put('/:id', async ( req, res ) => {
    try {
        let notificationId = req.params.id;
        let notificationData = await notification.findByIdAndUpdate(notificationId, {read: true}, {new: true});
        res.status(200).json(notificationData);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})