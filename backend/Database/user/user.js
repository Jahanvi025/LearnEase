import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Student'],
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.model('User', userSchema);