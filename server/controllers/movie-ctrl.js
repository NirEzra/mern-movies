
const movieModel = require('../models/movie-model');

    async function getAllMovies(req,res){
    
        await movieModel.find((err,results)=>{
            if(err) throw err;
            console.log("result:", JSON.stringify(results));
            res.status(200).json({success: true, data: results});
        });
    }  
    async function getMovie(req,res){
        let movieId = req.params.id;
        await movieModel.findById(movieId,(err,movieItem)=>{
            if(err) throw err;
            console.log("result:", JSON.stringify(movieItem));
            res.status(200).json({success: true, data: movieItem});
        });
    }
    async function removeMovieById(req,res){
        let movieId = req.params.id;
        await movieModel.findByIdAndRemove(movieId,(err,doc)=>{
            if(err) throw err;
            
            res.status(201).json({success: true, data:doc, message:"movie delete success"})
                });
    }
    async function insertMovie(req,res){
        let newMovie = req.body.movie;
        await movieModel.insertMany(newMovie,(err,results)=>{
            if(err) throw err;
            
            res.status(201).json({success: true, data: results});
        });
    }
   

module.exports = {getAllMovies,getMovie,removeMovieById,insertMovie};