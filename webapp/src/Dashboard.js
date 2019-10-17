/**
 * Dashboard page
 * 
 * @author Kelvin Yin
 */

import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Notifications from './dashboard/Notifications';
import Messages from './dashboard/Messages';
import Cars from './dashboard/Cars';
import AddCar from './dashboard/AddCar';

import v_logo_light from './img/v_logo_light.png';

class Dashboard extends Component {
    /**
     * Constructor for DashboardContainer
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <div id="dashboard-sidebar">
                        <div className="my-3 text-center">
                            <img 
                                src={ v_logo_light }
                                height="100"
                                alt="NuCar"
                                title="NuCar"
                            />
                        </div>

                        <div className="pt-3">
                            <div className="list-group" id="dashboard-nav">
                                <Link to="/dashboard" className="dashboard-nav-item list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="dashboard-nav-notifications">
                                    <span>
                                        <i className="fas fa-bell mr-1"></i> Notifications
                                    </span>
                                    <span class="badge badge-primary badge-pill">0</span>
                                </Link>

                                <Link to="/dashboard/messages" className="dashboard-nav-item  list-group-item list-group-item-action d-flex justify-content-between align-items-center" id="dashboard-nav-messages">
                                    <span>
                                        <i className="fas fa-envelope mr-1"></i> Messages
                                    </span>
                                    <span class="badge badge-primary badge-pill">0</span>
                                </Link>

                                <Link to="/dashboard/cars" className="dashboard-nav-item list-group-item list-group-item-action" id="dashboard-nav-cars">
                                    <i className="fas fa-car mr-1"></i> Cars
                                </Link>
                            </div>
                        </div>

                        <div id="dashboard-profile-btn-container">
                            <div className="border-top border-secondary">
                                <div class="dropright">
                                    <div className="dropdown-toggle cursor-pointer px-3 py-2" id="dashboard-profile-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div class="row align-items-center">
                                            <div class="col-10">
                                                <img 
                                                    src="https://scontent.fsyd6-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/66632445_1111377929047906_2551103770872250368_n.jpg?_nc_cat=100&_nc_oc=AQlHQix0ZcfkWRGTrvYKPKsWGb_jbpljmHLZ2Y2yTMIPWKEqqW-EhnwKrPk2UaMtrj4&_nc_ht=scontent.fsyd6-1.fna&oh=1af0b37b2bf2c20faf75ed96a78795db&oe=5E17AEB5"
                                                    width="32"
                                                    height="32"
                                                    alt=""
                                                    title=""
                                                    className="rounded-circle"
                                                />

                                                <span className="ml-2 text-light">First Name</span>
                                            </div>
                                            <div class="col-2">
                                                <div class="text-right text-secondary small">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="dropdown-menu" aria-labelledby="dashboard-profile-dropdown">
                                        <a href="/" className="dropdown-item">Settings</a>
                                        <a href="/" className="dropdown-item">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="dashboard-content-container">
                        <Switch>
                            <Route exact path="/dashboard/">
                                <Notifications />
                            </Route>

                            <Route exact path="/dashboard/messages">
                                <Messages />
                            </Route>

                            <Route exact path="/dashboard/cars">
                                <Cars />
                            </Route>

                            <Route exact path="/dashboard/cars/add">
                                <AddCar />
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Dashboard;