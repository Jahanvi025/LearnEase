import express from "express";
import course from "../../Database/course/course.js";
import {User} from "../../Database/user/user.js";
import notification from "../../Database/Notification/notification.js";
import {adminOnly, auth} from "../../middleware/auth.js";

const router = express.Router();

/*
Route: /course
Des: Fetch all courses
Params: None
 */

router.get("/", async ( req, res ) => {
    try {
        let courses = await course.find().populate('students', 'userName')
        res.status(200).json(courses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
Route: /course/add
Des: Add a new course
Params: None
 */

router.post('/add', auth, async ( req, res ) => {
    try {
        const {title, description, price, category, tags, syllabus} = req.body;

        const user = await User.findById(req.userId);
        if (user.role !== "Admin") {
            return res.status(400).json({message: "User is not authorized to create course"});
        }
        const newCourse = {
            title,
            description,
            price,
            category,
            tags,
            syllabus,
        }
        const courseCreated = await course.create(newCourse);
        res.status(200).json({course: courseCreated});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
Route: /course/:id
Des: Fetch a single course
Params: id
 */

router.get('/:id', async ( req, res ) => {
    try {
        const {id} = req.params;
        const courseFound = await course.findById(id).populate('students', 'userName');
        if (!courseFound) {
            return res.status(404).json({message: "Course not found"});
        }
        res.status(200).json({course: courseFound});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})


/*
Route: /course/:id
Des: Update a course
Params: id
 */

router.put('/:id', auth, async ( req, res ) => {
    try {
        const {id} = req.params;
        const {title, description, price, category, tags, syllabus} = req.body;
        const user = await User.findById(req.userId);
        if (user.role !== "Admin") {
            return res.status(400).json({message: "User is not authorized to update course"});
        }
        const courseFound = await course.findById(id);
        if (!courseFound) {
            return res.status(404).json({message: "Course not found"});
        }
        const updatedCourse = await course.findByIdAndUpdate(id, {
            title,
            description,
            price,
            category,
            tags,
            syllabus
        }, {new: true});
        res.status(200).json({course: updatedCourse});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
Route: /course/:id
Des: Delete a course
Params: id
 */

router.delete('/:id', auth, adminOnly, async ( req, res ) => {
    try {
        const {id} = req.params;
        const courseFound = await course.findByIdAndDelete(id);
        if (!courseFound) {
            return res.status(404).json({message: "Course not found"});
        }
        res.status(200).json({message: "Course deleted successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
Route: /course/:id/enroll
Des: Enroll in a course
Params: id
 */


router.post('/:id/enroll', auth, async ( req, res ) => {
    try {
        const {id} = req.params;
        const user = await User.findById(req.userId);
        if (user.courses.includes(id)) {
            return res.status(400).json({message: "User already enrolled in this course"});
        }
        const courseFound = await course.findById(id);
        if (!courseFound) {
            return res.status(404).json({message: "Course not found"});
        }
        if (!courseFound.students.includes(user._id)) {
            courseFound.students.push(user._id);
            await courseFound.save();
            user.courses.push(courseFound._id);
            await user.save();
        } else {
            return res.status(400).json({message: "User already enrolled in this course"});
        }
        const admin = await User.findOne({role: "Admin"});
        const newNotification = {
            message: `${user.userName} enrolled in ${courseFound.title}`,
            user: admin._id,
        }
        await notification.create(newNotification);
        res.status(200).json({message: "Enrolled successfully", course: courseFound, user: user, notification: newNotification});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
Route /course/search
Des: Search for a course
Params: query
 */


router.get('/search', async ( req, res ) => {
    try {
        const {category, tags} = req.query;
        let courses;
        if (category) {
            courses = await course.find({category: category});
        } else if (tags) {
            courses = await course.find({tags: {$in: tags}});
        } else {
            return res.status(400).json({message: "Invalid Search"});
        }
        res.status(200).json(courses);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

export default router;