import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Top from './views/Top';
import Products from './views/Products';


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Top}/>
              <Route path={'/products'} component={Products}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App
