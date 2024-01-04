import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0,
      //   count2: 1,
      userInfo: {
        name: "dummy",
        location: "default",
        avatar: "url",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nramyar");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log("componentDidmount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;
    console.log("render");
    return (
      <div className="user-card">
        <h1>Name:{name}</h1>

        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
