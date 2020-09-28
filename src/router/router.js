import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout"

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Layout } />
        <Route path="/1" render={() => <div> Hi1 </div>} />
        <Route path="/2" render={() => <div> Hi2 </div>} />
      </Switch>
    );
  }
}

// можно пожгрузить компонет component = {} или колбэк render ={} функцию которая будет выдавать верстку
