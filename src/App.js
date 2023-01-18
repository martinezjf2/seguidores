// import "./App.css";
import React from "react";
import { navbar as links } from "./data.js";
import NavbarComponent from "./Navbar.js";
import Header from "./Header.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent links={links} />
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
