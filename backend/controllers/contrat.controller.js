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

// Find every contract made by a user
exports.findOne = (req, res) => {

  //If id is pass in request
  if(req.body){
    var diffParamsID1 = {};
    var diffParamsID2 = {};

    if(req.body.userID){
      //diffParamsID1.relation = {}
      diffParamsID1.produitIn = req.body.userID;
      diffParamsID2.produitOut = req.body.userID;
      console.log("ID1 : " + diffParamsID1.produitIn);
      console.log("ID2 : " + diffParamsID1.produitOut);
    }else{
      return res.status(404).send({
        message: 'No IdUser in the body for contrat findOne'
      });
    }

    //on ne demande pas le password
    Contrat.find({$or : [diffParamsID1, diffParamsID2] }, {password : 0}) //on cherche pour le id1 AND id2
    .then(contrat => {
      if (!contrat) {
        return res.status(404).send({
          message: 'Contrat not found with thoses : ' + diffParams
        });
      }
      
      res.send(contrat);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Contrat not found with thoses params ' +diffParams
        });
      }
      return res.status(500).send({
        message: 'Error retrieving contrat with thoses params' + diffParams
      });
    });
  }
  else{
    return res.status(404).send({
      message: 'No params in request'
    });
  }
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

exports.updateAll = (req, res) => {
  if(!req.body.id){
    return res.status(400).send({
      message: 'id can not be empty'
    });
  }

  if(!req.body.contrat){
    return res.status(400).send({
      message: 'contrat can not be empty'
    });
  }

  if(!req.body.produitIn){
    return res.status(400).send({
      message: 'produitIn can not be empty'
    });
  }

  if(!req.body.produitOut){
    return res.status(400).send({
      message: 'produitOut can not be empty'
    });
  }

  if(!req.body.dateContrat){
    return res.status(400).send({
      message: 'dateContrat can not be empty'
    });
  }

  if(!req.body.dataContrat){
    return res.status(400).send({
      message: 'dataContrat can not be empty'
    });
  }

  if(!req.body.processes){
    return res.status(400).send({
      message: 'processes can not be empty'
    });
  }

  if(!req.body.relation){
    return res.status(400).send({
      message: 'relation can not be empty'
    });
  }

  Contrat.updateOne({ _id: req.body.id }, 
    { $set: {                    
      contrat: req.body.contrat,
      produitIn: req.body.produitIn,
      produitOut: req.body.produitOut,
      dateContrat: req.body.dateContrat,
      dataContrat: req.body.dataContrat,
      processes: req.body.processes,
      relation: req.body.relation
      } 
    })
  .then(result => {
    if (!result) {
      return res.status(404).send({
        message: 'Contrat not found with id : ' + req.body.id
      });
    }
    res.send({ message: result });
  })
  .catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'Contrat not found with id ' + req.body.id
      });
    }
    return res.status(500).send({
      message: 'Contrat not update with id ' + req.body.id + ' and error : ' + err.message
    });
  });
}
