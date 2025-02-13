import { useState } from "react";
import "./Styles.css";
import clickSoundFile from "../assets/click.mp3";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();
    console.log(clickSound);

    if (value === "×") value = "*";
    if (value === "÷") value = "/";

    if (value === "√") {
      setInput((prev) => (prev ? Math.sqrt(parseFloat(prev)).toString() : ""));
    } else if (value === "%") {
      setInput((prev) => (prev ? (parseFloat(prev) / 100).toString() : prev));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleSqrt = () => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();
    console.log(clickSound);
    setInput((prev) => prev);
    setInput((prev) =>
      prev ? `√(${prev}) = ${Math.sqrt(parseFloat(prev))}` : ""
    );
  };

  const handleClear = () => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();
    console.log(clickSound);

    setInput("");
  };

  const handleDelete = () => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();
    console.log(clickSound);

    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();
    console.log(clickSound);

    try {
      let myInput = input;
      setInput(eval(myInput).toString());

      setInput(Function("return (" + myInput + ")")().toString());
    } catch {
      setInput("Error");
    }
  };
  return (
    <div className="parent">
      <div className="main">
        <div className="input">
          <strong>{input || "0"}</strong>
          <button onClick={handleDelete}>⌫</button>
        </div>
        <div className="numbers">
          <div className="numsOne">
            <button className="btnC" onClick={handleClear}>
              AC
            </button>
            <div className="btnOp">
              {["+", "-", "×"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    handleClick(btn);
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
            <div className="btnOp2">
              {["÷", "%", "√"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (btn === "√") {
                      handleSqrt(btn);
                    } else {
                      handleClick(btn);
                    }
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <div>
            {[7, 8, 9].map((btn) => (
              <button
                key={btn}
                onClick={() => {
                  handleClick(btn);
                }}
              >
                {btn}
              </button>
            ))}
          </div>
          <div>
            {[4, 5, 6].map((btn) => (
              <button
                key={btn}
                onClick={() => {
                  handleClick(btn);
                }}
              >
                {btn}
              </button>
            ))}
          </div>
          <div>
            {[1, 2, 3].map((btn) => (
              <button
                key={btn}
                onClick={() => {
                  handleClick(btn);
                }}
              >
                {btn}
              </button>
            ))}
          </div>
          <div>
            {[".", 0, "00"].map((btn) => (
              <button
                key={btn}
                onClick={() => {
                  handleClick(btn);
                }}
              >
                {btn}
              </button>
            ))}
          </div>
          <button className="bntCalc" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
      <p
        style={{
          color: "white",
          width: "240px",
          textAlign: "center",
          lineHeight: "1.4",
        }}
      >
        Created By Mahmoud Abu Rabeh © 2025 Calculator
      </p>
    </div>
  );
};
export default Calculator;
