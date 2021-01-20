import React, {useEffect, useState, createContext} from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
// import Navbar from './components/navbar';
import imgdata from './dataposters.json';


export const ContextUser = createContext(null);

function App() {
  const posters = imgdata;
  const[ghibli, setGhibli] = useState([]);
  const [postersURL, setPostersURL]  = useState([])

    useEffect(()=>{
        getMovieData();
    }, []);

    const getMovieData = async () =>{
        const data = await fetch ('https://ghibliapi.herokuapp.com/films');
        const dataMovies = await data.json();
        // console.log(dataMovies)
       setGhibli(dataMovies)
    };

    useEffect(()=>{
      setPostersURL(posters);
     }, []);
    
    console.log(postersURL);
    console.log(ghibli);

  return (
    
        <ContextUser.Provider value={{userGhibli:setGhibli, urlPoster:setPostersURL}}>
            <Home/>
        </ContextUser.Provider>

      
    
  );
}

export default App;
