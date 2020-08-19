import React, { Component } from 'react';
import Comentario from "./Comentario"

class Distrito extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>{this.props.distrito}</h2>
                <Comentario idUsuario={this.props.idUsuario} idDistrito={this.props.idDistrito} />
            </>
        )
    }
}

export default Distrito;