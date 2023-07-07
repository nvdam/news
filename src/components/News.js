import React, { Component } from "react";
import NewsItem from "./NewsItem";
import loader from "./loading.gif";
import { Button } from "@mui/material";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      page: 1,
      loading: true,
      count: 0,
    };
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=470c5f4a852943b0ad23375496568368&page=${this.state.page}&pageSize=${this.props.pageSize}`
    )
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          items: result.articles,
          count: result.totalResults,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
    console.log("page value in mounting", this.state.page);
  }
  handleNextClick = () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.count / this.props.pageSize)
    ) {
    } else {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          this.props.country
        }&category=${
          this.props.category
        }&apiKey=470c5f4a852943b0ad23375496568368&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize}`
      ) //08886f89ad5044f3a42232c060d9cde1     Naga
        //470c5f4a852943b0ad23375496568368 venkatesh
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            items: response.articles,
            count: response.totalResults,
            loading: false,
          });
        });
      this.setState({
        page: this.state.page + 1,
        loading: true,
      });
    }
  };

  handlePrevClick = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=470c5f4a852943b0ad23375496568368&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.articles,
          count: response.totalResults,
          loading: false,
        });
      });
    this.setState({
      page: this.state.page - 1,
      loading: true,
    });
  };

  render() {
    let { pageSize } = this.props;
    return (
      <div className="container my-3">
        THIS IS NEWS PAGE
        <p>Country: {this.props.country}</p>
        <p> Category: {this.props.category}</p>
        <p> Total Number Of Results : {this.state.count}</p>
        <p className="d-flex justify-content-end">
          NewsItems In This Page: {this.state.items?.length}
        </p>
        <div className="container d-flex justify-content-between">
          <Button
            disabled={this.state.page <= 1}
            variant="outlined"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </Button>
          <p>
            Showing Page {this.state.page}, Items {""}
            {(this.state.page - 1) * 10 + 1} To {""}
            {this.state.page * pageSize}
          </p>
          <Button
            variant="outlined"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.count / pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </Button>
        </div>
        {/* {this.state.loading && <img src={loader} alt="Noksjd" />} */}
        <div className="row">
          {this.state.loading && (
            <img
              style={{ width: "6rem", height: "4rem", margin: "0 auto" }}
              src={loader}
              alt="Nothing.."
            />
          )}
          {!this.state.items && <p> there is nothing to show</p>}
          {this.state.items &&
            this.state.items.map((item) => {
              return (
                <div className="col-md-4 my-3" key={item.title}>
                  <NewsItem
                    title={item.title}
                    desc={item.description}
                    url={item.url}
                    imageURL={item.urlToImage}
                    publishedAt={item.publishedAt}
                    author={item.author}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <Button
            disabled={this.state.page <= 1}
            variant="outlined"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </Button>
          <p>
            Showing Page {this.state.page}, Items {""}
            {(this.state.page - 1) * 10 + 1} To {""}
            {this.state.page * pageSize}
          </p>
          <Button
            variant="outlined"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.count / pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </Button>
        </div>
      </div>
    );
  }
}
