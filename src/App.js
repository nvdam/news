import React, { Component, Suspense, lazy } from "react";
// import News from "./components/News";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
      category: "general",
      update: false,
    };
  }

  setDropdownState = (data, category) => {
    this.setState({ country: data, category: category, update: true });
  };

  // click = () => {
  //   history.push(`country-${this.state.country}`);
  // };

  render() {
    const News = lazy(() => import("./components/News"));

    console.log(this.state, "state");
    this.state.update &&
      history.push(
        `country-${this.state.country}category-${this.state.category}`
      );

    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigation getDropdownValue={this.setDropdownState} />}
            >
              {/* <Route index="true" element={<Home />} /> */}
              <Route
                path="/"
                index="true"
                element={
                  <Suspense fallback="loading...">
                    <News
                      pageSize={10}
                      country={this.state.country}
                      category={this.state.category}
                    />
                  </Suspense>
                }
              />
              <Route
                path={`country-${this.state.country}category-${this.state.category}`}
                index="true"
                element={
                  <Suspense fallback="loading...">
                    <News
                      pageSize={10}
                      country={this.state.country}
                      category={this.state.category}
                    />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
