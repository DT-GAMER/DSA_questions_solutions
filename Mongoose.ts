import mongoose from 'mongoose';
import { handleValidationErrors } from './validation';

// Define your schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        maxLength: [15, 'First name should be less than 15 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'User with email already exists']
    }
});

// Apply custom error handling middleware
UserSchema.post('validate', function(error: mongoose.Error.ValidationError, doc: mongoose.Document, next: mongoose.HookNextFunction) {
    handleValidationErrors(error);
    next(); // Call next middleware
});

// Create and export the model
interface IUserModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
}

export const UserModel = mongoose.model<IUserModel>('User', UserSchema);
￼Enter
