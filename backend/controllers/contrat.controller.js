const Contrat = require('../models/contrat.model.js');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  Contrat.find()
    .then(contrat => {
      res.send(contrat);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving contrat.'
      });
    });
};

// Create and Save a new Contrat
exports.create = (req, res) => {
  if (!req.body.contrat) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'contrat can not be empty'
    });
  }
  if (!req.body.produitIn) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'produitIn can not be empty'
    });
  }
  if (!req.body.produitOut) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'produitOut can not be empty'
    });
  }
  if (!req.body.dateContrat) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'dateContrat can not be empty'
    });
  }
  if (!req.body.relation) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'phone can not be empty'
    });
  }

  var contrat = new Contrat({
    contrat: req.body.contrat,
    produitIn : req.body.produitIn,
    produitOut : req.body.produitOut,
    dateContrat : req.body.dateContrat,
    dataContrat : req.body.dataContrat,
    relation : req.body.relation,
    });

    if(req.body.processes){
        contrat.processes = req.body.processes;
    }

  // Save User in the database
  contrat
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      });
    });
};

exports.delete = (req, res) => {

  Contrat.findByIdAndRemove(req.params.idContrat)
    .then(contrat => {
      if (!contrat) {
        return res.status(404).send({
          message: 'Contrat not found with id ' + req.params.idContrat
        });
      }
      res.send({ message: 'Contrat deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Contrat not found with id ' + req.params.idContrat
        });
      }
      return res.status(500).send({
        message: 'Could not delete Contrat with id ' + req.params.idContrat
      });
    });
};
