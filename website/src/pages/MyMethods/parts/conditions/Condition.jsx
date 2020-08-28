import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import OddsForm from './OddsForm'
import LastResultsForm from './LastResultsForm'

import { setConditionOnWhat, deleteCondition } from "../../../../reducers/methodReducer";


// -------------------------------------------------------------------------------------
// Condition Line
// -------------------------------------------------------------------------------------
export default function Condition({condition}) {

    const dispatch = useDispatch()

    const method = useSelector(state => state.method)
    // Can do better than that
    const index = method.conditions.findIndex((c) => c.id === condition.id)


// -------------------------------------------------------------------------------------
    return (

        <div className="field is-grouped is-grouped-multiline" >

            <div className="control is-flex">
                <label className="label is-small mt-2 mr-1" > About.. </label>

                <span className="select is-small">
                    <select
                        value={condition.onWhat ? condition.onWhat : "About .."}
                        onChange={ (event) => { dispatch(setConditionOnWhat(event.currentTarget.value, index)) } }   
                        required                 
                    >
                        <option>About ..</option>
                        <option>The Odds</option>
                        <option>The Last Results</option>
                    </select>
                </span>
            </div>

            {condition.onWhat === "The Odds" ? 
                <OddsForm condition={condition} /> :
                    condition.onWhat === "The Last Results" ? 
                        <LastResultsForm condition={condition} /> :
                            null
            }

            <div className="control">
                <button
                    className="button is-danger is-small"
                    id={condition.id}
                    onClick={(event) => {  dispatch(deleteCondition(condition.id)) }}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

        </div>

    );
}
