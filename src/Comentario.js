import React from 'react';
import { Table, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./styleDistrito.css"



const MODEL = 'comentarios';
const MODEL_VIEW = 'comentarioswithuser';

const API_URL = "http://localhost:3000/api/";

const HEADERS = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

class Comentario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comentario: '',
            idUsuario: 0,
            usuario: '',
            idDistrito: 0,
            lista: []

        }
        this.Guardar = this.Guardar.bind(this);
        this.cargaDatos = this.cargaDatos.bind(this);
        this.cargaUsuario = this.cargaUsuario.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.getNamefromID = this.getNamefromID.bind(this);
        //this.Borrar = this.Borrar.bind(this);
    }

    /*componentDidMount() {
        this.cargaDatos();
    }*/

    cargaUsuario() {
        this.setState({ idUsuario: this.props.idUsuario })
    }

    cargaDatos() {
        const opcions = {
            method: "GET",
            headers: HEADERS,
        };

        fetch(API_URL + MODEL_VIEW + "?_where=(distritos_iddistritos,eq," + this.props.idDistrito + ")", opcions)
            .then(texto => texto.json())
            .then(datos => this.setState({ lista: datos, idDistrito: this.props.idDistrito }))
            .catch(error => console.log("se ha producido un error: ", error));
    }

    Guardar() {

        const comentario = {
            texto: this.state.comentario,
            distritos_iddistritos: this.props.idDistrito,
            usuarios_idusuarios: this.props.idUsuario
        }

        console.log(comentario);

        const opcions = {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(comentario)
        };

        fetch(API_URL + MODEL, opcions)
            // .then(respuesta => respuesta.json())
            // .then(ddd => console.log(ddd))
            .then(() => this.cargaDatos())
            .then(() => this.setState({
                comentario: ''
            }))
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

    /* getNamefromID(comentario) {
        let userName;

        const opcions = {
            method: "GET",
            headers: HEADERS,
        };

        fetch(USER_URL + comentario.usuarios_idusuarios, opcions)
            .then(texto => texto.json())
            .then(userObj => userName = userObj[0].nombre)
            .then(nombreUsuario => {
                console.log(nombreUsuario);
                return nombreUsuario;
            })
            .catch(error => console.log("se ha producido un error: ", error));
    } */



    render() {

        if (this.state.idDistrito != this.props.idDistrito) {
            this.cargaDatos();
        }

        if (this.state.idUsuario != this.props.idUsuario) {
            this.cargaUsuario();
        }

        const listaComentarios = this.state.lista.map((el, i) => (
            <Col key={i} sm="6">
                <Card body>
                    <CardTitle><h5><div className="nombreComentario">{el.nombre}</div></h5></CardTitle>
                    <CardText><div className="textoComentario">{el.texto}</div></CardText>
                    <Button>Like</Button>
                </Card>
            </Col>
        ));

        return (
            <>
                {(this.state.idUsuario > 0) ?
                    <>
                        <Col sm="6">
                            
                            <div className="comentarioArea">
                            <h3>Comparte tu experiencia</h3>
                                {/* <Label for="ComentInput">Comentario</Label>
                            <Input type="textarea" name="comentario" value={this.state.comentario} onChange={this.handleChange} />
                            <br /> */}
                                <Card body>
                                    <CardTitle><h5><div className="nombreComentario">{this.props.nombreUsuario}</div></h5></CardTitle>
                                    <CardText><div className="textoComentario"><Input type="textarea" placeholder="Añade una experiencia pública..." name="comentario" value={this.state.comentario} onChange={this.handleChange} /></div></CardText>
                                    <Button className="uploadButton" onClick={this.Guardar}>Compartir</Button>
                                </Card>
                                
                            </div></Col> </> :
                    <></>
                }

                <br></br>

                {(this.state.lista.length === 0) ? <h5>Se el primero en comentar!</h5> : <Row>{listaComentarios}</Row>}
            </>
        );
    }
}


export default Comentario;
