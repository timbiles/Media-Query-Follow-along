import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: ['Home', 'About', 'Services', 'Contact'],
      menu: 'close'
    };
  }

  menu = () => {
    const { menu } = this.state;

    if (menu === 'open') {
      this.setState({ menu: 'close' })
    } else {
      this.setState({ menu: 'open' });
    }
  };
  render() {
    const map = this.state.links.map((e, i) => {
      return <li key={i}>{e}</li>;
    });
    return (
      <div className="App">
        <nav>
          <section className="nav_bar">
            <div>
              <p>Start Bootstrap</p>
            </div>
            <ul className="menu">{map}</ul>
            <span className="burger" onClick={() => this.menu()} />
          </section>
        </nav>
        <section id={this.state.menu} className="hidden_menu">
          {this.state.menu === 'open' && <ul>{map}</ul>}
        </section>
      </div>
    );
  }
}

export default App;
