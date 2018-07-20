import React from "react";

const Nav = () => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" id="job-heading" href="#">
    JOB HUNT
    </a>
    <form class="form-inline" id="login">
    <input class="form-control mr-sm-2" id="email-input-log" type="email" placeholder="Email" aria-label="email" />
    <input class="form-control mr-sm-2" id="password-input-log" type="password" placeholder="Password" aria-label="password" />
    <input type="submit" value="Sign In" class="btn btn-outline-success my-2 my-sm-0" id="submit-log" type="submit" />
    </form>
  </nav>
);

{/* <nav class="navbar navbar-light bg-light">
<a class="navbar-brand" id="job-heading" href="#">JOB HUNT</a>
<form class="form-inline" id="login">
  <input class="form-control mr-sm-2" id="email-input-log" type="email" placeholder="Email" aria-label="email">
  <input class="form-control mr-sm-2" id="password-input-log" type="password" placeholder="Password" aria-label="password">
  <input type="submit" value="Sign In" class="btn btn-outline-success my-2 my-sm-0" id="submit-log" type="submit" />
</form>
</nav> */}

export default Nav;
