import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./comp/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Errors from "./pages/Errors";
import { useState } from 'react';


function App() {


  const [homeLinks, setHomeLinks] = useState([
    {
      title: "CodePen",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.",
      imgUrl: "https://i.ytimg.com/vi/H46C8rEaVHg/maxresdefault.jpg",
      link: "https://codepen.io/trending"
    },
    {
      title: "Youtube",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.",
      imgUrl: "https://www.sozunuz.com/wp-content/uploads/2020/11/Youtube-%C3%87%C3%B6kt%C3%BC.jpg",
      link: "https://www.youtube.com/"
    },
    {
      title: "Amazon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil.",
      imgUrl: "https://www.schweitzer-projects.de/images/Inhalte/aktuell/amazon-de.jpg",
      link: "https://www.amazon.de/"
    }
  ])


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" > <Home homeLinks={homeLinks} /> </Route >
          <Route path="/login"> <Login /> </Route>
          <Route path="/errors" > <Errors /> </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
