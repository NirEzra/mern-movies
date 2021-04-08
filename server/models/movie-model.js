const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
        movieName: String,
        rating: Number,
        genre: String,
  }
);
module.exports= mongoose.model('movies',Movie) 