import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Button";
import { bounce, bounceIn, slideInUp, flip } from 'react-animations';

const bounceAnimation = keyframes`${slideInUp}`;

const Container = styled.div`
    font-size: 1.25rem;
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: ${(props) => props.theme.color.text};
    margin-bottom: 1.5rem;
    position: relative;
    animation: .5s ${bounceAnimation};
`;

const Box = styled.div`
    padding-left: 1.5rem;
    padding-right: 2rem;
    padding-top: .75rem;
    padding-bottom: 1rem;
    border-top: 1px solid ${(props) => props.theme.color.gray};
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Label = styled.p`
    font-size: 1.25rem;
    margin-bottom: .5rem;
    margin-top: .75rem;
    text-align: right;
`;

const Price = styled.span`
    font-size: 1.25rem;
    margin-bottom: 0rem;
    margin-top: 0rem;
    font-weight: bold;
`;

const Pill = styled.p`
    font-size: 1rem;
    margin-top: .5rem;
    border-radius: 8px;
    padding-left: .5rem;
    padding-right: .5rem;
    background: ${props => props.theme.color.special};
    width: fit-content;
    color: white;
    position: absolute;
    top: -17px;
    left: -15px;
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    height: 100px;
    object-fit: contain;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const GrocerCard = (props) => {
    const {
        imagePath,
        total,
        isLowest,
        onClick
    } = props;

    return (
        <Container onClick={onClick}>
            <Center>
                <Image src={imagePath} alt="grocer" />
            </Center>
            <Box onClick={onClick}>
                <Flex>
                    <Label>Total: <Price>
                        £{total}
                    </Price>
                    </Label>
                    <Button onClick={onClick}>Checkout</Button>
                </Flex>
                {isLowest && (
                    <Pill>Best Value</Pill>
                )}
            </Box>
        </Container >
    );
};
