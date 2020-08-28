import React from "react";
import { useDispatch, useSelector } from 'react-redux'


import MethodManagementStep2 from './MethodManagementStep2'
import Modal from './modal/Modal'

import { setChampionship, setName } from "../../../reducers/methodReducer";
import { setChampionshipIsDefine } from "../../../reducers/managementReducer";


// -------------------------------------------------------------------------------------
// First part of the form - Choice of championship - Dealing with the method state 
// -------------------------------------------------------------------------------------
export default function MethodManagementStep1() {

  const dispatch = useDispatch()
  // Championship is the first option to define, can't go further without
  const championshipIsDefine = useSelector(state => state.management.championshipIsDefine)

  const method = useSelector(state => state.method)
  console.log(method)

// -------------------------------------------------------------------------------------

  const handleChangeChampionship = (event) => {
    dispatch(setChampionship(event.currentTarget.value))
    dispatch(setChampionshipIsDefine())
  }

  /*
  const handleChangeName = (event) => {
    dispatch(setName(event.currentTarget.value))
  }
  
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
  }*/


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
            </div>

            {championshipIsDefine ? <MethodManagementStep2 /> :  null  }

          </form>
        </div>
      </section>

      <Modal  />

    </>
  );
}