import mongoose, {Schema} from "mongoose";

const paymentSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      required: true,
    },
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);
  module.exports = Payment;
  