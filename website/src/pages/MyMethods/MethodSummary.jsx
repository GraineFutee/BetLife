import React from "react";


// -------------------------------------------------------------------------------------
// Line of Each Method Summary
// -------------------------------------------------------------------------------------
export default function MethodSummary({method, methods, setMethods, setMethodForManagement}) {

    const handleClickModify = (event) => {
        setMethodForManagement(
            methods.find(
              (method) => method.id === event.currentTarget.id
            )
          )
    }

    const handleClickDelete = (event) => {
        let newMethods = [...methods];
        newMethods.splice(
          newMethods.findIndex(
            (method) => method.id === event.currentTarget.id
          ),
          1
        );
        setMethods(newMethods);
      }

// -------------------------------------------------------------------------------------
    return (
        <>
          <tr>
                <th>{method.name}</th>

                <td>{method.creation}</td>

                <td>{method.resume}</td>

                <td>
                    <button
                      className="button is-info is-small is-rounded"
                      id={method.id} // Why ??
                      onClick={handleClickModify}
                    >
                      Modify
                    </button>
                </td>

                <td>
                    <button
                      className="button is-danger is-small is-rounded"
                      id={method.id} // Why ??
                      onClick={handleClickDelete}
                    >
                      Delete
                    </button>
                </td>
            </tr>
        </>
      );
}