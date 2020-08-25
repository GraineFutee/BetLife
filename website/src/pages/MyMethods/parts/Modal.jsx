import React from 'react'
import Team from './Team'


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
        if (method.betOnWho.length === 0) {
          let newMethod = { ...method };
          newMethod.betOnWho = null;
          setMethod(newMethod);
        }
        break;
      case "againstSpecific":
        if (method.againstWho.length === 0) {
          let newMethod = { ...method };
          newMethod.againstWho = null;
          setMethod(newMethod);
        }
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
              <Team 
                key={team}
                team={team}
                modal={modal}
                setModal={setModal}
              /> )}
          </div>
          )


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