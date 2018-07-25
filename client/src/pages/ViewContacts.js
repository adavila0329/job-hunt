import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class ViewContacts extends Component {
 state = {
   contacts: [{
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    work_phone: "",
    co_name: ""
   }]
 };

 refreshContacts(){
   console.log("these contacts should go!");
   axios.get("/api/viewcontacts").then((res) => {
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
    {/* /* Map each of our activities */}
     {this.state.contacts.map( contact => (
        <div>{
          contact.first_name + " " +
          contact.last_name + " " + contact.email + " " +
          contact.phone_number + " " +
          contact.work_phone + " " +
          contact.co_name}</div>
      ))}
    </div>
   );
 }
}
console.log("this contact works");

export default ViewContacts;