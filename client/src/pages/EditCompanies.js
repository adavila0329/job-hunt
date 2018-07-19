import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class EditCompanies extends Component {
 state = {
     co_name: "Button Testing, Inc.",
     priority: 1
 };

 submitCompanies = () => {
   console.log("this company should go!");
   const company = {
       co_name: this.state.co_name,
       priority: this.state.priority
 };
   axios.post("/api/companies", company).then((res) => {
     console.log("hard-coded company post done");
    //  this.setState({ companies: res.data });
   });
 }


// We are trying to display 
 render(){
   return (
    <div>
      <button onClick={this.submitCompanies}>
      SUBMIT
      </button>
    </div>
   );
 }
}
console.log("this works (bottom of EditCompanies.js)");

export default EditCompanies;