import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        THIS IS NEWS PAGE
        <div className="row">
          <div className="col-md-4 my-3">
            <NewsItem />
          </div>
          <div className="col-md-4 my-3">
            <NewsItem />
          </div>
          <div className="col-md-4 my-3">
            <NewsItem />
          </div>
          <div className="col-md-4 my-3">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}
