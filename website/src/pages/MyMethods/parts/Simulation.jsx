import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSimulation } from '../../../reducers/managementReducer'
import SimulationResultLine from './SimulationResultLine'


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
            {method.betOnWho === "Draw" ? 
              <span className="has-text-info"> on Draws </span>  : 
                <span> 
                  each time 
                  <span className="is-italic has-text-info mx-1"> 
                    { method.betOnWho === "All Teams" ? " any team " : ` [ ${method.betOnWho} ] `} 
                  </span>
                  is playing
                  <span className="is-italic has-text-info mx-1"> 
                    { method.playingWhere } 
                  </span>
                  against
                  <span className="is-italic has-text-info mx-1"> 
                    { method.againstWho === "Any Teams" ? " any team " : ` [ ${method.againstWho} ] `} 
                  </span>
                  .
                </span>
            }
          </p>

          <br />

          {method.conditions &&
            <div>
              <p>
                Only if the following conditions are met :
              </p>
              {method.conditions.map(condition =>
                <p key={condition.id} className="ml-2">
                  <span> 
                    - 
                    { condition.onWhat === "The Odds" ?
                    <span> 
                      <span className="is-italic has-text-info mx-1"> 
                         { condition.onWhat }
                      </span>
                      of
                      <span className="is-italic has-text-info mx-1"> 
                        { condition.onWho } 
                      </span>
                      are between
                      <span className="is-italic has-text-info mx-1"> 
                         { condition.value1 }
                      </span>
                      and
                      <span className="is-italic has-text-info mx-1"> 
                        { condition.value2 } 
                      </span>
                    </span>
                    :
                    <span> 
                      <span className="is-italic has-text-info mx-1"> 
                         { condition.onWho }
                      </span>
                      <span className="is-italic has-text-info mx-1"> 
                         { condition.value1 }
                      </span>
                      the last
                      <span className="is-italic has-text-info mx-1"> 
                        { condition.value2 } 
                      </span>
                      matches
                    </span>
                    }
                  </span>  
                </p>
              )}
            </div>
          }

          <br />
          <hr />
          <br />

          <div className="table-container">
            <table className="table is-hoverable">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Profit</th>
                  <th>Number of bets</th>
                  <th>% of winning bets</th>
                  <th>ROI/Yield</th>
                </tr>
              </thead>

              <tbody>
                <SimulationResultLine year={"2011-2012"}/>
                <SimulationResultLine year={"2012-2013"}/>
                <SimulationResultLine year={"2013-2014"}/>
                <SimulationResultLine year={"2014-2015"}/>
                <SimulationResultLine year={"2015-2016"}/>
                <SimulationResultLine year={"2016-2017"}/>
                <SimulationResultLine year={"2017-2018"}/>
                <SimulationResultLine year={"2018-2019"}/>
                <SimulationResultLine year={"2019-2020"}/>
              </tbody>
            </table>
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