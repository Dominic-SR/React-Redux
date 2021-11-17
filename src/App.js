import React,{Suspense} from 'react'
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import Base from "./pages/Base";
import store from './store/store';
import ProtectedRouter from './Auth/Protector';

const Login = React.lazy(()=> import("./Auth/Login"))
const Register = React.lazy(()=> import("./Auth/Register"))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Suspense fallback = {<div>Loading...</div>}>
      <Switch>
        <Route exact path ='/register' render={props =><Register {...props}/>} />
        <Route exact path ='/login' render={props =><Login {...props}/>} />
        <Route path="/" name="dashboard" render={props => <Base {...props}/>}/>
        <ProtectedRouter path="/" render={<Base/>}/>
      </Switch> 
      </Suspense>
      </BrowserRouter>
    </Provider>
  );
  }

export default App;
