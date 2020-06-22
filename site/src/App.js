import React                            from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home                             from "./pages/Home";
import About                            from "./pages/About";
import Resumes                          from "./pages/Resumes";
import Portfolios                       from "./pages/Portfolios";
import Contact                          from "./pages/Contact";
import ReactGA                          from 'react-ga';

ReactGA.initialize('UA-142409004-1');
ReactGA.pageview(window.location.pathname + window.location.search);
//ReactGA.pageview('./pages/Home');
//ReactGA.pageview('./pages/About');
//ReactGA.pageview('./pages/Resumes');
//ReactGA.pageview('./pages/Portfolios');
//ReactGA.pageview('./pages/Contact');

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"       exact component={Home} />
        <Route path="/about"        component={About} />
        <Route path="/resume"       component={Resumes} />
        <Route path="/portfolios"   component={Portfolios} />
        <Route path="/contact"      component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;