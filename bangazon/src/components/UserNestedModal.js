import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserLoginForm from './UserLoginForm';
import CreateUserForm from "./CreateUserForm";
import './UserNestedModal.css';

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
        return (
            <div className="userDiv">
                <i className="fas fa-user" onClick={this.toggle}>{this.props.buttonLabel}</i>
                <p>profile</p>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>User Login</ModalHeader>
                    <ModalBody>
                        <UserLoginForm className="userLoginForm" />
                        <br/>
                        <div className="createAccountDiv">
                            <p>Don't have an account yet? No problem!</p>
                            <Button color="success" onClick={this.toggleNested}>Create Account</Button>
                        </div>
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Create Your User Account</ModalHeader>
                            <ModalBody>
                                <CreateUserForm />
                                <Button color="secondary" onClick={this.toggleAll}>Cancel</Button>
                            </ModalBody>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default UserNestedModal;