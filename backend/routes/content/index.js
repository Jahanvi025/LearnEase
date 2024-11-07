import express from "express";
import multer from "multer";
import bucket from "../../config/firebase.js";
import content from "../../Database/content/content.js";
import course from "../../Database/course/course.js";
import path from "path";
import {auth,adminOnly} from "../../middleware/auth.js";


const router = express.Router();
const upload = multer({
    storage:multer.memoryStorage()
})

/*
    * @route GET /content
    * @desc Get all content
    * @access Public
 */

router.get('/', async (req, res) => {
    try {
        const data = await content.find();
        res.json(data);
    } catch (error) {
        res.json({message: error});
    }
})


/*
    * @route POST /content
    * @desc Add content
    * @access Public
 */

router.post('/:courseId/upload',auth,adminOnly,upload.single('video'), async (req, res) => {
    try{
        if (!req.file){
            return res.status(400).json({message: "Please upload a file"});
        }
        const {courseId} = req.params;
        const {title, description} = req.body;

        const courseFound = await course.findById(courseId);
        if (!courseFound){
            return res.status(400).json({message: "Course not found"});
        }

        const originalName = path.parse(req.file.originalname).name;
        const extension = path.extname(req.file.originalname);
        const date = new Date().toISOString().replace(/:/g, '-');
        const fileName = `${originalName}-${date}${extension}`;
        const folderName = courseFound.title.replace(/\s+/g, '-').toLowerCase();
        const filePath = `${folderName}/${fileName}`;

        const blob = bucket.file(filePath);
        const blobWriter = blob.createWriteStream({
            resumable: false,
            contentType: req.file.mimetype
        });
        blobWriter.on('error' ,(err) => {
            res.status(500).send(err.message);
        })
        blobWriter.on('finish', async () => {
            const encodedFilePath = encodeURIComponent(blob.name)
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedFilePath}?alt=media`;
            const newContent = new content({
                course: courseId,
                title,
                description,
                contentType: req.file.mimetype.split('/')[0],
                contentUrl: publicUrl
            })
            await newContent.save();

            await course.findByIdAndUpdate(courseId, {$push: {content: newContent._id}})

            res.status(201).json(newContent);
        })
        blobWriter.end(req.file.buffer);

    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})


/*
@route: GET /content/:courseId/contents
@desc: Get all content of a course
@access: Public
 */

router.get('/:courseId/contents',async (req, res) => {
    try{
        const {courseId} = req.params;
        const data = await content.find({course: courseId});
        res.json(data);
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
    @route: GET /content/:courseId/:contentId
    @desc: Get a content of a course
    @access: Public
 */

router.get('/:courseId/:contentId',async (req, res) => {
    try {
        const {courseId, contentId} = req.params;
        const data = await content.findOne({_id: contentId, course: courseId});
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
});

/*
    @route: DELETE /content/:courseId/:contentId
    @desc: Delete a content of a course
    @access: Public
 */

router.delete('/:courseId/:contentId',auth,adminOnly,async (req, res) => {
   try{
       const {courseId, contentId} = req.params;
         const hasContent = await content.findById(contentId);
            if (!hasContent){
                return res.status(400).json({message: "Content not found"});
            }

            if (hasContent.course.toString() !== courseId){
                return res.status(401).json({message: "Unauthorized"});
            }
       const fileName = hasContent.contentUrl.split('/').pop();
       console.log('Attempting to delete file:', fileName);

       const blob = bucket.file(fileName);
       try {
           await blob.delete();
           console.log('File deleted successfully from Firebase Storage');
       } catch (error) {
           if (error.code === 404) {
               console.log('File not found in Firebase Storage, proceeding with deletion in MongoDB.');
           } else {
               throw error;  // Re-throw other errors
           }
       }

            await content.findByIdAndDelete(contentId);
            res.status(200).json({message: "Content deleted successfully"});

   }catch (err){
         console.log(err);
         res.status(500).json({message: "Something went wrong"});
   }
});

export default router;