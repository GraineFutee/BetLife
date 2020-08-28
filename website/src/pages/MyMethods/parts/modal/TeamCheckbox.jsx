import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTeamToModal, removeTeamToModal, setModalValue } from '../../../../reducers/managementReducer'



// -------------------------------------------------------------------------------------
// Inside Modal box - One team checkbox
// -------------------------------------------------------------------------------------
export default function ({team}) {

    const dispatch = useDispatch()
    const modal = useSelector(state => state.management.modal)
    //const method = useSelector(state => state.method)

    const [ isChecked, setIsChecked ] = useState(modal.value.includes(team.name))

    const handleCheckTeam = (event) => {
        if (event.currentTarget.checked) {
            dispatch(addTeamToModal(team.name))
            setIsChecked(true)
        } else {
            dispatch(removeTeamToModal(team.name))
            setIsChecked(false)
        }
        // Can't update modal whitout exiting the box 
        //setModalValue(modal.value)
        //console.log(modal.value)
    }

// -------------------------------------------------------------------------------------
    return (

        <div className="column">
            <label
                className="checkbox"
                htmlFor={team.id}
                style={{ whiteSpace: "nowrap" }}
            >
            <input
                id={team.id}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckTeam}
            />
            {" "}
            {team.name}
            </label>
        </div>
    )
}