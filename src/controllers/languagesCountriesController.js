const CountriesModel = require("../models/languagesCountriesSchema");

const findAllCountries = async (req, res) => {
    try {
        const allCountries = await CountriesModel.find()
        res.status(200).json(allCountries);

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const findCountryById = async (req, res) => {
    try {
        const findCountry = await CountriesModel.findById(req.params.id);
        if (findCountry == null) {
            res.status(404).json({ message: "Country not available" });
        }
        res.status(200).json(findCountry);

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const findCountryByLanguage = async (req, res) => {
    try {
        const findLanguage = await CountriesModel.find(req.params.language);
        if (findLanguage == null) {
            res.status(404).json({ message: "Language not found" });
        }
        res.status(200).json(findLanguage);

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const addNewCountry = async (req, res) => {
    try {
        const {
            country,
            language
        } = req.body;

        const newCountry = new CountriesModel({
            country,
            language
        });
        const savedCountry = await newCountry.save();
        res
        .status(200)
        .json({ message: "New country added successfully!", savedCountry });
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const updateCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            country,
            language
        } = req.body;

        const findCountry = await CountriesModel.findById(id);
        if (findCountry == null) {
            res.status(404).json({ message: "Country not found" });
        };

        findCountry.country = country || findCountry.country;
        findCountry.language = language || findCountry.language;

        const savedCountry = await findCountry.save();
        res.status(200).json({ message: "Country successfully updated!", savedCountry });

    } catch (error) {
        res.status(500).json({ message: error.message });        
    };
};

const deleteCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const findCountries = await CountriesModel.findById(id);

        if (findCountries == null) {
            return res.status(404).json({ message: "Country not found" });
        };
        await findCountries.remove();
        res.status(200).json({ message: `Country with id ${id} was successfully deleted` });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

module.exports = {
    findAllCountries,
    findCountryById,
    findCountryByLanguage,
    addNewCountry,
    updateCountry,
    deleteCountry
}