import React from "react";
import Login from "./Login";
import Alumnes from "./Alumnes";
import Ciudad from './Ciudad';
import Cuerpo from "./Cuerpo";
import Cabecera from "./Cabecera"

const API_URL = "http://localhost:3000/api/";

const HEADERS = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
      id: 0,
      nombre: "",
    }
    
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }  

  logOut() {
    this.setState({
      id: 0
    })
    console.log("loged out");
  }

  logIn(idUsuario){
    this.setState({ id: idUsuario })
  }

  render() {
    return (
      <>
        <Login logIn={this.logIn} logOut={this.logOut}/>
        <Cuerpo />
      </>
    )
  }
}

export default App;

/*export default () => (
  <>
    <Login />
    /////------<Cabecera />
    <Cuerpo />
  </>
);*/
