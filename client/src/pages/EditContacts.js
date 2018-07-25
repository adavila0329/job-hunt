import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Input} from "../components/Form";
// import App from '../App';
class EditContacts extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    work_phone: "",
    co_name: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    console.log(name, value);
    this.setState({ [name]: value});
  }

  submitContacts = (e) => {
    e.preventDefault();
    console.log("this contact should go!");
    const { 
      first_name,
      last_name,
      email,
      phone_number,
      work_phone,
      co_name 
    } = this.state;

    

    axios.post("/api/editcontacts", {
      first_name,
      last_name,
      email,
      phone_number,
      work_phone,
      co_name }).then(res => {
      console.log(res);
      this.setState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        work_phone: "",
        co_name:"" });
    })
  }


  // We are trying to display
  render() {
    return (
      <form onSubmit={this.submitContacts}>
      <Input
          name="first_name"
          onChange={this.handleInputChange}
          placeholder="First Name"
          value={this.state.first_name}
        />
        <Input
          name="last_name"
          onChange={this.handleInputChange}
          placeholder="Last Name"
          value={this.state.last_name}
        />
        <Input
          name="email"
          onChange={this.handleInputChange}
          placeholder="Email"
          value={this.state.email}
        />
        <Input
          name="phone_number"
          onChange={this.handleInputChange}
          placeholder="Phone Number"
          value={this.state.phone_number}
        />
        <Input
          name="work_phone"
          onChange={this.handleInputChange}
          placeholder="Work Phone"
          value={this.state.work_phone}
        />
        <Input
          name="co_name"
          onChange={this.handleInputChange}
          placeholder="Employer"
          value={this.state.co_name}
        />
        <button>SUBMIT</button>
      </form>
    );
  }

}
console.log("contact submit works");



export default EditContacts;
