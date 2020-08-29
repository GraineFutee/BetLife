import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import MyMethodsHome from "./pages/myMethods/MyMethodsHome";
import HomePage from './pages/home/HomePage'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'

function App() {
  return (
    <Router>
      
      <NavBar />

      <Switch>

        <Route path="/myMethods">
          <MyMethodsHome />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>

      <Footer />

    </Router>
  )
}

export default App;
