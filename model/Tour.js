const mongoose = require('mongoose');
const {CreatedAtSchemas, CreatedBySchemas} = require('./common.schema');

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

const PricingSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

const tourSchema = new mongoose.Schema([CreatedAtSchemas, CreatedBySchemas, {
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        require: true
    },
    location: locationSchema,
    images : {
        type: [String]
    },
    description: {
        type: String,
        max: 32
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    email: {
        type: String
    },
    tourId: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    amenities: {
        type: [String] // amenities collection ids
    },
    pricing: PricingSchema
}]);

module.exports = mongoose.model("Tour", tourSchema);