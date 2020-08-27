import React, { useState } from "react";

import MethodManagementStep1 from "./parts/MethodManagementStep1";
import MethodSummaryLine from "./MethodSummaryLine";

import {methodsFromDb} from '../../fakeDb'



// -------------------------------------------------------------------------------------
// Main page - My Methods 
// -------------------------------------------------------------------------------------
export default function MyMethods() {

  const [methods, setMethods] = useState(methodsFromDb);

  // Should be either a new method to create, or an existing one to modify
  const [method, setMethod] = useState(null);


// -------------------------------------------------------------------------------------
  return (
    <>
      <section className="section">
        <div className="container">

          <h1 className="title is-3">My Methods</h1>

          <table className="table">
            <tbody>

              {methods.map((method) => 
                <MethodSummaryLine 
                  key={method.id}
                  method={method}
                  methods={methods}
                  setMethod={setMethod}
                  setMethods={setMethods}
                />
              )}

              <tr>
                <td>
                  <button
                    className="button is-light is-small"
                    onClick={() => setMethod({})}
                  >
                    <i className="fas fa-plus-circle"></i>
                  </button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </section>

      {method && 
        <MethodManagementStep1 
          method={method} 
          setMethod={setMethod}
          methods={methods}
          setMethods={setMethods}
        />
      }

    </>
  );
}
