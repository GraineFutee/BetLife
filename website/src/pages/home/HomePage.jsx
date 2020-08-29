import React from 'react';
import LoginForm from './LoginForm';


// -------------------------------------------------------------------------------------
// Home page 
// -------------------------------------------------------------------------------------
export default function HomePage() {


  // -------------------------------------------------------------------------------------
  return (
    <section
      className="section has-text-centered"
      style={{ minHeight: "95vh" }}
    >
      <div className="title is-4">
        <p>Welcome here, log in and begin to build your own betting strategies !</p>
      </div>

      <LoginForm />

    </section>
  );
}
