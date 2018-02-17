import React, {Component} from 'react';
import SearchList from './SearchList';
import Search from './Search';
import ActiveAlbum from './ActiveAlbum';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class AllRecords extends Component {
    render() {
        //console.log(this.props.album);
        return (          
        	<div className="main">
                <div className="ui fluid container">
               		<Search way={'all'} text={"Add record:"}/>
                	{this.props.activeAlbum.id ? <ActiveAlbum/> : <SearchList />}
            	</div>
            	<div className="placeholder"></div>
            </div>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
      //getSearchResults
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        
        activeAlbum: state.activeAlbum
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(AllRecords);

