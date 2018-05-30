import React, { Component } from 'react';
import './App.css';
import './components/display.css'
import { UserInfo } from './components/db';
import { Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import TopNavbar from './components/Topnavbar';
import Sidenav from './components/Sidenav';
import Display from './components/Display';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProductThumbnail from './components/ProductThumbnail';
import './components/button.css';
import SearchResultsTemp from './components/SearchResultsTemp';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        User : {},
        auth: false,
        modal: false,
        nestedModal: false,
        closeAll: false,
        searchString: '',
        productArray : []
        // results: []
    };
    this.getProduct = this.getProduct.bind(this);
    this.getUserValues = this.getUserValues.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
}

    SearchResults = (props) => {
        Object.keys(this.state.productArray).map((product, index) => (

        <div key={index} >
            <ProductThumbnail 
                image = {this.state.productArray[product].image}
                name = {this.state.productArray[product].name}
                price = {this.state.productArray[product].price}
                quantity = {this.state.productArray[product].quantity}
            />
        </div>     
    ));
    }

getProduct = (taco) => {
    console.log ("what is taco in getProduct?", taco);

        fetch(`http://localhost:3000/product?q=${taco}`)
                .then(response => response.json())
                .then((data) => {
                    console.log ("what data do we have?", data);
                    this.setState({
                        productArray: data
                    })
                })
                 .then(this.SearchResults());
            }
    
    handleInputChange = (e) => {
        // console.log ("what is e?", e.charCode);
        let srchinput = document.getElementById('search');
        if (e.charCode === 13 && srchinput.value !=="") {
            this.getProduct(srchinput.value);
        }
    }

toggle() {
    this.setState({
        modal: !this.state.modal
    });
}

toggleNested() {
    this.setState({
        nestedModal: !this.state.nestedModal,
        closeAll: false
    });
}

toggleAll() {
    this.setState({
        nestedModal: !this.state.nestedModal,
        closeAll: true
    }, function(){
        console.log("You clicked submit!", this);
    });
}

getUserValues() {
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;
    //Get the user.
    fetch(`http://localhost:3000/user?email=${userEmail}&&password=${userPassword}`,
    {
        method: "GET"
    }).then((resp)=>{ 
        resp.json().then(
            (resolved) =>{
                console.log("Returned? ", resolved);
                if (resolved.length === 0 ){
                    console.log("No users. ");
                }

                else{
                    console.log("New User, set the state.");
                    this.setState({
                        User : resolved[0], 
                        auth: true
                    }, function(){
                        console.log("You're registered: ", this.state.User, this.state.auth);
                    });
                }
                },
                (rejected) =>{
                    console.log("ERROR 6295: This number has been disconnected.");
                }
            );
        });   
    }


  render() {
      
    return (
       <BrowserRouter>
        <div className="App">
              <UserInfo />
              <TopNavbar 
               getUserValues={this.getUserValues}
               modal={this.state.modal} 
               nestedModal={this.state.nestedModal} 
               closeAll={this.state.closeAll} 
               auth={this.state.auth} 
               toggle={this.toggle} 
               toggleAll={this.toggleAll} 
               toggleNested={this.toggleNested}
               handleInputChange={this.handleInputChange}
               data={this.state.productArray}/>
              
              <div className="row">
                <Sidenav className="col-3"/>
                <Display className="col-9 " data={this.state.productArray} />
              </div>
             
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
