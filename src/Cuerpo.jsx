import React from 'react';
import Ciudad from './Ciudad';
import "./styleDistrito.css"

class Cuerpo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <div className="styleTitulos"><Ciudad idUsuario={this.props.idUsuario} nombreUsuario={this.props.nombreUsuario}/></div>
      
      {/*<Distrito />*/}
    </>
    )
  }
}

export default Cuerpo;