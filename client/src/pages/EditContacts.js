import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class EditContacts extends Component {
 state = {
     first_name: "Don",
     last_name: "Holloway",
     email: "dholl@gmail.com"
 };

 submitContacts = () => {
   console.log("this contact should go!");
   const contact = {
       first_name: this.state.first_name,
       last_name: this.state.last_name,
       email: this.state.email
 };
   axios.post("/api/contacts", contact).then((res) => {
     console.log("contact post done");
    //  this.setState({ companies: res.data });
   });
 }


// We are trying to display 
 render(){
   return (
    <div>
      <button onClick={this.submitContacts}>
      SUBMIT
      </button>
    </div>
   );
 }
}
console.log("contact submit works");

export default EditContacts;