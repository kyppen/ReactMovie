import { Link, Route, Routes,useNavigate, } from "react-router-dom";
import React, { useEffect, useState } from "react";


function FrontPage(){
    return (
        <ul>
            <li>
                <Link to={"/movies"}>List movies</Link>
            </li>
            <li>
                <Link to={"/movies/new"}>Add new movie</Link>
            </li>
        </ul>
    )
}

function Login(){
    const [inputs, setInputs] = useState({});


        const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        console.log("handleSumbit activated")
        event.preventDefault();
            const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        console.log(result)
        console.log("Here we can get the username and password")
        console.log("1: need to check if the user exists to make sure they are allowed access")
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter username:
                <input 
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                />
            </label>
            <label>
                Enter Password:
                <input 
                type="text"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                />
            </label>
            <input type="submit"></input>
        </form>
    )
}

async function fetchMovies(){
    const res = await fetch("/api/movies")
    const placeholder = await res.json()
    console.log(placeholder)
    return placeholder
}


function AddNewMovie(){
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    const  handleSubmit = (e) => {
        console.log(title)
        e.preventDefault();
        
        postTitle();
    }
    async function postTitle(){
        try{
            const data = await fetch('/api/movies', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({title})    

            })
            
            
    
        }catch(error){
            console.log("Try statement failed")
            console.log(error.message)
            
        }
        navigate("/")
        
        
    }

    return<form onSubmit={handleSubmit}>
        <label>
            Title:  
            <input type="text" onChange={e => setTitle(e.target.value)}/>
        </label>
        <p>{title}</p>
        <input type="submit" value="Submit"/>
    </form>
}

function Movies(){

    const [movies, setMovies] = useState([])

    async function loadMovies(){
        setMovies(await fetchMovies())
    }
    useEffect(() => {
        loadMovies();
    }, []);

    return<>
    <h1>All movies</h1>

    {movies.map(m => (<li key={m.id}>{m.title}</li>))}
    
    </>
}

function MovieRoutes(){
    return (
        <Routes>
            <Route path={"/"} element={<FrontPage />} />
            <Route path={"/movies"} element={<Movies/>} />
            <Route path={"/movies/new"} element={<AddNewMovie/>} />
            <Route path={"/login"} element={<Login/>}></Route>
        
        </Routes>
    )
}

export function Application() {
    return (
        <>
        <header>
            <h1> Movie List</h1>
        </header>
        <nav>
            <div><Link to={"/"}>Front Page</Link></div>
    
            <div><Link to={"/login/"}>Login</Link></div>
        </nav>
        <main>
            <MovieRoutes></MovieRoutes>
        </main>
        <footer>
            <p>Footer goes here</p>
        </footer>
        </>
    )
}    