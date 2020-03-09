var express = require('express');
var router = express.Router();
var modelProduit = require('../controllers/modelProduit.controller');

/* GET users listing. */
router.get('/', modelProduit.findAll);

router.put('/', modelProduit.create);

router.delete('/:modelProduitId', modelProduit.delete);

module.exports = router;