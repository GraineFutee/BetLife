import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

// Components
import MethodManagementStep1 from "./MethodManagementStep1";
import MethodSummaryLine from "./parts/MethodSummaryLine";
import Simulation from './parts/Simulation'

// State from reducers
import { initializeMethods } from "../../reducers/methodsReducer";
import { backToNull, setId, setDate, setBetHowMany, setCurrency } from "../../reducers/methodReducer";




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


  const generateID = () => {
      // Considering, now, that a random ID < 100000 is enough
      return Math.floor(Math.random() * 100000)
  }

  const generateDate = () => {
      const d = new Date()
      return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
  }

  const handleClickNewMethod = () => {
    dispatch(setId(generateID()))
    dispatch(setDate(generateDate()))
    dispatch(setBetHowMany(1))
    dispatch(setCurrency("€"))
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
            className="button is-light is-small has-tooltip-bottom has-tooltip-multiline has-tooltip-info"
            data-tooltip={method !== null ? "Save or Cancel the current method before create a new one" : null}
            onClick={handleClickNewMethod}
            disabled={method !== null}
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
