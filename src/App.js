import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Store';
import Login from './Pages/Login.page';
import Home  from './Pages/Home.page';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
