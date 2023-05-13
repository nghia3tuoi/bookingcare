const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const connectDB = require("./config/connectDB");
const route = require("./routes/index");
//
connectDB();
//cors
app.use(cors());
// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//
const PORT = process.env.PORT || 6969;
//
route(app);
app.listen(PORT, () => {
  console.log(`listen on runing http://localhost:${PORT}`);
});
