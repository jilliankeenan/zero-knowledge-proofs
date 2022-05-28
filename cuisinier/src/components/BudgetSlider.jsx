import React from "react";
import styled, { useTheme } from "styled-components";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Text = styled.p`
    font-size: 1.25rem;
`;

const Container = styled.div`
    margin-bottom: 5rem;
`;

const marks = {
    0: <strong>£0</strong>,
    30: '£30',
    50: '£50',
    100: <strong>£100</strong>,
};

export const BudgetSlider = (props) => {
    const { onChange, value } = props;
    const theme = useTheme();

    return (
        <Container>
            <Text>£{value}</Text>
            <Slider
                marks={marks}
                value={value}
                onChange={onChange}
                dotStyle={{ borderColor: theme.color.primary }}
                trackStyle={{ backgroundColor: theme.color.primary }}
                activeDotStyle={{ borderColor: theme.color.primary }}
                handleStyle={{
                    borderColor: theme.color.primary,
                    boxShadow: theme.color.primary,
                    height: "20px",
                    width: "20px",
                    marginTop: "-8px"
                }}
            />
        </Container>
    );
};
