const express = require('express')
const router  =  express.Router()
const sendMail = require('../sendmail/Sendmail')
const contactController = require('../controller/contact.Controller')


router.post('/Addcontact',contactController.Addcontact );
router.get("/allContact", contactController.allContact);
router.post("/search",sendMail.findContact);
router.post("/reply/:id",sendMail.replyContact);
router.post("/singlecontact/:id",sendMail.singleContact)

module.exports = router