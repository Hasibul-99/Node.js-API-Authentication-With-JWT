const dotenv = require("dotenv");
dotenv.config();

const PORT = parseInt(process.env.PORT) || 7777;
const DATABASE = process.env.DATABASE;



module.exports = {PORT, DATABASE};