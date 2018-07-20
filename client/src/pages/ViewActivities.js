// reserved a file to view activities associated with 
// a job opening
// we should categorize to call, task, meeting, email?
// NOTE: Table name is Activity in var declaration in model
// so "Activities" in the databaseimport React, { Component } from 'react'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class ViewActivities extends Component {
 state = {
   activities: [{
     action_item: "Apply to HP Developer",
     jobLocation: "Austin"
   }, {
       action_item: "Facebook",
     jobLocation: "Washington"
   }]
 };

 refreshActivities(){
   console.log("this should go - refreshActivities!");
   axios.get("/api/activities").then((res) => {
    //  console.log(res);
     this.setState({ activities: res.data });
   });
 }

 componentDidMount(){
   this.refreshActivities();
 }
// We are trying to display 
 render(){
   return (
    <div>
      {/* /* Map each of our activities */}
      {this.state.activities.map( activity => (
        <div>{activity.action_item}</div>
      ))}
    </div>
   );
 }
}
console.log("this works (bottom of ViewActivities.js)");

export default ViewActivities;