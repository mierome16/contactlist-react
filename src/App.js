import React, { Component } from 'react';
import data from './contacts.json'
import Listview from './Listview'
import Singleview from './Singleview'
import ListContact from './List-Contact.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'





class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ListContact}/>
          <Route path="/contact/:number" component={Singleview}/>
        </div>
      </Router>
    )
  }
}

export default App;
