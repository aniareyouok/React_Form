import React from "react";

function MyForm({form_title, legend, label_field_one, input_type, input_type_two, input_id, input_id_two, label_field_two, legend_two, textarea_id, textarea_label, placeholder}) {
return (
    <wrapper>
        <h1>{form_title}</h1>

        <form id="review" >
            <fieldset>
                <legend> {legend} </legend>

                <label htmlFor={input_id}>{label_field_one}</label>
                <input
                    type={input_type}
                    id={input_id}
                />

                <label htmlFor={input_id_two}>{label_field_two}</label>
                <input type={input_type_two} id={input_id_two}/>

            </fieldset>

            <fieldset>
                <legend>{legend_two}</legend>

                <label htmlFor={textarea_id}>{textarea_label}</label>
                <textarea
                    id={textarea_id}
                    placeholder={placeholder}
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

)}

export default MyForm