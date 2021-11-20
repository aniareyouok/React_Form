import React from "react";

function MyForm({form_title, legend, label_field_one, input_type, input_type_two, input_id, input_id_two, label_field_two, legend_two, textarea_id, textarea_label, placeholder}) {

    const [state, setState] = React.useState({
        nameValue: "",
        ageValue: 0,
        messageValue: ""
    })

    // let [nameValue, setNameValue] = React.useState('');
    // let [ageValue, setAgeValue] = React.useState(18);
    // let [messageValue, setMessageValue] = React.useState('');

    function handleSubmit(e) {
        console.log(`Naam: ${state.nameValue} Leeftijd: ${state.ageValue} Opmerking: ${state.messageValue}`);
        e.preventDefault();

    }

    function handleChange(e) {
        const value = e.target.value;
        setState({...state,[e.target.name]:value});
    }

    return (
    <div className="wrapper">
        <h1>{form_title}</h1>

        <form id="review" onSubmit={handleSubmit}>
            <fieldset>
                <legend> {legend} </legend>

                <label htmlFor={input_id}>{label_field_one}</label>
                <input
                    name="nameValue"
                    type={input_type}
                    id={input_id}
                    value={state.nameValue}
                    onChange={handleChange}
                />

                <label htmlFor={input_id_two}>{label_field_two}</label>
                <input
                    name="ageValue"
                    type={input_type_two}
                    id={input_id_two}
                    value={state.ageValue}
                    onChange={handleChange}
                />

            </fieldset>

            <fieldset>
                <legend>{legend_two}</legend>

                <label htmlFor={textarea_id}>{textarea_label}</label>
                <textarea
                    name="messageValue"
                    id={textarea_id}
                    placeholder={placeholder}
                    value={state.messageValue}
                    onChange={handleChange}
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
    </div>

)}

export default MyForm