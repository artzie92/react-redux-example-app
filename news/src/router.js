import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/home.container';
import DetailsContainer from './containers/details.container';

export const Router = (props) => (
    <Switch>
        <Route exact path={`/`} component={HomeContainer} />
        <Route path={`/details/:id`} component={DetailsContainer} />
    </Switch>
);