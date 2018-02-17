import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {getAllTrades, getSearchResults} from '../actions/index';
import MyRecords from './MyRecords';
import Trades from './Trades';
import AllRecords from './AllRecords';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class UserPage extends React.Component {

    toggleActive = (e) => {
        const tabs = document.getElementsByClassName('_tab');
        for(let i=0; i<tabs.length;i++) { 
            tabs[i].classList.remove('active');
        }
        let target = e.target;
        if(target.tagName!=="A") target = target.parentElement;
        target.classList.remove('item');
        target.classList.add('active', 'item');
    }
    render() {
        
        return (
            <div>
                
                <div style={{"textAlign": "center"}}>
                    <div className="ui compact labeled icon menu">
                          <Link to={'/albums/all'} className="_tab active item" onClick={this.toggleActive}>
                            <i className="database icon"></i>
                            All Records
                          </Link>
                          <Link to={'/albums/my'} className="_tab item" onClick={this.toggleActive}>
                            <i className="star icon"></i>
                            My Records
                          </Link>
                          <Link to={'/albums/trades'} className="_tab item" onClick={this.toggleActive}>
                            <i className="exchange icon"></i>
                            Trades
                          </Link>
                    </div>
                </div>
                
            </div>

        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        //getSearchResults,
        //getAllTrades
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        user: state.user
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(UserPage);