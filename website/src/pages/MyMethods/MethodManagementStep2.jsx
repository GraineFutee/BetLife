import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'

// Components
import MethodManagementStep3 from "./MethodManagementStep3";
import Buttons from "./Buttons";
import Simulation from './parts/Simulation'
import PickBetTeams from './parts/PickBetTeams'
import PickAgainstTeams from './parts/PickAgainstTeams'

// State from reducers
import { setBetHowMany, setCurrency, setBetOnWho, setPlayingWhere, setAgainstWho } from "../../reducers/methodReducer";



// Todo : use only one components for "PickBetTeams" and "PickAgainstTeams"
// And maybe get Teams from DB only inside - cause no need somewhere else ?
// Maybe not a good idea - cause means a GET request each time is open..  ?



// -------------------------------------------------------------------------------------
// Second part of the form - Basic choices for betting method
// -------------------------------------------------------------------------------------
export default function MethodManagementStep2() {

    const dispatch = useDispatch()
    const method = useSelector(state => state.method)
    const displaySimulation = useSelector(state => state.management.displaySimulation)

    // Those variables are only useful inside this component - No use of Redux
    // Disable some options when draw is picked
    const [ drawIsSelected, setDrawIsSelected ] = useState(method.betOnWho === "Draw" ? true : false)
    // Open a specific Window for Team's choices
    const [ displayPickBetTeams, setDisplayPickBetTeams ] = useState(false)
    const [ displayPickAgainstTeams, setDisplayPickAgainstTeams ] = useState(false)



    // -------------------------------------------------------------------------------------

    const handleChangeBetOnWho = (event) => {
        if (event.currentTarget.value === "Specific(s) Team(s)") {
            setDisplayPickBetTeams(true)
        } else {
            dispatch(setBetOnWho(event.currentTarget.value))
            setDisplayPickBetTeams(false)
        }

        if (event.currentTarget.value === "Draw") {
            setDrawIsSelected(true)
        } else {
            setDrawIsSelected(false)
        }
    }


    const handleChangeAgainstWho = (event) => {
        if (event.currentTarget.value === "Specific(s) Team(s)") {
            setDisplayPickAgainstTeams(true)
        } else {
            dispatch(setAgainstWho(event.currentTarget.value))
            setDisplayPickAgainstTeams(false)
        }
    }

    const handleClickBetOnWhoYourTeams = (event) => {
        event.preventDefault()
        setDisplayPickBetTeams(true)
    }

    const handleClickAgainstWhoYourTeams = (event) => {
        event.preventDefault()
        setDisplayPickAgainstTeams(true)
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
                            onChange={(event) => dispatch(setBetHowMany(event.currentTarget.value))}
                        />
                    </div>

                    <div className="control">
                        <span className="select is-small">
                            <select
                                value={method.currency}
                                onChange={(event) => dispatch(setCurrency(event.currentTarget.value))}
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

                    {(typeof method.betOnWho !== 'object' || method.betOnWho === null) ?
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
                        :
                        <button
                            className="button is-small is-info"
                            onClick={handleClickBetOnWhoYourTeams}
                        >
                            Your Team(s)
                        </button>
                    }
                </div>

                {!drawIsSelected &&
                    <div className="control is-flex">

                        <label className="label is-small mt-2 mr-1" > Playing.. </label>

                        <span className="select is-small">
                            <select
                                value={method.playingWhere ? method.playingWhere : "Where ?"}
                                onChange={(event) => dispatch(setPlayingWhere(event.currentTarget.value))}
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

                        {(typeof method.againstWho !== 'object' || method.againstWho === null) ?
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
                            :
                            <button
                                className="button is-small is-link"
                                onClick={handleClickAgainstWhoYourTeams}
                            >
                                Your Team(s)
                        </button>
                        }
                    </div>
                }
            </div>

            <MethodManagementStep3 />

            <Buttons />

            {displayPickBetTeams && <PickBetTeams setDisplayPickBetTeams={setDisplayPickBetTeams} />}
            {displayPickAgainstTeams && <PickAgainstTeams setDisplayPickAgainstTeams={setDisplayPickAgainstTeams} />}

            {displaySimulation && <Simulation />}

        </>
    );
}
