import React from "react";


// -------------------------------------------------------------------------------------
// Condition - If "Odds" is chosen
// -------------------------------------------------------------------------------------
export default function OddsForm({condition, method, setMethod}) {

    const index = condition.id

// -------------------------------------------------------------------------------------
    const handleChangeConditionOnWho = (event) => {
        let newMethod = { ...method }
        newMethod.conditions[index].onWho = event.currentTarget.value
    
        // Re-init condition.values to avoid conflicts
        newMethod.conditions[index].value1 = ""
        newMethod.conditions[index].value2 = ""

          if (event.currentTarget.value === "On ..") {
            newMethod.conditions[index].onWho = null
          } 
        setMethod(newMethod);
    }

    const handleChangeLowestOdd = (event) => {
        let newMethod = { ...method }
        newMethod.conditions[index].value1 = event.currentTarget.value

        if (event.currentTarget.value < 1) {
            newMethod.conditions[index].value1 = 1
        }
        if (event.currentTarget.value > 50) {
            newMethod.conditions[index].value1 = 50
        }
        if (event.currentTarget.value > condition.value2) {
            newMethod.conditions[index].value1 = condition.value2
        }

        setMethod(newMethod);
    }

    const handleChangeHighestOdd = (event) => {
        let newMethod = { ...method }
        newMethod.conditions[index].value2 = event.currentTarget.value

        if (event.currentTarget.value < condition.value1) {
            newMethod.conditions[index].value2 = condition.value1
        }
        if (event.currentTarget.value > 50) {
            newMethod.conditions[index].value2 = 50
        }

        setMethod(newMethod);
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