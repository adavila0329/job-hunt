import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class EditCompanies extends Component {
 state = {
     co_name: "Trilogy",
     priority: 1
 };

 submitCompanies = () => {
   console.log("this should go!");
   const company = {
       co_name: this.state.co_name,
       priority: this.state.priority
 };
   axios.post("/api/companies", company).then((res) => {
     console.log("done");
    //  this.setState({ companies: res.data });
   });
 }


// We are trying to display 
 render(){
   return (
    <div>
      <button onClick={this.submitCompanies}>
      submit
      </button>
    </div>
   );
 }
}
console.log("this works");

export default EditCompanies;