import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input,} from 'reactstrap';

export class parentalInfo extends Component {
    render() {
        return (
            <div>
                 Parent info:
                <Form>
                    <FormGroup>
                        <Label for="Mothers Name">Mothers Name</Label>
                        <Input type="text" name="mother" id="mother" placeholder="mothers name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Fathers Name">Fathers Name*</Label>
                        <Input type="text" name="father" id="father" placeholder="Fathers Name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="with a placeholder" />
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

export default parentalInfo
