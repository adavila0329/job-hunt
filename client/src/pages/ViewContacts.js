import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class ViewContacts extends Component {
 state = {
   contacts: [{
     first_name: "",
    email: ""
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
      { /* Map each of our contacts */
      this.state.contacts.map( contact => (
        <div key={contact._id}>
          <h1>{contact.first_name + " " + contact.email}</h1>
        </div>
      ))
      }
    </div>
   );
 }
}
console.log("this contact works");

export default ViewContacts;