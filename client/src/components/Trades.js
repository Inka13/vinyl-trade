import React, {Component} from 'react';
import {connect} from 'react-redux';

class Trades extends Component {
    
    render() {
        
        //console.log(this.props.album);
        return (    
            <div className="main">                                                           
                 <div className="ui fluid container">
                <h2 className="ui header">About</h2>
                <p>No available content...3</p>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    };
}
export default connect(mapStateToProps)(Trades);

