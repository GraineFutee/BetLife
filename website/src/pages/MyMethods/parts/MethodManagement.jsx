import React, { useState } from "react";

export default function MethodManagement(props) {
  const [method, setMethod] = useState({});
  const [teams, setTeams] = useState([
    "Team1",
    "Team2",
    "Team3",
    "Team4",
    "Team5",
    "Team6",
    "Team7",
    "Team8",
    "Team9",
    "Team10",
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
                  <span className="select is-small">
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
                    className="input is-small"
                    placeholder="Bet ..."
                  />
                </div>
              </div>
              <div className="control">
                <span className="select is-small">
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
                    <span className="select is-small">
                      <select
                        value={method.on2 ? method.on2 : "On ..."}
                        onChange={(event) => {
                          let newMethod = { ...method };
                          newMethod.on2 = event.currentTarget.value;
                          if (event.currentTarget.value !== "Teams")
                            newMethod.onTeams = null;
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
                      className="button is-link is-small"
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
                  <span className="select is-small">
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
              <div className="control">
                <span className="select is-small">
                  <select>
                    <option>Playing ...</option>
                    <option>Home</option>
                    <option>Away</option>
                    <option>Any</option>
                  </select>
                </span>
              </div>
              {method.againstTeams ? (
                <div className="field has-addons control">
                  <div className="control">
                    <span className="select is-small">
                      <select
                        value={method.against ? method.against : "Against ..."}
                        onChange={(event) => {
                          let newMethod = { ...method };
                          newMethod.against = event.currentTarget.value;
                          if (event.currentTarget.value !== "Teams")
                            newMethod.againstTeams = null;
                          setMethod(newMethod);
                        }}
                      >
                        <option>Against ...</option>
                        <option>Teams</option>
                        <option>Any</option>
                      </select>
                    </span>
                  </div>
                  <div className="control" id="team1">
                    <a
                      className="button is-link is-small"
                      onClick={() => {
                        setModal({
                          active: true,
                          for: "against",
                          value: [...method.againstTeams],
                        });
                      }}
                    >{`${method.againstTeams.length} T`}</a>
                  </div>
                </div>
              ) : (
                <div className="control">
                  <span className="select is-small">
                    <select
                      value={method.against ? method.against : "Against ..."}
                      onChange={(event) => {
                        let newMethod = { ...method };
                        if (event.currentTarget.value === "Teams") {
                          newMethod.againstTeams = [];
                          setModal({
                            active: true,
                            for: "against",
                            value: [],
                          });
                        }
                        newMethod.against = event.currentTarget.value;
                        setMethod(newMethod);
                      }}
                    >
                      <option>Against ...</option>
                      <option>Teams</option>
                      <option>Any</option>
                    </select>
                  </span>
                </div>
              )}
            </div>
            <div className="box">
              <h3 className="title is-5">Conditions</h3>
              {method.conditions &&
                method.conditions.map((condition) => (
                  <div
                    className="field is-grouped is-grouped-multiline"
                    key={condition.id}
                  >
                    <div className="control">
                      <span className="select is-small">
                        <select>
                          <option>On ...</option>
                          <option>The Team</option>
                          <option>The Odd</option>
                        </select>
                      </span>
                    </div>
                    <div className="control">
                      <a
                        className="button is-danger is-small"
                        id={condition.id}
                        onClick={(event) => {
                          let newMethod = { ...method };
                          newMethod.conditions.splice(
                            newMethod.conditions.findIndex(
                              (condition) =>
                                condition.id == event.currentTarget.id
                            ),
                            1
                          );
                          setMethod(newMethod);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </div>
                  </div>
                ))}
              <a
                className="button is-light is-small"
                onClick={() => {
                  let newMethod = { ...method };
                  if (!newMethod.conditions) {
                    newMethod.conditions = [];
                  }
                  newMethod.conditions.push({
                    id:
                      newMethod.conditions.length > 0
                        ? newMethod.conditions[newMethod.conditions.length - 1]
                            .id + 1
                        : 0,
                    on: "",
                    value1: "",
                    value2: "",
                  });
                  setMethod(newMethod);
                }}
              >
                <i className="fas fa-plus-circle"></i>
              </a>
            </div>
            <div className="buttons">
              <button className="button is-success">Save</button>
              <button className="button is-danger">Cancel</button>
            </div>
          </form>
        </div>
      </section>
      <div className={`modal ${modal.active && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <h3 className="title is-4">Choose Teams</h3>
            {modal.active && (
              <div className="columns is-multiline box is-mobile">
                {teams.map((team) => (
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
                      />{" "}
                      {team}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <div className="buttons">
              <a
                className="button is-success is-small"
                onClick={() => {
                  let newMethod = { ...method };
                  switch (modal.for) {
                    case "on":
                      newMethod.onTeams = modal.value;
                      break;
                    case "against":
                      newMethod.againstTeams = modal.value;
                      break;

                    default:
                      break;
                  }
                  setMethod(newMethod);
                  setModal({ active: false, for: "", value: [] });
                }}
                disabled={modal.value.length === 0}
              >
                Save
              </a>
              <a
                className="button is-danger is-small"
                onClick={() => {
                  switch (modal.for) {
                    case "on":
                      if (method.onTeams.length === 0) {
                        let newMethod = { ...method };
                        newMethod.onTeams = null;
                        newMethod.on2 = null;
                        setMethod(newMethod);
                      }
                      break;
                    case "against":
                      if (method.againstTeams.length === 0) {
                        let newMethod = { ...method };
                        newMethod.againstTeams = null;
                        newMethod.against = null;
                        setMethod(newMethod);
                      }
                      break;

                    default:
                      break;
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
