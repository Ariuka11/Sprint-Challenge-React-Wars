import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props =>{
    return (
        <div className = "charWrapper">
            {props.starwarsChars.map(char => {
                return <Character key={char.name} characterData={char}  />
            })}
        </div>
    )
}

export default CharacterList;
