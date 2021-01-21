import React, {useState, useEffect} from 'react';
import './styles/home.css';
import imgdata from '../dataposters.json';
import Navbar from './navbar';
import {Form, FormControl, Button } from 'react-bootstrap'


// const Selectfilter1= () =>{
//     // console.log('estoy escuchando1');
//     console.log(eventKey);
// }

// const Selectfilter2= () =>{
//     console.log('estoy escuchando2');
//     // console.log(target.value);
// }

const Home = () =>{

    const[ghibli, setGhibli] = useState([]);
    const [search,setSearch] = useState([]);

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
    const posters = imgdata;
    console.log(posters)
    
    const filterdMovies = ghibli.filter(data =>{
        return data.title.toLowerCase().includes(search.toLowerCase());
        
    }, [search, ghibli]);
    
    return (
       <main className="Container">
         {/* <Navbar/> */}
         <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e=> setSearch(e.target.value)} />
            <Button variant="outline-info">Search</Button>
        </Form>
           <section className="CardsContainer">
               {search}
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
                                <p>{data.release_date}</p>
                                <p>{data.rt_score}</p>
                                </div>
                                <div>
                                <button className="btnCards">Conoce más!</button>
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