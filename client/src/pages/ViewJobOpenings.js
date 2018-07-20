// reserved a file to display job openings associated
// with a specific company
// potential enhancement: display all the user's saved job
// openings?
// NOTE: Table Name = "jobOpening" in var declaration in model
// so "jobOpenings" in the database

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class ViewJobOpenings extends Component {
 state = {
   jobOpenings: [{
     jobTitle: "Project Manager Sr",
     co_name: "Emerson",
     jobLocation: "Round Rock, TX"
   }, {
     jobTitle: "Full Stack Developer",
     co_name: "HomeAway",
     jobLocation: "Austin, TX"
   }]
 };

 refreshJobOpenings(){
   console.log("this job opening should go!");
   axios.get("/api/jobOpenings").then((res) => {
    //  console.log(res);
     this.setState({ jobOpenings: res.data });
   });
 }

 componentDidMount(){
   this.refreshJobOpenings();
 }
// We are trying to display 
 render(){
   return (
    <div>
      {/* /* Map each of our job openings */}
      {this.state.jobOpenings.map( jobOpening => (
        <div>{jobOpening.jobTitle}</div>
      ))}
    </div>
   );
 }
}
console.log("this Opening works");

export default ViewJobOpenings;