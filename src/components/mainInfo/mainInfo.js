import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import UserInfo from '../userInfo/userInfo';
import ParentalInfo from '../parentalInfo/parentalInfo';
import CommunicationInfo from '../communicationInfo/communicationInfo';

export class mainInfo extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <header>
                        <div className="container">
                            <div className="row">
                                <div className="col"><Link to="/mainInfo">1</Link></div>
                                <div className="col"><Link to="/mainInfo/parentalInfo">2</Link></div>
                                <div className="col"><Link to="/mainInfo/communicationInfo">3</Link></div>
                            </div>
                        </div>
                    </header>
                    <Switch>
                        <Route exact path="/mainInfo/"><UserInfo></UserInfo></Route>
                        <Route path='/mainInfo/parentalInfo'><ParentalInfo /></Route>
                        <Route path="/mainInfo/communicationInfo"><CommunicationInfo /></Route>
                    </Switch>
                </Router>
                
            </div>
        )
    }
}

export default mainInfo
