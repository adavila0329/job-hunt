// reserved a file to add and delete Job Openings
// restrict by user
// associate with one specific company
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class EditJobOpenings extends Component {
 state = {
     jobTitle: "Project Manager",
     co_name: "Charles Schwab",
     jobLocation: "Stonelake"
 };

 submitJobOpenings = () => {
   console.log("this opening should go!");
   const opening = {
       jobTitle: this.state.jobTitle,
       co_name: this.state.co_name,
       jobLocation: this.state.jobLocation
 };
   axios.post("/api/jobOpenings", opening).then((res) => {
     console.log("Job Opening post done");
     this.setState({ companies: res.data });
   });
 }


// We are trying to display 
 render(){
   return (
    <div>
      <button onClick={this.submitJobOpenings}>
      SUBMIT
      </button>
    </div>
   );
 }
}
console.log("Job Opening submit works");

export default EditJobOpenings;