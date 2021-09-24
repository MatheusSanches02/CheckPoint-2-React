import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about/About';
import Child from '../child/Child';
import Home from '../home/home';
import Men from '../men/Men';
import Women from '../women/Women';

export default function Routers() {
    return (
        <div className="container-navigation">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/men" component={Men} />
                <Route path="/women" component={Women} />
                <Route path="/child" component={Child} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    );
}
