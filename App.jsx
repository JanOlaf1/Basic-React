import React, { useState } from 'react';
/*React component for a user registration form, storing input values in a state representing a user object. Upon submission, validate that all fields are filled. Show an alert with 'All fields are required' if validation fails; otherwise, display a welcome alert with 'Welcome {firstName} {lastName}.'*/ 
function RegistrationForm() {
  const [käyttäjä, setKäyttäjä] = useState({
    etunimi: '',
    sukunimi: '',
    sähköposti: '',
    puhelin: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKäyttäjä((prevKäyttäjä) => ({
      ...prevKäyttäjä,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { etunimi, sukunimi, sähköposti, puhelin } = käyttäjä;

    if (!etunimi || !sukunimi || !sähköposti || !puhelin) {
      alert('Kaikki kentät ovat pakollisia');
    } else {
      alert(`Tervetuloa ${etunimi} ${sukunimi}`);
    }
  };

  return (
    <div>
      <h2>Käyttäjän rekisteröintilomake</h2>
      <div>
        <label>Etunimi:</label>
        <input type="text" name="etunimi" value={käyttäjä.etunimi} onChange={handleInputChange} />
      </div>
      <div>
        <label>Sukunimi:</label>
        <input type="text" name="sukunimi" value={käyttäjä.sukunimi} onChange={handleInputChange} />
      </div>
      <div>
        <label>Sähköposti:</label>
        <input type="email" name="sähköposti" value={käyttäjä.sähköposti} onChange={handleInputChange} />
      </div>
      <div>
        <label>Puhelin:</label>
        <input type="text" name="puhelin" value={käyttäjä.puhelin} onChange={handleInputChange} />
      </div>
      <button onClick={handleSubmit}>Lähetä</button>
    </div>
  );
}

function App1() {
  return (
    <div>
      <h1>App1</h1>
      <RegistrationForm />
    </div>
  );
}

export default App1;
