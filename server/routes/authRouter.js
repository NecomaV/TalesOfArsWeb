// Importing Express Router
const router = require('express').Router()

// Importing the Authentication Controller
const authCtrl = require('../controllers/authCtrl')

// Route for registering new users, handled by the register function in the Auth controller
router.post('/register', authCtrl.register)

// Route for user login, handled by the login function in the Auth controller
router.post('/login', authCtrl.login)

// Route for user logout, handled by the logout function in the Auth controller
router.post('/logout', authCtrl.logout)

// Route for generating a new access token, handled by the generateAccessToken function in the Auth controller
router.post('/refresh_token', authCtrl.generateAccessToken)

// Export the router to be used in other parts of the backend
module.exports = router