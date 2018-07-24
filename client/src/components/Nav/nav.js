import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Nav = () => (
  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  //   <a className="navbar-brand" href="/">
  //     React Reading List
  //   </a>
  // </nav>
  <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" id="job-heading" href="#">
  JOB HUNT
  </a>
  <form className="form-inline" id="login">
  <input className="form-control mr-sm-2" id="email-input-log" type="email" placeholder="Email" aria-label="email" />
  <input className="form-control mr-sm-2" id="password-input-log" type="password" placeholder="Password" aria-label="password" />
  <input type="submit" value="Sign In" className="btn btn-outline-success my-2 my-sm-0" id="submit-log" type="submit" />
  </form>
</nav>
);
  
export default Nav;
