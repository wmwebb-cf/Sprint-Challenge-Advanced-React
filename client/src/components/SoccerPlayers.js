import React from 'react';
import styled from 'styled-components';


const MyCard = styled.div`
  border-radius: 10px;
  border: 2px solid palevioletred;
  width: 400px;
  margin: 5px auto;`

const Player = props => {
    return (
        <MyCard>
            <h4>Name: {props.player.name}</h4>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </MyCard>
    )   
}

export default Player;