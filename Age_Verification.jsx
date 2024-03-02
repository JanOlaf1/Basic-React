import React, { useState } from 'react';

/*React app that asks name and age from a user. 
When the button is pressed, the alert shows message 'Hello [name]' in case that age is greater or equals to 18. 
Otherwise the alert shows message 'You are too young'.*/
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleButtonClick = () => {
    if (age >= 18) {
      alert(`Hello ${name}`);
    } else {
      alert('You are too young');
    }
  };

  return (
    <div className="App">
      <h1>Käyttäjän syöttö</h1>
      <div>
        <label>
          Nimi:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Ikä:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleButtonClick}>Tarkista ikä</button>
    </div>
  );
}

export default App;