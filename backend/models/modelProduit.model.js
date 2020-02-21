const mongoose = require('mongoose');

var contratInputSchema = new mongoose.Schema(
    {
        contrat : {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        },
        produit : {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        }
    }
);

var processSchema = new mongoose.Schema(
    {
        processType : {
            type : String,
            required : true,
            enum : ['transport', 'stockage', 'transformation', 'production']
        },
        components : [mongoose.Schema.Types.Mixed]
    }
);

var relationsSchema = new mongoose.Schema(
    {
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
        }
    }
);

const modelProduitSchema = new mongoose.Schema(
  {
    contratInput : [contratInputSchema],
    
    process : [processSchema],

    relations : [relationsSchema]

  }
);

module.exports = mongoose.model('ModelProduit', modelProduitSchema);
