const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser')


dotenv.config();

// set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json())

app.use(
  cors({
    origin: [
      "http://localhost:3000", "https://covid-19-app.onrender.com", "https://clever-platypus-4ebbba.netlify.app"],
    credentials: true,
  })
);

// connect to mongoDB

mongoose.connect(
  process.env.MDB_CON,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

// set up routes

app.use("/auth", require("./routers/userRouter"));
app.use("/updates", require("./routers/updatesRouter"));
app.use("/feedback", require("./routers/feedbackRouter"));
app.use("/donation", require("./routers/donationRouter"));
app.use("/userauth", require("./routers/userVarifyRouter"));
