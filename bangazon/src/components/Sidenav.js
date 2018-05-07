import React, { Component } from 'react';
import './sidenav.css';
import { NavLink } from 'react-router-dom';



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
        
        let electronicsArray = [];
        let booksArray = [];
        let outdoorArray = [];
        let vidGamesArray = [];
        let miscArray = [];
        let electLength = "";
        let electronics;


        fetch('http://localhost:3000/product?category=Electronics')
        .then(function(response) {
        return response.json();
        })
        .then((data) => {
        console.log(data.length,"electronicsdatalength");
        this.setState({
            ElectArray:data 
        })
        
        });
        fetch('http://localhost:3000/product?category=Books')
        .then(function(response) {
        return response.json();
        })
        .then((data) => {
        console.log(data.length,"booksdatalength");
        this.setState({
            BookArray: data
        })
        
        });
        fetch('http://localhost:3000/product?category=Outdoor')
        .then(function(response) {
        return response.json();
        })
        .then((data) => {
        console.log(data.length,"Outdoordatalength");
        this.setState({
            OutdoorArray: data
        })
        });


        fetch('http://localhost:3000/product?category=Miscellaneous')
        .then(function(response) {
        return response.json();
        })
        .then((data) => {
        console.log(data.length,"Miscellaneousdatalength");
        this.setState({
            MiscArray: data
        })
        
        });

        fetch('http://localhost:3000/product?category=Video Games')
        .then(function(response) {
        return response.json();
        })
        .then((data) => {
        console.log(data.length,"VideoGamesaneousdatalength");
        this.setState({
            VidGameArray: data
        })
        
        });


        



    }


    render() {
        return(
            <div className="sideNav col-2">
                <div className="sideNav-wrap">
                <h5 className="sideNav-label">Product Categories</h5>
                </div>
                <div className="">
                    <li className="d-flex justify-content-between align-items-center">
                        <NavLink className="nav-link" to="/CategoryProduct" >Electronics</NavLink>
                        <span className="badge badge-primary badge-pill">{Object.keys(this.state.ElectArray).length}</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <NavLink className="nav-link" to="/CategoryProduct">Books</NavLink>
                        <span className="badge badge-primary badge-pill">{Object.keys(this.state.BookArray).length}</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <NavLink className="nav-link" to="/CategoryProduct" >Outdoor</NavLink>
                        <span className="badge badge-primary badge-pill">{Object.keys(this.state.OutdoorArray).length}</span>
                    </li>
                    <li className=" d-flex justify-content-between align-items-center">
                        <NavLink className="nav-link" to="/CategoryProduct" >Video Games</NavLink>
                        <span className="badge badge-primary badge-pill">{Object.keys(this.state.VidGameArray).length}</span>
                    </li>
                    <li className=" d-flex justify-content-between align-items-center">
                        <NavLink className="nav-link" to="/CategoryProduct" >Miscellaneous</NavLink>
                        <span className="badge badge-primary badge-pill">{Object.keys(this.state.MiscArray).length}</span>
                    </li>
                    </div>
            </div>
        )

    }

}

export default Sidenav;