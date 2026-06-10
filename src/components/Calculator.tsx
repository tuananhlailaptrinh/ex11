import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForNewValue) {
      setDisplay(digit);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue == null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      let newValue = currentValue;

      if (operator === '+') newValue = currentValue + inputValue;
      else if (operator === '-') newValue = currentValue - inputValue;
      else if (operator === '*') newValue = currentValue * inputValue;
      else if (operator === '/') newValue = currentValue / inputValue;

      setPreviousValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForNewValue(true);
    setOperator(nextOperator);
  };

  const calculate = () => {
    if (operator && previousValue != null) {
      performOperation(operator);
      setOperator(null);
      setWaitingForNewValue(true);
    }
  };

  return (
    <div className="card calculator-card">
      <h2>Calculator</h2>
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-keypad">
          <button onClick={clear} className="btn-calc btn-clear">AC</button>
          <button onClick={() => performOperation('/')} className="btn-calc btn-op">÷</button>
          <button onClick={() => performOperation('*')} className="btn-calc btn-op">×</button>
          <button onClick={() => performOperation('-')} className="btn-calc btn-op">−</button>
          
          <button onClick={() => inputDigit('7')} className="btn-calc">7</button>
          <button onClick={() => inputDigit('8')} className="btn-calc">8</button>
          <button onClick={() => inputDigit('9')} className="btn-calc">9</button>
          <button onClick={() => performOperation('+')} className="btn-calc btn-op plus-btn">+</button>
          
          <button onClick={() => inputDigit('4')} className="btn-calc">4</button>
          <button onClick={() => inputDigit('5')} className="btn-calc">5</button>
          <button onClick={() => inputDigit('6')} className="btn-calc">6</button>
          
          <button onClick={() => inputDigit('1')} className="btn-calc">1</button>
          <button onClick={() => inputDigit('2')} className="btn-calc">2</button>
          <button onClick={() => inputDigit('3')} className="btn-calc">3</button>
          <button onClick={calculate} className="btn-calc btn-equals">=</button>
          
          <button onClick={() => inputDigit('0')} className="btn-calc zero-btn">0</button>
          <button onClick={inputDecimal} className="btn-calc">.</button>
        </div>
      </div>
    </div>
  );
}
