import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from './contacts.json'
import './listview.css'
import ListContact from './List-Contact'


class Listview extends Component {
    render() {
      return (
        <li className="contact"> <Link to={`/contact/${this.props.id}`}><img src={this.props.image}/><p>{this.props.name}</p></Link></li>
      )
    }
  }
  
  export default Listview;
  