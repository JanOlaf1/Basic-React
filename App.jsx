import React, { useState } from 'react';
/*basic React calculator app that takes two user-inputted numbers. 
It performs addition when the plus button is pressed and subtraction when the minus button is pressed. 
It the result after each operation. */
function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [result, setResult] = useState(null);

  const välivaihe = (e, num) => {
    const value = e.target.value;
    num === 1 ? setNumero1(value) : setNumero2(value);
  };

  const laskin = (operation) => {
    const parsedNumero1 = Number(numero1);
    const parsedNumero2 = Number(numero2);

    if (isNaN(parsedNumero1) || isNaN(parsedNumero2)) {
      setResult('Please enter valid numbers.');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(parsedNumero1 + parsedNumero2);
        break;
      case 'subtract':
        setResult(parsedNumero1 - parsedNumero2);
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <label>Number 1:</label>
        <input type="text" value={numero1} onChange={(e) => välivaihe(e, 1)} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="text" value={numero2} onChange={(e) => välivaihe(e, 2)} />
      </div>
      <div>
        <button onClick={() => laskin('add')}>+</button>
        <button onClick={() => laskin('subtract')}>-</button>
      </div>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
