const validateRegistration = (req, res, next) => {
  const { name, email, age, address, password } = req.body;
  if (!name || !email || !age || !address || !password) {
      res.status(400).send({ "error": "Fill all the fields of registration form." });
  } else {
    next()
  }
};

module.exports = validateRegistration