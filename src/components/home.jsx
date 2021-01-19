import React, {useEffect, useState} from 'react';
import Navbar from './navbar';
import Filter from './filter';
import Card from './card'; 

const Home = () =>{

    const[people, setPeople] = useState([]);

    useEffect(()=>{
        // console.log('hola!')
        getSWData()
    }, []);

    const getSWData = async () =>{
        const data = await fetch ('http://www.recipepuppy.com/api/')
        const dataSW= await data.json()
        console.log(dataSW)
        // const peopleSW= dataSW.results
        // console.log(peopleSW)
        // setPeople(peopleSW)
    }
    return (
        <div>
            <Navbar/>
            <Filter/>
            {/* <ul>
                {people.map((data, index)=>{
                    return(
                        <li key= {index}>
                            {data.name} - {data.homeworld} - {data.films}
                        </li>
                    )       
                })
                };
            </ul> */}
                
            <Card/>
        </div>
    )
};

export default Home; 