const UsersModel = require("../models/usersSchema");
const LanguagesModel = require("../models/learningLanguagesSchema");
const CountriesModel = require("../models/languagesCountriesSchema");

const findAllUsers = async (req, res) => {
    try {
        const allUsers = await UsersModel.find().populate("countries"); // Aqui não preciso usar o populate do "languages" também??
        res.status(200).json(allUsers); // STATUS CODE 200: OK
    } catch (error) {
        res.status(500).json({ message: error.message}); // STATUS CODE 500: Internal Server Error
    };
};

const findUserById = async (req, res) => {
    try {
        const findUser = await UsersModel.findById(req.params.id).populate("countries");
        if (findUser == null) {
            res.status(404).json({ message: "User not available" }); // STATUS CODE 404: Not Found
        }
        res.status(200).json(findUser); // STATUS CODE 200: OK
    } catch (error) {
        res.status(500).json({ message: error.message }); // STATUS CODE 500: Internal Server Error
    };
};

const findUserByUsername = async (req, res) => {
    try {
        const findUsername = await UsersModel.find(req.params.username).populate("countries");
        if (findUsername == null) {
            res.status(404).json({ message: "User not found" }); // STATUS CODE 404: Not Found
        }
        res.status(200).json(findUsername); // STATUS CODE 200: OK
    } catch (error) {
        res.status(500).json({ message: error.message }); // STATUS CODE 500: Internal Server Error
    };
};

const findUserByLevel = qualquercoisa; // esse vai ser treta 

const addNewUser = async (req, res) => {
    try {
        const {
            name,
            surname,
            username,
            birthDate,
            email,
            password,
            countryId,
            languageId,
        } = req.body;

        if (!countryId) {
            return res
            .status(400)
            .json({ message: "Required: Enter the Country id."});
        };

        const findCountry = await CountriesModel.findById(countryId);

        if(!findCountry) {
            return res.status(404).json({ message: "Country not found" });
        };

        if(!languageId) {
            return res
            .status(400)
            .json({ message: "Required: Enter the Language id."});
        };
        
        const findLanguage = await LanguagesModel.findById(countryId);

        if(!findLanguage){
            return res.status(404).json({ message: "Language not found" });
        };

        const newUser = new UsersModel({
            name,
            surname,
            username,
            birthDate,
            email,
            password,
            countryLanguage: countryId,
            learningLanguage: languageId
        });
        const savedUser = await newUser.save();
        res
        .status(200)
        .json({ message: "New user added successfully!", savedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
}; 

const updateUser = async (req, res) => {
    try {
        const { id } = req.params; 
        const {
            name,
            surname,
            username,
            birthDate,
            email,
            password, 
            countryId,
            languageId
        } = req.body;
        
        const findUser = await UsersModel.findById(id);
        if (findUser == null) {
            res.status(404).json({ message: "User not found "});
        };

        if (countryId) {
            const findCountry = await CountriesModel.findById(countryId);

            if (countryId == null) {
                res.status(404).json({ message: "Country not found" });
            };
        };

        findUser.name = name || findUser.name;
        findUser.surname = surname || findUser.surname;
        findUser.username = username || findUser.username;
        findUser.birthDate = birthDate || findUser.birthDate;
        findUser.email = email || findUser.email;
        findUser.password = password || findUser.password;
        findUser.countryLanguage = countryId || findUser.countryLanguage;
        findUser.learningLanguage = languageId || findUser.learningLanguage;

        const savedUser = await findUser.save();
        res.status(200).json({ message: "User successfully updated!", savedUser });

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const findUsers = await UsersModel.findById(id);
        
        if (findUsers == null) {
            return res.status(404).json({ message: `User with id ${id} not found` }); // STATUS CODE 404: Not Found
        };
        await findUsers.remove();
        res.status(200).json({ message: `User with id ${id} was successfully deleted`}); // STATUS CODE 200: OK
    } catch (error) {
        res.status(500).json({ message: error.message }); // STATUS CODE 500: Internal Server Error
    };
};




module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByLevel,
    addNewUser,
    updateUser,
    deleteUser
};