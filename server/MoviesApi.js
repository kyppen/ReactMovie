
import express from "express";
import {movieArr, addMovie, getAllMovies} from "./DataStore.js";

export const MoviesApi = express.Router();
MoviesApi.get("", (req, res) => {
    //console.log(movieArr)
    res.json(movieArr)
})

MoviesApi.post("", (req, res) => {
    console.log("Wihtin here")
    const {title} = req.body;
    addMovie(title)
    console.log(movieArr);

    res.sendStatus(200);
})


