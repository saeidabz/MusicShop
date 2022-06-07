import logo from './logo.svg';
import './App.css';
import ShowString from './components/ShowString';
import AddString from './components/AddString';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu/>
          <Switch>
            <Route exact path="/" component={ShowString} />
            <Route exact path="/addstring" component={AddString} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
