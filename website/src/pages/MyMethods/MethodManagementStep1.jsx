import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

// Components
import MethodManagementStep2 from './MethodManagementStep2'

// State from reducers
import { setChampionship, setName, backToNull } from "../../reducers/methodReducer";
import { setChampionshipIsDefine, initializeTeams } from "../../reducers/managementReducer";



// -------------------------------------------------------------------------------------
// First part of the form - Choice of championship 
// -------------------------------------------------------------------------------------
export default function MethodManagementStep1() {

  const dispatch = useDispatch()
  // Championship is the first option to define, can't go further without
  const championshipIsDefine = useSelector(state => state.management.championshipIsDefine)

  const method = useSelector(state => state.method) // Either new one (null) or existing one
  console.log(method) // Keep an eye on each step of method building

  // Get all teams reagarding the championship (right now, only one championship)
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

  const handleChangeChampionship = (event) => {
    dispatch(setChampionship(event.currentTarget.value))
    dispatch(setChampionshipIsDefine())
  }

  const handleClickCancel = (event) => {
    event.preventDefault()
    dispatch(backToNull())
}


// -------------------------------------------------------------------------------------
  return (

    <>
      <section className="section">
        <div className="container">

          <h2 className="title is-4">
            {method.name ? method.name : "New Method"}
          </h2>

          <form>

            <div className="field is-grouped">
              <div className="control">
                <span className="select is-small">
                  <select
                    value={method.championship ? method.championship : "Championship"}
                    onChange={handleChangeChampionship}
                    required
                  >
                    <option>Championship</option>
                    <option>Premier League</option>
                  </select>
                </span>
              </div>

              <div className="control">
                <input
                  type="text"
                  className="input is-small"
                  placeholder="Name.."
                  value={method.name ? method.name : ""}
                  onChange={(event) => dispatch(setName(event.currentTarget.value))}
                />
              </div>

              {!championshipIsDefine &&
                <button
                  className="button is-rounded is-small is-danger"
                  onClick={handleClickCancel}
                >
                  Cancel
                </button>
              }
            </div>

            {championshipIsDefine ? <MethodManagementStep2 /> :  null  }

          </form>
        </div>
      </section>

    </>
  );
}