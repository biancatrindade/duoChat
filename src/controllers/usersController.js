const UsersModel = require("../models/usersSchema");
const LanguagesModel = require("../models/learningLanguagesSchema");
const CountriesModel = require("../models/languagesCountriesSchema");
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const findAllUsers = async (req, res) => {
    const authHeader = req.get(`Authorization`);
    const token = authHeader?.split(" ")[1] ?? ("Not authorized");
    console.log(`My header:`, token);

    if(!token) {
        return res.status(401); // STATUS CODE 401: Unauthorized
    };

    const err = jwt.verify(token, SECRET, function(error){
        if(error) return error
    });

    if (err) return res.status(401).send(`Not authorized`) // STATUS CODE 401: Unauthorized

    try {
        const allUsers = await UsersModel.find().populate("learningLanguage", "language").populate("countryLanguage"); 

        console.log('passou por aqui')

    } catch (error) {
        res.status(500).json({ message: error.message}); // STATUS CODE 500: Internal Server Error
    };
};

const findUserById = async (req, res) => {
    try {
        const findUser = await UsersModel.findById(req.params.id).populate("learningLanguage", "language").populate("countryLanguage");
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
        const findUsername = await UsersModel.findOne(req.params.username).populate("learningLanguage", "language").populate("countryLanguage");
        if (findUsername == null) {
            res.status(404).json({ message: "User not found" }); // STATUS CODE 404: Not Found
        }
        res.status(200).json(findUsername); // STATUS CODE 200: OK
        console.log(findUsername)
    } catch (error) {
        res.status(500).json({ message: error.message }); // STATUS CODE 500: Internal Server Error
    };
};

const addNewUser = async (req, res) => {
    const passwordWithHash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = passwordWithHash; 
    
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
            .status(400) // STATUS CODE 400: Bad Request
            .json({ message: "Required: Enter the Country id."});
        };

        const findCountry = await CountriesModel.findById(countryId);

        if(!findCountry) {
            return res.status(404).json({ message: "Country not found" }); // STATUS CODE 404: Not Found
        };

        if(!languageId) {
            return res
            .status(400) // STATUS CODE 400: Bad Request
            .json({ message: "Required: Enter the Language id."});
        };
        
        const findLanguage = await LanguagesModel.findById(languageId);

        if(!findLanguage){
            return res.status(404).json({ message: "Language not found" }); // STATUS CODE 404: Not Found
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
        .status(201) // STATUS CODE 201: Created
        .json({ message: "New user added successfully!", savedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message }); // STATUS CODE 500: Internal Server Error
    };
}; 

const login = (req, res) => {
    UsersModel.findOne({ email: req.body.email }, function(error, user) {
        if(!user){
            return res.status(404).send(`Email not found: ${req.body.email}`); // STATUS CODE 404: Not Found
        }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);

    if(!validPassword) {
        return res.status(403).send(`Wrong password`) // STATUS CODE 403: Forbidden
    }
    
    const token = jwt.sign({ email: req.body.email }, SECRET);
        return res.status(200).send(token) // STATUS CODE 200: OK
    });
}

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
            res.status(404).json({ message: "User not found "}); // STATUS CODE 404: Not Found
        };

        if (countryId) {
            const findCountry = await CountriesModel.findById(countryId);

            if (findCountry == null) {
                return res.status(404).json({ message: "Country not found" }); // STATUS CODE 404: Not Found
            };
        };

        if(languageId) {
            const findLanguage = await LanguagesModel.findById(languageId);
            
            if (findLanguage == null) {
                return res.status(404).json({ message: "Language not found" }); // STATUS CODE 404: Not Found
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
        res.status(200).json({ message: "User successfully updated!", savedUser }); // STATUS CODE 200: OK

    } catch (error) {
        res.status(500).json({ message: error.message }); // STATUS CODE 500: Internal Server Error
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
    addNewUser,
    login,
    updateUser,
    deleteUser
};