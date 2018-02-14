import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showSignupForm, showLoginForm, userLogout, getSearchResults} from '../actions/index';

class Header extends React.Component {
    submit = (e) => {
        e.preventDefault();
        console.log(this.refs.album.value);
        this.props.getSearchResults(this.refs.album.value);
    }
    render() {
        
        return (
                
                <div className="ui menu">
                  <h5 className="item ui header">
                    <i aria-hidden="true" className="exchange icon"></i>
                    <div className="content">Vinyl Trade</div>
                  </h5>
                  <div  className="right menu">
                  <form className="item" onSubmit={this.submit}>
                    <div className="ui icon input">
                        <input ref="album" type="text" placeholder="Search..." />
                        <i aria-hidden="true" className="search circular link icon"></i>
                    </div>     
                  </form>
                  
                  <span className="item" onClick={this.props.user.name ? () => this.props.userLogout() : () => this.props.showSignupForm()}>{this.props.user.name ? 'Sign Out' : 'Sign Up'}</span>
                  <span className="item" onClick={this.props.user.name ? () => {} : () => this.props.showLoginForm()}>{this.props.user.name ? this.props.user.name : 'Log in'}</span>
                  </div>
                </div>
            
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showSignupForm,
        showLoginForm,
        userLogout, 
        getSearchResults
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        user: state.user
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Header);