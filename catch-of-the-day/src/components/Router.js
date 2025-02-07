import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './Notfound';

const Router = () => (
<BrowserRouter>
<Switch>
    <Route exact path="/" component={StorePicker}></Route>
    <Route path="/store/:storeId" component={App}></Route>
    <Router component={NotFound}></Router>
</Switch>
</BrowserRouter>
);
export default Router;