const LanguagesModel = require("../models/learningLanguagesSchema");

const findAllLanguages = async (req, res) => {
    try {
        const allLanguages = await LanguagesModel.find();
        res.status(200).json(allLanguages);

    } catch (error) {
        res.status(500).json({ message: error.message })
    };
};

const findLanguageById = async (req, res) => {
    try {
        const findLanguage = await LanguagesModel.findById(req.params.id);
        if (findLanguage == null) {
            res.status(404).json({ message: "Language not available" });
        }
        res.status(200).json(findLanguage);

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const findLanguageByLevel = async (req, res) => {
    try {
        const findLevel = await LanguagesModel.find(req.params.level);
        if(findLevel == null) {
            res.status(404).json({ message: "No language could be found at this level" });
        }
        res.status(200).json(findLevel);

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const addNewLanguage = async (req, res) => {
    try {
        const {
            language,
            level,
            available
        } = req.body;

        const newLanguage = new LanguagesModel({
            language,
            level,
            available
        });
        const savedLanguage = await newLanguage.save();
        res
        .status(200)
        .json({ message: "New language added successfully!", savedLanguage });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            language,
            level,
            available
        } = req.body;

        const findLanguage = await LanguagesModel.findById(id);
        if (findLanguage == null) {
            res.status(404).json({ message: "Language not found" });
        };

        findLanguage.language = language || findLanguage.language;
        findLanguage.level = level || findLanguage.level;
        findLanguage.available = available || findLanguage.available;

        const savedLanguage = await findLanguage.save();
        res.status(200).json({ message: "Language successfully updated!", savedLanguage });

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const findLanguages = await LanguagesModel.findById(id);

        if (findLanguages == null){
            res.status(404).json({ message: "Language not found" });
        };
        await findLanguages.remove();
        res.status(200).json({ message: `Language with id ${id} successfully deleted!` });

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

module.exports = {
    findAllLanguages,
    findLanguageById,
    findLanguageByLevel,
    addNewLanguage,
    updateLanguage,
    deleteLanguage
}