import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class ViewContacts extends Component {
 state = {
   contacts: [{
     //_id: 1,
     first_name: "Mara",
     last_name: "Wilson",
     email: "mwilson@gmail.com"
   }, {
     //_id: 2,
     first_name: "Belinda",
     last_name: "Carlisle",
     email: "bcarlisle@gmail.com"
   }]
 };

 refreshContacts(){
   console.log("these contacts should go!");
   axios.get("/api/contacts").then((res) => {
    //  console.log(res);
     this.setState({ contacts: res.data });
   });
 }

 componentDidMount(){
   this.refreshContacts();
 }
// We are trying to display 
 render(){
   return (
    <div>
      {/* /* Map each of our contacts */}
      {this.state.contacts.map( contact => (
        <div>{contact.first_name}</div>
      ))}
    </div>
   );
 }
}
console.log("this contact works");

export default ViewContacts;