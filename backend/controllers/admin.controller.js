const Admin = require('../models/admin.model.js');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  Admin.find()
    .then(admin => {
      res.send(admin);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving admin.'
      });
    });
};

// Create and Save a new Admin
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'userName can not be empty'
    });
  }
  if (!req.body.password) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'password can not be empty'
    });
  }
  if (!req.body.email_contact) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'email can not be empty'
    });
  }
  if (!req.body.phone) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'phone can not be empty'
    });
  }

  var admin = new Admin({
    username: req.body.username,
    password : req.body.password,
    email_contact : req.body.email_contact,
    phone : req.body.phone
    });

  // Save Admin in the database
  admin
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly admin integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new admin in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Admin.'
      });
    });
};

// Find a single Admin with an email
exports.findOne = (req, res) => {

  //If id is pass in request
  if(req.body){
    var diffParams = {};

    if(req.body.email_contact){
      diffParams.email_contact = req.body.email_contact;
      console.log("Email : " + diffParams.email_contact);
    }else{
      return res.status(404).send({
        message: 'No email in the body for Admin findOne'
      });
    }

    //on ne demande pas le password
    Admin.find(diffParams, {password : 0})
    .then(admin => {
      if (!admin) {
        return res.status(404).send({
          message: 'Admin not found with thoses : ' + diffParams
        });
      }
      
      res.send(admin[0]);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Admin not found with thoses params ' +diffParams
        });
      }
      return res.status(500).send({
        message: 'Error retrieving admin with thoses params' + diffParams
      });
    });
  }
  else{
    return res.status(404).send({
      message: 'No params in request'
    });
  }
};


exports.delete = (req, res) => {

  Admin.findByIdAndRemove(req.params.adminId)
    .then(admin => {
      if (!admin) {
        return res.status(404).send({
          message: 'Admin not found with id ' + req.params.adminId
        });
      }
      res.send({ message: 'Admin deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Admin not found with id ' + req.params.adminId
        });
      }
      return res.status(500).send({
        message: 'Admin not delete user with id ' + req.params.adminId
      });
    });
};

exports.updateAll = (req, res) => {

  if(!req.body.id){
    return res.status(400).send({
      message: 'id can not be empty'
    });
  }

  if(!req.body.phone){
    return res.status(400).send({
      message: 'phone can not be empty'
    });
  }

  if(!req.body.email_contact){
    return res.status(400).send({
      message: 'email_contact can not be empty'
    });
  }

  if(!req.body.password){
    return res.status(400).send({
      message: 'password can not be empty'
    });
  }

  if(!req.body.username){
    return res.status(400).send({
      message: 'username can not be empty'
    });
  }

  Admin.updateOne({ _id: req.body.id }, 
    { $set: {                    
       phone: req.body.phone,
       email_contact: req.body.email_contact,
       password: req.body.password,
       username: req.body.username
      } 
    })
  .then(result => {
    if (!result) {
      return res.status(404).send({
        message: 'Admin not found with id : ' + req.body.id
      });
    }
    res.send({ message: result });
  })
  .catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'Admin not found with id ' + req.body.id
      });
    }
    return res.status(500).send({
      message: 'Admin not update with id ' + req.body.id + ' and error : ' + err.message
    });
  });

}

