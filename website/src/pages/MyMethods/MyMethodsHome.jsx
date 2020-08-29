import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

// Components
import MethodManagementStep1 from "./MethodManagementStep1";
import MethodSummaryLine from "./parts/MethodSummaryLine";
import Simulation from './parts/Simulation'

// State from reducers
import { initializeMethods } from "../../reducers/methodsReducer";
import { initializeMethod, backToNull } from "../../reducers/methodReducer";
import { initializeExceptTeams } from "../../reducers/managementReducer";


// Todo => Check line 36/37 if really necessary
// Possibility => Hide button for new method when a method is already opened
// User have to Cancel/Save the previous one before asking a new one


// -------------------------------------------------------------------------------------
// Main page - My Methods Summary
// -------------------------------------------------------------------------------------
export default function MyMethods() {

  const dispatch = useDispatch()
  const methods = useSelector(state => state.methods)  // List of existing/saved methods
  const method = useSelector(state => state.method)   // Display method management when != null (null at first)
  const displaySimulation = useSelector(state => state.management.displaySimulation)


  useEffect(() => {
    dispatch(initializeMethods())  // Come from DB (fake for now)
    dispatch(backToNull()) // Need to force the current method (new or to modify) to stay null - don't know why it is necessary
  }, [dispatch])


  const handleClickNewMethod = () => {
    dispatch(initializeMethod())   // Initialize in case button is clicked when a method is already opened
    dispatch(initializeExceptTeams())
  }

  // -------------------------------------------------------------------------------------
  return (
    <section className="section" style={{ minHeight: "95vh" }}>

      <h2 className="title has-text-centered">My Methods</h2>

      <div className="columns is-vcentered">
        <div className="column is-three-quarters">

          <div className="container">
            <table className="table">
              <tbody>
                {methods.map((existingMethod) =>
                  <MethodSummaryLine method={existingMethod} key={existingMethod.id} />
                )
                }
              </tbody>
            </table>
          </div>

        </div>

        <div className="column has-text-centered">
          <p className="content mb-2">Create a new Method</p>
          <button
            className="button is-light is-small"
            onClick={handleClickNewMethod}
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>

      {displaySimulation && <Simulation />}

      {method && <MethodManagementStep1 />}

    </section>
  );
}
