import React, { Component } from 'react';
import Comentario from "./Comentario"
import "./styleDistrito.css"
import mapabcn from "url:./mapabcn.png";

class Distrito extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h2>{this.props.distrito}</h2>
                <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 1: Ciutat Vella"}</h1>
                        <p className="styleInfo">{"El distrito de Ciutat Vella está delimitado por el perímetro de la muralla de la antigua ciudad y se corresponde geográficamente con el centro histórico de Barcelona."}</p>
                        <p className="styleInfo">{"Ciutat Vella es el primer distrito de Barcelona, el embrión de la ciudad. Por lo tanto, hablar de Ciutat Vella es hablar de la historia de la ciudad desde sus inicios. El distrito limita al oeste con L’Eixample, al este con el mar Mediterráneo, al norte con Sant Martí y al sur con Sants-Montjuïc. Ciutat Vella está formada por cuatro barrios, cada cual con una singularidad propia. En el sur encontramos la Barceloneta; en poniente, el Raval; en el centro, el Gòtic; y en levante, Sant Pere, Santa Caterina i la Ribera."}</p>
                        <p className="styleInfo">{"Ciutat Vella es un distrito que lo ofrece todo: cultura, patrimonio, historia, vecindad y entretenimiento. Le invitamos a conocer cada uno de sus barrios."}</p>
                        <h1 className="styleTitulos">{"Seguridad"}</h1>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>

                <Comentario idUsuario={this.props.idUsuario} idDistrito={this.props.idDistrito} />
            </>
        )
    }
}

export default Distrito;