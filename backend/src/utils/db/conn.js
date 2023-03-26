const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_CONN_URL, { dbName: "web3-init" })
  .then(() => {
    console.log("Connected to DB.");
  })
  .catch((err) => {
    console.log("Couldn't connect to DB.");
  });
