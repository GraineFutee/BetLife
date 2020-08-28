import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import Condition from "./conditions/Condition";

import { initConditions, addCondition } from "../../../reducers/methodReducer";


// -------------------------------------------------------------------------------------
// Third part of the form - Add conditions
// -------------------------------------------------------------------------------------
export default function MethodManagementStep2() {

    const dispatch = useDispatch()

    const method = useSelector(state => state.method)

    
    const handleClickAddCondition = (event) => {
        event.preventDefault()

        if (!method.conditions) { dispatch(initConditions()) } 
        else { dispatch(addCondition()) }

    }

// -------------------------------------------------------------------------------------
    return (
        
        <div className="box">
            {method.conditions &&
                method.conditions.map((condition) => 
                    <Condition key={condition.id} condition={condition} />
                )
            }

            {(!method.conditions || method.conditions.length < 2) &&
            <button 
                className="button is-small is-light"
                onClick={handleClickAddCondition}
            >
                Add Condition
            </button>
            }

        </div>
    );
}
