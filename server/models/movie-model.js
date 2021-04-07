const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
        movieName: { type: String, required: true },
        rating: { type: Number, required: true },
        genre: { type: String, required: true },
  },
  { timeStamp: true }
);
module.exports= mongoose.model('movies',Movie) 