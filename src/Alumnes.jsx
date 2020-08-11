import React, { Component } from 'react';
import { Table, Button, Input, Label } from 'reactstrap';

const MODEL = 'alumnes';

const API_URL = "http://xmysql.duckdns.org:3000/api/" + MODEL;

const HEADERS = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

class Alumnes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      llista: [],
      id: 0,
      nom: '',
      email: '',
      name: "kkk"
    }
    this.cargaDatos = this.cargaDatos.bind(this);
    this.actualizaInputs = this.actualizaInputs.bind(this);
    this.desar = this.desar.bind(this);
    this.borrar = this.borrar.bind(this);
    this.editar = this.editar.bind(this);
    this.noEditar = this.noEditar.bind(this);
    this.ordenaNom = this.ordenaNom.bind(this);
    this.ordenaId = this.ordenaId.bind(this);

  }

  ordenaNom(){
    console.log("ordenant...");
    function ordeNomAsc(a,b){
      if(a.nom>b.nom){
        return 1;
      } else {
        return -1;
      }
    }

    const nuevaLista = [...this.state.llista];

    nuevaLista.sort(ordeNomAsc);

    this.setState({
      llista: nuevaLista
    })


  }



  ordenaId(){
    console.log("ordenant...");
    function ordeIdAsc(a,b){
      if(a.id>b.id){
        return 1;
      } else {
        return -1;
      }
    }

    const nuevaLista = [...this.state.llista];

    nuevaLista.sort(ordeIdAsc);

    this.setState({
      llista: nuevaLista
    })


  }

  noEditar(){
    this.setState({
      id: 0,
      nom: '',
      email: ''
    })
  }

editar(alumne){
  console.log("editando alumno: ", alumne.nom);
  this.setState({
    nom: alumne.nom,
    email: alumne.email,
    id: alumne.id
  })

}

  borrar(id){
    console.log("borrando "+id);
    const opcions = {
      method: "DELETE",
      headers: HEADERS
    };

    const deleteURL = API_URL+'/'+id;

    fetch(deleteURL, opcions)
    .then(respuesta => respuesta.json())
    .then(ddd => console.log(ddd))
    .then(() => this.cargaDatos())
    .catch(error => console.log("se ha producido un error: ", error));

  }

  actualizaInputs = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  desar(){
    const alumne = {
      nom: this.state.nom,
      email: this.state.email
    };

    const opcions = {
      method: (this.state.id>0) ? "PATCH" : "POST",
      headers: HEADERS,
      body: JSON.stringify(alumne)
    };

    const desarURL =  (this.state.id>0) 
      ? API_URL+'/'+this.state.id
      : API_URL;

    fetch(desarURL, opcions)
    // .then(respuesta => respuesta.json())
    // .then(ddd => console.log(ddd))
    .then(() => this.cargaDatos())
    .then(() => this.setState({
      id: 0,
      nom: '',
      email: ''
    }))
    .catch(error => console.log("se ha producido un error: ", error));

  }

  componentDidMount(){
    this.cargaDatos();
  }

  cargaDatos(){
    const opcions = {
      method: "GET",
      headers: HEADERS,
    };

    fetch(API_URL+"?_sort=-id", opcions)
    .then(texto => texto.json())
    .then(datos => this.setState({llista: datos}))
    .catch(error => console.log("se ha producido un error: ", error));
  }

  render() {
    if (this.state.llista.length === 0) {
      return <h3>Loading...</h3>
    }

    
    const filas = this.state.llista.map((el, i) => (
            <tr key={i}>
              <td>{el.id}</td>
              <td>{el.nom}</td>
              <td>{el.email}</td>
              <td><Button disabled={el.id===this.state.id} color="danger" onClick={()=>this.borrar(el.id)}>Borrar</Button></td>
              <td><Button color="primary" onClick={()=>this.editar(el)}>Editar</Button></td>

            </tr>
        ));
        
    return (
      <>
        <h1>{MODEL}</h1>

        <div className="inputs">
          <Label for="nomInput">Nom</Label>
          <Input id="nomInput" type="text" value={this.state.nom} name="nom" onChange={this.actualizaInputs} />
          <Label for="emailInput">Email</Label>
          <Input id="emailInput" type="text" value={this.state.email} name="email" onChange={this.actualizaInputs} />
          <br />
          <Button 
          color={ (this.state.id>0) ? "primary" : "success"}
          onClick={this.desar}>{ (this.state.id>0) ? "Modifica" : "Nou"}</Button>

          {
            this.state.id>0 ?
            <Button style={{marginLeft: "10px"}} color="danger" onClick={this.noEditar}>Cancel</Button>
            : <></>
          }

        </div>
       

        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filas}
          </tbody>
        </Table>
        <Button onClick={this.ordenaNom}>Ordena nom</Button>
        <Button onClick={this.ordenaId}>Ordena id</Button>
      </>
    )

  }
}


export default Alumnes;