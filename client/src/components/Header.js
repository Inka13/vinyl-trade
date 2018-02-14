import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showSignupForm, showLoginForm, userLogout, getAllTrades, getSearchResults} from '../actions/index';

class Header extends React.Component {
    submit = (e) => {
        e.preventDefault();
        console.log(this.refs.album.value);
        this.props.getSearchResults(this.refs.album.value);
    }
    render() {
        
        return (
                
                <div className="ui fixed menu">
                <div className="placeholder"></div>
                  <h5 className="item ui header">
                    <i aria-hidden="true" className="exchange icon"></i>
                    <div className="content">Vinyl Trade</div>
                  </h5>
                  <form className="item" onSubmit={this.submit}>
                    <div className="ui icon input">
                        <input ref="album" type="text" placeholder="Search..." />
                        <i aria-hidden="true" className="search circular link icon"></i>
                    </div>     
                  </form>

                    <div className="ui right compact menu">
                      <div role="listbox" aria-expanded="false" className="ui item simple dropdown" tabindex="0">
                        <div className="text" role="alert" aria-live="polite">&#9776;</div>
                        <i aria-hidden="true" className="dropdown icon"></i>
                        <div className="menu transition">
                          <div style={{'pointer-events':'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
                            <span className="text" onClick={() => this.props.getAllTrades()}>Home</span>
                          </div>
                          <div style={{'pointer-events':'all'}} role="option" aria-checked="false" aria-selected="false" className="item">
                            <span className="text" onClick={this.props.user.name ? () => {} : () => this.props.showLoginForm()}>{this.props.user.name ? this.props.user.name : 'Log in'}</span>
                          </div>
                          <div style={{'pointer-events':'all'}} role="option" aria-checked="false" aria-selected="true" className="item">
                            <span className="text" onClick={this.props.user.name ? () => this.props.userLogout() : () => this.props.showSignupForm()}>{this.props.user.name ? 'Sign Out' : 'Sign Up'}</span>
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