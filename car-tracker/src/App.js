import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import MaintenanceList from "./components/Maintenance-list.component";
import EditMaintenance from "./components/edit-Maintenance.component";
import CreateMaintenance from "./components/create-Maintenance.component";
import CreateCar from "./components/create-car.component";

import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={MaintenanceList} />
    <Route path="/edit/:id" component={EditMaintenance} />
    <Route path="/create" component={CreateMaintenance} />
    <Route path="/car" component={CreateCar} />
    </div>
  </Router>
  );
}

export default App;
