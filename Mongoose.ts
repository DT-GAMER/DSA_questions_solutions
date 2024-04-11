import mongoose from 'mongoose';
import { handleValidationErrors } from './validation';

// Define your schema

// Apply custom error handling middleware
UserSchema.post('validate', function(error: mongoose.Error.ValidationError, doc: mongoose.Document, next: mongoose.HookNextFunction) {
    handleValidationErrors(error);
    next(); // Call next middleware
});

// Define IUserModel

export const UserModel = mongoose.model<IUserModel>('User', UserSchema);
￼Enter
