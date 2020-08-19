import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

//npm install bootstrap
//en el indice:  import 'bootstrap/dist/css/bootstrap.css';

const Comentarios = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Titulo del Comentario</CardTitle>
          <CardText>En el Distrito 1, es decir, Ciutat Vella sobretodo dentro de Ciudadella suelen robar mucho al despiste. Mucha gente se estira en el cesped del parque y los carteristas aprovechan esto para llevarse los bolsos de la gente. Tengan cuidado!</CardText>
          <Button>Like</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Titulo del otro comentario</CardTitle>
          <CardText>Es un distrito precioso, con mucho encanto, me encantan todos sus barrios pero es cierto que hay que tener cuidado y tener el bolso vigilado porque roban bastante al turista.</CardText>
          <Button>Like</Button>
        </Card>
      </Col>
    </Row>
    
  );
};

export default Comentarios;