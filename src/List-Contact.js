import React, { Component } from 'react';
import data from './contacts.json'
import './listview.css'
import Listview from './Listview'


class ListContact extends Component {
    render() {
      return (
        <div id="lvpage">
        <header><h1>My Peeps</h1></header>
        <div>
            <ul className="contactlist">
         {data.map((result, i) => (
           <Listview
           id = {result.id}
           image= {result.picture.thumbnail}
           name= {result.name.first + ' ' + result.name.last}
           />
         ))}
                </ul>
            </div>
        </div>
      )
    }
  }
  
  export default ListContact;
  