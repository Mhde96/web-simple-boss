import { evaluate } from "mathjs";
import { useEffect, useState } from "react";

import Display from "./components/Display";

const buttons = [
  { key: "AC", id: "reset", operator: "reset" },
  { key: "(", id: "(", operator: "operator" },
  { key: ")", id: ")", operator: "operator" },
  // =========
  { key: "delete", id: "reset", operator: "reset", key2: ["Backspace"] },
  { key: "±", id: "negative", operator: "negative" },
  { key: "*", id: "multiply", operator: "operator", key2: ["x"] },
  // =========
  { key: 7, id: "seven", operator: "number" },
  { key: 8, id: "eight", operator: "number" },
  { key: 9, id: "nine", operator: "number" },
  { key: "/", id: "divide", operator: "operator", key2: ["÷"] },
  // =========
  { key: 4, id: "four", operator: "number" },
  { key: 5, id: "five", operator: "number" },
  { key: 6, id: "six", operator: "number" },
  { key: "-", id: "subtract", operator: "operator" },
  // =========
  { key: 1, id: "one", operator: "number" },
  { key: 2, id: "two", operator: "number" },
  { key: 3, id: "three", operator: "number" },
  { key: "+", id: "add", operator: "operator" },
  // =========
  { key: 0, id: "zero", operator: "number" },
  { key: ".", id: "decimal", operator: "decimal" },
  { key: "=", id: "equals", operator: "equals", key2: ["Enter"] },
];

export function CalculatorWarper() {
  const [input, setInput] = useState("");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [lastOperator, setLastOperator] = useState("");

  // console.log("input : ", input);
  // console.log("currentNumber : ", currentNumber);
  // console.log("operator : ", operator);
  // console.log( lastOperator);

  const handleKeyPress = (e) => {
    const currentButton = buttons.find((button) => {
      if (button.key == e.key) {
        return true;
      } else {
        if (button.key2?.some((key) => key == e.key)) {
          return true;
        }
      }
      return false;
    });
    if (currentButton?.key == undefined) return;
    // ==============================================

    setLastOperator(currentButton.operator);
    // ==============================================

    //   console.log("lastOperator : ", lastOperator);
    // console.log(currentButton);

    if (currentButton.key == "AC") {
      setInput("");
      setCurrentNumber("0");
    }
    // ==============================================
    else if (currentButton.key == "delete") {
      setInput(input.slice(0, -1));
    }
    // ==============================================
    else if (lastOperator == "equals" && currentButton.operator == "operator") {
      setInput(currentNumber + currentButton.key);
    }
    // ==============================================
    else if (lastOperator == "equals" && currentButton.operator == "number") {
      setInput(currentButton.key);
      setCurrentNumber("0");
    }

    // ==============================================
    else if (currentButton.operator != "equals") {
      setInput(input.toString() + currentButton.key.toString());
    }
    // ==============================================
    else if (currentButton.operator == "equals") {
      setCurrentNumber(evaluate(input));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input, currentNumber, lastOperator]);

  return (
    <div className="App1">
      <div className="calculator">
        <Display input={input} currentNumber={currentNumber} />
        <div className="keyboard">
          <div className="button-container">
            {buttons.map((btn, index) => {
              return (
                <button
                  className={`btn ${btn.id}`}
                  key={index}
                  onClick={() => handleKeyPress(btn)}
                >
                  {btn.key  }
                </button>
              );
            })}
          </div>
          <div className="speaker"></div>
        </div>
      </div>
    </div>
  );
}
