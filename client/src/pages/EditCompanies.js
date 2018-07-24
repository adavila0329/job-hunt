import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
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

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);;
    this.setState({ [name]: value });
  };

  submitCompanies = () => {
    // const { getAccessToken } = this.props.auth;
    // const headers = { 'authorization': `Bearer ${getAccessToken()}`}
    const {
      co_name,
      co_url,
      co_email,
      co_phone,
      co_address,
      co_city,
      co_state,
      priority
    } = this.state;

    axios
      .post("/api/editcompanies", {
        co_name,
        co_url,
        co_email,
        co_phone,
        co_address,
        co_city,
        co_state,
        priority
      })
      .then(res => {
        console.log(res);
        this.setState({
          co_name: "",
          co_url: "",
          co_email: "",
          co_phone: "",
          co_address: "",
          co_city: "",
          co_state: "",
          priority: ""
        });

        // axios.post("/api/newCompany", {co_name, co_url, co_email, co_phone, co_address, co_city, co_state, priority}, {crossDomain: true, withCredentials: true, headers}).then(res => {
        //   console.log(res);
        //   this.setState({ co_name: "", co_url: "", co_email: "", co_phone: "", co_address: "", co_city: "", co_state: "", priority: ""});
        //   this.props.history.push("/");
      });
  };

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
  render() {
    return (
      <div>
        <form className="company-form">
          <div className="form-co_name">
            <input
              name="co_name"
              onChange={this.handleInputChange}
              placeholder="Company"
              value={this.co_name}
            />
          </div>
          <div className="form-co_url">
            <input
              name="co_url"
              onChange={this.handleInputChange}
              placeholder="URL"
              value={this.co_url}
            />
          </div>
          <div className="form-co_email">
            <input
              name="co_email"
              onChange={this.handleInputChange}
              placeholder="Email"
              value={this.co_email}
            />
          </div>
          <div className="form-co_phone">
            <input
              name="co_phone"
              onChange={this.handleInputChange}
              placeholder="Phone"
              value={this.co_phone}
            />
          </div>
          <div className="form-co_address">
            <input
              name="co_address"
              onChange={this.handleInputChange}
              placeholder="Address"
              value={this.co_address}
            />
          </div>
          <div className="form-co_city">
            <input
              name="co_city"
              onChange={this.handleInputChange}
              placeholder="City"
              value={this.co_city}
            />
          </div>
          <div className="form-co_state">
            <input
              name="co_state"
              onChange={this.handleInputChange}
              placeholder="State"
              value={this.co_state}
            />
          </div>
          <div className="form-priority">
            <input
              name="priority"
              onChange={this.handleInputChange}
              placeholder="Priority"
              value={this.priority}
            />
          </div>
        </form>
        <button onClick={this.submitCompanies}>SUBMIT</button>
      </div>
    );
  }
}
console.log("this works (bottom of EditCompanies.js)");

export default EditCompanies;
