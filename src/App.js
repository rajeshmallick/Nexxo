import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/listpage"/>
        </Route>
        <Route exact path="/listpage">
            <ListPage/>
        </Route>
        <Route exact path="/detailspage/:id">
            <DetailPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
