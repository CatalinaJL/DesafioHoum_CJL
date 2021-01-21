import React, {useState, useEffect} from 'react';
import './styles/home.css';
import imgdata from '../dataposters.json';
import Navbar from './navbar';
import {Form, FormControl} from 'react-bootstrap'
// import FilterDrop from './filter';


const Home = () =>{

    const[ghibli, setGhibli] = useState([]);
    const [search,setSearch] = useState([]);
    // const [filterData, setFilterData] = ([]);

    useEffect(()=>{
        getMovieData();
    }, []);

    const getMovieData = async () =>{
        const data = await fetch ('https://ghibliapi.herokuapp.com/films');
        const dataMovies = await data.json();
       setGhibli(dataMovies)
    };
    const posters = imgdata;
    
    
    const filterdMovies = ghibli.filter(data=>{
       return data.title.toString().toLowerCase().includes(search.toString().toLowerCase())
    });
    
    return (
       <main className="Container">
           <header>
            <Navbar/>
            <Form inline>
                <FormControl type="text" size="sm" placeholder="Busca por nombre" onChange={e=> setSearch(e.target.value)} />
            </Form>
           </header>
           <section className="CardsContainer"> 
           {filterdMovies.map((data, index)=>{
                   return (
                       <div key={index} className="cardMovie">
                           <div className="containerimg">
                                {posters.map((posters, index) => {
                                    if (posters.title === data.title)
                                     return(
                                           <img key={index}
                                           className="cardimg" 
                                           src= {posters.posterURL} 
                                           alt={data.title} />
                                        )     
                                   
                                })}
                           </div>
                              
                            <div className="cardText">
                                <div className="title">
                                    <h5>{data.title}</h5>
                                </div>
                                <div className="info">
                                    <p>Año:</p>
                                    <p> {data.release_date}</p>
                                    <p>Director:</p> 
                                    <p>{data.director}</p>
                                </div>
                            </div>
                            
                       </div>
                 
                   )
               })}
           </section>
            
       </main>
    
    )

};

export default Home; 