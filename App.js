import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyPod />
        </Route>
        <Route exact path="/invalid">
          You've reached the invalid page!
        </Route>
        <Route path="/">404 File Not Found! :-(</Route>
      </Switch>
    </Router>
  );
}
