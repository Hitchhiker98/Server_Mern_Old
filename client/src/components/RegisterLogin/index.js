import React, { Component } from 'react'
import { connect } from "react-redux"
import {loginUser} from "../../actions/user_actions"
import { Link } from "react-router-dom"



class RegisterLogin extends Component {

state = {
    email: "",
    password:"",
    errors: []
 }


 displayErrors = (errors) => 
    errors.map((err, i)=> <p key={i}>{err}</p>)

 handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
 }

 submitForm(event) {
     event.preventDefault();

     let dataToSubmit = {
         email: this.state.email,
         password: this.state.password
     };

     if (this.isFormvalid(this.state)){
         this.setState({ erros: []})
            this.props.dispatch(loginUser(dataToSubmit))
            .then(response => {
                if(response.payload.loginSuccess){
                   this.props.history.push("/") 
                } else {
                    this.setState({errors: this.state.errors.concat("failed to log in, you can check your email or password")})
                }
            })
     } else {
         this.state.errors.concat("form is not valid")
     }
 }


 isFormvalid = ({email, password}) => email && password




    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12"
                    // onSubmit={event => this.submitForm(EventSource)}
                    >
                        <div className="row" >
                            <div className="input-field col s12">
                                <input 
                                    name="email"
                                   value={this.state.email}
                                   onChange={event => this.handleChange(event)}
                                    id="email"
                                    type="email"
                                    className="validate"
                                />
                                <label htmlFor="email">Email</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong email"
                                    data-success="Right"
                                />
                            </div> 
                        </div>

                        <div className="row" >
                            <div className="input-field col s12">
                                <input 
                                    name="password"
                                   value={this.state.password}
                                   onChange={event => this.handleChange(event)}
                                    id="password"
                                    type="password"
                                    className="validate"
                                />
                                <label htmlFor="password">Password</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong password"
                                    data-success="Right"
                                />
                            </div>
                        </div>

                        {this.state.errors.length > 0 && (
                            <div>
                                {this.displayErrors(this.state.errors)}
                            </div>  
                        )}


                        <div className="row">
                            <div className="col s12">
                                <button 
                                    className="btn waves-effect red ligthen-2 "
                                    type="submit"
                                    name="action"
                                    onClick = {event => this.submitForm(event)}
                                >
                                    sumbit 
                                </button> &nbsp; &nbso;
                                <Link to="/register">
                                    <button 
                                        className="btn waves-effect red ligthen-2 "
                                        type="submit"
                                        name="action"
                                    >
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(RegisterLogin)
