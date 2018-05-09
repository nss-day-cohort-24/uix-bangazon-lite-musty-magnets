import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserLoginForm from './UserLoginForm';
import CreateUserForm from "./CreateUserForm";
import './UserNestedModal.css';
import Buttons from './Buttons';

class UserNestedModal extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modal: false,
    //         nestedModal: false,
    //         closeAll: false
    //     };

    //     this.toggle = this.toggle.bind(this);
    //     this.toggleNested = this.toggleNested.bind(this);
    //     this.toggleAll = this.toggleAll.bind(this);
    // }

    // toggle() {
    //     this.setState({
    //         modal: !this.state.modal
    //     });
    // }

    // toggleNested() {
    //     this.setState({
    //         nestedModal: !this.state.nestedModal,
    //         closeAll: false
    //     });
    // }

    // toggleAll() {
    //     this.setState({
    //         nestedModal: !this.state.nestedModal,
    //         closeAll: true
    //     });
    // }

    render() {
        return (
            <div className="userDiv">
<<<<<<< HEAD
                <i class="fas fa-user" onClick={this.props.toggle}>{this.props.buttonLabel}</i>
=======
                <i className="fas fa-user" onClick={this.toggle}>{this.props.buttonLabel}</i>
>>>>>>> 1671defa62e89e18e7336a616a53e46d5c02afc4
                <p>profile</p>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>User Login</ModalHeader>
                    <ModalBody>
                        <UserLoginForm 
                            className="userLoginForm" 
                            toggle={this.props.toggle} 
                            getUserValues={this.props.getUserValues}
                            auth={this.props.auth}
                            toggleAll={this.props.toggleAll}
                            />
                        <br/>
                        <div className="createAccountDiv">
                            <p>Don't have an account yet? No problem!</p>
                            <Buttons class="btn-create-account" function={this.props.toggleNested} label={"Create Account"}/>
                        </div>
                        <Modal isOpen={this.props.nestedModal} toggle={this.props.toggleNested} onClosed={this.props.closeAll ? this.props.toggle : undefined}>
                            <ModalHeader>Create Your User Account</ModalHeader>
                            <ModalBody>
                                <CreateUserForm />
                                <Buttons class={`btn-account-cancel`} label={"Cancel"} toggleAll={this.props.toggleAll} />
                            </ModalBody>
                        </Modal>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default UserNestedModal;