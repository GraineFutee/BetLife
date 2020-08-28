import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setAgainstWho } from '../../../reducers/methodReducer';


// -------------------------------------------------------------------------------------
// Modal box - Choose one or more team(s)
// -------------------------------------------------------------------------------------
export default function ({setDisplayPickAgainstTeams}) {

  const dispatch = useDispatch()
  const teams = useSelector(state => state.management.teams)
  const method = useSelector(state => state.method)

  const [pickedTeams, setPickedTeams] = useState( (typeof method.betOnWho === 'object' && method.betOnWho !== null) ? method.betOnWho : [])

  // -------------------------------------------------------------------------------------
  const handleClickSave = (event) => {
      event.preventDefault()
      dispatch(setAgainstWho(pickedTeams))
      setDisplayPickAgainstTeams(false)
  }

  const handleClickCancel = (event) => {
    setPickedTeams([])
    dispatch(setAgainstWho(null))
    setDisplayPickAgainstTeams(false)
  }

  const handleCheckTeam = (event, teamName) => {
    if (event.currentTarget.checked) {

        const newPickedTeams = [...pickedTeams]
        newPickedTeams.push(teamName)
        setPickedTeams(newPickedTeams)

    } else {
        const newPickedTeams = [...pickedTeams]
        newPickedTeams.splice( pickedTeams.indexOf(teamName), 1 )
        setPickedTeams(newPickedTeams)
    }

}

// -------------------------------------------------------------------------------------
  return (
    <div className={"modal is-active"}>

      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">

          <h3 className="title is-4">Choose Your Teams</h3>

          <div className="columns is-multiline box is-mobile">
            {teams.map((team) =>  
                <div key={team.name} className="column">
                  <label
                      className="checkbox"
                      style={{ whiteSpace: "nowrap" }}
                  >
                  <input
                      id={team.name}
                      type="checkbox"
                      checked={pickedTeams.includes(team.name)}
                      onChange={(event) => handleCheckTeam(event, team.name)}
                  />
                  {" "}
                  {team.name}
                  </label>
              </div>
            )}
          </div>


          <div className="buttons">

            <button
              className="button is-success is-small"
              onClick={handleClickSave}
            >
              Save
            </button>

            <button
              className="button is-danger is-small"
              onClick={handleClickCancel}
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}