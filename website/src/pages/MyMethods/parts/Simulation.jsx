import React from 'react'


// -------------------------------------------------------------------------------------
// Simulation box - See the chosen method details
// -------------------------------------------------------------------------------------
export default function ({ method, setDisplaySimulation }) {

  const handleClickClose = (event) => {
    event.preventDefault()

    setDisplaySimulation(false)
  }

// -------------------------------------------------------------------------------------
  return (
    <div className="modal is-active">

      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">

          <h3 className="title is-4">Simulation</h3>

            <p>
                You want to bet {method.betHowMany}{method.currency} 
                {method.betOnWho === "Draw" ? "on Draw" : ` each time ${method.betOnWho} plays ${method.playingWhere} against ${method.againstWho}`} 
            </p>
            { method.conditions.length > 0 &&
            <div>
                <p>
                    When the following conditions are met :
                </p>
                    {method.conditions.map(condition =>
                        <p className="ml-2"> - {condition.onWhat} of {condition.onWho} are : {condition.value1} / {condition.value1}</p>
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