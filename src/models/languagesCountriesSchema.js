const mongoose = require("mongoose");

const languageCountriesSchema = mongoose.Schema (
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        country: {
            type: String,
            require: true,
            unique: true
        },
        language: {
            type: [String],
            require: true
        }, //aqui não foi referenciado ao schema Learning Language porque pode ser que um idioma falado no país não esteja disponível para aprendizado
        createdAt: {
            type: Date,
            default: new Date ()
        }
    },  
    { timestamp: true}
);

const Model = mongoose.model("Countries", languageCountriesSchema); //Countries Languages

module.exports = Model;
