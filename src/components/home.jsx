import React, {useState, useEffect} from 'react';
import './styles/home.css';
import imgdata from '../dataposters.json';
import GhibliIcon from '../Assets/anime.svg';


const Home = () =>{

    const[ghibli, setGhibli] = useState([]);
    const [search,setSearch] = useState([]);
    
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
                <img className="navbarIcon" src={GhibliIcon} alt="Icono Ghibli"/>
                <div className="titleHeader">
                    <h1>Películas Studio Ghibli</h1>
               </div>
               <div className="inputSearch">
                   <input type="text" placeholder="Busca por película" onChange={e=>setSearch(e.target.value)}/>
               </div>
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