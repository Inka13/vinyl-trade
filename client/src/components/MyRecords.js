import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SearchList from './SearchList';
import Search from './Search';
import ActiveAlbum from './ActiveAlbum';
//import {getSearchResults} from '../actions/index';

class MyRecords extends Component {
    
    render() {
        
        //console.log(this.props.album);
        return (  
            <div className="main">                                                             
                <div className="ui fluid container">
                    <Search way={'my'} text={"Find record:"}/>
                    {this.props.activeAlbum.id ? <ActiveAlbum/> : <SearchList />} 
                </div>
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
        user: state.user,
        albums: state.albums,
        activeAlbum: state.activeAlbum
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(MyRecords);

