import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/mainPage";
import PersonalBusinessPage from "./pages/personalBusinessPage";
import SignUp from "./pages/signUp"


function App() {

  return (
    <Router>
      <div>

        <Switch>
          <Route  exact path="/" component={Main} />
          <Route exact path="/business/Company website not available" component={Main} />
          <Route  exact path="/business/signup" component={SignUp} />
          <Route  exact path="/business/:id" component={PersonalBusinessPage} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
