const express = require('express')
const GuestCtrl = require('../controllers/guests')
const auth = require("../middleware/auth");

const router = express.Router()

router.post('/guest', auth, GuestCtrl.createGuest)
router.put('/guest/:id', auth, GuestCtrl.updateGuest)
router.delete('/guest/:id', auth, GuestCtrl.deleteGuest)
router.get('/guest/:id', auth, GuestCtrl.getGuestById)
router.get('/guest', auth, GuestCtrl.getGuests)

module.exports = router