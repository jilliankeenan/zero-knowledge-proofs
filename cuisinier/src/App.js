// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Heading } from "./components/Heading";
import { SubHeading } from "./components/SubHeading";
import { SteppedInput } from "./components/SteppedInput";
import { BudgetSlider } from "./components/BudgetSlider";
import { useStepper } from './hooks/useStepper';
import { useBudgetSlider } from './hooks/useBudgetSlider';

function App() {

  const { step, onStepUp, onStepDown } = useStepper();
  const { value, setValue } = useBudgetSlider();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Heading>Budget</Heading>
        <SubHeading>How much do you spend for the week?</SubHeading>
        <BudgetSlider value={value} onChange={setValue} />

        <SubHeading>How many people?</SubHeading>

        <SteppedInput
          value={step}
          onStepUp={onStepUp}
          onStepDown={onStepDown}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
