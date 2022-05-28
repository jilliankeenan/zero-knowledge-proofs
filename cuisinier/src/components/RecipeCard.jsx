import React from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size: 1.25rem;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: ${(props) => props.theme.color.text};
    margin-bottom: 1.5rem;
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

export const RecipeCard = (props) => {
    const {
        name,
        dietary_requirements,
        image_path,
        cost,
        onClick
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
            </Box>
        </Container>
    );
};
