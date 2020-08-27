import React from 'react'
import TeamCheckbox from './TeamCheckbox';


// -------------------------------------------------------------------------------------
// Modal box - Choose one or more team(s)
// -------------------------------------------------------------------------------------
export default function ({ modal, setModal, teams, method, setMethod }) {

  const handleClickSave = (event) => {
      let newMethod = { ...method };
      switch (modal.for) {
        case "betOnSpecific":
          newMethod.betOnWho = modal.value;
          break;
        case "againstSpecific":
          newMethod.againstWho = modal.value;
          break;

        default:
          break;
      }
      setMethod(newMethod);
      setModal({ active: false, for: "", value: [] });
  }

  const handleClickCancel = (event) => {
    switch (modal.for) {
      case "betOnSpecific":
          let newMethod = { ...method };
          newMethod.betOnWho = null;
          setMethod(newMethod);
        break;
      case "againstSpecific":
          let newMethod2 = { ...method };
          newMethod2.againstWho = null;
          setMethod(newMethod2);
        break;
      default:
        break;
    }
    setModal({ active: false, for: "", value: [] });
  }

// -------------------------------------------------------------------------------------
  return (
    <div className={`modal ${modal.active && "is-active"}`}>

      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">

          <h3 className="title is-4">Choose Your Teams</h3>

          <div className="columns is-multiline box is-mobile">
            {teams.map((team) => 
              <TeamCheckbox 
                key={team}
                team={team}
                modal={modal}
                setModal={setModal}
              /> )}
          </div>


          <div className="buttons">

            <button
              className="button is-success is-small"
              onClick={handleClickSave}
              disabled={modal.value.length === 0}
            >
              Save
            </button>

            <button
              className="button is-danger is-small"
              onClick={handleClickCancel}
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}