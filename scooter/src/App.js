import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Navs from "./components/Navs";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navs />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;