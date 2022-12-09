const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        birthDate: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },

        countryLanguage: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Countries"
        },

        learningLanguage: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"Languages"
        }
    },
    { timestamp: true }
);

const Model = mongoose.model("User", userSchema);

module.exports = Model; 