import React, {useEffect, useState} from 'react';
import Navbar from './navbar';
import Filter from './filter';
import Card from './card'; 
import './styles/home.css';

const Home = () =>{

    const[ghibli, setGhibli] = useState([]);

    useEffect(()=>{
        console.log('hola!')
        getMovieData();
    }, []);

    const getMovieData = async () =>{
        const data = await fetch ('https://ghibliapi.herokuapp.com/films');
        const dataMovies = await data.json();
        console.log(dataMovies)
       setGhibli(dataMovies)
    };

    return (
        <div>
            <Navbar/>
            <Filter/>
            <div className="cardContainer">
            {ghibli.map((data, index)=>{
                   return (
                       <div key={index} className="card">
                           <div className="img">
                               <img src="" alt=""/>
                           </div>
                           <div className="cardText">
                           <p>{data.title}</p>
                           <p>{data.director}</p>
                           <p>{data.description}</p>
                           <p> {data.release_date}</p>
                           </div>
                           
                       </div>
                   )
               })}
            </div>
               
                
            <Card/>
        </div>
    )
};

export default Home; 