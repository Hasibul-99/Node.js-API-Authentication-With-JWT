const router = require("express").Router();

const Review = require("../../model/Review");

router.post("/add-review", async (req, res) => {
    const review = new Review(req.body);

    try {
        const saveReview = await review.save();
        res.send(saveReview);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;