import { Button } from "@mui/material";
import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      countryValue: "in",
      categoryValue: "general",
    };
  }

  countryChangeHandler = (event) => {
    this.setState({
      countryValue: event.target.value,
    });
  };

  categoryChangeHandler = (event) => {
    this.setState({
      categoryValue: event.target.value,
    });
  };

  submitHandler = () => {
    this.props.getDropdownValue(
      this.state.countryValue,
      this.state.categoryValue
    );
  };

  render() {
    console.log(this.state.countryValue);
    console.log(this.state.categoryValue);

    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              NewsApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              id="navbarSupportedContent"
              className="d-flex justify-content-around collapse navbar-collapse navbar-nav"
              style={{ width: "40%" }}
            >
              <select
                value={this.state.countryValue}
                // id="navbarSupportedContent"
                style={{
                  borderRadius: "5px",
                }}
                onChange={this.countryChangeHandler}
              >
                <option value="in">India</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
              </select>
              <select
                value={this.state.categoryValue}
                // id="navbarSupportedContent"
                style={{
                  borderRadius: "5px",
                }}
                onChange={this.categoryChangeHandler}
              >
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="science">Science</option>
                <option value="health">Health</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
              <Button
                // id="navbarSupportedContent"
                variant="outlined"
                // color="grey"
                type="button"
                onClick={this.submitHandler}
              >
                Apply
              </Button>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }
}
