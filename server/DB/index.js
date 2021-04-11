const mongoose = require("mongoose");
const DBConnectionString=process.env.DB;
mongoose.connect(DBConnectionString, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

  })

  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
