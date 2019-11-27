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

import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// ======== Class Method ========
class App extends Component {
  constructor() {
    super();
    this.state = {
      digimons: [],
      search: "",
      myDigimons: [],
      success: false,
      error: false,
      remove: false
    }
  }
  handleOpenSuccess = (e) => {
    this.setState({
      success: true
    }, function () {
      // console.log(this.state.search);
    });
  }
  handleCloseSuccess = (e) => {
    this.setState({
      success: false
    }, function () {
      // console.log(this.state.search);
    });
  }
  handleOpenError = (e) => {
    this.setState({
      error: true
    }, function () {
      // console.log(this.state.search);
    });
  }
  handleCloseError = (e) => {
    this.setState({
      error: false
    }, function () {
      // console.log(this.state.search);
    });
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, function () {
      // console.log(this.state.search);
    });
  }
  handleOpenRemove = (e) => {
    this.setState({
      remove: true
    }, function () {
      // console.log(this.state.search);
    });
  }
  handleCloseRemove = (e) => {
    this.setState({
      remove: false
    }, function () {
      // console.log(this.state.search);
    });
  }
  addDigimon = (digimon) => {
    const found = this.state.myDigimons.filter((added) => {
      return added.id == digimon.id;
    });
    if (found.length > 0) {
      this.handleOpenError();
    }
    else {
      let myDigimons = [...this.state.myDigimons, digimon];
      this.setState({
        myDigimons: myDigimons
      });
      this.handleOpenSuccess();
    }
  }
  delDigimon = (id) => {
    let myDigimons = this.state.myDigimons.filter(digimon => {
      return digimon.id !== id;
    });
    this.setState({
      myDigimons: myDigimons
    });
    this.handleOpenRemove();
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
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.success}
            autoHideDuration={3000}
            onClose={this.handleCloseSuccess}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Added digimon successfully</span>}
            action={[
              <IconButton
                key="close"
                aria-label="close"
                color="secondary"
                onClick={this.handleCloseSuccess}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.error}
            autoHideDuration={3000}
            onClose={this.handleCloseError}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Digimon has already been added</span>}
            action={[
              <IconButton
                key="close"
                aria-label="close"
                color="secondary"
                onClick={this.handleCloseError}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.remove}
            autoHideDuration={3000}
            onClose={this.handleCloseRemove}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Removed digimon successfully</span>}
            action={[
              <IconButton
                key="close"
                aria-label="close"
                color="secondary"
                onClick={this.handleCloseRemove}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
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
