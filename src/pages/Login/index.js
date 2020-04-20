import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Alert } from 'reactstrap';

import {getUserBySearch} from '../../server/user'
import Header from '../../components';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.location.state?this.props.location.state.message: '',
        };
    }

     signIn = async () => {
        const data = { email: this.email, pass: this.password };

        const responseJsonUser = await getUserBySearch(data);
         if(responseJsonUser.message) {
             this.setState({ message: responseJsonUser.message })
         }
         if(responseJsonUser.token){
             localStorage.setItem('token', responseJsonUser.token);
             this.props.history.push("/admin");
             return;
         }
    }

    render() {
        return (
            <div className="col-md-6">
                <Header title="Login" />
                <hr  className="my-3"/>
                {
                    this.state.message !== ''? (
                        <Alert color="danger" className="text-center"> {this.state.message} </Alert>
                    ) : ''
                }
                    <img
                        src="https://m.eldiario.es/clm/Foto-fanarucom_EDIIMA20150620_0134_17.jpg"
                        className="rounded-circle tam-img-user"
                        alt="imagen de bienvenida"
                    />

                <Form>
                    <FormGroup>
                        <Input
                            type="text" id="email"
                            onChange={e => this.email = e.target.value}
                            placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="password"
                            id="password"
                            onChange={e => this.password = e.target.value}
                            placeholder="Password" />
                    </FormGroup>
                    <Button
                        color="success"
                        block
                        onClick={this.signIn}
                    > Entrar
                    </Button>
                </Form>
            </div>
        );
    }
}
