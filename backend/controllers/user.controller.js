const User = require('../models/user.model.js');

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.compagny_name_fillial) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'compagny_name_fillial can not be empty'
    });
  }
  if (!req.body.email) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'email can not be empty'
    });
  }
  if (!req.body.password) {
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
  if (!req.body.siret) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'siret can not be empty'
    });
  }
  if (!req.body.compagny_type) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'compagny_type can not be empty'
    });
  }

  if (!req.body.location) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'location can not be empty'
    });
  }else{
    if (!req.body.location.country) {
      // If firstName is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location.country can not be empty'
      });
    }
    if (!req.body.location.region) {
      // If firstName is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location.region can not be empty'
      });
    }
    if (!req.body.location.town) {
      // If firstName is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location.town can not be empty'
      });
    }
    if (!req.body.location.zipCode) {
      // If firstName is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location.zipCode can not be empty'
      });
    }
    if (!req.body.location.adress) {
      // If firstName is not present in body reject the request by
      // sending the appropriate http code
      return res.status(400).send({
        message: 'location.adress can not be empty'
      });
    }
  }



  // Create a new User
  var user = new User({
    compagny_name_fillial: req.body.compagny_name_fillial,
    email : req.body.email,
    password : req.body.password,
    phone : req.body.phone,
    siret : req.body.siret,
    compagny_type : req.body.compagny_type,
    location : req.body.location,
    });

  if(req.body.compagny_fillial){
    user.compagny_fillial = req.body.compagny_fillial;
  }

  // Save User in the database
  user
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


// Find a single User with a email
exports.findOne = (req, res) => {

  //If id is pass in request
  if(req.body){
    var diffParams = {};

    if(req.body.email){
      diffParams.email = req.body.email;
      console.log("Email : " + diffParams.email);
    }else{
      return res.status(404).send({
        message: 'No email in the body for User findOne'
      });
    }

    //on ne demande pas le password
    User.find(diffParams, {password : 0})
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with thoses : ' + diffParams
        });
      }
      
      res.send(user[0]);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with thoses params ' +diffParams
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with thoses params' + diffParams
      });
    });
  }
  else{
    return res.status(404).send({
      message: 'No params in request'
    });
  }
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {

  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      res.send({ message: 'User deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + req.params.userId
      });
    });
};


exports.updateAll = (req, res) => {
  if(!req.body.id){
    return res.status(400).send({
      message: 'id can not be empty'
    });
  }

  if(!req.body.compagny_name_fillial){
    return res.status(400).send({
      message: 'compagny_name_fillial can not be empty'
    });
  }

  if(!req.body.compagny_fillial){
    return res.status(400).send({
      message: 'compagny_fillial can not be empty'
    });
  }

  if(!req.body.email){
    return res.status(400).send({
      message: 'email can not be empty'
    });
  }

  if(!req.body.password){
    return res.status(400).send({
      message: 'password can not be empty'
    });
  }

  if(!req.body.phone){
    return res.status(400).send({
      message: 'phone can not be empty'
    });
  }

  if(!req.body.siret){
    return res.status(400).send({
      message: 'siret can not be empty'
    });
  }

  if(!req.body.compagny_type){
    return res.status(400).send({
      message: 'compagny_type can not be empty'
    });
  }

  if(!req.body.location){
    return res.status(400).send({
      message: 'location can not be empty'
    });
  }

  User.updateOne({ _id: req.body.id }, 
    { $set: {                    
      compagny_name_fillial: req.body.compagny_name_fillial,
      compagny_fillial: req.body.compagny_fillial,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      siret: req.body.siret,
      compagny_type: req.body.compagny_type,
      location: req.body.location
      } 
    })
  .then(result => {
    if (!result) {
      return res.status(404).send({
        message: 'User not found with id : ' + req.body.id
      });
    }
    res.send({ message: result });
  })
  .catch(err => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'User not found with id ' + req.body.id
      });
    }
    return res.status(500).send({
      message: 'User not update with id ' + req.body.id + ' and error : ' + err.message
    });
  });
}