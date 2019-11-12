import React from 'react';
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Home from './Components/Home/Home'
import Logout from './Components/Logout/Logout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact strict component={Login} />
          <Route path="/signup" exact strict component={SignUp} />
          <Route path="/logout" exact strict component={Logout} />
          <Route path="/home" exact strict component={Home} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
