const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    compagny_name_fillial: {
      type: String,
      required: true
    },
    campagny_fillial: {
      type: String,
      required: false
    },
    email : {
      type: String,
      required: true
    },
    password : {
      type: String,
      required: true
    },
    phone : {
      type: String,
      required: true
    },
    siret : {
      type: String,
      required: true
    },
    compagny_type : {
      type: String,
      required: true
    },
    location : {
      country : {
        type: String,
        required: true
      },
      region : {
        type: String,
        required: true
      },
      town : {
        type: String,
        required: true
      },
      zipCode : {
        type: String,
        required: true
      },
      adress : {
        type: String,
        required: true
      },
      adressBis : {
        type: String,
        required: false
      }
    }
  }
);

module.exports = mongoose.model('User', userSchema);
