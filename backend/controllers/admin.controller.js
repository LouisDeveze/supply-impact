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

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'compagny_name_fillial can not be empty'
    });
  }
  if (!req.body.password) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'email can not be empty'
    });
  }
  if (!req.body.email_contact) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'password can not be empty'
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

  // Save User in the database
  admin
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