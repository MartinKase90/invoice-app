

import React from "react";
import Home from "./Home";
import Details from "./Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const NoMatchRoute = () => <div>404 Page</div>;
function App () {
  return(
  <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/index/:index" exact component={Details}/>
      </Switch>
  </Router>
);
  }


export default App;
