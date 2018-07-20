import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
// changed email-input 2 emailInput and password-input 2 passwordInput
class Login extends Component {
    state = {
      firstName: "",
      lastName: "",
      emailInput: "",
      passwordInput: "",
      confirmPassword: "" 
    };
}
    export default Login;