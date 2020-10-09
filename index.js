// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("../server/config/keys.js");
require("./models/user");
require("./services/passport");
const authRoutes = require("./routes/authroutes");

// Connect to mongoose
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true });

// Create express app
const app = express();

// Make use of cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
