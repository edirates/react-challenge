import React, { Component, Fragment, useState, useEffect } from 'react';
import axios from './apis/axios';
import NavBar from './components/NavBar';
import Search from './components/Search';
import List from './components/List';
import './App.css';

const App = () => {
  const [ digimons, setDigimons ] = useState([]);
  const [ search, setSearch ] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    axios({
      method: "GET"
    })
    .then(({data}) => {
      setDigimons(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Fragment>
      <NavBar search={search} change={handleChange}/>
      <List search={search} digimons={digimons} />
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
