import React from 'react';
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.theme === 'dark' ? props.theme.text : props.theme.body};
  font-family: 'Pacifico', cursive;
  
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

function LogoComponent(props) {
    return (
        <Logo color={props.theme}>
            Mysik
        </Logo>
    );
}

export default LogoComponent;