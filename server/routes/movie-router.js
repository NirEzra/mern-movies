const moviesRouter = require("express").Router();
const movieModel = require("../models/movie-model");
const Movie = require("../models/movie-model");
const movieCtrl = require('../controllers/movie-ctrl');


moviesRouter.get("/all",movieCtrl.getAllMovies);
moviesRouter.get('/movie/:id',movieCtrl.getMovie);
moviesRouter.post("/saveMovie",movieCtrl.insertMovie);
moviesRouter.delete('/movie/:id',movieCtrl.removeMovieById)

moviesRouter.get("/find/:movieName", (req, res) => {
    let movieNameParam = req.params.movieName
    Movie.find({movieName:{"$regex":movieNameParam, "$options": "i"}},(err, moviesObj) => {
      if (err) {
        throw err;
      }
      console.log("result:", JSON.stringify(moviesObj));
      res.status(200).json({ success: true, data: moviesObj });
    });
  });

  moviesRouter.get("/find/:movieName", (req, res) => {
    let movieNameParam = req.params.movieName
    Movie.find({movieName:{"$regex":movieNameParam, "$options": "i"}},(err, moviesObj) => {
      if (err) {
        throw err;
      }
      console.log("result:", JSON.stringify(moviesObj));
      res.status(200).json({ success: true, data: moviesObj });
    });
  });




moviesRouter.put('/movie/:id',(req,res)=>{
  
  movieModel.findByIdAndUpdate(req.params.id, req.params.movie, (err, doc)=>{
if (err) throw err;
res.status(300).json({success: true, data:doc, message:"movie update success"})
  })
})

module.exports = moviesRouter;

