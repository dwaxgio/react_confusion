import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from "reactstrap"; // Importo elementos que quiero implementar, del componente reactstrap
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Restaurant Confusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu></Menu>
    </div>
  );
}

export default App;
