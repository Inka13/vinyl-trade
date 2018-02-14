import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitSignup, hideForm} from '../actions/index';
class SigninForm extends React.Component {

    submit = (e) => {
    e.preventDefault();
    this.props.submitSignup(this.refs.name.value, this.refs.email.value, this.refs.password.value);
    }
    
    render() {
        return (
                <form  className="ui form" id="signinform" onSubmit={this.submit}>
                    <div className="ui massive center aligned top attached label">
                        Sign up
                        <button className="ui mini right floated button" onClick={this.props.hideForm}>X</button>
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input type="email" placeholder="Enter your email..." required/>     
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
        submitSignup,
        hideForm
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        form: state.form,
        messages: state.messages
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(SigninForm);
