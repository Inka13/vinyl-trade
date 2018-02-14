import React, { Component } from 'react';
import Header from './Header';
//import Banner from './Banner';
//import Menu from './Menu';
import SearchList from './SearchList';
import SigninForm from './SigninForm';
import LoginForm from './LoginForm';
import ActiveAlbum from './ActiveAlbum';
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
          <div className="main">
          {this.props.form==='signup' ? 
          <div className="formback">
          <SigninForm /></div> : <span/>}
         
          {this.props.form==='login' ? 
          <div className="formback">
           <LoginForm /></div> : <span/>}

           {this.props.activeAlbum.id ? <ActiveAlbum/> : <SearchList />}
           </div>
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
      form: state.form,
      activeAlbum: state.activeAlbum
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(App);


