import React, { Component } from 'react'; 
import Navbar from './components/navbar';
import Home from './components/home';
import Cart from './components/cart';
import './style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <div className={"main"}>
              <div className="home col-sm-7">
                  <Home />
              </div>
              <div className="cart col-sm-5s">
                  <Cart />
              </div>
           </div>

      </div>
    );
  }
}

export default App;