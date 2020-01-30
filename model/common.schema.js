const mongoose = require('mongoose');

const CreatedAtSchemas = new mongoose.Schema({
    createdAt: {
        type: Date,
        optional: true,
        default: Date.now
    }
});

const CreatedBySchemas = new mongoose.Schema({
    createdBy: {
        type: String,
        required: true
    }
});

module.exports = {CreatedBySchemas, CreatedAtSchemas}