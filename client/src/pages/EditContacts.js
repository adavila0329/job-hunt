import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Input} from "../components/Form";
// import App from '../App';
class EditContacts extends React.Component {

  state = {
    first_name: "",
    last_name: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    console.log(name, value);
    this.setState({ [name]: value});
  }

  submitContacts = (e) => {
    e.preventDefault();
    console.log("this contact should go!");
    const { first_name, last_name } = this.state;

    

    axios.post("/api/editcontacts", {first_name, last_name}).then(res => {
      console.log(res);
      this.setState({first_name: ""});
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
        <button>SUBMIT</button>
      </form>
    );
  }

}
console.log("contact submit works");



export default EditContacts;
