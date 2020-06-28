import React, { useState } from "react";

export default function MethodManagement(props) {
  const [method, setMethod] = useState({});
  const [teams, setTeams] = useState([
    "Team1",
    "Team2",
    "Team3",
    "Team4",
    "Team5",
  ]);
  const [modal, setModal] = useState({ active: false, for: "", value: [] });
  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="title is-4">
            {props.method.name ? props.method.name : "New Method"}
          </h2>
          <form>
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  className="input is-small"
                  placeholder="Name..."
                />
              </div>
            </div>
            <div className="field is-grouped is-grouped-multiline">
              <div className="field has-addons control">
                <div className="control">
                  <span className="select">
                    <select>
                      <option>$</option>
                      <option>£</option>
                      <option>€</option>
                    </select>
                  </span>
                </div>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    placeholder="Bet ..."
                  />
                </div>
              </div>
              <div className="control">
                <span className="select">
                  <select>
                    <option>On ...</option>
                    <option>Draw</option>
                    <option>Home</option>
                    <option>Away</option>
                  </select>
                </span>
              </div>
              {method.onTeams ? (
                <div className="field has-addons control">
                  <div className="control">
                    <span className="select">
                      <select
                        value={method.on2 ? method.on2 : "On ..."}
                        onChange={(event) => {
                          let newMethod = { ...method };
                          newMethod.on2 = event.currentTarget.value;
                          setMethod(newMethod);
                        }}
                      >
                        <option>On ...</option>
                        <option>Teams</option>
                        <option>Any</option>
                      </select>
                    </span>
                  </div>
                  <div className="control" id="team1">
                    <a
                      className="button is-link"
                      onClick={() => {
                        setModal({
                          active: true,
                          for: "on",
                          value: [...method.onTeams],
                        });
                      }}
                    >{`${method.onTeams.length} T`}</a>
                  </div>
                </div>
              ) : (
                <div className="control">
                  <span className="select">
                    <select
                      value={method.on2 ? method.on2 : "On ..."}
                      onChange={(event) => {
                        let newMethod = { ...method };
                        if (event.currentTarget.value === "Teams") {
                          newMethod.onTeams = [];
                          setModal({
                            active: true,
                            for: "on",
                            value: [],
                          });
                        }
                        newMethod.on2 = event.currentTarget.value;
                        setMethod(newMethod);
                      }}
                    >
                      <option>On ...</option>
                      <option>Teams</option>
                      <option>Any</option>
                    </select>
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
      <div className={`modal ${modal.active && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <h3 className="title is-4">Choose Teams</h3>
            {modal.for === "on" ? (
              <div className="columns is-multiline box">
                {teams.map((team) => (
                  <div className="column">
                    <label className="checkbox" key={team}>
                      <input
                        id={team}
                        type="checkbox"
                        checked={modal.value.includes(team)}
                        onChange={(event) => {
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
                        }}
                      />

                      {team}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
            <div className="buttons">
              <a
                className="button is-success"
                onClick={() => {
                  let newMethod = { ...method };
                  if (modal.for === "on") {
                    newMethod.onTeams = modal.value;
                  }
                  setMethod(newMethod);
                  setModal({ active: false, for: "", value: [] });
                }}
                disabled={modal.value.length === 0}
              >
                Save
              </a>
              <a
                className="button is-danger"
                onClick={() => {
                  if (modal.for === "on" && method.onTeams.length === 0) {
                    let newMethod = { ...method };
                    newMethod.onTeams = null;
                    newMethod.on2 = null;
                    setMethod(newMethod);
                  }
                  setModal({ active: false, for: "", value: [] });
                }}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
