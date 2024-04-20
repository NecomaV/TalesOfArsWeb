// Importing required modules
const Users = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Defining the authentication related functions
const authCtrl = {
    // Register new user function
    register: async (req, res) => {
        try {
            // Extracting user details from request
            const { fullname, username, email, password, gender } = req.body

            // Formatting username
            let newUserName = username.toLowerCase().replace(/ /g, '')

            // Check if the username already exists
            const user_name = await Users.findOne({username: newUserName})
            if(user_name) return res.status(400).json({msg: "This user name already exists."})

            // Check if the email already exists
            const user_email = await Users.findOne({email})
            if(user_email) return res.status(400).json({msg: "This email already exists."})

            // Check password length
            if(password.length < 6)
                return res.status(400).json({msg: "Password must be at least 6 characters."})

            // Hashing the password
            const passwordHash = await bcrypt.hash(password, 12)

            // Create a new user to save to the database
            const newUser = new Users({
                fullname, username: newUserName, email, password: passwordHash, gender
            })

            // Create Access Token and Refresh Token for the user
            const access_token = createAccessToken({id: newUser._id})
            const refresh_token = createRefreshToken({id: newUser._id})

            // Set cookie for refresh token
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*24*60*60*1000 // 30days
            })

            // Save the user to the database
            await newUser.save()

            // Return successful registration message and user details along with the token
            res.json({
                msg: 'Register Success!',
                access_token,
                user: {
                    ...newUser._doc,
                    password: '' // Remove password before returning user
                }
            })
        } catch (err) {
            // Return relevant error message in case of error
            return res.status(500).json({msg: err.message})
        }
    },

    // Login User function
    login: async (req, res) => {
        try {
            // Extracting email and password from request
            const { email, password } = req.body

            // Logging login attempt
            console.log('Received login request with email:', email);

            // Check if user with provided email exists
            const user = await Users.findOne({email})
            .populate("username fullname")

            // If user doesn't exist, return error
            if(!user) {
                console.log('User with email', email, 'not found.');
                return res.status(400).json({msg: "This email does not exist."})
            } 

            // Check if password is match
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                console.log('Incorrect password for user with email', email);
                return res.status(400).json({msg: "Password is incorrect."})
            } 

            // If user is valid and password matches, create Access and Refresh tokens
            const access_token = createAccessToken({id: user._id})
            const refresh_token = createRefreshToken({id: user._id})

            // Set cookie for refresh token
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30*24*60*60*1000 // 30days
            })

            // Return Login success message, tokens and user details
            res.json({
                msg: 'Login Success!',
                access_token,
                user: {
                    ...user._doc,
                    password: '' // Remove password before returning user
                }
            })
        } catch (err) {
            // Log error and return relevant error message
            console.error('Error during login:', err);
            return res.status(500).json({msg: err.message})
        }
    },

    // Logout User function
    logout: async (req, res) => {
        try {
            // Deletes cookies to log the user out
            res.clearCookie('refreshtoken', {path: '/api/refresh_token'})
            return res.json({msg: "Logged out!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // Generate New Access Token function
    generateAccessToken: async (req, res) => {
        try {
            // Get the refresh token from cookies
            const rf_token = req.cookies.refreshtoken
            
            // If refresh token does not exist, ask user to login
            if(!rf_token) return res.status(400).json({msg: "Please login now."})

            // If refresh token exists, validate it
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async(err, result) => {
                // If token is invalid, ask user to login
                if(err) return res.status(400).json({msg: "Please login now."})

                // If valid, find the corresponding user
                const user = await Users.findById(result.id).select("-password")
                .populate('username fullname')
                
                // If user with the id from the refresh token does not exist, ask to login
                if(!user) return res.status(400).json({msg: "This does not exist."})

                // If user exists, generate a new access token
                const access_token = createAccessToken({id: result.id})

                // Return access token and user information
                res.json({
                    access_token,
                    user
                })
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

// Function that generates access token
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

// Function that generates refresh token
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'})
}

// Exporting the authentication controller to be used in other parts of the backend
module.exports = authCtrl