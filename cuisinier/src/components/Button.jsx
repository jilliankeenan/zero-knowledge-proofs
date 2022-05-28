import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const StyledButton = styled.button`
    height: 46px;
    font-size: 1.25rem;
    background-color: ${props => props.theme.color.primary};
    color: white;
    border-radius: 6px ;
    font-weight: 800;
    border: none;
    font-family: 'Poppins', sans-serif;

    ${props => props.big ? 'width: 500px;' : ''}

    &:hover {
        transition: all 150ms linear;
        opacity: .85;
      }

      &:active {
        transition: all 150ms linear;
        opacity: .75;
      }
      &:focus {
        outline: 1px dotted #959595;
        outline-offset: -4px;
      }
`;

export const Button = ({ onButtonClick, children, big }) => {

    return (
        <Container >
            <StyledButton big={big} onClick={onButtonClick}>{children}</StyledButton>
        </Container>
    );
};

