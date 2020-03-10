const ModelProduit = require('../models/modelProduit.model.js');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  ModelProduit.find()
    .then(modelProduit => {
      res.send(modelProduit);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving modelProduit.'
      });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.contratInput) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'contractInput can not be empty'
    });
  }
  if (!req.body.process) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'process can not be empty'
    });
  }
  if (!req.body.relations) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'relations can not be empty'
    });
  }

  var modelProduit = new ModelProduit({
    contractInput: req.body.contractInput,
    process : req.body.process,
    relations : req.body.relations,
    });

  // Save User in the database
  modelProduit
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the modelProduit.'
      });
    });
};

exports.delete = (req, res) => {

  ModelProduit.findByIdAndRemove(req.params.modelProduitId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'modelProduit not found with id ' + req.params.modelProduitId
        });
      }
      res.send({ message: 'modelPRoduit deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.modelProduitId
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params.modelProduitId
      });
    });
};
