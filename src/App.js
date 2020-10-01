import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from "reactstrap"; // Importo elementos que quiero implementar, del componente reactstrap
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render()
  {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Restaurant Confusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  }
}


export default App;
