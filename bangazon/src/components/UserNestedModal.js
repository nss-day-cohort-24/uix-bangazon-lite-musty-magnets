import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserLoginForm from './UserLoginForm';
import CreateUserForm from "./CreateUserForm";
import './UserNestedModal.css';
import '../App.css';
import Buttons from './Buttons';

class UserNestedModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

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

    render() {
        if(this.props.auth === true) 
        {
            return (
                <div className="userDiv">
                    <i class="fas fa-user" onClick={this.toggle}>{this.props.buttonLabel}</i>
                    <p>{this.props.user.first_name} {this.props.user.last_name}</p>
                    <Modal isOpen={this.state.modal} toggle={this.state.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>User Login</ModalHeader>
                        <ModalBody>
                            <UserLoginForm 
                                className="userLoginForm" 
                                toggle={this.toggle} 
                                getUserValues={this.props.getUserValues}
                                auth={this.props.auth}
                                toggleAll={this.toggleAll}
                                />
                            <br/>
                            <div className="createAccountDiv">
                                <p>Don't have an account yet? No problem!</p>
                                <Buttons class="btn-create-account" function={this.toggleNested} label={"Create Account"}/>
                            </div>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Create Your User Account</ModalHeader>
                                <ModalBody>
                                    <CreateUserForm toggle={this.toggle}/>
                                    <Buttons class={`btn-account-cancel`} label={"Cancel"} function={this.toggleAll} toggle={this.toggle}/>
                                </ModalBody>
                            </Modal>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </Modal>
                </div>
            );
        }
        else{
            return (
                <div className="userDiv">
                    <i class="fas fa-user" onClick={this.toggle}>{this.props.buttonLabel}</i>
                    <p>Profile</p>
                    <Modal isOpen={this.state.modal} toggle={this.state.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>User Login</ModalHeader>
                        <ModalBody>
                            <UserLoginForm 
                                className="userLoginForm" 
                                toggle={this.toggle} 
                                getUserValues={this.props.getUserValues}
                                auth={this.props.auth}
                                toggleAll={this.toggleAll}
                                />
                            <br/>
                            <div className="createAccountDiv">
                                <p>Don't have an account yet? No problem!</p>
                                <Buttons class="btn-create-account" function={this.toggleNested} label={"Create Account"}/>
                            </div>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Create Your User Account</ModalHeader>
                                <ModalBody>
                                    <CreateUserForm toggle={this.toggle}/>
                                    <Buttons class={`btn-account-cancel`} label={"Cancel"} function={this.toggleAll} toggle={this.toggle}/>
                                </ModalBody>
                            </Modal>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </Modal>
                </div>
            );
        }
    }
}

export default UserNestedModal;