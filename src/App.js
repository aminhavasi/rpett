import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/login';
import Home from './components/homepage/home';
import Register from './components/auth/register';
const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};

export default App;
