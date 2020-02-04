const router = require("express").Router();

const Comment = require("../../model/Comment");

router.post("/add-comment", async (req, res) => {
    const comment = new Comment(req.body);

    try {
        const saveComment = await comment.save();
        res.send(saveComment);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;