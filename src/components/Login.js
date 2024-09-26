import React, { Component } from "react";

export default class Login extends Component {
 render(){
 return (
 <form>
    <h3><strong>Login In</strong></h3>
  
  <div className="mb-3">
   <label><strong>Name</strong></label>
   <input type="name" className="form-control" placeholder="Enter Name" />
  </div>
  <div className="mb-3">
   <label><strong>Password</strong></label>
   <input type="password" className="form-control" placeholder="Enter Password" />
  </div>
  <div className="d-grid">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
 </form>
)
}
}