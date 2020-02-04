const mongoose = require('mongoose');
const {CreatedAtSchemas, CreatedBySchemas} = require('./common.schema');


const CommentSchema = new mongoose.Schema([CreatedAtSchemas, CreatedBySchemas, {
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
    updateAt: {
        type: Date,
    },
    replyComments: {
        type: [String]
    }
}])

module.exports = mongoose.model("Comment", CommentSchema);