import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitLogin, hideForm} from '../actions/index';
class LoginForm extends React.Component {
   submit = (e) => {
    e.preventDefault();
    this.props.submitLogin(this.refs.name.value, this.refs.password.value);
    }
    
    render() {
        return (
                <form className="ui form" onSubmit={this.submit} id="loginform" >
                    
                    <div className="ui massive center aligned top attached label">
                        Log in
                        <button className="ui mini right floated button" onClick={this.props.hideForm}>X</button>
                    </div>
                    <div className="field">
                        <label>Username:</label>
                        <div className="ui input">
                            <input ref="name" type="text" placeholder="Enter username..." required/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password:</label>
                        <div className="ui input">
                            <input ref="password" type="password" placeholder="Enter password..." required/>
                        </div>
                    </div>
                    <div className="field">
                        <button className="ui center floated button" type="submit">Submit</button>
                    </div>
                </form>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        submitLogin,
        hideForm
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
