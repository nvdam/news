import React, { Component } from "react";
import ModalNewsItem from "./ModalNewsItem";
// import data from "./Apidata.json";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  clickHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    let { title, desc, imageURL, url, publishedAt, author } = this.props;
    // console.log("length is", desc?.length);
    let length = desc?.length;
    let publishedDate = new Date(publishedAt);
    return (
      <div className="container">
        <div className="card" style={{ height: "33rem" }}>
          {/* <h3 className="card-header">Header</h3> */}
          <img
            src={imageURL}
            alt="No-immg"
            style={{ maxHeight: "15rem", minHeight: "15rem" }}
          />
          <div className="card-body">
            <h3 className="card-title">
              {title.length >= 90 ? title.slice(0, 90) + "..." : title}
            </h3>
            <br />
            <footer className="blockquote-footer">
              {author ? author : "Unknown"}
              <cite title="Source Title">
                {" "}
                {publishedDate.toLocaleString()}
              </cite>
            </footer>
            {/* {this.state.show && <OverlayNewsItem close={this.clickHandler} />} */}
            {/* <OverlayNewsItem /> */}
            {this.state.show && (
              <ModalNewsItem
                desc={desc}
                title={title}
                show={this.state.show}
                clickHandler={this.clickHandler}
                url={url}
              />
            )}

            {!this.state.show && length >= 1 && (
              <button
                className="btn btn-primary position-absolute bottom-0 translate-middle-y"
                onClick={this.clickHandler}
              >
                {this.state.show ? "Hide" : "Show"} Details
              </button>
            )}
            {length === 0 ||
              (length === undefined && (
                <a
                  className="position-absolute bottom-0 translate-middle-y"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Article
                </a>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
