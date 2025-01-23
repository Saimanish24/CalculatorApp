import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <CalculatorApp />
    </>
  );
}

function CalculatorApp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  function Clicked(value) {
    if (value === '=') {
      try {
        setResult(eval(input));
        // setInput(eval(input)); // Evaluate the input for the result
      } catch (e) {
        setResult('error'); // Handle invalid expressions
      }
    } else if (value === 'AC') {
      setResult('');
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1)); // Remove the last character
    } else {
      setInput(input + value); // Append the value to the input
    }
  }

  return (
    <div className="Grid">
      <div className="output">
        <div className="smallOp">{input}</div>
        <div className="bigOp">{result}</div>
      </div>
      <button className="Span2" onClick={() => Clicked('AC')}>AC</button>
      <button onClick={() => Clicked('DEL')}>DEL</button>
      <button onClick={() => Clicked('/')}>/</button>
      <button onClick={() => Clicked('1')}>1</button>
      <button onClick={() => Clicked('2')}>2</button>
      <button onClick={() => Clicked('3')}>3</button>
      <button onClick={() => Clicked('*')}>*</button>
      <button onClick={() => Clicked('4')}>4</button>
      <button onClick={() => Clicked('5')}>5</button>
      <button onClick={() => Clicked('6')}>6</button>
      <button onClick={() => Clicked('+')}>+</button>
      <button onClick={() => Clicked('7')}>7</button>
      <button onClick={() => Clicked('8')}>8</button>
      <button onClick={() => Clicked('9')}>9</button>
      <button onClick={() => Clicked('-')}>-</button>
      <button onClick={() => Clicked('.')}>.</button>
      <button onClick={() => Clicked('0')}>0</button>
      <button className="Span2" onClick={() => Clicked('=')}>=</button>
    </div>
  );
}

export default App;