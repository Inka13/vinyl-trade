import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getSearchResults} from '../actions/index';

class Search extends React.Component {
	submit = (e) => {
        e.preventDefault();
        console.log(this.refs.album.value);
        this.props.getSearchResults(this.refs.album.value, this.props.way);
    }
    render() {
        
        return (
                  <form className="item" onSubmit={this.submit}>
                    <div className="ui icon input">
                    	<div className="ui big label">{this.props.text}</div>
                        <input ref="album" type="text" placeholder="Search..." />
                        <i aria-hidden="true" className="search circular link icon"></i>
                    </div> 
                    <div className="placeholder"></div>    
                  </form>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        
        getSearchResults

    }, dispatch);
}
function mapStateToProps(state) {
    return {
        
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Search);


