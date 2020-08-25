import React from 'react'


// -------------------------------------------------------------------------------------
// Inside Modal box - One team checkbox
// -------------------------------------------------------------------------------------
export default function ({ modal, setModal, team}) {

    const handleCheckTeam = (event) => {
        let newModal = { ...modal };
        if (event.currentTarget.checked) {
            newModal.value.push(event.currentTarget.id);
        } else {
            newModal.value.splice(
                newModal.value.indexOf(event.currentTarget.id),
                1
            );
        }
        setModal(newModal);        
    }
// -------------------------------------------------------------------------------------
    return (

        <div className="column">
            <label
                className="checkbox"
                key={team}
                style={{ whiteSpace: "nowrap" }}
            >
            <input
                id={team}
                type="checkbox"
                checked={modal.value.includes(team)}
                onChange={handleCheckTeam}
            />
            {" "}
            {team}
            </label>
        </div>
    )
}