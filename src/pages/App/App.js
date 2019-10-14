import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import userService from '../../utils/userService';
import EditMaintenance from "../../components/edit-Maintenance.component";
import CreateMaintenance from "../../components/create-Maintenance.component";
import CreateCar from "../../components/create-car.component";
import MaintenanceList from "../../components/Maintenance-list.component";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    console.log('user log out!')
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    console.log('handlesinguporlogin');
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <br/>
        <Route path="/edit/:id" component={EditMaintenance} />
        <Route path="/create" component={CreateMaintenance} />
        <Route path="/car" component={CreateCar} />
        <Route path="/" exact component={MaintenanceList} />
          
          <Switch>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
           
            
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
          </Switch>
          

        </div>
      </Router>
    );
  }
}

export default App;
