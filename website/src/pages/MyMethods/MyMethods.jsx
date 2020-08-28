import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import MethodManagementStep1 from "./parts/MethodManagementStep1";
import MethodSummaryLine from "./MethodSummaryLine";
import Simulation from './parts/Simulation'

import { initializeMethods } from "../../reducers/methodsReducer";
import { initializeMethod, backToNull } from "../../reducers/methodReducer";
import { initializeExceptTeams } from "../../reducers/managementReducer";




// -------------------------------------------------------------------------------------
// Main page - My Methods 
// -------------------------------------------------------------------------------------
export default function MyMethods() {

  const dispatch = useDispatch()
  const methods = useSelector(state => state.methods)
  const method = useSelector(state => state.method)

  const displaySimulation = useSelector(state => state.management.displaySimulation)

  // "Initialize" pick up methods into fakeDb, Should come from Each user own methods
  useEffect(() => {
    dispatch(initializeMethods())
    dispatch(backToNull()) // Force the current method (new or to modify) to stay null - don't know why it is necessary
  }, [dispatch]) // Maybe because of the dispatch dependencie, maybe not


  const handleClickNewMethod = () => {
    dispatch(initializeMethod())
    dispatch(initializeExceptTeams())
  }

// -------------------------------------------------------------------------------------
  return (
    <>
      <section className="section">

        <div className="container">

          <h2 className="title is-3">My Methods</h2>

          <table className="table">
            <tbody>

            {methods.map((existingMethod) => <MethodSummaryLine method={existingMethod} key={existingMethod.id} /> )}

              <tr>
                <td>
                  <button
                    className="button is-light is-small"
                    onClick={handleClickNewMethod}
                  >
                    <i className="fas fa-plus-circle"></i>
                  </button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </section>

      {displaySimulation && <Simulation />}

      {method && <MethodManagementStep1 />}

    </>
  );
}
 