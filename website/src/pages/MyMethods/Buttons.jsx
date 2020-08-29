import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { backToNull } from "../../reducers/methodReducer";
import { saveMethod } from "../../reducers/methodsReducer";
import { initializeExceptTeams, openSimulation } from "../../reducers/managementReducer";


// Todo => Saving an already existing method should update and not build a new one
// => Check the good shape of the method we are going to POST
// either by the "cleanMethod" function, or an other way


// -------------------------------------------------------------------------------------
// Submitting form - Save and Cancel buttons
// -------------------------------------------------------------------------------------
export default function () {

    const dispatch = useDispatch()
    const method = useSelector(state => state.method)

    // -------------------------------------------------------------------------------------
    const cleanMethod = (method) => {
        const cleanedMethod = {...method}

        // Need to check all "undefined" parts - Should be done with help of reducers?
        if (typeof cleanedMethod.name === 'undefined') { cleanedMethod.name = "No_Name" }
        if (typeof cleanedMethod.betOnWho === 'undefined') { cleanedMethod.betOnWho = "All Teams" }
        if (typeof cleanedMethod.playingWhere === 'undefined') { cleanedMethod.playingWhere = "Home" }
        if (typeof cleanedMethod.againstWho === 'undefined') { cleanedMethod.againstWho = "Any Teams" }

        // Should check here if odd value are ok (value1 < value2)
        
        return cleanedMethod
    }

    const handleClickSave = (event) => {
        event.preventDefault()

        // POST request
        dispatch(saveMethod(cleanMethod(method)))

        dispatch(backToNull())
        dispatch(initializeExceptTeams())
    }

    const handleClickCancel = (event) => {
        event.preventDefault()

        dispatch(backToNull())
        dispatch(initializeExceptTeams())
    }

    const handleClickSimulate = (event) => {
        event.preventDefault()

        dispatch(openSimulation(method))
    }

    // -------------------------------------------------------------------------------------
    return (

        <div className="buttons">
            <button
                className="button is-rounded is-small is-success"
                onClick={handleClickSave}
            >
                Save
            </button>

            <button
                className="button is-rounded is-small is-link"
                onClick={handleClickSimulate}
            >
                Simulate
            </button>

            <button
                className="button is-rounded is-small is-danger"
                onClick={handleClickCancel}
            >
                Cancel
            </button>
        </div>
    );
}
