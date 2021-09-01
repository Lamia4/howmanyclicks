import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react';

import Header from "./comp/Header"
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login";
import NoExist from "./pages/NoExist.js";
import Contact from "./pages/Contact";


function App() {







  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" > <Home /> </Route >
          <Route path="/login"> <Login /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/contact" > <Contact /> </Route>
          <Route component={NoExist}></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
