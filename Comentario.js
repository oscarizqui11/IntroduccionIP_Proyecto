import React from 'react';
import { Table, Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";


const MODEL = 'comentarios';

const API_URL = "http://localhost:3000/api/" + MODEL;

const HEADERS = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

let comentario = ''
class Comentario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idcomentarios: 0,
            comentario: '',
            usuarioid: 2,
            distritoid: 1,
            lista: []

        }
        this.Guardar = this.Guardar.bind(this);
        this.cargaDatos = this.cargaDatos.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.Borrar = this.Borrar.bind(this);
    }


    Guardar() {

        const Comentario = {
            comentario: this.state.comentario,
            usuarioid: this.state.usuarioid,
            distritoid: this.state.distritoid
        }
        const opcions = {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(Comentario)
        };

        fetch(API_URL, opcions)
            // .then(respuesta => respuesta.json())
            // .then(ddd => console.log(ddd))
            .then(() => this.cargaDatos())
            .then(() => this.setState({
                idcomentarios: 0,
                comentario: '',
                usuarioid: 1,
                distritoid: 1
            }))
            .catch(error => console.log("se ha producido un error: ", error));
    }
    componentDidMount() {
        this.cargaDatos();
    }

    cargaDatos() {
        const opcions = {
            method: "GET",
            headers: HEADERS,
        };


        fetch(API_URL, opcions)
            .then(texto => texto.json())
            .then(datos => this.setState({ lista: datos }))
            .catch(error => console.log("se ha producido un error: ", error));
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    
    /*Borrar(idcomentarios) {
        console.log("borrando " + idcomentarios);
        const opcions = {
            method: "DELETE",
            headers: HEADERS
        };

        const deleteURL = API_URL + '/' + idcomentarios;

        fetch(deleteURL, opcions)
            .then(respuesta => respuesta.json())
            .then(ddd => console.log(ddd))
            .then(() => this.cargaDatos())
            .catch(error => console.log("se ha producido un error: ", error));


    }*/



    render() {

        if (this.state.lista.length === 0) {
            console.log("cargando coments")
            return <h3>Loading comments</h3>
        }



        const filas = this.state.lista.map((el, i) => (
            <tr key={i}>
                <td>{el.idcomentarios}</td>
                <td>{el.comentario}</td>
                <td>{el.usuarioid}</td>
                {//<td><Button disabled={el.usuarioid!=this.state.usuarioid}  onClick={()=>this.borrar(el.idcomentarios)}>Borrar</Button></td>
    }
            </tr>


        ));

        return (

            <><h1>{MODEL}</h1>
                {filas}



                <h1>Guarda tu comentario</h1>

                <div className="inputs">
                    <Label for="ComentInput">Comentario</Label>
                    <Input type="text" name="comentario" value={this.state.comentario} onChange={this.handleChange} />
                    <br />
                    <Button

                        onClick={this.Guardar}>Sube tu comentario</Button>





                </div>



            </>





        );

    }
}


export default Comentario;
