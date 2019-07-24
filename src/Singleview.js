import React, { Component } from 'react'
import data from './contacts.json'
import './singleview.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


class Singleview extends Component {
    state = {
        image: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        city: '',
        state: ''
    }

    componentWillMount() {
        let contact = data.find(contact => contact.id == this.props.match.params.number)
        console.log(contact)
        this.setState({
            image: contact.picture.large,
            fname: contact.name.first,
            lname: contact.name.last,
            email: contact.email,
            phone: contact.phone,
            city: contact.location.city,
            state: contact.location.state
        })
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div id="svpage">
            <header>
                <button id="backbutton" onClick={this.goBack}><MaterialIcon   icon="arrow_back"  /></button>
                <img src={this.state.image}></img>
            </header>
            <div className="moreinfo">
                <ul>
                    <li className="fullname">
                        <p><MaterialIcon icon="account_circle" /><span className=
                        "content name">{this.state.fname + ' ' + this.state.lname}</span></p>
                    </li>
                    <li className="email">
                        <p><MaterialIcon icon="email" /><span className=
                        "content">{this.state.email}</span></p>
                    </li>
                    <li className="phone">
                        <p><MaterialIcon icon="settings_phone" /><span className=
                        "content">{this.state.phone}</span></p>
                    </li>
                    <li className="place">
                        <p><MaterialIcon icon="location_on" /><span className=
                        "content name">{this.state.city + ', ' + this.state.state}</span></p>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}
  
  export default Singleview;
  