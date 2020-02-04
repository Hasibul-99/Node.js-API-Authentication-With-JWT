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
const bookingRoute = require('./routes/booking/booking');
const reviewRoute = require('./routes/review/review');
const commentRoute = require('./routes/comment/index');
const blogRoute = require('./routes/blog/index');
// MIddleware
app.use(express.json());

// Router Middleware
app.use('/api/auth', authRouter);
app.use('/api/user', userRoute);
app.use('/api/tour', tourRoute);
app.use('/api/booking', bookingRoute);
app.use('/api/review', reviewRoute);
app.use('/api/comment', commentRoute);
app.use('/api/blog', blogRoute);

app.listen(PORT, () => console.log(`server up and runing on port ${PORT}`));