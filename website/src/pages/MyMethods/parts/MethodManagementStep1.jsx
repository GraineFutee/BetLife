import React, { useState } from "react";

import MethodManagementStep2 from './MethodManagementStep2'
import Modal from './modal/Modal'


// -------------------------------------------------------------------------------------
// First part of the form - Choice of championship - Dealing with the method state 
// -------------------------------------------------------------------------------------
export default function MethodManagementStep1({method, setMethod, methods, setMethods}) {

  // Championship is the first option to define, can't go further without
  const [championshipIsDefine, setChampionshipIsDefine] = useState(method.championship ? true : false)


  console.log(method)

  // Deal with the choice of one or more specific team(s)
  const [modal, setModal] = useState({ active: false, for: "", value: [] }); 

  // Teams needs to be set regarding the choosen championship
  // Means we need a list of all teams for each championship in the database
  // The best is probably to limit the list with only the 20 teams playing the current season
  // const [teams, setTeams] = useState([]); 
  const teams = ["Team1", "Team2", "Team3" ]



// -------------------------------------------------------------------------------------

  const handleChangeChampionship = (event) => {
    let newMethod = { ...method }
    newMethod.championship = event.currentTarget.value

      if (event.currentTarget.value === "Championship") {
        newMethod.championship = null
        setChampionshipIsDefine(false)
      } else {
        setChampionshipIsDefine(true)
      }

    setMethod(newMethod);
  }

  const handleChangeName = (event) => {
    let newMethod = { ...method }
    newMethod.name = event.currentTarget.value

    if (event.currentTarget.value === "") {
      newMethod.name = null
    }
    setMethod(newMethod);
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
                  onChange={handleChangeName}
                />
              </div>
            </div>

            {championshipIsDefine ? 
              <MethodManagementStep2 
                method={method}
                setMethod={setMethod}
                setModal={setModal}
                teams={teams}
                methods={methods}
                setMethods={setMethods}
                setChampionshipIsDefine={setChampionshipIsDefine}
              /> : 
              null
            }

          </form>
        </div>
      </section>

      <Modal 
        teams={teams}
        setMethod={setMethod}
        method={method}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
}
