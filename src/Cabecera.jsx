import React from "react"; 
import logo from "url:./TSS logo-01.png";
// npm i --save @fortawesome/pro-regular-svg-icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login"

class Cabecera extends React.Component{
  constructor(){
    super();

    this.state={
      showMenu:false,
    }
    this.showMenu=this.showMenu.bind(this);
    this.closeMenu=this.closeMenu.bind(this);
  }

  showMenu(event){
    event.preventDefault();

    this.setState({showMenu:true}, ()=>{
      document.addEventListener('click', this.closeMenu);
    })
  }

  closeMenu(event){

    if(!this.dropdownMenu.contains(event.target)){

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      })
    }
  }




render(){
  const cabeceraFondo={
    background:'#9ccfe25e',
    width:'100%',
    height:'10%',
  }

  const logoS={
    width:'6%',
    padding:'15px 0px 20px 35px',
  }

  const menu={
    position:'absolute',
    background:'#345c9c',
    right:'10px',
    top:'100px',
    padding:'110px  8px 8px 8px',
    color:'white',
    fontFamily:'sans-serif'
  }

  const icon={
    color:'#345c9c',
    fontSize:'50px',
    position:'absolute',
    right:'80px',
    top:'40px',
    
  }

  const introduce={
    position:'absolute',
    background:'white',
    color:'black',
    padding:'3px',
    height:'20px',
    top:'10px',
    width:'300px !important',
  }
  const introduce2={
    position:'absolute',
    background:'white',
    color:'black',
    padding:'3px',
    height:'20px',
    top:'45px',
    width:'300px !important',
  }

  const iniciSessio={
    color:'black',
    border:'0px',
    top:'80px',
    fontSize:'medium',
    left:'31%',
    background:'white',
    position:'absolute',
    padding:'3px 5px',  
}

 const titulo={
    color:'#345c9c',
    position:'absolute',
    top:'40px',
    fontSize:'30px',
    left:'140px',
    fontFamily: 'Roboto',
  }


  return(
    <div style={cabeceraFondo}>
    <img style={logoS} src={logo} /> 
    <div style={titulo}>The Safe Sightseeing</div>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    </style>

    <Login logIn={this.props.logIn} logOut={this.props.logOut}/>

    <FontAwesomeIcon  style={icon} onClick={this.showMenu} icon={faUser}> </FontAwesomeIcon>

{/*     <button onClick={this.showMenu}>boton menu</button>
 */}
        
          {this.state.showMenu
            ? (

              <div style={menu}  ref={(element)=>{
                this.dropdownMenu=element;
              }} >
                {/* <label style={introduce} field="Introduce Usuario">nombreeeee</label>
                <label style={introduce2} placeholder="Introduce Contrasenya">contra</label>
                <button style={iniciSessio}>Entrar</button> */}

                <ul style={{listStyle:'none', padding:'0px'}}>
                  {/* <li>Modificar usuario</li>
                  <li>Modificar contraseña</li>
                  <li>Cerrar sessión</li> */}
                  <Login logIn={this.props.logIn} logOut={this.props.logOut}/>
                </ul>
              </div>
            )
            : (
              null
            )
        }
      </div>
    )
  }
}



export default Cabecera;
