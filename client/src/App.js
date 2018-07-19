import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Router, Route, Redirect } from "react-router-dom";
import ViewCompanies from './pages/ViewCompanies';
import EditCompanies from './pages/EditCompanies';
import EditContacts from './pages/EditContacts';
import ViewContacts from './pages/ViewContacts';
import EditJobOpenings from './pages/EditJobOpenings';
import ViewJobOpenings from './pages/ViewJobOpenings';

class App extends Component {
  render() {
    return (
      <div>
        <ViewCompanies/>
        <EditCompanies/>
        <ViewContacts/>
        <ViewJobOpenings/>
        <EditJobOpenings/>
      </div>
      );
  }

  }

// state = {
//   co_name: "",
//   priority: 0
// };

//   // state = {""
//   //   companies: [{
//   //   _id: 1,
//   //   priority: 2
//   //   co_name: ""
//   //   }, {
//   //     _id: 2,
//   //     title: "This is a test",
//   //     body: "Or is it????"
//   //   }]
//   // }

// refreshCompanies(){
//   console.log("this should go!");
//   axios.get("/api/test").then( (res) => {
//     console.log(res);
//     this.setState({ company: res.data });
//   });
// }

// componentDidMount(){
//   this.refreshCompanies();
// }


//   getGetRequest(){

//     axios.get("/api/test").then(res => {

//        console.log("get test");

// });
// }

// getPostRequest(){

//     axios.post("/api/test", {test: true}).then(res => {

//        console.log("post test");
//     });    
// }
// handleInputChange = event => {
//   const {name, value} = event.target;
//   this.setState({ [name]: value});
//  }
//  saveCompanies = event => {
//    event.preventDefault();
//    console.log(this.state.co_name);
//    console.log(this.state.priority);
//  }

//   render() {
//     return (
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h1 className="App-title">Welcome to React</h1>
//       //   </header>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       <div>
//       <form>
//        <input name="coName" onChange={this.handleInputChange} value={this.state.co_name} />
//        <input name="prio" onChange={this.handleInputChange} value={this.state.priority} />
//        <button onClick={this.saveCompanies}>Submit</button>
//       </form>
//      </div>
//     );   
//   }

//   render(){
//     return (
//       <div>
//         { /* Map each of our posts */
//           this.state.company( coName  => (
//             <div key={coName._id}>
//               <h1>{coName.co_name}</h1>
//               <h3>Created at: {coName.createdAt}</h3>
//               <p>{coName.priority}</p>
//             </div>
//           ))
//         }
//       </div>
//     );''
//   }


// }


export default App;
