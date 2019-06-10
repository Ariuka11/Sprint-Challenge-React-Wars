import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className ="charContainer">
            <div className = "charHeader">
                <h1>{props.characterData.name}</h1>
            </div>
            <div className = "charBody">
                <h3>Birth Year : {props.characterData.birth_year}</h3>
                <h3>Gender: {props.characterData.gender}</h3>
                <h3>Hair Color: {props.characterData.hair_color}</h3>
                <h3>Mass: {props.characterData.mass}</h3>
                <h3>Height: {props.characterData.height}</h3>
            </div>
        </div>
    );
}

export default Character;