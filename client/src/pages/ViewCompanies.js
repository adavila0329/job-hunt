import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class ViewCompanies extends Component {
 state = {
   companies: [{
     _id: 1,
     co_name: "Shell",
     priority: '2'
   }, {
     _id: 2,
     co_name: "Valero",
     priority: '4'
   }]
 };

 refreshCompanies(){
   console.log("this should go!");
   axios.get("/api/companies").then((res) => {
    //  console.log(res);
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
      {/* /* Map each of our posts */}
      {this.state.companies.map( company => (
        <div>{company.co_name}</div>
      ))}
    </div>
   );
 }
}
console.log("this works");

export default ViewCompanies;