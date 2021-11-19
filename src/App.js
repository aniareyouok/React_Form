import React, {Fragment} from 'react';
import './App.css';

function App() {

    function handleSubmit() {
        console.log("Verstuurd!")
    }

    return (
        <Fragment>
            <wrapper>
                <h1>React Formulier</h1>

                <form id="review" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend> Gegevens</legend>

                        <label htmlFor="name_input">Naam:</label>
                        <input
                            type="text"
                            id="name_input"
                        />

                        <label htmlFor="age_input">Leeftijd:</label>
                        <input type="number" id="age_input"/>

                    </fieldset>

                    <fieldset>
                        <legend>Jouw review</legend>

                        <label htmlFor="review_message">Opmerkingen:</label>
                        <textarea
                            id="review_message"
                            placeholder="Wat vond je van het recept?"
                        />

                        <span>
                            <input
                                type="checkbox"
                                id="subscribe"
                            />
                            Ik schrijf me in voor de nieuwsbrief
                        </span>

                        <button
                            type="submit"
                            id="submit_button"
                        >
                            Versturen
                        </button>
                    </fieldset>

                </form>
            </wrapper>
        </Fragment>
    );
}

export default App;
