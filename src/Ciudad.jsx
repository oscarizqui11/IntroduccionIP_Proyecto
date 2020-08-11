import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Distrito from './Distrito';

const MODEL = 'distritos';

const API_URL = "http://localhost:3000/api/" + MODEL;

const HEADERS = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
});

class Ciudad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            distrito: ""
        }
        this.cargaDatos = this.cargaDatos.bind(this);
        this.selectDistrito = this.selectDistrito.bind(this);
    }

    componentDidMount() {
        this.cargaDatos();
    }

    cargaDatos() {
        const options = {
            method: "GET",
            headers: HEADERS,
        };

        fetch(API_URL + "?_sort=numDistrito", options)
            .then(texto => texto.json())
            .then(datos => this.setState({ lista: datos }))
            .then(d => this.setState({ distrito: this.state.lista[0].nombre }))
            .catch(error => console.log("se ha producido un error: ", error));
    }

    selectDistrito(distrito) {
        this.setState({
            distrito: distrito.nombre
        })
    }

    render() {

        const distritos = this.state.lista.map((el, i) => (
            <th key={i} onClick={() => this.selectDistrito(el)}> {el.nombre} </th>
        ));

        return (
            <>
                <h1>Barcelona</h1>
                <Table>
                    <thead>
                        <tr>
                            {distritos}
                        </tr>
                    </thead>
                </Table>

                <Distrito distrito={this.state.distrito} />
            </>
        )
    }

}

export default Ciudad;