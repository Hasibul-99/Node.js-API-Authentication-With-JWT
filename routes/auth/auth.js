const router = require("express").Router();
const User = require("../../model/User");
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require("../../validation/User");

router.post("/register", async (req, res) => {

    // Validate the data before user create 
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let email = req.body.email.toLowerCase();
    // check the user is already exists
    const isEmailExist = await User.findOne({email: email});
    if (isEmailExist) return res.status(400).send("Email already exists");

    // Hash passwords
    const salt = await bcrypt.genSalt(15);
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    
    const user = new User({
        name: req.body.name,
        email: email,
        password: hashPassword
    });

    try {
        const saveUser = await user.save();

        res.send(saveUser);
    } catch (err) {
        res.status(400).send(err)
    }
});


// Login

router.post("/login", async(req, res) => {
    // Validate the data before user create 
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let email = req.body.email.toLowerCase();
    // check the user is already exists
    const user = await User.findOne({email: email});
    if (!user) return res.status(400).send("Email or password is worng");

    // Password is correct
    const valiPass = await bcrypt.compare(req.body.password, user.password);
    if (!valiPass) return res.status(400).send('Invalid password');

    res.send(user);
});




module.exports = router;