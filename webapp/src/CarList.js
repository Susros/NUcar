/**
 * Car List page
 * 
 * This page list all available cars to rent.
 * 
 * @author Kelvin Yin
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import AppNavbar from './components/navbar/AppNavbar';

import temporary_car_image from './img/temporary_car_image.jpg';

import 'react-datepicker/dist/react-datepicker.css';

function CarListCard(props) {
    return(
        <div className="row my-3">
            <div className="col-md-4">
                <img 
                    src={ props.img }
                    className="w-100"
                    title={ props.title }
                />
            </div>

            <div className="col-md-5">
                <h5>{ props.title } <small>({ props.transmission })</small></h5>
                <small><i className="fas fa-map-marker-alt"></i> { props.address }</small>

                <div className="row text-center mt-4 border-top border-bottom py-3 bg-light">
                    <div className="col-4">
                        <span className="lead font-weight-bold">{ props.num_booking }</span>
                        <div className="text-muted">
                            <i className="fas fa-clipboard-check mr-1"></i> Bookings
                        </div>
                    </div>

                    <div className="col-4">
                        <span className="lead font-weight-bold">20</span>
                        <div className="text-success">
                            <i className="fas fa-thumbs-up mr-1"></i> Likes
                        </div>
                    </div>

                    <div className="col-4">
                        <span className="lead font-weight-bold">5</span>
                        <div className="text-danger">
                            <i className="fas fa-thumbs-down mr-1"></i> Dislikes
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 text-center align-self-center">
                <div className="my-3">
                    <sup className="lead">$</sup><span className="h2">{ props.price }</span> <sub className="lead text-muted">/ hr</sub>
                </div>

                <div className="my-3">
                    <Link to={ "cars/" + props.id } className="btn btn-info w-100">Book</Link>
                </div>
            </div>
        </div>
    );
}

class CarList extends Component {

    /**
     * Constructor for CarList
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            cars: null,
            features: null,
            filter: {
                pickup_date: new Date(),
                return_date: (new Date()).setDate((new Date).getDate() + 1)
            }
        }
    }

    /**
     * After the component is loaded
     */
    componentDidMount() {

        // Get list of features
        axios.get(
            process.env.REACT_APP_API_URL + '/cars/features', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                withCredentials: true
            }
        ).then(({ data }) => {
            this.setState({ features: data.data });
        }).catch(err => {
            this.setState({ features: null });
        });

        // Get list of cars
        axios.get(
            process.env.REACT_APP_API_URL + '/cars', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                withCredentials: true
            }
        ).then(({ data }) => {
            console.log(data);
            this.setState({ cars: data.data });
        }).catch(err => {
            this.setState({ cars: null });
        });
    }

    render() {

        if (this.state.features == null || this.state.cars == null) {
            return null;
        }

        return(
            <div>
                <AppNavbar />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 border-right bg-light">
                            <div className="p-3">
                                <h3 className="mb-4">Filter</h3>

                                <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-white border-right-0">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                            </div>

                                            <input type="text" name="location" className="form-control border-left-0" id="location-input" placeholder="Location" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="pickup-date-input">Pickup Date</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-white border-right-0">
                                                    <i className="fas fa-calendar-alt"></i>
                                                </span>
                                            </div>

                                            <DatePicker 
                                                selected={ this.state.filter.pickup_date } 
                                                dateFormat="yyyy-MM-dd"
                                                className="form-control border-left-0" 
                                                id="pickup-date-input" 
                                                name="pickup_date" 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="return-date-input">Return Date</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-white border-right-0">
                                                    <i className="fas fa-calendar-alt"></i>
                                                </span>
                                            </div>
                                            
                                            <DatePicker 
                                                selected={ this.state.filter.return_date } 
                                                dateFormat="yyyy-MM-dd"
                                                className="form-control border-left-0" 
                                                id="return-date-input" 
                                                name="return_date" 
                                            />
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="form-group">
                                        <label className="font-weight-bold">Transmission</label>
                                        
                                        <div className="form-row">
                                            <div className="col-6">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="transmission-auto-input" />
                                                    <label className="custom-control-label" for="transmission-auto-input">Automatic</label>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="transmission-manual-input" />
                                                    <label className="custom-control-label" for="transmission-manual-input">Manual</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="form-group">
                                        <label className="font-weight-bold">Features</label>

                                        <div className="form-row">

                                            {
                                                this.state.features.map(feature => 
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id={ "feature-input-" + feature.id } value={ feature.id } />
                                                                <label className="custom-control-label" for={ "feature-input-" + feature.id }>{ feature.name }</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="submit" value="Apply Filter" className="btn btn-success" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="py-3 border-bottom">
                                <small>
                                    Showing <b>20</b> cars near Newcastle.
                                </small>
                            </div>

                            <div>

                                { 
                                    this.state.cars.map( (car, num) => 
                                        <CarListCard 
                                            title={ car.make + " " + car.model }
                                            price={ car.price }
                                            address= { car.address }
                                            transmission={ car.transmission }
                                            img={ temporary_car_image }
                                            id={ car.id }
                                            key={ car.id }
                                            num_booking={ car.num_booking }
                                        />
                                    )
                                
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CarList;