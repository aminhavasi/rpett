import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/login';
import Home from './components/homepage/home';
import Register from './components/auth/register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};

export default App;
