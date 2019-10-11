import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import MaintenanceList from "./components/exercises-list.component";
import EditMaintenance from "./components/edit-exercise.component";
import CreateMaintenance from "./components/create-exercise.component";
import CreateCar from "./components/create-user.component";

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
