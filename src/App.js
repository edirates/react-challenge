import React, { Component, Fragment, useState, useEffect } from 'react';
import Search from './Search';
import List from './List';
import './App.css';

const App = () => {
  const [ digimons, setDigimons ] = useState([]);
  const [ search, setSearch ] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    fetch("https://digimon-api.herokuapp.com/api/digimon")
    .then( response => response.json() )
    .then( (digimons) => {
      setDigimons(digimons)
    })
  }, []);

  return (
    <Fragment>
      <Search search={search} change={handleChange}/>
      <List search={search} digimons={digimons.slice(0, 12)} />
    </Fragment>
  );
}

// ======== Class Method ========
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       digimons: [],
//       search: ""
//     }
//   }
//   handleChange = (e) => {
//     this.setState({
//       search: e.target.value
//     }, function () {
//       // console.log(this.state.search);
//     });
//   }
//   componentDidMount() {
//     fetch("https://digimon-api.herokuapp.com/api/digimon")
//     .then( response => response.json() )
//     .then( (digimons) => {
//       this.setState({
//         digimons: digimons
//       })
//     })
//   }
//   render() {
//     return (
//       <Fragment>
//         <Search search={this.state.search} change={this.handleChange}/>
//         <List search={this.state.search} digimons={this.state.digimons.slice(0, 12)} />
//       </Fragment>
//     );
//   }
// }

export default App;
