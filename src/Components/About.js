import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
import { Component } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentdidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>ABOUT PAGE</h1>
        <div>
          LoggedInUser
          {/* //old way */}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>UserContext</h1>}
          </UserContext.Consumer>
        </div>
        <User name={"Ramya"} location={"Hassan"} contact={"@Ramya"} />
        <UserClass name={"Ramya"} location={"Hassan"} contact={"@Ramya"} />
        <UserClass
          name={"sudhamurthy"}
          location={"Bangalore"}
          contact={"@sudha"}
        />
        <UserClass name={"Steve job"} location={"us"} contact={"@steve"} />
      </div>
    );
  }
}

export default About;
