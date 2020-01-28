// Validation
const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(32).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).required(),
        nameUpdatedAt: Joi.date(),
        phoneNumber: Joi.string().min(6).max(14),
        joinDate: Joi.date(),
        location: Joi.object(),
        aboutMe: Joi.string().max(1000),
        active: Joi.boolean(),
        socialMedia: Joi.array(),
        profileImage: Joi.string(),
        coverImages: Joi.array(),
        gender: Joi.string().allow('male', 'femail'),
        birthday: Joi.date(),
        nationality: Joi.string().min(2),
        passwordToken: Joi.string()
    });

    // Let's validate the data before we a user
    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).required()
    });

    // Let's validate the data before we a user
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;