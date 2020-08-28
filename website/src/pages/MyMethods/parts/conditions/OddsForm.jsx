import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import { setConditionOnWho, setConditionValue1, setConditionValue2 } from "../../../../reducers/methodReducer";



// -------------------------------------------------------------------------------------
// Condition - If "Odds" is chosen
// -------------------------------------------------------------------------------------
export default function OddsForm({condition}) {

    const dispatch = useDispatch()

    const method = useSelector(state => state.method)
    // Can do better than that
    const index = method.conditions.findIndex((c) => c.id === condition.id)

// -------------------------------------------------------------------------------------
    const handleChangeConditionOnWho = (event) => {

        dispatch(setConditionOnWho(event.currentTarget.value, index))
        // Re-init condition.values to avoid conflicts
        dispatch(setConditionValue1("", index)) 
        dispatch(setConditionValue2("", index)) 

    }

    const handleChangeLowestOdd = (event) => {

        if (event.currentTarget.value < 1) {
            dispatch(setConditionValue1(1, index))
        } else if (event.currentTarget.value > 50) {
            dispatch(setConditionValue1(50, index))
        } else if (event.currentTarget.value > condition.value2) {
            dispatch(setConditionValue2(event.currentTarget.value, index))
            dispatch(setConditionValue1(event.currentTarget.value, index))
        } else {
            dispatch(setConditionValue1(event.currentTarget.value, index))
        }
    }

    const handleChangeHighestOdd = (event) => {

        if (event.currentTarget.value < condition.value1) {
            dispatch(setConditionValue2(condition.value1, index))
        } else if (event.currentTarget.value > 50) {
            dispatch(setConditionValue2(50, index))
        } else {
            dispatch(setConditionValue2(event.currentTarget.value, index))
        }
    }

// -------------------------------------------------------------------------------------
    return (
        <>
            <div className="control is-flex">
                <label className="label is-small mt-2 mr-1" > On.. </label>

                <span className="select is-small">
                    <select
                        value={condition.onWho ? condition.onWho : "On .."}
                        onChange={handleChangeConditionOnWho}                    
                    >
                        <option>On ..</option>
                        <option>Home Team</option>
                        <option>Away Team</option>
                        <option>Draw</option>
                        <option>The Team I bet</option>
                    </select>
                </span>
            </div>

            <div className="control is-flex">
                <label className="label is-small mt-2 mr-1" > - Odd range : </label>

                <div className="control">
                    <input
                        type="number"
                        step=".1"
                        className="input is-small"
                        value={condition.value1 ? condition.value1 : 1}
                        onChange={handleChangeLowestOdd}
                    />
                </div>
                
                <div className="control">
                    <input
                        type="number"
                        step=".1"
                        className="input is-small"
                        value={condition.value2 ? condition.value2 : condition.value1 ? condition.value1 : 1.1}
                        onChange={handleChangeHighestOdd}
                    />
                </div>

            </div>            
        </>
    );
}