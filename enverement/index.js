const dotenv = require("dotenv");
dotenv.config();

const PORT = parseInt(process.env.PORT) || 7777;
const DATABASE = process.env.DATABASE;
const TOKEN_SECRET = process.env.TOKEN_SECRET;



module.exports = {PORT, DATABASE, TOKEN_SECRET};