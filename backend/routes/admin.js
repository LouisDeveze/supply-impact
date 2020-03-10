var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin.controller');

/* GET users listing. */
router.get('/', admin.findAll);

router.get('/email', admin.findOne);

router.put('/', admin.create);

// POST user by id
router.post("/:adminId", admin.update);

// DELETE user by id
router.delete("/:userId", admin.delete);

module.exports = router;