const mongoose = require('mongoose');
const ModelProduit = require('./modelProduit.model.js');

const produitSchema = new mongoose.Schema(
  {
    name : {
        type : String,
        required : true
    },
    idUserCreator : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    numeroVersion : {
        type : Number,
        required : true
    },
    dateCreation : {
        type : Date,
        required : true
    },
    dateDerniereVersion : {
        type : Date,
        required : true
    },
    status : {
        type : Number,
        required : true
    }, 
    modelProduction : {
        type : ModelProduit,
        required : true
    },
    modelEdit : {
        type : ModelProduit,
        required : false
    }
  }
);

module.exports = mongoose.model('Produit', produitSchema);
