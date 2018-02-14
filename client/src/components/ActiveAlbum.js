import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {alertMe} from '../actions/index';
//import Menu from './Menu';
class ActiveAlbum extends React.Component {
    createList() {
        const list = [];
         this.props.activeAlbum.tracks.forEach((track, i) => {
            //console.log(place.review)
              list.push(<a key={i} role="listitem" className="item">{track.title} {track.duration}</a>);
            });
        return list;
    }
    
    render() {
        
        const title = this.props.activeAlbum.title;
        const artist = this.props.activeAlbum.artist;
        const image = this.props.activeAlbum.image;
        
        const description = this.props.activeAlbum.description;
        return (
            <div>
            <div className="placeholder"></div>
            <div className="ui stackable three column grid">
                
                <div className="column">
                  <img src={image} className="ui large centered image" alt="album art"/>
                </div>
                
                <div className="column">
                    <div className="ui centered card">
                        <div className="content">
                            <div className="medium header">{title}</div>
                            <div className="meta">Artist: {artist}</div>
                            <div role="list" className="ui ordered list">
                                {this.createList()} 
                            </div>  
                        </div>
                        
                        <div className="extra content">
                          Add to your:
                        </div>
                        <div className="ui buttons">
                           
                            <button className="ui green button">Collection</button>
                            <div class="or"></div>
                            <button className="ui red button">Trades</button>
                            <div class="or"></div>
                            <button className="ui blue button">Wishlist</button>
                          </div>
                    </div>
                </div>
            </div>
            <div className="placeholder"></div>
            <div class="ui fluid container">
                <h2 class="ui header">About {title}</h2>
                <p>{description}</p>
            </div>
        </div>  
            
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        activeAlbum: state.activeAlbum,
        user: state.user
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(ActiveAlbum);
