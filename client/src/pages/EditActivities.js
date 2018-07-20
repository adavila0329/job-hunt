// reserved a file for adding, deleting activities - will // need to restrict by user
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class EditActivities extends Component {
 state = {
    action_item: "Apply to HP Developer",
    jobLocation: "Austin"
 };

 submitActivities = () => {
   console.log("this activity should go!");
   const activity = {
       action_item: this.state.action_item,
       jobLocation: this.state.jobLocation
 };
   axios.post("/api/activities", activity).then((res) => {
     console.log("hard-coded activity post done");
     this.setState({ activities: res.data });
   });
 }


// We are trying to display 
 render(){
   return (
    <div>
      <button onClick={this.submitActivities}>
      SUBMIT
      </button>
    </div>
   );
 }
}
console.log("this works (bottom of EditActivities.js)");

export default EditActivities;