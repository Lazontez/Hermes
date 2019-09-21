import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/mainPage";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
