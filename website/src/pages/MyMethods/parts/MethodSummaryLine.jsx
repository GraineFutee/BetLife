import React from "react";
import { useDispatch } from 'react-redux'

// State from reducers
import { modifyExisting } from "../../../reducers/methodReducer";
import { deleteOne } from "../../../reducers/methodsReducer";
import { setChampionshipIsDefine, openSimulation } from "../../../reducers/managementReducer";



// -------------------------------------------------------------------------------------
// Line of Each Method Summary
// -------------------------------------------------------------------------------------
export default function MethodSummaryLine({ method }) {

  const dispatch = useDispatch()

  const handleClickModify = () => {
    dispatch(modifyExisting(method))
    dispatch(setChampionshipIsDefine())
  }

  // -------------------------------------------------------------------------------------
  return (
    <tr >
      <th>{method.name}</th>

      <td>{method.creation}</td>

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
          className="button is-link is-small is-rounded"
          id={method.id}
          onClick={() => dispatch(openSimulation(method))}
        >
          Simulate
        </button>
      </td>

      <td>
        <button
          className="button is-danger is-small is-rounded"
          id={method.id}
          onClick={() => dispatch(deleteOne(method.id))}
        >
          Delete
        </button>
      </td>

    </tr>
  );
}