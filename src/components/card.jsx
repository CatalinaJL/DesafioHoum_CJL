import React from 'react';

const card = (props) =>{
    return (
        <div className="cardContainer">
            <div className="cardPic">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="cardText">
                <h6>{props.name}</h6>
                <p>{props.type}</p>
                <p>
                    {props.weakness}
                </p>
            </div>
        </div>
    )
};

export default card; 