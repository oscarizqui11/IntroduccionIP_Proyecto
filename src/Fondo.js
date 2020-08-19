import React from "react";
import bcn from "url:./bcn.png";
import "./styleDistrito.css";



let styleFondo = {
  width: '100%',

  backgroundImage: {bcn},
  backgroundRepeat: 'noRepeat',
  backgroundSize: '100%',
  opacity: '0.4',
  position: 'absolute',
  zIndex: '-1'

}

class Fondo extends React.Component {
  render() {
    return (

      <img style={styleFondo} src={bcn}>

      </img>
    );
  }
}

export default Fondo; 
/*

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});

class Fondo extends React.Component {
  render() {
    return (
<Image style={styles.backgroundImage}>
  <View>
    <Text>TODO LO DEMAS</Text>
  </View>
</Image>
    )}}; 


export default Fondo; 


//OTRA OPCION

let styleFondo={  
    backgroundImage: "url("+"{bcn}"+")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

class Fondo extends Component {
  render() {
    return (
      <section style={styleFondo}>
      </section>
    );
  }
}

*/