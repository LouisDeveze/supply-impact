var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin.controller');

/* GET users listing. */
router.get('/', admin.findAll);

router.put('/', admin.create);

module.exports = router;