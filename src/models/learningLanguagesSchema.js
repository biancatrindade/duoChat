const mongoose = require("mongoose");

const learningLanguagesSchema = mongoose.Schema (
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        language: {
            type: String,
            require: true
        },
        level: {
            type: [String],
            require: true,
            enum: ['elementary', 'intermediate', 'advanced']
        },
        available: {
            type: Boolean,
            require: true
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    },
    { timestamp: true}
);

const Model = mongoose.model("Languages", learningLanguagesSchema); //Availables Languages to Learn

module.exports = Model;