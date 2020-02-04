const router = require("express").Router();

const Booking = require("../../model/Booking");


router.post("/add-booking", async (req, res) => {
    const booking = new Booking(req.body);

    try {
        const saveBooking = await booking.save();
        res.send(saveBooking);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;