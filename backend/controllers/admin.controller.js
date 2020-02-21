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

    if(req.body.email){
      diffParams.email = req.body.email;
      console.log("Email : " + diffParams.email);
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
      
      res.send(user[0]);
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

/*

// Update an Admin identified by the AdminId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.adminId) {
    return res.status(400).send({
      message: 'adminId can not be empty'
    });
  }

  admin.findById(req.body.userId).lean()
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.body.userId
        });
      }else{
        const userReceived = req.body;
        const newUser = Object.assign({}, user, userReceived);
        delete newUser.userId;
        newUser.personsInHouse = Number(newUser.personsInHouse);
        
        // Find user and update it with the request body
        User.findByIdAndUpdate(
          req.body.userId,
          {$set: {
            location: newUser.location,
            personsInHouse: newUser.personsInHouse,
            houseSize: newUser.houseSize
          }},
          { new: true }
        )
          .then(userMod => {
            if (!userMod) {
              return res.status(404).send({
                message: 'User not found with id ' + req.body.userId
              });
            }
            res.send(userMod);
          })
          .catch(err => {
            if (err.kind === 'ObjectId') {
              return res.status(404).send({
                message: 'User not found with id ' + req.body.userId
              });
            }
            return res.status(500).send({
              message: 'Error updating user with id ' + req.body.userId
            });
          });
      }
        
  })
};

*/