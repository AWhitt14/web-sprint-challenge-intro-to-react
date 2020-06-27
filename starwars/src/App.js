import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CharacterPan from './character/character';
import styled from 'styled-components';

const H1H = styled.h1`
color: #e89ac7;
background-color:rgba(0, 0, 0, 0.5);
`;
const Bod = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`;
const App = () => {
  const [char, setCharacters] = useState([]);
  useEffect(() => {
    Axios
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      console.log(res.data);
       setCharacters(res.data.results);
    })
    .catch(er => {
      console.log(er);
    });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <H1H className="Header">Characters</H1H>
      <Bod>
       { char.map(p => {
         return <CharacterPan key={p.id} name={p.name} image={p.image} origin={p.origin.name} status={p.status} species={p.species}/>
       })}
      </Bod>
    </div>
  );
}

export default App;
