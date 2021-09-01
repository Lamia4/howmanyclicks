import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react';

import Header from "./comp/Header"
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login";
import NoExist from "./pages/NoExist.js";
import Contact from "./pages/Contact";


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
          <Route path="/about"> <About /> </Route>
          <Route path="/contact" > <Contact /> </Route>
          <Route component={NoExist}></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
