const mongoose = require('mongoose');
const {CreatedAtSchemas, CreatedBySchemas} = require('./common.schema');


const BookingSchema = new mongoose.Schema([CreatedAtSchemas, CreatedBySchemas, {
    tourId: {
        type: String,
        required: true
    },
    bookingToken: {
        type: String
    },
    description: {
        type: String
    },
    totalTickets: {
        type: Number
    },
    status: {
        type: String
    },
    paymentStatus: {
        type: String
    },
    paymentDate: {
        type: Date
    },
}])

module.exports = mongoose.model("Booking", BookingSchema);