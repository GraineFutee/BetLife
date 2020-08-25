import React, {useState} from "react";
import MethodManagementStep3 from "./MethodManagementStep3";
import SaveCancelButtons from "./SaveCancelButtons";

// -------------------------------------------------------------------------------------
// Second part of the form - Basic choices for betting method
// -------------------------------------------------------------------------------------
export default function MethodManagementStep2({ method, setMethod, setModal }) {

    // Because need to disable some option when draw is picked
    const [drawIsSelected, setDrawIsSelected] = useState(false)


// -------------------------------------------------------------------------------------
    const handleChangeBetHowMany = (event) => {
        let newMethod = { ...method }
        newMethod.betHowMany = event.currentTarget.value

        // Need to check here if we receive a suitable number ? 
        if (event.currentTarget.value < 1) {
            newMethod.betHowMany = 1
        }
        setMethod(newMethod);
    }

    const handleChangeCurrency = (event) => {
        let newMethod = { ...method }
        newMethod.currency = event.currentTarget.value
        setMethod(newMethod);
    }

    const handleChangeBetOnWho = (event) => {
        let newMethod = { ...method }
        newMethod.betOnWho = event.currentTarget.value
    
          if (event.currentTarget.value === "Bet On Who?") {
            newMethod.betOnWho = null
          } 
          if (event.currentTarget.value === "Specific(s) Team(s)") {
            setModal({
                active: true,
                for: "betOnSpecific",
                value: [method.betOnWho],
            })
          }

        setDrawIsSelected((event.currentTarget.value === "Draw"))
        setMethod(newMethod);
      }
    
    const handleChangePlayingWhere = (event) => {
        let newMethod = { ...method }
        newMethod.playingWhere = event.currentTarget.value
    
          if (event.currentTarget.value === "Where ?") {
            newMethod.playingWhere = null
          } 
        setMethod(newMethod);
    }

    const handleChangeAgainstWho = (event) => {
        let newMethod = { ...method }
        newMethod.againstWho = event.currentTarget.value
    
          if (event.currentTarget.value === "Against Who?") {
            newMethod.againstWho = null
          } 
          if (event.currentTarget.value === "Specific(s) Team(s)") {
            setModal({
                active: true,
                for: "againstSpecific",
                value: [method.againstWho],
            })
          }
        setMethod(newMethod);
    }

// -------------------------------------------------------------------------------------
    return (

        <>
            <div className="field is-grouped is-grouped-multiline">

                <div className="field has-addons control">

                    <div className="control">
                        <input
                            type="number"
                            className="input is-small"
                            value={method.betHowMany}
                            onChange={handleChangeBetHowMany}
                        />
                    </div>

                    <div className="control">
                        <span className="select is-small">
                            <select
                                value={"€"}
                                onChange={handleChangeCurrency}
                            >
                                <option>$</option>
                                <option>£</option>
                                <option>€</option>
                            </select>
                        </span>
                    </div>

                </div>

                <div className="control is-flex">
                    <label className="label is-small mt-2 mr-1" > On.. </label>

                    <span className="select is-small">
                        <select
                            value={method.betOnWho ? method.betOnWho : "Bet On Who?"}
                            onChange={handleChangeBetOnWho}
                        >
                            <option>Bet On Who?</option>
                            <option>All Teams</option>
                            <option>Specific(s) Team(s)</option>
                            <option>Draw</option>
                        </select>
                    </span>
                </div>

                {!drawIsSelected &&
                <div className="control is-flex">

                    <label className="label is-small mt-2 mr-1" > Playing.. </label>

                    <span className="select is-small">
                        <select
                            value={method.playingWhere ? method.playingWhere : "Where ?"}
                            onChange={handleChangePlayingWhere}
                        >
                            <option>Where ?</option>
                            <option>Home</option>
                            <option>Away</option>
                            <option>Home or Away</option>
                        </select>
                    </span>
                </div>
                }
                {!drawIsSelected &&
                <div className="control is-flex">
                    <label className="label is-small mt-2 mr-1" > Against.. </label>

                    <span className="select is-small">
                        <select
                            value={method.againstWho ? method.againstWho : "Against Who?"}
                            onChange={handleChangeAgainstWho}
                        >
                            <option>Against Who?</option>
                            <option>Any Teams</option>
                            <option>Specific(s) Team(s)</option>
                        </select>
                    </span>
                </div>
                }           
            </div>


            <MethodManagementStep3 
                method={method}
                setMethod={setMethod}
            />

            <SaveCancelButtons />
        </>
    );
}
