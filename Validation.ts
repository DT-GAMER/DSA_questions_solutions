import mongoose from 'mongoose';


export function handleValidationErrors(error: mongoose.Error.ValidationError) {
    if (error.errors) {
        // max length error
        if (error.errors.firstName && error.errors.firstName.kind === 'maxlength') {
            console.error('Maximum length error:', error.errors.firstName.message);
        }
        // unique email
        if (error.errors.email && error.errors.email.kind === 'unique') {
            console.error('Email uniqueness error:', error.errors.email.message);
        }
    }
}
