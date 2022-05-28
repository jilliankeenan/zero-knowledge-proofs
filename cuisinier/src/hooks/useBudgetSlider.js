import { useState } from "react";

export const useBudgetSlider = () => {
    const [value, setValue] = useState(50);
    

    return {
        value,
        setValue
    };
};