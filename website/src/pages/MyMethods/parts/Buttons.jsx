import React from "react";


// -------------------------------------------------------------------------------------
// Submitting form - Save and Cancel buttons
// -------------------------------------------------------------------------------------
export default function ({ method, setMethod, setModal, methods, setMethods, setChampionshipIsDefine, setDisplaySimulation }) {


    const formatUserMethod = (method) => {
        /*
        Possibly check here in order to be sure to have a method in a classic format, see fakeDb
        */
        const goodMethod = {...method}

        if (!goodMethod.name) {
            goodMethod.name = "No_name"
        }
        if (!goodMethod.betHowMany) {
            goodMethod.betHowMany = 1
        }
        if (!goodMethod.currency) {
            goodMethod.currency = "€"
        }

        goodMethod.id = Math.floor(Math.random() * 10000);
        
        const d = new Date()
        goodMethod.creation = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`

        return goodMethod
    }

    const handleClickSave = (event) => {
        event.preventDefault()
        const formattedMethod = formatUserMethod(method)

        // Need to Post here the new method into user methods
        const newMethods = [...methods]
        setMethods(newMethods.concat(formattedMethod))

        const newMethod = null

        setMethod(newMethod)
        setModal({ active: false, for: "", value: [] });
        setChampionshipIsDefine(false)
    }

    const handleClickCancel = (event) => {
        event.preventDefault()

        setMethod(null)
        setModal({ active: false, for: "", value: [] });
        setChampionshipIsDefine(false)
    }

    const handleClickSimulate = (event) => {
        event.preventDefault()

        setDisplaySimulation(true)
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
                className="button is-info"
                onClick={handleClickSimulate}
            >
                Simulate
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
