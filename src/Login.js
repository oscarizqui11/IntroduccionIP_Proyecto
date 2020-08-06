import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            password:"",
            errorPassword: false,
            passwordStatus: 0,
            nombreStatus: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange(evento) {
        const target = evento.target; //objeto concreto que ha disparado este evento
        const value = target.type === 'checkbox' ? target.checked : target.value; //value funciona bien para todos los tipos de input excepto el checked
        const name = target.name;
        this.setState({
          [name]: value //[name] coje el valor de la constante name par escoger la variable de state a cambiar
        });
      }

     handleSubmit(event) {
        event.preventDefault(); //deten el envío del formulario
        const NOM='ricard'
        const PASS='1234'
        if (this.state.password===PASS){
            this.setState({passwordStatus: 1}); //correcto
        }else{
            this.setState ({passwordStatus: 2}); //incorrecto
        }
        if (this.state.nombre===NOM){
            this.setState({nombreStatus: 1}); //correcto
        }else{
            this.setState ({nombreStatus: 2}); //incorrecto
        }
        //...conexión con el servidor para enviar datos o consultar permisos...
        // fetch... necesitamos un servidor detrás que nos pueda validar; lo haríamos
        
      }
    
    render(){
        
        let validPassword=null;
        if(this.state.passwordStatus===2) validPassword={invalid:true};
        if(this.state.passwordStatus===1) validPassword={valid:true};

        let validNombre=null;
        if(this.state.nombreStatus===2) validNombre={valid:true};
        if(this.state.nombreStatus===1) validNombre={invalid:true};
        
       

        return(
            <div>
                <h1> Login Form</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='campoNombre'>Nombre</Label>
                        <Input className='campo' {...validNombre} onChange={this.handleInputChange} type="text" name="nombre" id="nombreemail" placeholder="entra nombre"></Input>
                        <FormFeedback valid>OK! </FormFeedback>
                        <FormFeedback invalid> Nombre incorrecto</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='campoPassword'>Password</Label>
                        <Input className='campo' {...validPassword} onChange={this.handleInputChange} type="password" name="password" id="campopassword" placeholder="entra password"></Input>
                        <FormFeedback valid>OK! Bienvenido</FormFeedback>
                        <FormFeedback> Password incorrecto</FormFeedback>                        
                    </FormGroup>
                   <Button>Enviar</Button>
                 
                </Form>

                
                <h3>{this.state.nombre}</h3>
                <h3>{this.state.password}</h3>
            </div>
        )

    }
}
export default Login;