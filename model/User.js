const mongoose = require('mongoose');
const {CreatedAtSchemas} = require('./common.schema');

const locationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    placeId: {
        type: String
    },
    city: {
        type: String
    },
    cityPlaceId: {
        type: String,
        optional: true
    },
    lat: {
        type: Number,
        decimal: true
    },
    lng: {
        type: Number,
        decimal: true
    },
    country: {
        type: String
    },
    streetNumber: {
        type: String,
        optional: true
    },
    sublocality: {
        type: String,
        optional: true
    },
    countryShortName: {
        type: String
    }
});

const socialMedialSchema = new mongoose.Schema({
    type: {
        type: String,
        optional: true
    },
    link: {
        type: String
    }
})

const userSchema = new mongoose.Schema([CreatedAtSchemas, {
    name: {
        type: String,
        required: true,
        min: 6,
        max: 32
    },
    nameUpdatedAt: {
        type: Date
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    location: locationSchema,
    aboutMe: {
        type: String,
        optional: true,
        max: 1000
    },
    active: {
        type: Boolean,
        optional: true
    },
    socialMedia: [socialMedialSchema],
    profileImage: {
        type: String,
        optional: true
    },
    coverImages: {
        type: [String],
        optional: true
    },
    gender: {
        type: String,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true,
    },
    nationality: {
        type: String,
        optional: true
    },
    passwordToken: {
        type: String,
        optional: true
    }
}]);

module.exports = mongoose.model("User", userSchema);