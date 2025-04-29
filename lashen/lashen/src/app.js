const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const routes = require("./routes");
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const { errorHandler } = require("./middleware/error-handler");
const { localeMiddleware } = require("./middleware/locale")
const { limiter } = require("./middleware/express-rate-limiter")
const path = require('path');


connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(limiter)

app.use(localeMiddleware);
app.use("/api", routes)
app.use(errorHandler);

module.exports = app;