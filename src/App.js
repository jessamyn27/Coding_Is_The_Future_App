import React, { Component } from 'react';
import Flashcard from './Flashcard';
import Todo from './Todo';
import Welcome from './Welcome';
import './App.css';
import { Link } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import Resources from './Resources';

class App extends Component {
  render() {
  return(
    <div>
      <Link className='coding' to='/'>coding is the future...</Link>

      <Switch>
        <Route exact path='/flashcard' component={Flashcard} />
        <Route exact path='/todo' component={Todo} />
        <Resources exact path='/resources' component={Resources} />
        <Welcome exact path='/' component={Welcome} />
      </Switch>
    <Link className='notesFooter' to='/'>made with &hearts;	by jessamyn</Link>
  </div>

  )}
}


export default App;
