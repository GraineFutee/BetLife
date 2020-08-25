import React from "react";
import Condition from "./Condition";


// -------------------------------------------------------------------------------------
// Third part of the form - Add conditions
// -------------------------------------------------------------------------------------
export default function MethodManagementStep2({ method, setMethod }) {

    const handleClickAddCondition = (event) => {
        event.preventDefault()

        let newMethod = { ...method };

        // method.condition should be limited (?):
        //  - 0 conditions
        //  - 1 condition (either "Odd" or "Results")
        //  - 2 conditions ("Odd" and "Results")
        // If we allow more, there is many possiblity of conflicts inside conditions
        if (!newMethod.conditions) {
            newMethod.conditions = [];
        } 

        newMethod.conditions.push({
            id:
                newMethod.conditions.length > 0
                    ? newMethod.conditions[newMethod.conditions.length - 1]
                        .id + 1
                    : 0,
            onWhat: "",
            onWho: "",
            value1: "",
            value2: "",
        });

        setMethod(newMethod);
    }

// -------------------------------------------------------------------------------------
    return (
        
        <div className="box">
            {method.conditions &&
                method.conditions.map((condition) => 
                    <Condition 
                        key={condition.id} 
                        index={condition.id}
                        condition={condition}
                        method={method}
                        setMethod={setMethod}
                    />
                )
            }

            <button 
                className="button is-small is-light"
                onClick={handleClickAddCondition}
            >
                Add Condition
            </button>
        </div>
    );
}
