const router = require("express").Router();
const verity = require("../auth/verifyToken");

router.get('/', verity, (req, res) => {
    // res.json({users: [{name: "Tushar"}]})
    res.send(req.user);
})

router.get('/all-user', verity, (req, res) => {
    res.json({users: [{name: "Tushar"}]})
    // res.send(req.user);
})




module.exports = router;