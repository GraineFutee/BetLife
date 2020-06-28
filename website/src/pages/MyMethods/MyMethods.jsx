import React, { useState } from "react";

import ManageMethod from "./parts/MethodManagement";
import MethodManagement from "./parts/MethodManagement";

export default function MyMethods() {
  const [methods, setMethods] = useState([
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
    },
  ]);
  const [methodForManagement, setMethodForManagement] = useState(null);
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title is-3">My Methods</h1>
          <table className="table">
            <tbody>
              {methods.map((method) => (
                <tr key={method.id}>
                  <th>{method.name}</th>
                  <td>{method.creation}</td>
                  <td>{method.resume}</td>
                  <td>
                    <a
                      className="button is-info is-small is-rounded"
                      id={method.id}
                      onClick={(event) =>
                        setMethodForManagement(
                          methods.find(
                            (method) => method.id == event.currentTarget.id
                          )
                        )
                      }
                    >
                      Modify
                    </a>
                  </td>
                  <td>
                    <a
                      className="button is-danger is-small is-rounded"
                      id={method.id}
                      onClick={(event) => {
                        let newMethods = [...methods];
                        newMethods.splice(
                          newMethods.findIndex(
                            (method) => method.id == event.currentTarget.id
                          ),
                          1
                        );
                        setMethods(newMethods);
                      }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <a
                    className="button is-light is-small"
                    onClick={() => setMethodForManagement({})}
                  >
                    <i className="fas fa-plus-circle"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {methodForManagement && <MethodManagement method={methodForManagement} />}
    </>
  );
}
