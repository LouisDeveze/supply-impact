var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', user.findAll);

router.get('/email', user.findOne);

router.delete('/:userId', user.delete);

router.put('/', user.create);

module.exports = router;
