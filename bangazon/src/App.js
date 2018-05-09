import React, { Component } from 'react';
import './App.css';

import { UserInfo } from './components/db';
import  ProductDetail from './components/ProductDetail';

import { BrowserRouter } from 'react-router-dom';
import Topnavbar from './components/Topnavbar';
import Sidenav from './components/Sidenav';
import Display from './components/Display';

import './components/button.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        User : {},
        auth: false,
        modal: false,
        nestedModal: false,
        closeAll: false
    };
    this.getUserValues = this.getUserValues.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
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
              <Topnavbar getUserValues={this.getUserValues}  auth={this.state.auth} toggle={this.toggle} toggleAll={this.toggleAll} toggleNested={this.toggleNested}/>
              
              <div className="row">
                <Sidenav className="col-2"/>
                <Display className="col-10" />
              </div>
             
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
