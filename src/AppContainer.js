import React,{useState} from 'react';
import Header from "./Header";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from "./App";
import Helpline from "./Helpline";

import Hospital from './Hospital';
import Notification from "./Notification";
import TestStats from "./TestStats";
import LineGraph from "./LineGraph";
import "./AppContainer.css";

function AppContainer() {
    const [casesType,setCasesType]=useState("cases");
    return (
        <Router>
        <div className="appContainer">
        <Switch>
        
         <Route path="/helpline">
          <Header/>
          
          <Helpline />
          
          </Route>
          <Route path="/notifications_and_advisory">
              <Header />
              <Notification />
          </Route>
          <Route path="/hospital_dashboard">
              <Header />
              <Hospital />
          </Route>
          <Route path="/stats">

              <Header />
              <div AppContainer__graphs>
              <h1>DAILY CONFIRMED CASES</h1>
              
              <LineGraph casesType={casesType} />
              
              
              <h3>TESTING STATS</h3>
              <TestStats />
              </div>

              
          </Route>
          <Route path="/">
             <Header />
              <App />
          </Route>
            
           
       </Switch>
        </div>
     </Router>
    
    )
}

export default AppContainer
