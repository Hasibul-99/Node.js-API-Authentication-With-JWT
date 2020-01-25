const jwt = require("jsonwebtoken");
const {TOKEN_SECRET} = require("../../enverement/index");

module.exports = function(req, res, next) {
    
    const token = req.header('auth-token');

    if (!token) return res.status(401).send('Access Denied');

    try {
        const verifird  = jwt.verify(token, TOKEN_SECRET);
        req.user = verifird;

        next();
    } catch(err) {
        res.ststus(400).send('Invalid Token');
    }
}