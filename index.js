const express = require("express");
const mongoose = require('mongoose');

const {PORT, DATABASE} =  require("./enverement/index");

const app = express();

// Database connest
mongoose.connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database ...'))
    .catch(e => console.error(e));

// Import router
const authRouter = require('./routes/auth/auth');
const userRoute = require('./routes/user/user');
const tourRoute = require('./routes/tour/tour');
// MIddleware
app.use(express.json());

// Router Middleware
app.use('/api/auth', authRouter);
app.use('/api/user', userRoute);
app.use('/api/tour', tourRoute);

app.listen(PORT, () => console.log(`server up and runing on port ${PORT}`));