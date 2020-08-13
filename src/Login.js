import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './Login.css';

const MODEL = 'usuarios';

const API_URL = "http://localhost:3000/api/" + MODEL;

const HEADERS = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginState: "",
            loginStates: {
                LOGEDOUT: "logedout",
                FAILED: "failed",
                LOGEDIN: "logedin"
            },
            id: 0,
            nombre: "",
            password: "",
        }
        this.newUser = this.newUser.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.loginFail = this.loginFail.bind(this);
    }

    componentDidMount() {
        this.setState({ loginState: this.state.loginStates.LOGEDOUT })
    }

    logIn() {

        let dbUsuario;

        const opcions = {
            method: "GET",
            headers: HEADERS
        };

        fetch(API_URL + "/findOne?_where=(nombre,eq," + this.state.nombre + ")", opcions)
            .then(texto => texto.json())
            .then(usuarioData => dbUsuario = usuarioData[0])
            .then(x => this.setState({ id: dbUsuario.idUsuario }))
            .then(x => { dbUsuario.password == this.state.password ? this.setState({ loginState: this.state.loginStates.LOGEDIN }) : this.loginFail() })
            .catch(error => {
                console.log("se ha producido un error: ", error)
                this.loginFail()
            });
    }

    loginFail() {
        console.log("Usuario o contraseña no validos")
        this.setState({
            id: 0,
            nombre: '',
            password: '',
            loginState: this.state.loginStates.FAILED
        })
    }

    logOut() {
        this.setState({
            id: 0,
            nombre: '',
            password: '',
            loginState: this.state.loginStates.LOGEDOUT
        })
        //this.actualizaInputs;
    }

    newUser() {
        const usuario = {
            nombre: this.state.nombre,
            password: this.state.password
        };

        const opcions = {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(usuario)
        };

        fetch(API_URL, opcions)
            .then(() => this.setState({
                id: 0,
                nombre: '',
                password: ''
            }))
            .catch(error => console.log("se ha producido un error: ", error));
    }

    actualizaInputs = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    render() {

        let login = <></>

        if (this.state.loginState != this.state.loginStates.LOGEDIN) {
            login =
                <div className="inputs">
                    <Label for="nomInput">Nombre</Label>
                    <Input id="nomInput" type="text" value={this.state.nombre} name="nombre" onChange={this.actualizaInputs} />
                    <Label for="emailInput">Password</Label>
                    <Input id="emailInput" type="password" value={this.state.password} name="password" onChange={this.actualizaInputs} />
                    <br />

                    <Button color="success" onClick={this.logIn}>Login</Button>

                    {
                        this.state.loginState == this.state.loginStates.FAILED ?
                            <p className="errorLogin">Usuario o contraseña no validos.</p> : <></>
                    }
                </div>
        }
        else {
            login =
                <div>
                    <h3>Usuario {this.state.nombre}</h3>
                    <Button style={{ marginLeft: "10px" }} color="danger" onClick={this.logOut}>Logout</Button>
                </div>
        }

        return (
            <>
                {login}
            </>
        )
    }
}
export default Login;