import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import UserLoginFormTemplate from "./UserLoginFormTemplate";
import UserLoginForm from './UserLoginForm';
import CreateUserForm from "./CreateUserForm";
import './userModal.css';


class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <i class="fas fa-user" onClick={this.toggle}>{this.props.buttonLabel}</i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
                    <UserLoginForm />
                    <CreateUserForm />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UserModal;