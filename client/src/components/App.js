import React, { Component } from 'react';
import Header from './Header';
//import Banner from './Banner';
//import Menu from './Menu';
//import PlacesList from './PlaceList';
import SigninForm from './SigninForm';
import LoginForm from './LoginForm';
//import ActivePlace from './ActivePlace';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
   
  }
  render() {
    //console.log(this.props.longlat);
      return (
        <div className="app">

          <Header />

          {this.props.form==='signup' ? 
          <div className="formback">
          <SigninForm /></div> : <span/>}
         
          {this.props.form==='login' ? 
          <div className="formback">
           <LoginForm /></div> : <span/>}

        </div>
      );
  }
}; 
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
      
    }, dispatch);
}
function mapStateToProps(state) {
    return {
      form: state.form
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(App);


