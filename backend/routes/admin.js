var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin.controller');

/* GET users listing. */
router.get('/', admin.findAll);

router.put('/', admin.create);

router.delete('/:adminId', admin.delete);

router.post('/all', admin.updateAll);

module.exports = router;