const router = require("express").Router();

const Blog = require("../../model/Blog");

router.post("/add-blog", async (req, res) => {
    const blog = new Blog(req.body);

    console.log(req.headers)
    
    try {
        const saveBlog = await blog.save();
        res.send(saveBlog);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;