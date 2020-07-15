import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input,} from 'reactstrap';

export class communicationInfo extends Component {
    render() {
        return (
            <div>
                <Form>
                    Communication Address:
                    <div className="form-group">
                        <label>Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Permanent Address</option>
                            <option>Business Address</option>
                            <option>Communication Address</option>
                        </select>
                    </div>
                    <FormGroup>
                        <Label for="Address Line1">Address Line 1*</Label>
                        <Input type="text" name="line1" id="line1" placeholder="Ex..kalindi vihar agra" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Fathers Name">Address Line 2(Optional)</Label>
                        <Input type="text" name="line2" id="line2" placeholder="Ex..kalindi vihar agra" />
                    </FormGroup>
                    <div className="container">
                        <div className="row">
                            <div className="col sm-12"><button className="btn btn-primary">Save</button></div>
                            <div className="col sm-12"><button className="btn btn-danger">Submit</button></div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default communicationInfo
