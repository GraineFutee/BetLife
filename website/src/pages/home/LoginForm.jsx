/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


// -------------------------------------------------------------------------------------
// Log in Form
// -------------------------------------------------------------------------------------
export default function LoginForm() {


    // -------------------------------------------------------------------------------------
    return (
        <div className="box mt-5">
            <form className="columns is-vcentered">
                <div className="column">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Username </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-rounded is-info" type="text" placeholder="Your name" />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Password </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-rounded is-info" type="password" placeholder="Your pass" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <button
                        className="button is-rounded is-link"
                        onClick={(event) => event.preventDefault()}
                    >
                        Log In
                    </button>
                    <p className="is-size-7 is-italic">
                        Doesn't have an account here? <a href="#">Create it!</a>
                    </p>
                </div>
            </form>
        </div>

    );
}
