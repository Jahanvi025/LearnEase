import mongoose from "mongoose";
const assignmentSchema = new Schema({
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    submissions: [{
      student: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      fileUrl: {
        type: String,
      },
      grade: {
        type: Number,
      },
      submittedAt: {
        type: Date,
        default: Date.now,
      },
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Assignment = mongoose.model('Assignment', assignmentSchema);
  module.exports = Assignment;
  