import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/mainPage";
import PersonalBusinessPage from "./pages/personalBusinessPage";

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/business/:id" component={PersonalBusinessPage} />
          {/* <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
