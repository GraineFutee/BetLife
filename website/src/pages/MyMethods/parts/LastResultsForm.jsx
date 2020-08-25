import React from "react";

// -------------------------------------------------------------------------------------
// Condition - If Last Results is chosen
// -------------------------------------------------------------------------------------
export default function LastResultsForm({condition, method, setMethod}) {

    const index = condition.id

// -------------------------------------------------------------------------------------
    const handleChangeConditionOnWho = (event) => {
        let newMethod = { ...method }
        newMethod.conditions[index].onWho = event.currentTarget.value
    
          if (event.currentTarget.value === "...") {
            newMethod.conditions[index].onWho = null
          } 
        setMethod(newMethod);
    }

    const handleChangeWhichResults = (event) => {
        let newMethod = { ...method }
        newMethod.conditions[index].value1 = event.currentTarget.value
    
          if (event.currentTarget.value === "On ..") {
            newMethod.conditions[index].onWho = null
          } 
        setMethod(newMethod);
    }

    const handleChangeHowManyResults = (event) => {
        let newMethod = { ...method }
        newMethod.conditions[index].value2 = event.currentTarget.value

        // Need to check here if we receive a suitable number ? 
        if (event.currentTarget.value < 1) {
            newMethod.conditions[index].value2 = 1
        }
        if (event.currentTarget.value > 5) {
            newMethod.conditions[index].value2 = 5
        }

        setMethod(newMethod);
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
                        onChange={handleChangeWhichResults}                    
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

                <label className="label is-small mt-2 ml-2" > Games </label>

            </div>            
        </>
    );
}