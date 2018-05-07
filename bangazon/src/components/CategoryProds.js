import React, { Component } from 'react';
import "./productThumbnail.css";
import CategoryProdTemplate from './CategoryProdTemplate'


class CategoryProds extends Component {

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
        let ElectArray = [];
        let booksArray = [];
        let outdoorArray = [];
        let vidGamesArray = [];
        let miscArray = [];

        fetch('http://localhost:3000/product?category=Electronics')
            .then(function(response) {
            return response.json();
            })
            .then((data) => {
            console.log(data,"electronics data");
            this.setState({
                ElectArray:data 
            })
            });
    }
    render () {
        return(
            <div>
                <CategoryProdTemplate data={this.state.ElectArray} />
            </div>
        )
    }
}
export default CategoryProds;
