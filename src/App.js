import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Pages from "./components/Pages.js"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
