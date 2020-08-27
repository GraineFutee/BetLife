import React from "react";


// -------------------------------------------------------------------------------------
// Line of Each Method Summary
// -------------------------------------------------------------------------------------
export default function MethodSummaryLine({method, setMethod, methods, setMethods}) {

    const handleClickModify = (event) => {
        setMethod(
            methods.find(
              (method) => method.id === Number(event.currentTarget.id)
            )
          )
    }

    const handleClickDelete = (event) => {
        let newMethods = [...methods];
  
        console.log(newMethods)
        //method.id === Number(event.currentTarget.id) ? null : method

        setMethods(newMethods.filter(
          (method) => method.id !== Number(event.currentTarget.id)
        ))
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
                      id={method.id}
                      onClick={handleClickModify}
                    >
                      Modify
                    </button>
                </td>

                <td>
                    <button
                      className="button is-danger is-small is-rounded"
                      id={method.id}
                      onClick={handleClickDelete}
                    >
                      Delete
                    </button>
                </td>
            </tr>
        </>
      );
}