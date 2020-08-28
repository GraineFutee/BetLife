import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSimulation } from '../../../reducers/managementReducer'


// -------------------------------------------------------------------------------------
// Simulation box - See the chosen method details
// -------------------------------------------------------------------------------------
export default function () {

  const dispatch = useDispatch()
  const method = useSelector(state => state.management.simulatedMethod)

  const handleClickClose = (event) => {
    event.preventDefault()
    dispatch(closeSimulation())
  }

  // -------------------------------------------------------------------------------------
  return (
    <div className="modal is-active">

      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">

          <h3 className="title is-4">Simulation - {method.name}</h3>

          <p>
            You want to bet <span className="has-text-success"> {method.betHowMany}{method.currency} </span>
            {method.betOnWho === "Draw" ? " on Draws " : ` each time ${ method.betOnWho } plays ${ method.playingWhere } against ${ method.againstWho }`}
          </p>

          {method.conditions &&
            <div>
              <p>
                When the following conditions are met :
                </p>
              {method.conditions.map(condition =>
                <p key={condition.id} className="ml-2"> - {condition.onWhat} of {condition.onWho} are : {condition.value1} / {condition.value1}</p>
              )}
            </div>
          }

          <div className="has-text-danger my-5">
            All work is here : A table with results for each year.
            </div>

          <button
            className="button is-link is-small"
            onClick={handleClickClose}
          >
            Close
            </button>

        </div>

      </div>
    </div>
  )
}