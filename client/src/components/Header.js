import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showSignupForm, showLoginForm, userLogout, getAllTrades, getSearchResults} from '../actions/index';

class Header extends React.Component {
    
    render() {
        
        return (
                <div className="ui inverted fixed menu">
                  <h5 className="item ui header">
                    <i aria-hidden="true" className="exchange icon"></i>
                    <div className="content">Vinyl Trade</div>
                  </h5>
                    <div className="ui right inverted compact menu">
                      <div role="listbox" aria-expanded="false" className="ui item simple dropdown" tabIndex="0">
                        <div className="text" role="alert" aria-live="polite">&#9776;</div>
                        <i aria-hidden="true" className="dropdown icon"></i>
                        <div className="menu transition">
                          <div style={{'pointerEvents':'all'}} role="option" aria-checked="false" aria-selected="false" className="item" onClick={() => this.props.getAllTrades()}>
                            <span className="text">Home</span>
                          </div>
                          <div style={{'pointerEvents':'all'}} role="option" aria-checked="false" aria-selected="false" className="item"  onClick={this.props.user.name ? () => {} : () => this.props.showLoginForm()}>
                            <span className="text">{this.props.user.name ? this.props.user.name : 'Log in'}</span>
                          </div>
                          <div style={{'pointerEvents':'all'}} role="option" aria-checked="false" aria-selected="true" className="item" onClick={this.props.user.name ? () => this.props.userLogout() : () => this.props.showSignupForm()}>
                            <span className="text">{this.props.user.name ? 'Sign Out' : 'Sign Up'}</span>
                          </div>
                        </div>
                      </div>
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
        getSearchResults,
        getAllTrades
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        user: state.user
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Header);