import React from "react";
import { useDispatch, useSelector } from 'react-redux'

// Components
import Condition from "./parts/Condition";

// State from reducers
import { initConditions, addCondition } from "../../reducers/methodReducer";


// -------------------------------------------------------------------------------------
// Third part of the form - Add conditions (2 maximum)
// -------------------------------------------------------------------------------------
export default function MethodManagementStep2() {

    const dispatch = useDispatch()
    // Pick only the needed part from the method
    const conditions = useSelector(state => state.method.conditions)


    const handleClickAddCondition = (event) => {
        event.preventDefault()

        if (!conditions) { dispatch(initConditions()) } 
        else { dispatch(addCondition()) }

    }

// -------------------------------------------------------------------------------------
    return (
        
        <div className="box">
            {conditions &&
                conditions.map((condition) => 
                    <Condition key={condition.id} condition={condition} />
                )
            }

            {(!conditions || conditions.length < 2) &&
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
