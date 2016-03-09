// Dependencies

var express = require('express');
var router = express.Router();

//Models
var Contact = require('../models/contact');

//Routes
Contact.methods(['get', 'put', 'post','delete']);
Contact.register(router, '/contacts');

//return Router
module.exports = router;