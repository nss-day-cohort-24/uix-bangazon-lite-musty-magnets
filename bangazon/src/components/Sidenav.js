import React, { Component } from 'react';
import './sidenav.css';
import { NavLink } from 'react-router-dom';
import TopProds from './TopProds';

import 'bootstrap/dist/css/bootstrap.min.css';


class Sidenav extends Component {
    constructor(props){
        super(props);
        this.state = {
            CategoriesLoaded: false,
            ElectArray: [],
            BookArray: [],
            OutdoorArray: [],
            VidGameArray: [],
            MiscArray: []
        }
    }
    componentDidMount = () => {
     
        fetch('http://localhost:3000/product?category=Electronics')
        .then(response => {
        return response.json();
        })
        .then((data) => {
        this.setState({
            ElectArray: data 
        })
        
        });
        fetch('http://localhost:3000/product?category=Books')
        .then(response => {
        return response.json();
        })
        .then((data) => {
        this.setState({
            BookArray: data
        })
        console.log('bookarray', this.state.BookArray);
        
        });
        fetch('http://localhost:3000/product?category=Outdoor')
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        this.setState({
            OutdoorArray: data
        })
        });
        fetch('http://localhost:3000/product?category=Miscellaneous')
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        this.setState({
            MiscArray: data
        })
        
        });
        fetch('http://localhost:3000/product?category=Video Games')
        .then((response) => {
        return response.json();
        })
        .then((data) => {
        this.setState({
            VidGameArray: data
        })
        
        });
    }
    
    render() {
        const { CategoriesLoaded, ElectArray, BookArray, OutdoorArray, VidGameArray,  MiscArray} = this.state;
        return(
            <div className="sideNav col-2">
                <div className="d-flex sideNav-wrap justify-content-center">
                <h5 className="sideNav-label">Best Sellers</h5>
                </div>
                <div className="">
                    <li className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <NavLink className="nav-link" to={{ pathname: '/CategoryProduct', state: { objresult: this.state.BookArray    } }}>Books</NavLink>
                            <span className="badge badge-primary badge-pill">{Object.keys(this.state.BookArray).length}</span>
                        </div>
                        <div>
                            <TopProds 
                            data={this.state.BookArray}
                            length={Object.keys(this.state.BookArray).length} />
                        </div>
                    </li>
                    <li className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <NavLink className="nav-link" to={{ pathname: '/CategoryProduct', state: { objresult: this.state.ElectArray    } }} >Electronics</NavLink>
                            <span className="badge badge-primary badge-pill">{Object.keys(this.state.ElectArray).length}</span>
                        </div>
                        <div>
                            <TopProds data={this.state.ElectArray}
                            length={Object.keys(this.state.ElectArray).length}/>
                        </div>
                    </li>
                    <li className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">                    
                            <NavLink className="nav-link" to={{ pathname: '/CategoryProduct', state: { objresult: this.state.OutdoorArray    } }} >Outdoor</NavLink>
                            <span className="badge badge-primary badge-pill">{Object.keys(this.state.OutdoorArray).length}</span>
                        </div>
                        <div>
                            <TopProds data={this.state.OutdoorArray}
                            length={Object.keys(this.state.OutdoorArray).length}/>
                        </div>
                    </li>
                    <li className=" d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <NavLink className="nav-link" to={{ pathname: '/CategoryProduct', state: { objresult: this.state.VidGameArray    } }} >Video Games</NavLink>
                            <span className="badge badge-primary badge-pill">{Object.keys(this.state.VidGameArray).length}</span>
                        </div>
                        <div>
                            <TopProds data={this.state.VidGameArray}
                            length={Object.keys(this.state.VidGameArray).length}/>
                        </div>
                    </li>
                    <li className=" d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <NavLink className="nav-link" to={{ pathname: '/CategoryProduct', state: { objresult: this.state.MiscArray    } }} >Miscellaneous</NavLink>
                            <span className="badge badge-primary badge-pill">{Object.keys(this.state.MiscArray).length}</span>
                        </div>
                        <div>
                            <TopProds data={this.state.MiscArray}
                            length={Object.keys(this.state.MiscArray).length}/>
                        </div>
                    </li>
                    </div>
            </div>
        )
    }
}

export default Sidenav;