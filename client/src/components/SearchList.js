import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getAlbumInfo} from '../actions/index';
//import Menu from './Menu';
import Album from './Album';
class SearchList extends Component {
    createList() {
        const list = [];
         this.props.albums.forEach((album, i) => {
            //console.log(album)
              list.push(<div className="four wide computer sixteen wide mobile eight wide tablet column"><Album key={i} album={album} getAlbum={this.props.getAlbumInfo}/></div>);
        });
        return list;
    }
    render() {
        if(this.props.albums){   
            return (
                <div>
                    <div className="placeholder"></div>
                    <div className="ui stackable four column grid">
                        {this.createList()}    
                    </div>
                </div>
            );
        }
        return (<div></div>);
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getAlbumInfo,
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        albums: state.albums
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(SearchList);