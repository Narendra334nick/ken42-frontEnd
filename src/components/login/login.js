import React,{Component} from 'react'
import { Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {withRouter} from 'react-router-dom';


class login extends Component {
    state = {
        startDate: new Date(),
        isAdmin:false,
        dob:"",
        rollNo:"",
        name:"",
        phoneNo:"",
    };

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    handleCheck = (event) =>{
        const name = event.target.name;
        const value = event.target.checked;
        //console.log(name,value); 
        this.setState({
            [name]:value
        })
    }

    handleSubmit = ()=>{
        this.props.history.push('/mainInfo');
    }

    
    render() {
        return (
            <div className="container">
                <Form>
                    <DatePickerAndRollNo state={this.state} handleChange={this.handleChange}/>
                   
                    <FormGroup>
                    <div className="container">
                                <div className="row">
                                <Label for="name">Name*</Label>
                                </div>
                                <div className="row">
                                <Input className="w-50" type="text" name="naem" id="name" placeholder="Enter Your Name" />   
                                </div>
                     </div>
                       
                        
                    </FormGroup>

                    <FormGroup>
                    <div className="container">
                                <div className="row">
                                <Label for="Phone No">Phone Number</Label>
                                </div>
                                <div className="row">
                                <Input className="w-50" type="number" name="phone" id="phone" placeholder="Phone Number" />  
                                </div>
                     </div>
                       
                        
                    </FormGroup>

                    <FormGroup check>
                        <div className="container">
                            <div className="row">
                                <Label check>
                                <Input type="checkbox" name="isAdmin" onClick={this.handleCheck}/>{' '}
                                    Is Admin
                                </Label>
                            </div>
                        </div>
                    </FormGroup>

                   <div className ="container">
                       <div className="row">
                       <Button onClick={this.handleSubmit} color="primary" size="lg">Submit</Button>
                       </div>
                   </div>
                 </Form>
            </div>
        )
    }
}
export default withRouter(login);

function DatePickerAndRollNo(props){
    if(!props.state.isAdmin){
        return(
        <React.Fragment>
            <FormGroup>
                                <div className="container">
                                    <div className="row">
                                    <Label for="DOB">Date OF Birth*</Label>
                                    </div>
                                    <div className="row">
                                        <DatePicker
                                            style={{border:"none",borderRadius:"5px"}}
                                            selected={props.state.startDate}
                                            onChange={props.handleChange}
                                            name="dob"
                                            value={props.state.dob}
                                        />
                                    </div>
                                </div>
                           
                            
                            </FormGroup>
                    

                            <FormGroup>
                                <div className="container">
                                    <div className="row">
                                        <Label for="Roll No">Roll No*</Label>
                                    </div>
                                    <div className="row">
                                        <Input className="w-50 " type="number" name="roll" id="roll" placeholder="RollNo" />    
                                    </div>
                                </div>
                            </FormGroup>
        </React.Fragment>
    )
    }else{
        return null;
    }
}




