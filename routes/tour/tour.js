const router = require("express").Router();

const Tour = require('../../model/Tour');
const {tourValidation} = require('../../validation/Tour');

router.post("/tour", async (req, res) => {

    // Validate the data before tour create 
    const {error} = tourValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const tour = new Tour({
        title: req.body.title,
        category: req.body.category,
        location: req.body.location,
        images : req.body.images,
        description: req.body.description,
        phoneNumber: req.body.phoneNumber,
        website: req.body.website,
        email: req.body.email,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        amenities: req.body.amenities,
        pricing: req.body.pricing,

        createdBy: req.body.createdBy,
        tourId: "AAAAAAA",
    });

    try {
        const saveTour = await tour.save();
        res.send(saveTour);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;