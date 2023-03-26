const { Router } = require("express");
const User = require("../utils/db/models/userData.model");
const validateRegistration = require("../middlewares/register.middleware");
const router = Router();

router.get("/", (req, res) => {
  // render the register page here.
  console.log("This is the login page.");
  res.status(200).send({ message: "This is the register page." });
});

router.post("/", validateRegistration, (req, res) => {
  const newUser = new User(req.body);
  User.create(newUser)
    .then(() => {
      console.log("User Created successfully.");
      res.status(201).send(req.body);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({"error": "could not create user."})
    });
});

module.exports = router;
