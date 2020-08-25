import React from "react";

import OddsForm from './OddsForm'
import LastResultsForm from './LastResultsForm'

// -------------------------------------------------------------------------------------
// Condition Line
// -------------------------------------------------------------------------------------
export default function Condition({ condition, method, setMethod }) {

    const handleChangeConditionOnWhat = (event) => {
        const index = condition.id
        let newMethod = { ...method }
        newMethod.conditions[index].onWhat = event.currentTarget.value
    
          if (event.currentTarget.value === "About ..") {
            newMethod.conditions[index].onWhat = null
          } 
        setMethod(newMethod);
    }

    const handleClickDeleteCondition = (event) => {
        event.preventDefault()

        let newMethod = { ...method }
        newMethod.conditions.splice(
            newMethod.conditions.findIndex(
                (condition) =>
                    condition.id === event.currentTarget.id
            ),
            1
        );
        setMethod(newMethod);
    }

// -------------------------------------------------------------------------------------
    return (

        <div className="field is-grouped is-grouped-multiline" >

            <div className="control is-flex">
                <label className="label is-small mt-2 mr-1" > About.. </label>

                <span className="select is-small">
                    <select
                        value={condition.onWhat ? condition.onWhat : "About .."}
                        onChange={handleChangeConditionOnWhat}   
                        required                 
                    >
                        <option>About ..</option>
                        <option>The Odds</option>
                        <option>The Last Results</option>
                    </select>
                </span>
            </div>

            {condition.onWhat === "The Odds" ? 
                <OddsForm 
                    condition={condition}
                    method={method}
                    setMethod={setMethod}
                /> :
                condition.onWhat === "The Last Results" ? 
                <LastResultsForm 
                    condition={condition}
                    method={method}
                    setMethod={setMethod}
                /> :
                null
            }

            <div className="control">
                <button
                    className="button is-danger is-small"
                    id={condition.id}
                    onClick={handleClickDeleteCondition}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

        </div>

    );
}
