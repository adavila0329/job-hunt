import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class ViewCompanies extends Component {
 state = {
   companies: [{
     co_name: "Shell",
     priority: '2'
   }, {
     co_name: "Valero",
     priority: '4'
   }]
 };

 refreshCompanies(){
   console.log("this should go - refreshCompanies!");
   axios.get("/api/viewcompanies").then((res) => {
    console.log(res);
     this.setState({ companies: res.data });
   });
 }

 componentDidMount(){
   this.refreshCompanies();
 }
// We are trying to display 
 render(){
   return (
    <div>
      {/* /* Map each of our companies */}
      {this.state.companies.map( company => (
        <div>{company.co_name}</div>
      ))}
    </div>
   );
 }
}
console.log("this works (bottom of ViewCompanies.js)");

export default ViewCompanies;