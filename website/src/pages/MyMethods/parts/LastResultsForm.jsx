import React from "react";
import { useDispatch} from 'react-redux'

// State from reducers
import { setConditionOnWho, setConditionValue1, setConditionValue2 } from "../../../reducers/methodReducer";



// -------------------------------------------------------------------------------------
// Condition - If Last Results is chosen
// -------------------------------------------------------------------------------------
export default function LastResultsForm({condition, index}) {

    const dispatch = useDispatch()

// -------------------------------------------------------------------------------------

    const handleChangeConditionOnWho = (event) => {

        dispatch(setConditionOnWho(event.currentTarget.value, index))
        // Re-init condition.values to avoid conflicts
        dispatch(setConditionValue1("", index)) 
        dispatch(setConditionValue2("", index)) 

    }

    const handleChangeHowManyResults = (event) => {
        if (event.currentTarget.value < 1) {
            dispatch(setConditionValue2(1, index)) 
        } else if (event.currentTarget.value > 5) {
            dispatch(setConditionValue2(5, index))  
        } else {
            dispatch(setConditionValue2(event.currentTarget.value, index)) 
        }
    }

// -------------------------------------------------------------------------------------
    return (
        <>
            <div className="control is-flex">
                <label className="label is-small mt-2 mr-1" > On .. </label>

                <span className="select is-small">
                    <select
                        value={condition.onWho ? condition.onWho : "On .."}
                        onChange={handleChangeConditionOnWho}                    
                    >
                        <option>On ..</option>
                        <option>The Team I bet</option>
                        <option>The Team against</option>
                        <option>Home Team</option>
                        <option>Away Team</option>
                        <option>Both Teams</option>
                    </select>
                </span>
            </div>

            <div className="control is-flex">

                <span className="select is-small">
                    <select
                        value={condition.value1 ? condition.value1 : "..."}
                        onChange={(event) => { dispatch(setConditionValue1(event.currentTarget.value, index)) } }                    
                    >
                        <option>...</option>
                        <option>Won</option>
                        <option>Lost</option>
                        <option>Draw</option>
                        <option>Didn't win</option>
                        <option>Didn't Lose</option>
                        <option>Didn't Draw</option>
                    </select>
                </span>

                <label className="label is-small mt-2 mr-2 ml-2" > The last </label>

                <span className="control">
                    <input
                        type="number"
                        className="input is-small"
                        value={condition.value2 ? condition.value2 : 1}
                        onChange={handleChangeHowManyResults}
                    />
                </span>

                <label className="label is-small mt-2 ml-2" > Matches </label>

            </div>            
        </>
    );
}