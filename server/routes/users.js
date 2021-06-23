const express = require('express')
const UserCtrl = require('../controllers/users')
const auth = require("../middleware/auth");

const router = express.Router()

router.post('/register', UserCtrl.registerUser)
router.post('/login', UserCtrl.loginUser)
router.delete('/delete', auth, UserCtrl.deleteUser)
router.post('/tokenIsValid', UserCtrl.tokenIsValidUser)
router.get('/', auth, UserCtrl.getUserInfo)

module.exports = router;