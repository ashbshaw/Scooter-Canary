import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Search from "./pages/Search/Search";
import Navs from "./components/Navs";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;