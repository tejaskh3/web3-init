const express = require("express");
require("dotenv/config");
require("./utils/db/conn");
const login = require("./routes/login.route");
const register = require("./routes/register.route");

const app = express();
app.use(express.json());

app.use("/login", login);
app.use("/register", register);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}.`);
});
