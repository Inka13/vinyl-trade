import React, {Component} from 'react';
import {connect} from 'react-redux';

class Album extends Component {
    
    render() {
        const image = this.props.album.image;
        const title = this.props.album.title;
        const artist = this.props.album.artist;
        //console.log(this.props.album);
        return (                                                               
                <div className="ui card" onClick={() => this.props.getAlbum(this.props.album.id)}>
                  <img src={image} className="ui image" alt="album art"/>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">Artist: {artist}</div>
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
export default connect(mapStateToProps)(Album);

