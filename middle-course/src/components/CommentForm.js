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

    handleComment(values) {
        alert("Author: " + values.author);
        // alert(JSON.stringify(values));
    }

    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length > len);

        return(
            <React.Fragment>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
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
                                <Control.select model=".rating" id="rating" name="rating"
                                              placeholder="Select ratring number"
                                              className="form-control"
                                              validators={{

                                              }}
                                >
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
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
                                <Label htmlFor="author">Your name</Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Control.text model=".author" id="author" name="author"
                                              placeholder="Your name"
                                              className="form-control"
                                              validators={{
                                                  minLength: minLength(2),
                                                  maxLength: maxLength(15)
                                              }}
                                />
                                <Errors className="text-danger" model=".author" show="touched"
                                        messages={{
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
                            <Col md={2}>
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