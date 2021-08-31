
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./comp/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Errors from "./pages/Errors";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/errors" component={Errors} />
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
