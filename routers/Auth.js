const express = require('express')
const router  =  express.Router()
const sendMail = require('../sendmail/Sendmail')

const AuthController = require('../controller/AuthController')


router.post('/contact',AuthController.contact);
router.get("/all", AuthController.allAccess);
router.post("/send",sendMail)

module.exports = router