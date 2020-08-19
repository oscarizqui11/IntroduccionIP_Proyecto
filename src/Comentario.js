import React from 'react';
import { Table, Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";


const MODEL = 'comentarios';

const API_URL = "http://localhost:3000/api/" + MODEL;
const USER_URL = "http://localhost:3000/api/usuarios/";

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
        this.getNamefromID = this.getNamefromID.bind(this);
        //this.Borrar = this.Borrar.bind(this);
    }

    /*componentDidMount() {
        this.cargaDatos();
    }*/

    cargaUsuario() {
        if (this.props.idUsuario != 0) {
            const opcions = {
                method: "GET",
                headers: HEADERS,
            };

            fetch(USER_URL + this.props.idUsuario, opcions)
                .then(texto => texto.json())
                .then(datos => this.setState({ idUsuario: this.props.idUsuario, usuario: datos[0].nombre }))
                .then(console.log(this.state.usuario))
                .catch(error => console.log("se ha producido un error: ", error));
        }
        else {
            this.setState({ idUsuario: 0, usuario: '' })
        }
    }

    cargaDatos() {
        const opcions = {
            method: "GET",
            headers: HEADERS,
        };

        fetch(API_URL + "?_where=(distritos_iddistritos,eq," + this.props.idDistrito + ")", opcions)
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

        fetch(API_URL, opcions)
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

    getNamefromID(comentario){
        let userName;

        const opcions = {
            method: "GET",
            headers: HEADERS,
        };

        fetch(USER_URL + comentario.usuarios_idusuarios, opcions)
        .then(texto => texto.json())
        .then(userObj => userName = userObj[0].nombre)
        .then(nombreUsuario=> {
            console.log(nombreUsuario);
            return nombreUsuario;
        })
        .catch(error => console.log("se ha producido un error: ", error));     
    }



    render() {

        if (this.state.idDistrito != this.props.idDistrito) {
            this.cargaDatos();
        }

        if (this.state.idUsuario != this.props.idUsuario) {
            this.cargaUsuario();
        }

        /* if (this.state.lista.length === 0) {
            console.log("cargando coments")
            return <h3>Loading comments</h3>
        } */

        const listaComentarios = this.state.lista.map((el, i) => (
            <div style={{ marginTop: "20px" }} key={i}>
                <span><span style={{ fontWeight: "bold" }}>{console.log(this.getNamefromID(el))}</span><br></br>{el.texto}</span>

                {/*                 <td><Button disabled={el.usuarioid != this.state.usuarioid} onClick={() => this.borrar(el.idcomentarios)}>Borrar</Button></td>
 */}
            </div>
        ));

        return (

            <>
                {/*             <h1>{MODEL}</h1>
 */}
                {(this.state.lista.length === 0) ? <h5>Se el primero en comentar!</h5> : listaComentarios}

                <br></br>

                {(this.state.idUsuario > 0) ?
                    <>
                        <h3>Guarda tu comentario</h3>
                        <div className="inputs">
                            <Label for="ComentInput">Comentario</Label>
                            <Input type="text" name="comentario" value={this.state.comentario} onChange={this.handleChange} />
                            <br />
                            <Button onClick={this.Guardar}>Sube tu comentario</Button>
                        </div> </> :
                    <></>
                }
            </>
        );
    }
}


export default Comentario;
