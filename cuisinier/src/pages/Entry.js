import logo from "../images/moneytree.png"
import React, {useCallback} from "react";
import styled, { useTheme, keyframes } from "styled-components";
import { bounce, bounceIn, slideInLeft, flip } from 'react-animations';
import { useNavigate } from 'react-router-dom'

const bounceAnimation = keyframes`${flip}`;


const Logo = styled.img`
   justify-content: center;
   margin: auto;
   animation: 2s ${bounceAnimation};
   margin-top: 50%;
   width: 315px;
   height: 330px;
`;


function Entry() {
    let navigate = useNavigate();
    const handleOnClick = useCallback(() =>  navigate("../selection", { replace: true }));

    return (
        <>
            <Logo src={logo} alt="My logo" onClick={handleOnClick} />
        </>
    )
}

export default Entry;