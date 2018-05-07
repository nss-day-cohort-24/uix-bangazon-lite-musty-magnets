import React, { Component } from 'react';
import './sidenav.css';


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
        // .then(response => response.json())
        .then((response) => response.json() )
        .then((response) => {
            console.log('response2: ', response);
            this.setState({
                ElectArray:response ,
            })
        })  
    }
        // fetch('http://localhost:3000/product?category=Books')
        // .then(function(response) {
        // return response.json();
        // })
        // .then((data) => {
        // console.log(data.length,"datalength");
        // this.setState({
        //     BookArray: data,
        //     // OutdoorArray: outdoorArray,
        //     // VidGameArray: vidGamesArray,
        //     // MiscArray: miscArray,
        //     // electLength: electLength
        // })
        
        // });
        // fetch('http://localhost:3000/product?category=Outdoor')
        // .then(function(response) {
        // return response.json();
        // })
        // .then((data) => {
        // console.log(data.length,"datalength");
        // this.setState({
        //     OutdoorArray: data
        //     // VidGameArray: vidGamesArray,
        //     // MiscArray: miscArray,
        //     // electLength: electLength
        // })
        
        // });


        



    


    render() {





        return(
            <div className="sideNav col-2">
                <div className="sideNav-wrap">
                <h5 className="sideNav-label">Product Categories</h5>
                </div>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    Electronics
                    <span className="badge badge-primary badge-pill">{Object.keys(this.state.ElectArray).length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    Books
                    <span className="badge badge-primary badge-pill">{Object.keys(this.state.BookArray).length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    Outdoor
                    <span className="badge badge-primary badge-pill">{Object.keys(this.state.OutdoorArray).length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    Video Games
                    <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    Miscellaneous
                    <span className="badge badge-primary badge-pill">1</span>
                    </li>
                    </ul>
            </div>
        )

    }

}

export default Sidenav;