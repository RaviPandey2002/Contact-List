import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the Feilds are required feilds");
      return;
    }
    else
    {
      alert("Your contact has been added sucessfully!!! ");
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.props);
  };

  render() {
    console.log(this.props);
    return (
      <div className="ui main">
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="ui large buttons">
              <button className="ui blue basic button">Add</button>
            <div className="or"></div>
            <Link to="/">
              <button className="ui red basic button">
                Back to Contact list
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
