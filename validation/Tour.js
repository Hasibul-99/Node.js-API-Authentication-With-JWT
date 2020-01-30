const Joi = require("@hapi/joi");

const tourValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(6).max(100).required(),
        category: Joi.string().min(6).max(100).required(),
        location: Joi.object(),
        images : Joi.array(),
        description: Joi.string().min(0).max(1000),
        phoneNumber: Joi.string().min(6).max(14),
        website: Joi.string(),
        email: Joi.string().min(6).max(255).required().email(),
        tourId: Joi.string(),
        startDate: Joi.date(),
        endDate: Joi.date(),
        amenities: Joi.array(),
        pricing: Joi.object()
    });

    // Let's validate the data before we use
    return schema.validate(data);
}

module.exports.tourValidation = tourValidation;