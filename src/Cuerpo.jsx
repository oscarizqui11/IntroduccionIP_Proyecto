import React from 'react';
import Ciudad from './Ciudad';

class Cuerpo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <Ciudad idUsuario={this.props.idUsuario}/>
      {/*<Distrito />*/}
    </>
    )
  }
}

export default Cuerpo;