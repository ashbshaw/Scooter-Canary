import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/";
import About from "./pages/About";
import Results from "./pages/Results";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Results} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;