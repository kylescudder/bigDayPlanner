const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const db = require('./db')
const guestRouter = require('./routes/guests')
const userRouter = require('./routes/users')

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/wedding/api', guestRouter)
app.use("/wedding/api/users", userRouter);
