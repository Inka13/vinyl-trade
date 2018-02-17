import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Search from './Search';
import SearchList from './SearchList';
import SigninForm from './SigninForm';
import LoginForm from './LoginForm';
import ActiveAlbum from './ActiveAlbum';
import UserPage from './UserPage';
import MyRecords from './MyRecords';
import Trades from './Trades';
import AllRecords from './AllRecords';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Redirect} from 'react-router';

class App extends Component {
  componentDidMount() {
   
  }
  render() {
    //console.log(this.props.longlat);
      return (
        <Router>
        <div className="app">

          {this.props.form==='signup' ? 
          <div className="formback">
          <SigninForm /></div> : <span/>}
         
          {this.props.form==='login' ? 
          <div className="formback">
          <LoginForm /></div> : <span/>}

          <Header />

          <div className="placeholder"></div>

          
              {this.props.user.name ? <div><UserPage/>
              <Route exact={true} path={'/'} render={() => (<Redirect to="/albums/all" />)} />
              <Route path={'/albums/my'} component={MyRecords} />
              <Route path={'/albums/trades'} component={Trades} />
              <Route path={'/albums/all'} component={AllRecords} />
              
              </div>
             : <Banner/>}
          
        </div>
        </Router>
      );
  }
}; 
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
      
    }, dispatch);
}
function mapStateToProps(state) {
    return {
      user: state.user,
      form: state.form,
      activeAlbum: state.activeAlbum
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(App);


