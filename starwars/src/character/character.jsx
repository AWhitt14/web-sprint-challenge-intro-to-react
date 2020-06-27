import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center; 
  background: white;
  border: 1px solid #4FCDFF;
  width: 50%;
  margin-bottom: 5%;
  padding: .2%;
`;

const Des = styled.div`
text-align: center;
width: 100%;
`;

const HName = styled.h2`
 background-color: #44281d;
 color: #f0e14a;
`;
const List = styled.ul`
list-style-position: inside;
text-align: left;

`;

const LI = styled.li`
margin-top: 15%;

`;

const Image1 = styled.img`
border: 1px solid #97ce4c;
position: fixed
left: 0;
`;

const CharacterPan = (props) => {

    return (
        <Container>
                <Image1 src={props.image} alt='Image of character'/>
            <Des>
                <HName>{props.name}</HName>
            <List>
                <LI>Origin:{props.origin}</LI>
                <LI>Species:{props.species}</LI>
                <LI>Status:{props.status}</LI>
            </List>
            </Des>
        </Container>

    );
};

export default CharacterPan;
