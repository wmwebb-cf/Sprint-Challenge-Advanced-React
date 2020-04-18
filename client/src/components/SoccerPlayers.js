import React from 'react';

const Player = props => {
    return (
        <div>
            <h4>Name: {props.player.name}</h4>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )   
}

export default Player;