import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Navs from "./components/Navs";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

  class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <Navs />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Footer />
          </div>
        </Router>
      );
    }
  }

    export default App;