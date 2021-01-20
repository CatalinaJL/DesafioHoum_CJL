import React, {useState, useEffect} from 'react';
import './styles/home.css';
import imgdata from '../dataposters.json';



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

    const posters = imgdata;
    console.log(posters)
    return (
       <main className="Container">
           <section className="CardsContainer">
           {ghibli.map((data, index)=>{
                   return (
                       <div key={index} className="card">
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