// reserved a file for adding, deleting activities - will // need to restrict by user
import React from 'react'
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../components/Grid";
// // import { List, ListItem } from "../../components/List";
import { Input } from "../components/Form";
import axios from 'axios';

class EditActivities extends React.Component {

 state = {
    action_item: "",
    jobLocation: "",
    resume_file_submitted: "",
    due_date: "",
    date_applied: "",
    interview_date: ""
 };

 handleInputChange = event => {
   const {name, value} = event.target;
   console.log(name, value);
   this.setState({ [name]: value});
 };

 submitActivities = (e) => {
     e.preventDefault();
   console.log("this activity should go!");
   const {
       action_item,
       jobLocation,
       resume_file_submitted,
       due_date,
       date_applied,
       interview_date
    } = this.state;

   axios.post("/api/editactivities", { 
    action_item,
    jobLocation,
    resume_file_submitted,
    due_date,
    date_applied,
    interview_date }).then((res) => {
     console.log("hard-coded activity post done");
    //  leave (this.setState) commented out
     this.setState({ 
         action_item: "",
         jobLocation: "",
         resume_file_submitted: "",
         due_date: "",
         date_applied: "",
         interview_date: ""});
   })
 }


// We are trying to display 
 render(){
   return (
           <form onSubmit={this.submitActivities}>
             <Input
               name="action_item" 
               onChange={this.handleInputChange}
               placeholder="Action" 
               value={this.state.action_item}
             />
             <Input 
               name="jobLocation"
               onChange={this.handleInputChange}
               placeholder="Location" 
               value={this.state.jobLocation}
             />
             <Input 
               name="resume_file_submitted" 
               onChange={this.handleInputChange}
               placeholder="Resume" 
               value={this.state.resume_file_submitted}
             />
             <Input
               name="due_date" 
               onChange={this.handleInputChange}
               placeholder="Due Date" 
               value={this.state.due_date}
             />
             <Input
               name="date_applied" 
               onChange={this.handleInputChange}
               placeholder="Date Applied" 
               value={this.state.date_applied}
             /> 
             <Input
               name="interview_date" 
               onChange={this.handleInputChange}
               placeholder="Interview Date" 
               value={this.state.interview_date}
             />
             <button>
             Submit Activity
             </button>
           </form>
   );
 }
}
console.log("this works (bottom of EditActivities.js)");

export default EditActivities;