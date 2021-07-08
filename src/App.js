import "./App.css";

import { Link, Route, Switch } from "react-router-dom";
import Movie from "./Pages/Movie";
import routeTest from "./routeTest";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={routeTest} />
      <Route exact={true} path="/movie" component={Movie} />
    </Switch>
  );
}

export default App;
