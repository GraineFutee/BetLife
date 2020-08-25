import React, { useState } from "react";

import MethodManagementStep1 from "./parts/MethodManagementStep1";
import MethodSummary from "./MethodSummary";

/*
TODO :
  Fixes somes issues :
    Conflict between the "betOnWho" variable coming from the select form and the "betOnWho" variable coming from the modal

  Dealing with Save button :
    Check every variable in order to always send the same format of "method" variable
    
*/
// -------------------------------------------------------------------------------------
// Main page - My Methods 
// -------------------------------------------------------------------------------------
export default function MyMethods() {

  const [methods, setMethods] = useState([
    // Initialize with User own methods
    {
      id: 1,
      name: "test_name",
      creation: "test_creation",
      resume: "test_resume",
    },
    {
      id: 2,
      name: "Idee du siecle",
      creation: "20/06/20",
      resume: "Bet 1000€ On OM",
    }
  ]);
  const [methodForManagement, setMethodForManagement] = useState(null);


// -------------------------------------------------------------------------------------
  return (
    <>
      <section className="section">
        <div className="container">

          <h1 className="title is-3">My Methods</h1>

          <table className="table">
            <tbody>

              {methods.map((method) => (
                <MethodSummary 
                  key={method.id}
                  method={method}
                  methods={methods}
                  setMethodForManagement={setMethodForManagement}
                  setMethods={setMethods}
                />
              ))}

              <tr>
                <td>
                  <button
                    className="button is-light is-small"
                    onClick={() => setMethodForManagement({})}
                  >
                    <i className="fas fa-plus-circle"></i>
                  </button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </section>

      {methodForManagement && <MethodManagementStep1 method={methodForManagement} />}

    </>
  );
}
