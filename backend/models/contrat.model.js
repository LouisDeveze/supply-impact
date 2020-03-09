const mongoose = require('mongoose');

var processesSchema = new mongoose.Schema(
    {
        categorie : {
            type : String,
            enum : ['transport', 'stockage', 'transformation', 'production'],
            required : true
        },
        components : {
            type : [mongoose.Schema.Types.Mixed],
            required : true
        }
    }
);

const contratSchema = new mongoose.Schema(
  {
    //Nom du contrat
    contrat: {
      type: String,
      required: true
    },
    produitIn: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    produitOut: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    dateContrat: {
        type: String,
        required: true
    },
    dataContrat: {
        type: [mongoose.Schema.Types.Mixed],
        required: false
      },
    processes : [processesSchema],
    relation : {
        type1 : {
            type : String,
            enum : ['transport', 'stockage', 'transformation', 'production'],
            required: true
        },
        id1 : {
            type : mongoose.Schema.Types.ObjectId,
            required: true
        },
        type2 : {
            type : String,
            required: true
        },
        id2 : {
            type : mongoose.Schema.Types.ObjectId,
            enum : ['transport', 'stockage', 'transformation', 'production'],
            required: true
        },
    }
  }
);

module.exports = mongoose.model('Contrat', contratSchema);
