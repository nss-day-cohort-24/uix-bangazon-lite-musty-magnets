import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import UserLoginFormTemplate from "./UserLoginFormTemplate";
import UserLoginForm from './UserLoginForm';
import CreateUserForm from "./CreateUserForm";
import './userModal.css';


class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      User: {
        id: null,
        first_name : null,
        last_name : null,
        email: null,
        userpassword : null,
        address : null,
        seller : null,
        city : null,  
        phone : null, 
        cardnumber : null,
        crv : null
      }
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
      <div className="userDiv">
        <i className="fas fa-user" onClick={this.toggle}>{this.props.buttonLabel}</i>
        <p>profile</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
                    <UserLoginForm login = {this.state}/>
                    <CreateUserForm login = {this.state} />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UserModal;