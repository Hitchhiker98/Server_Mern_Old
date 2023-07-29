import React, { Component } from 'react'

export class Register extends Component {
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
                                    name="lastname"
                                   value={this.state.email}
                                   onChange={event => this.handleChange(event)}
                                    id="lastname"
                                    type="text"
                                    className="validate"
                                />
                                <label htmlFor="lastname">Lastname</label>
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
                                    name="name"
                                   value={this.state.password}
                                   onChange={event => this.handleChange(event)}
                                    id="name"
                                    type="name"
                                    className="validate"
                                />
                                <label htmlFor="name">name</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong password"
                                    data-success="Right"
                                />
                            </div>
                        </div>
                        <div className="row" >
                            <div className="input-field col s12">
                                <input 
                                    name="email"
                                   value={this.state.password}
                                   onChange={event => this.handleChange(event)}
                                    id="email"
                                    type="email"
                                    className="validate"
                                />
                                <label htmlFor="email">email</label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong email"
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

export default Register