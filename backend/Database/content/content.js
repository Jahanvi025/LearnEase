
import mongoose, {Schema} from "mongoose";
const contentSchema = new Schema({
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      enum: ['text', 'image', 'video', 'pdf'],
      required: true,
    },
    contentUrl: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Content = mongoose.model('Content', contentSchema);
  export default Content;
  