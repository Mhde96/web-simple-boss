import { useEffect, useState } from "react";
import Button from "../components/Button";
import Display from "../components/Display";

let Listener = null;
export function CalculatorWarper() {
  const [display, setDisplay] = useState("");
  const [input, setInput] = useState("");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operator, setOperator] = useState(undefined);

  // console.log("input : ", input);
  // console.log("currentNumber : ", currentNumber);
  // console.log("operator : ", operator);
  console.log("display : ", display);

  const buttons = [
    { label: "AC", id: "clear", class: "reset" },
    { label: "±", id: "negative", class: "negative" },
    { label: "x", id: "multiply", class: "operator" },
    { label: 7, id: "seven", class: "number" },
    { label: 8, id: "eight", class: "number" },
    { label: 9, id: "nine", class: "number" },
    { label: "÷", id: "divide", class: "operator" },
    { label: 4, id: "four", class: "number" },
    { label: 5, id: "five", class: "number" },
    { label: 6, id: "six", class: "number" },
    { label: "-", id: "subtract", class: "operator" },
    { label: 1, id: "one", class: "number" },
    { label: 2, id: "two", class: "number" },
    { label: 3, id: "three", class: "number" },
    { label: "+", id: "add", class: "operator" },
    { label: 0, id: "zero", class: "zero" },
    { label: ".", id: "decimal", class: "decimal" },
    { label: "=", id: "equals", class: "equals" },
  ];

  const handleKeyPress = (e) => {
    // console.log(e.key);
    const isOneOfButtons = buttons.some((button) => button.label == e.key);
    if (isOneOfButtons) {
      setInput(input + e.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  return (
    <div className="App">
      <div className="calculator">
        <Display
          input={input}
          currentNumber={currentNumber}
          operator={operator}
        />
        <div className="keyboard">
          <div className="button-container">
            {buttons.map((btn, index) => {
              return (
                <Button
                  key={index}
                  btn={btn}
                  input={input}
                  setInput={setInput}
                  currentNumber={currentNumber}
                  setCurrentNumber={setCurrentNumber}
                  operator={operator}
                  setOperator={setOperator}
                />
              );
            })}
          </div>
          <div className="speaker"></div>
        </div>
      </div>
    </div>
  );
}
