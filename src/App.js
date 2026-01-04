import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const step = 2;

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">{messages[step - 1]}</p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "white" }}>
          Prev
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "white" }}>
          Next
        </button>
      </div>
    </div>
  );
}
