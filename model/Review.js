const mongoose = require('mongoose');
const {CreatedAtSchemas, CreatedBySchemas} = require('./common.schema');


const ReviewSchema = new mongoose.Schema([CreatedAtSchemas, CreatedBySchemas, {
    comment: {
        type: String,
        required: true
    },
    tourId: {
        type: String,
        required: true
    },
    userId: {
        type: String
    },
    point: {
        type: Number
    }
}])

module.exports = mongoose.model("Review", ReviewSchema);