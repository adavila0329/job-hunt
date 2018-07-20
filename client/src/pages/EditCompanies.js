import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import App from '../App';
class EditCompanies extends Component {
 state = {
     co_name: "",
     co_url: "",
     co_email: "",
     co_phone: "",
     co_address: "",
     co_city: "",
     co_state: "",
     priority: ""
 };

 handleInputchange = event => {
   const {name, value} = event.target;
   console.log(name);
   this.setState({ [name]: value });
 }

submitCompanies = event => {
  event.preventDefault();
  // const { getAccessToken } = this.props.auth;
  // const headers = { 'authorization': `Bearer ${getAccessToken()}`}
  const { co_name, co_url, co_email, co_phone, co_address, co_city, co_state, priority } = this.state;
  axios.post("/api/newCompany", {co_name, co_url, co_email, co_phone, co_address, co_city, co_state, priority}).then(res => {
    console.log(res);
    this.setState({ co_name: "", co_url: "", co_email: "", co_phone: "", co_address: "", co_city: "", co_state: "", priority: ""});

    // axios.post("/api/newCompany", {co_name, co_url, co_email, co_phone, co_address, co_city, co_state, priority}, {crossDomain: true, withCredentials: true, headers}).then(res => {
    //   console.log(res);
    //   this.setState({ co_name: "", co_url: "", co_email: "", co_phone: "", co_address: "", co_city: "", co_state: "", priority: ""});
    //   this.props.history.push("/");
  })
}

//  submitCompanies = () => {
//    console.log("this company should go!");
//    const company = {
//        co_name: this.state.co_name,
//        priority: this.state.priority
//  };
//    axios.post("/api/companies", company).then((res) => {
//      console.log("hard-coded company post done");
//      //  leave (this.setState) commented out
//     //  this.setState({ companies: res.data });
//    });
//  }


// We are trying to display 
 render(){
   return (
    <div>
    <form className="company-form">
    <div className="form-title">
    <input name="co_name" onChange={this.handleInputchange}
    placeholder="Company" value={this.co_name} />
    </div>
    <div className="form-co_url">
    <input name="co_url" onChange={this.handleInputchange}
    placeholder="URL" value={this.co_url} />
    </div>
    <div className="form-co_email">
    <input name="co_email" onChange={this.handleInputchange}
    placeholder="Email" value={this.co_email} />
    </div>
    <div className="form-co_phone">
    <input name="co_phone" onChange={this.handleInputchange}
    placeholder="Phone" value={this.co_phone} />
    </div>
    <div className="form-co_address">
    <input name="co_address" onChange={this.handleInputchange}
    placeholder="Address" value={this.co_address} />
    </div>
    <div className="form-co_city">
    <input name="co_city" onChange={this.handleInputchange}
    placeholder="City" value={this.co_city} />
    </div>
    <div className="form-co_state">
    <input name="co_state" onChange={this.handleInputchange}
    placeholder="State" value={this.co_state} />
    </div>
    <div className="form-priority">
    <input name="priority" onChange={this.handleInputchange}
    placeholder="Priority" value={this.priority} />
    </div>
    </form>
      <button onClick={this.submitCompanies}>
      SUBMIT
      </button>
    </div>
   );
 }
}
console.log("this works (bottom of EditCompanies.js)");

export default EditCompanies;