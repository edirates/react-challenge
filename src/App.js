import React, { Component, Fragment } from 'react';
import Search from './Search';
import List from './List';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      digimons: [],
      search: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, function () {
      // console.log(this.state.search);
    });
  }
  componentDidMount() {
    fetch("https://digimon-api.herokuapp.com/api/digimon")
    .then( response => response.json() )
    .then( (digimons) => {
      this.setState({
        digimons: digimons
      })
    })
  }
  render() {
    return (
      <Fragment>
        <Search search={this.state.search} change={this.handleChange}/>
        <List search={this.state.search} digimons={this.state.digimons.slice(0, 12)} />
      </Fragment>
    );
  }
}

export default App;
