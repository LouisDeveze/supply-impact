var express = require('express');
var router = express.Router();
var contrat = require('../controllers/contrat.controller');

/* GET users listing. */
router.get('/', contrat.findAll);

router.put('/', contrat.create);

router.delete('/:idContrat', contrat.delete);

router.post('/all', contrat.updateAll);


module.exports = router;