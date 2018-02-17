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
              list.push(<div key={i} className="three wide computer eight wide mobile four wide tablet column"><Album key={i} album={album} getAlbum={this.props.getAlbumInfo}/></div>);
        });
        return list;
    }
    render() {
        if(this.props.albums){   
            return (
                    <div className="ui stackable column grid">
                        {this.createList()}    
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