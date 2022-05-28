import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce, bounceIn, slideInUp, flip } from 'react-animations';

const bounceAnimation = keyframes`${slideInUp}`;

const Container = styled.div`
    font-size: 1.25rem;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: ${(props) => props.theme.color.text};
    margin-bottom: 1.5rem;
    animation: .5s ${bounceAnimation};
`;

const Box = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
    position: relative;
`;

const Label = styled.p`
    font-size: 1.25rem;
    margin-bottom: .5rem;
    margin-top: .75rem;
    max-width: 72%;
`;

const Price = styled.p`
    font-size: 1.25rem;
    margin-bottom: 0rem;
    margin-top: 0rem;
    position: absolute;
    right: 30px;
    top: 14px;
`;

const Pill = styled.p`
    font-size: 1rem;
    margin-top: 0;
    border-radius: 8px;
    padding-left: .5rem;
    padding-right: .5rem;
    background: ${props => props.theme.color.gray};
    width: fit-content;
`;

const Image = styled.img`
    width: 100%;
    height: 125px;
    object-fit: cover;
`;

const Pill2 = styled.p`
    font-size: 1rem;
    margin-top: .5rem;
    border-radius: 8px;
    padding-left: .5rem;
    padding-right: .5rem;
    background: ${props => props.theme.color.special};
    width: fit-content;
    color: white;
    position: absolute;
    top: -163px;
    left: -15px;
`;

export const RecipeCard = (props) => {
    const {
        name,
        dietary_requirements,
        image_path,
        cost,
        onClick,
        isLowest
    } = props;

    return (
        <Container onClick={onClick}>
            <Image src={image_path} alt="recipe" />
            <Box onClick={onClick}>
                <Label>{name}</Label>
                {dietary_requirements.map((requirement) => (
                    <Pill>{requirement}</Pill>
                ))}
                <Price>
                    £{cost}
                </Price>
                {isLowest && (
                    <Pill2>Recommended</Pill2>
                )}
            </Box>
        </Container>
    );
};
