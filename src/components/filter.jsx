import React from 'react';
import {Dropdown} from 'react-bootstrap';

const FilterDrop =(props) =>{
    return (
        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Filtrar
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onSelect={props.filter1} value="menormayor">Menor a Mayor Puntuación</Dropdown.Item>
                <Dropdown.Item href="#/action-2"onSelect={props.filter2} value="director">Director</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default FilterDrop;