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
   JobOpening: [{
     //id: 1,
     jobTitle: "Project Manager",
     co_name: "Emerson",
     jobPost_url: "https://www.emerson.careers/123",
     jobLocation: "Round Rock, TX",
     jobPriorit: "2",
     resume_file_submitted: "",
     jobPostingSource: "Linked In"
   }, {
     //_id: 2,
     jobTitle: "Full Stack Developer",
     co_name: "HomeAway",
     jobPost_url: "Http://www.homeaway.com/jobs/456",
     jobLocation: "Austin, TX",
     jobPriorit: "1",
     resume_file_submitted: "",
     jobPostingSource: "Indeed"
   }]
 };

 refreshJobOpenings(){
   console.log("this job opening should go!");
   axios.get("/api/jobOpenings").then((res) => {
    //  console.log(res);
     this.setState({ JobOpenings: res.data });
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
      {this.state.JobOpening.map( jobOpening => (
        <div>{jobOpening.jobTitle}</div>
      ))}
    </div>
   );
 }
}
console.log("this Opening works");

export default ViewJobOpenings;