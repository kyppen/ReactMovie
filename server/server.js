import express from "express";
import { MoviesApi } from "./MoviesApi.js";
import bodyParser from "body-parser";
import path from "path";
import {userHandler} from "./userHandler.js"

const app = express();
app.use(bodyParser.json())


app.use("/api/movies", MoviesApi);
app.use("/login", userHandler);

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
    if(req.method == "GET" && !req.path.startsWith("/api")){
        res.sendFile(path.resolve("../client/dist/index.html"))
    }else{
        next()
    }
})



app.listen(process.env.PORT || 3000)