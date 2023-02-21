import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>

      <Router>
      <Switch>
          <Route path="/explore">
            <Explore />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">

          <NotFound></NotFound>

          </Route>
        </Switch>

      </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
