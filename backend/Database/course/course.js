import mongoose, {Schema} from "mongoose";
const courseSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [String],
    students: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    syllabus: [{
      type: String,
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Course = mongoose.model('Course', courseSchema);
  export default Course;
  