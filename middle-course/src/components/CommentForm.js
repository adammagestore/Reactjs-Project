import React, {Component} from 'react';
import {Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Input, Label} from 'reactstrap';
import { Control, LocalForm, Errors  } from 'react-redux-form';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleComment() {
        alert('comment');
    }

    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        return(
            <React.Fragment>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Comment</Button>
                    </NavItem>
                </Nav>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleComment(values)}>
                        <div className="form-group">
                        <Row>
                            <Col>
                                <Label htmlFor="rating">Rating</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Control.text model=".rating" id="rating" name="rating"
                                              placeholder="Select ratring number"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors className="text-danger" model=".rating" show="touched"
                                        messages={{
                                            required: 'Required field',
                                        }}
                                />
                            </Col>
                        </Row>
                        </div>
                        <div className="form-group">
                        <Row>
                            <Col>
                                <Label htmlFor="name">Your name</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Control.text model=".name" id="name" name="name"
                                              placeholder="Your name"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength,
                                                  maxLength
                                              }}
                                />
                                <Errors className="text-danger" model=".name" show="touched"
                                        messages={{
                                            required: 'Required field',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                />
                            </Col>
                        </Row>
                        </div>
                        <div className="form-group">
                        <Row>
                            <Col>
                                <Label htmlFor="comment">Comment</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                                  placeholder=""
                                                  className="form-control"
                                                  validators={{

                                                  }}
                                />
                            </Col>
                        </Row>
                        </div>
                        <div className="form-group">
                        <Row>
                            <Col>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Col>
                        </Row>
                        </div>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </React.Fragment>
        )
    }
}

export default CommentForm;