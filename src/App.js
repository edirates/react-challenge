import React, { Component, Fragment, useState, useEffect } from 'react';
import axios from './apis/axios';
import NavBar from './components/Navbar';
import Digimons from './containers/Digimons';
import MyDigimons from './containers/MyDigimons';
import Detail from './containers/Detail';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// ======== Class Method ========
class App extends Component {
  constructor() {
    super();
    this.state = {
      digimons: [],
      search: "",
      myDigimons: []
    }
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, function () {
      // console.log(this.state.search);
    });
  }
  addDigimon = (digimon) => {
    let myDigimons = [...this.state.myDigimons, digimon];
    this.setState({
      myDigimons: myDigimons
    });
  }
  delDigimon = (id) => {
    let myDigimons = this.state.myDigimons.filter(digimon => {
      return digimon.id !== id;
    });
    this.setState({
      myDigimons: myDigimons
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
        <Router>
          <NavBar search={this.state.search} change={this.handleChange}/>
          <Switch>
            <Route exact path="/">
              <Digimons search={this.state.search} digimons={this.state.digimons} addDigimon={this.addDigimon} />
            </Route>
            <Route path="/mydigimons">
              <MyDigimons search={this.state.search} myDigimons={this.state.myDigimons} delDigimon={this.delDigimon} />
            </Route>
            <Route path="/digimon/:id">
              <Detail addDigimon={this.addDigimon} />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

// ============ Function Method ==============
// const App = () => {
//   const [ digimons, setDigimons ] = useState([]);
//   const [ search, setSearch ] = useState("");

//   const handleChange = (e) => {
//     setSearch(e.target.value);
//   }

//   useEffect(() => {
//     axios({
//       method: "GET"
//     })
//     .then(({data}) => {
//       setDigimons(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }, []);

//   return (
//     <Fragment>
//       <NavBar search={search} change={handleChange}/>
//       <Digimons search={search} digimons={digimons} />
//     </Fragment>
//   );
// }

export default App;
