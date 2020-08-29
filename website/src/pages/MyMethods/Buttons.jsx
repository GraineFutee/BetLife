import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { backToNull, setId } from "../../reducers/methodReducer";
import { saveMethod, deleteOne } from "../../reducers/methodsReducer";
import { initializeManagement, openSimulation } from "../../reducers/managementReducer";


// Todo => Check the good shape of the method we are going to POST
// either by the "cleanMethod" function, or an other way


// -------------------------------------------------------------------------------------
// Submitting form - Save and Cancel buttons
// -------------------------------------------------------------------------------------
export default function () {

    const dispatch = useDispatch()
    const method = useSelector(state => state.method)
    const methods = useSelector(state => state.methods)

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

        if (methods.includes(methods.find((mtd) => mtd.id === method.id ))) {
            // UPDATE
            const oldMethodId = method.id
            dispatch(setId(method.id+1)) // Give an other id to avoid conflict
            dispatch(deleteOne(oldMethodId)) // Remove the old one
            dispatch(saveMethod(cleanMethod(method))) // Save the new one
        } else {
            // POST
            dispatch(saveMethod(cleanMethod(method)))
        }

        dispatch(backToNull())
        dispatch(initializeManagement())
    }

    const handleClickCancel = (event) => {
        event.preventDefault()

        dispatch(backToNull())
        dispatch(initializeManagement())
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
