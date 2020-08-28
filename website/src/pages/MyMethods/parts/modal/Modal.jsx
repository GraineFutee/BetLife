import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

//import TeamCheckbox from './TeamCheckbox';

import { initializeTeams } from "../../../../reducers/managementReducer";
import { setBetOnWho, setAgainstWho } from '../../../../reducers/methodReducer';
import { initializeModal } from '../../../../reducers/managementReducer';
import { addTeamToModal, removeTeamToModal, setModalValue } from '../../../../reducers/managementReducer'


// -------------------------------------------------------------------------------------
// Modal box - Choose one or more team(s)
// -------------------------------------------------------------------------------------
export default function () {

  const dispatch = useDispatch()
  const modal = useSelector(state => state.management.modal)
  const teams = useSelector(state => state.management.teams)

  const method = useSelector(state => state.method)
  console.log(method)

  // Get all teams reagrding the championship (right now, only one championship)
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const result = await axios(
          `https://betlifeback.herokuapp.com/api/teams/championship/${1}`
        );
        dispatch(initializeTeams(result.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeams();
  }, [dispatch]);
  

  // -------------------------------------------------------------------------------------
  const handleClickSave = (event) => {

      switch (modal.for) {
        case "betOnSpecific":
          dispatch(setBetOnWho(modal.value))
          break
        case "againstSpecific":
          dispatch(setAgainstWho(modal.value))
          break
        default:
          break
      }
      dispatch(initializeModal())
  }

  const handleClickCancel = (event) => {
    console.log("When cancel is clicked, before : ", modal)
    switch (modal.for) {
      case "betOnSpecific":
        dispatch(setBetOnWho(null))
        break
      case "againstSpecific":
        dispatch(setAgainstWho(null))
        break
      default:
        break
    }
    console.log("When cancel is clicked, after : ", method.betOnWho)
    dispatch(initializeModal())
  }

  const handleCheckTeam = (event, teamName) => {
    if (event.currentTarget.checked) {
        dispatch(addTeamToModal(teamName))
        //setIsChecked(true)
    } else {
        dispatch(removeTeamToModal(teamName))
        //setIsChecked(false)
    }
    // Can't update modal whitout exiting the box 
    dispatch(setModalValue(modal.value))
    //console.log(modal.value)
}
console.log(modal.value)


// -------------------------------------------------------------------------------------
  return (
    <div className={`modal ${modal.active && "is-active"}`}>

      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">

          <h3 className="title is-4">Choose Your Teams</h3>

          <div className="columns is-multiline box is-mobile">
            {teams.map((team) =>  
                <div key={team.name} className="column">
                  <label
                      className="checkbox"
                      htmlFor={team.id}
                      style={{ whiteSpace: "nowrap" }}
                  >
                  <input
                      id={team.name}
                      type="checkbox"
                      checked={modal.value.includes(team.name)}
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
// <TeamCheckbox key={team.id} team={team}/>