import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input,} from 'reactstrap';


export default class userInfo extends Component {
    render() {
        return (
            <div>
                <Form>
                    personal Info
                    <FormGroup>
                        <Label for="Name">Name*</Label>
                        <Input type="text" name="name" id="name" placeholder="Enter Your Name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone Number</Label>
                        <Input type="number" name="number" id="number" placeholder="Enter Your COntact number" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Gender</Label>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Male
                            </Label>
                        </FormGroup>

                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Female
                            </Label>
                        </FormGroup>

                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Other
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </Form>   
                <div className="container">
                        <div className="row">
                            <div className="col sm-12"><button className="btn btn-primary">Next</button></div>
                            
                        </div>
                    </div>             
            </div>
        )
    }
}

