// Import React Stuff
import './App.css';
import React, { Component, Fragment } from 'react';
import { setDigimons, setMyDigimons, getDigimons } from './store/actions';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import Components
import NavBar from './components/Navbar';
import Digimons from './containers/Digimons';
import MyDigimons from './containers/MyDigimons';
import Detail from './containers/Detail';

// Import Material UI Stuff
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// ======== Class Method ========
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      error: false,
      remove: false
    }
  }

  // Handle Snackbars
  handleOpenSuccess = (e) => {
    this.setState({
      success: true
    });
  }
  handleCloseSuccess = (e) => {
    this.setState({
      success: false
    });
  }
  handleOpenError = (e) => {
    this.setState({
      error: true
    });
  }
  handleCloseError = (e) => {
    this.setState({
      error: false
    });
  }
  handleOpenRemove = (e) => {
    this.setState({
      remove: true
    });
  }
  handleCloseRemove = (e) => {
    this.setState({
      remove: false
    });
  }

  // Handle My Digimons
  addDigimon = (digimon) => {
    const found = this.props.myDigimons.filter((added) => {
      return added.id === digimon.id;
    });
    if (found.length > 0) {
      this.handleOpenError();
    }
    else {
      let myDigimons = [...this.props.myDigimons, digimon];
      this.props.setMyDigimons(myDigimons);
      this.handleOpenSuccess();
    }
  }
  delDigimon = (id) => {
    let myDigimons = this.props.myDigimons.filter(digimon => {
      return digimon.id !== id;
    });
    this.props.setMyDigimons(myDigimons);
    this.handleOpenRemove();
  }

  // Lifecycle
  componentDidMount() {
    this.props.getDigimons();
  }

  // Rendering
  render() {
    return (
      <Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Digimons addDigimon={this.addDigimon} />
            </Route>
            <Route path="/mydigimons">
              <MyDigimons delDigimon={this.delDigimon} />
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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    digimons: state.digimons,
    myDigimons: state.myDigimons,
    search: state.search
  }
}

const mapDispatchToProps = {
  setDigimons,
  setMyDigimons,
  getDigimons
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
