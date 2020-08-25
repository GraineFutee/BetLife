import React from "react";


// -------------------------------------------------------------------------------------
// Submitting form - Save and Cancel buttons
// -------------------------------------------------------------------------------------
export default function ({ method, setMethod, setModal }) {

    const handleClickSave = (event) => {
        event.preventDefault()
        console.log('Need to do something to save method')
    }

    const handleClickCancel = (event) => {
        event.preventDefault()
        console.log('Need to do something to cancel method')
    }

    // -------------------------------------------------------------------------------------
    return (

        <div className="buttons">
            <button
                className="button is-success"
                onClick={handleClickSave}
            >
                Save
                </button>

            <button
                className="button is-danger"
                onClick={handleClickCancel}
            >
                Cancel
                </button>
        </div>
    );
}
