const mongoose = require("mongoose");
const dbConnection="mongodb+srv://nir:N!r123456***@cluster0.s1gso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
