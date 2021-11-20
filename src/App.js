import React, {Fragment} from 'react';
import './App.css';
import MyForm from './components/MyForm'

function App() {

    return (
        <Fragment>
            <MyForm
                form_title="React Formulier"
                legend="Gegevens"
                label_field_one="Naam:"
                input_type="text"
                input_id="name_input"
                label_field_two="Leeftijd:"
                input_type_two="number"
                input_id_two="input_age"
                legend_two="Jouw review"
                textarea_id="review_message"
                textarea_label="Opmerkingen:"
                placeholder="Wat vond je van het recept?"
            />
        </Fragment>
    );
}

export default App;

            // /*<wrapper>*/
            // /*    <h1>React Formulier</h1>*/
            //
            // /*    <form id="review" onSubmit={handleSubmit}>*/
            // /*        <fieldset>*/
            // {/*            <legend> Gegevens</legend>*/}
            //
            // {/*            <label htmlFor="name_input">Naam:</label>*/}
            // {/*            <input*/}
            // {/*                type="text"*/}
            // {/*                id="name_input"*/}
            // {/*            />*/}
            //
            // {/*            <label htmlFor="age_input">Leeftijd:</label>*/}
            // {/*            <input type="number" id="age_input"/>*/}
            //
            // {/*        </fieldset>*/}
            //
            // {/*        <fieldset>*/}
            // {/*            <legend>Jouw review</legend>*/}
            //
            // {/*            <label htmlFor="review_message">Opmerkingen:</label>*/}
            // {/*            <textarea*/}
            // {/*                id="review_message"*/}
            // {/*                placeholder="Wat vond je van het recept?"*/}
            // {/*            />*/}
            //
            // {/*            <span>*/}
            // {/*                <input*/}
            // {/*                    type="checkbox"*/}
            // {/*                    id="subscribe"*/}
            // {/*                />*/}
            // {/*                Ik schrijf me in voor de nieuwsbrief*/}
            // {/*            </span>*/}
            //
            // {/*            <button*/}
            // {/*                type="submit"*/}
            // {/*                id="submit_button"*/}
            // {/*            >*/}
            // {/*                Versturen*/}
            // {/*            </button>*/}
            // {/*        </fieldset>*/}
            //
            // {/*    </form>*/}
            // {/*</wrapper>*/}


