import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import userService from '../../utils/userService';
import ExcercisesList from '../../components/exercises-list.component';
import EditExercise from '../../components/edit-exercise.component';
import CreateExercise from '../../components/create-exercise.component';

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
          <Switch>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route path="/ExcercisesList" exact component={ExcercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
          <Route user={this.state.user} path="/create" render={_ => <CreateExercise user={this.state.user}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
