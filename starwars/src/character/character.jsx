import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding 1%; 
  background: white;
  border: 1px solid #4FCDFF;
  width: 40%;
  margin-bottom: 5%;
`;

const Des = styled.p`
display: inline;
`;

const Image1 = styled.img`
border: 1px solid #97ce4c;
position: fixed
left: 0;
`;

const CharacterPan = (props) => {


    return (
        <Container>
            <div>
                <Image1 src={props.image} alt='Image of character'/>
            </div>
            <div>
            <h2>{props.name}</h2>
            <p>Origin: {props.origin}</p>
            <p></p>
            </div>
        </Container>

    );
};

export default CharacterPan;
