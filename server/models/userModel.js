// Importing mongoose library
const mongoose = require('mongoose')

// Creating a new mongoose schema for the User model
const userSchema = new mongoose.Schema({
    // Full name of the user
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    // Unique username for the user
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    // Unique email for user (will be used for logging in)
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // Password for user (should be hashed before saving)
    password: {
        type: String,
        required: true
    },
    // Role of the user, default role is 'user'
    role: {
        type: String, default: 'user'
    },
    // Gender of the user, default is 'male'
    gender: {
        type: String, default: 'male'
    },
    // Array of saved users' ObjectId, related to 'user' schema
    saved: [{
        type: mongoose.Types.ObjectId, ref: 'user'
    }]
}, {
    // Automatic creation of createdAt and updatedAt fields by mongoose
    timestamps: true
})


// Export the mongoose user model using the schema
module.exports = mongoose.model('user', userSchema)