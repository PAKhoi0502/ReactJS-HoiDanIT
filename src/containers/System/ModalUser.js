import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         firstName: '',
         lastName: '',
         address: '',


      }
      this.listenToEmitter();
   }

   listenToEmitter() {
      emitter.on('EVENT_CLEAR_MODAL_DATA', data => {
         //reset state
         this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
         })
      })

   }

   componentDidMount() {
   }

   toggle = () => {
      this.props.toggleFromParent();
   }

   handleOnchangeInput = (event, id) => {
      //bad code

      // this.state[id] = event.target.value;
      // this.setState({
      //    ...this.state
      // }, () => {
      //    console.log('check', this.state)
      // })


      // good code
      let copyState = { ...this.state };
      copyState[id] = event.target.value;
      this.setState({
         ...copyState
      })
   }

   checkValideInput = () => {
      let isValid = true;
      let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
      for (let i = 0; i < arrInput.length; i++) {
         if (!this.state[arrInput[i]]) {
            isValid = false;
            alert('Missing parameter: ' + arrInput[i]);
            break;
         }
      }
      return isValid;
   }

   handleAddNewUser = () => {
      let isValid = this.checkValideInput();
      if (isValid === true) {
         // call api create modal
         this.props.createNewUser(this.state);
      }
   }


   render() {
      console.log('check props', this.props)
      console.log('check props open', this.props.isOpen)
      return (
         <Modal
            isOpen={this.props.isOpen}
            toggle={() => this.toggle()}
            className={'modal-user-container'}
            size="lg"

         >


            <ModalHeader toggle={() => this.toggle()}>Create A New User</ModalHeader>
            <ModalBody>
               <div className='modal-user-body'>
                  <div className='input-container'>
                     <label>Email</label>
                     <input
                        type='text'
                        onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                        value={this.state.email}

                     ></input>
                  </div>
                  <div className='input-container'>
                     <label>Password</label>
                     <input type='password'
                        onChange={(event) => { this.handleOnchangeInput(event, "password") }}
                        value={this.state.password}

                     ></input>
                  </div>
                  <div className='input-container'>
                     <label>First Name</label>
                     <input type='text'
                        onChange={(event) => { this.handleOnchangeInput(event, "firstName") }}
                        value={this.state.firstName}

                     ></input>
                  </div>
                  <div className='input-container'>
                     <label>Last Name</label>
                     <input type='text'
                        onChange={(event) => { this.handleOnchangeInput(event, "lastName") }}
                        value={this.state.lastName}

                     ></input>
                  </div>
                  <div className='input-container max-width-input'>
                     <label>Address</label>
                     <input type='text'
                        onChange={(event) => { this.handleOnchangeInput(event, "address") }}
                        value={this.state.address}

                     ></input>
                  </div>
               </div>

            </ModalBody>
            <ModalFooter>
               <Button
                  color='primary'
                  className='px-3'
                  onClick={() => this.handleAddNewUser()}>
                  Add New
               </Button>{' '}
               <Button
                  color='secondary'
                  className='px-3'
                  onClick={() => this.toggle()}>
                  Close
               </Button>
            </ModalFooter>
         </Modal>
      )
   }

}

const mapStateToProps = state => {
   return {
   };
};

const mapDispatchToProps = dispatch => {
   return {
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
