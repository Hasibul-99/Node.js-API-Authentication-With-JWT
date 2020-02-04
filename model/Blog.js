const mongoose = require('mongoose');
const {CreatedAtSchemas, CreatedBySchemas} = require('./common.schema');


const BlogSchema = new mongoose.Schema([CreatedAtSchemas, CreatedBySchemas, {
    blogContent: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    comments: {
        type: [String]
    }
}])

module.exports = mongoose.model("Blog", BlogSchema);