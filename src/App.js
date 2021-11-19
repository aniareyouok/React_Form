import React, {Fragment} from 'react';
import './App.css';

function App() {

    function handleSubmit() {
        console.log("Verstuurd!")
    }

  return (
    <Fragment>
        <h1>React Formulier</h1>

        <form name="gegevens">
            <label htmlFor="gegevens">Gegevens</label>
            <label htmlFor="name_input">Naam:</label>
            <input
                type="text"
                id="name_input"
            />
            <label htmlFor="age_input">Leeftijd:</label>
            <input type="number" id="age_input"/>
        </form>

        <form
            id="review"
            name="jouw_review"
            onSubmit={handleSubmit}
        >
            <label htmlFor="review">Jouw review</label>
            <label htmlFor="review_message">Opmerkingen:</label>
            <textarea
                id="review_message"
                placeholder="Wat vond je van het recept?"
            />
            <input
                type="checkbox"
                id="subscribe"
            />
            Ik schrijf me in voor de nieuwsbrief
            <button
                type="submit"
                id="submit_button"
            >
                Versturen
            </button>

        </form>
    </Fragment>
  );
}

export default App;
