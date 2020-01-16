import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNavbar from "./navbar/navbar";
import Login from "./login";
import Header from "./header";
import Home from "./home";
import Details from "./details";
import Features from "./features";
import MainPage from './mainPage';
import Input from './input';
import { BrowserRouter as Router, Switch, Route, Link,NavLink} from "react-router-dom";
function App() {
  return (
   <Router>
   <div>
     <Header />
     <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/home' component={Home} />
         <Route path='/detail' component={Details} />
         <Route path='/feature' component={Features} />
         <Route path="/login" component={Login} />
         <Route path="/input" component={Input} />
     </Switch>
   </div>
 </Router>
  );
}

export default App;
