import React, { Component } from 'react';
import Comentario from "./Comentario"
import "./styleDistrito.css"
import mapabcn from "url:./mapabcn.png";

class Distrito extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let informacion;
        switch (this.props.distrito) {
            case "Ciutat Vella":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 1: Ciutat Vella"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"El distrito de Ciutat Vella está delimitado por el perímetro de la muralla de la antigua ciudad y se corresponde geográficamente con el centro histórico de Barcelona."}</p>
                        <p className="styleInfo">{"Ciutat Vella es el primer distrito de Barcelona, el embrión de la ciudad. Por lo tanto, hablar de Ciutat Vella es hablar de la historia de la ciudad desde sus inicios. El distrito limita al oeste con L’Eixample, al este con el mar Mediterráneo, al norte con Sant Martí y al sur con Sants-Montjuïc. Ciutat Vella está formada por cuatro barrios, cada cual con una singularidad propia. En el sur encontramos la Barceloneta; en poniente, el Raval; en el centro, el Gòtic; y en levante, Sant Pere, Santa Caterina i la Ribera."}</p>
                        <p className="styleInfo">{"Ciutat Vella es un distrito que lo ofrece todo: cultura, patrimonio, historia, vecindad y entretenimiento. Le invitamos a conocer cada uno de sus barrios."}</p>
                        
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Eixample":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 2: Eixample"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"La Barcelona moderna nació en L’Eixample, ideada por el ingeniero y urbanista a quien debe su dibujo mágico y único: Ildefons Cerdà. Con su plan urbanístico, Cerdà diseñó una ciudad igualitaria, donde no se diferencian unos barrios de los demás y los servicios públicos se reparten uniformemente por todos los rincones."}</p>
                        <p className="styleInfo">{"El distrito es fruto de uno de los momentos más esplendorosos de la historia de la ciudad, cuando se configura definitivamente como el motor de la Cataluña contemporánea y rompe con el pasado medieval derribando las murallas. L’Eixample se construyó en los años de la industrialización de Cataluña, a finales del siglo XIX y comienzos del XX. La parte central, la Dreta de l’Eixample, fue el barrio de la burguesía que introdujo en su casa un estilo propio, el modernismo."}</p>
                        <p className="styleInfo">{"L’Eixample está formado por seis barrios: la Dreta de l’Eixample, la Antiga Esquerra de l’Eixample, la Nova Esquerra de l’Eixample, el Fort Pienc, la Sagrada Família y Sant Antoni."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Sants-Montjuïc":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 3: Sants-Montjuïc"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"El distrito de Sants-Montjuïc es el más extenso de Barcelona, con una superficie de 2.090 hectáreas, que representa casi la cuarta parte del término municipal de Barcelona."}</p>
                        <p className="styleInfo">{"Esta heterogeneidad del territorio se traduce en una gran diversidad social y humana. La extensión real del distrito es muy inferior si se excluyen las zonas no habitadas, como el puerto de Barcelona, el polígono industrial de la Zona Franca y buena parte de la montaña de Montjuïc."}</p>
                        <p className="styleInfo">{"Los límites de Sants-Montjuïc son, por una parte, los términos municipales de L’Hospitalet de Llobregat y El Prat de Llobregat, y por la otra, en Barcelona, la avenida de Madrid y la calle de Berlín, que lo separan de Les Corts, y las calles de Numància y Tarragona y las avenidas de Josep Tarradellas y el Paral·lel, que lo separan de L’Eixample, Ciutat Vella y el mar."}</p>
                        <p className="styleInfo">{"Sants-Montjuïc está formado por ocho barrios: el Poble-sec, Hostafrancs, la Bordeta, la Font de la Guatlla, la Marina de Port, la Marina del Prat Vermell, Sants y Sants-Badal."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Les Corts":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 4: Les Corts"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"Los barrios que componen el distrito de Les Corts son una de las puertas de entrada de Barcelona, gracias a su situación en el sector suroeste de la ciudad y con el eje de la Diagonal que lo vertebra de punta a punta. Limita al sur con Esplugues de Llobregat y con L’Hospitalet de Llobregat; al norte, con los distritos de Sarrià-Sant Gervasi y de L’Eixample; al este, con el distrito de Sants-Montjuïc; y al oeste, con la sierra de Collserola."}</p>
                        <p className="styleInfo">{"Actualmente, el distrito de Les Corts está formado por tres barrios: Les Corts, Pedralbes y la Maternitat i Sant Ramon."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Sarrià-Sant Gervasi":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 5: Sarrià-Sant Gervasi"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"Sarrià-Sant Gervasi es el quinto distrito de Barcelona. Es uno de los distritos más verdes de la ciudad y, junto con Horta-Guinardó, la puerta al parque natural de la sierra de Collserola, el pulmón más importante de Barcelona."}</p>
                        <p className="styleInfo">{"Esta proximidad marca su condición de zona residencial y acomodada, con numerosos parques y zonas verdes, combinados con prestigiosos centros educativos y sanitarios."}</p>
                        <p className="styleInfo">{"El distrito es la suma de antiguos municipios agregados a Barcelona, como el de Sarrià (1921), Vallvidrera-Les Planes (anexionado a Sarrià en 1890) y Sant Gervasi de Cassoles (1897). Sarrià mantiene la unidad del casco antiguo, aunque este núcleo se separa de las Tres Torres por sus características urbanas homogéneas y el alto grado de reconocimiento que tiene por parte de sus habitantes."}</p>
                        <p className="styleInfo">{"Sarrià-Sant Gervasi es un núcleo con deje de pueblo, compuesto por los barrios de Sarrià, las Tres Torres, Sant Gervasi-la Bonanova, Sant Gervasi-Galvany, Vallvidrera, el Tibidabo i les Planes y el Putxet i el Farró."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Gràcia":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 6: Gràcia"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"Pocos distritos de Barcelona están rodeados de tanta simbología como el de Gràcia."}</p>
                        <p className="styleInfo">{"El casco antiguo del barrio que le da nombre no ha dejado nunca de reivindicar con orgullo su pasado como municipio independiente (fue agregado a la ciudad en 1897), y el nuevo mapa de barrios lo reconoce oficializando el topónimo Vila de Gràcia para denominar esta unidad de casi 50.000 habitantes, calles pequeñas y numerosas plazas bulliciosas."}</p>
                        <p className="styleInfo">{"En el norte, el otro centro neurálgico del distrito, Vallcarca, añade a la denominación tradicional el topónimo de la zona de los Penitents, por la vinculación histórica entre los dos territorios. Por el contrario, el Coll gana entidad propia como barrio y se separa de Vallcarca. Los otros dos barrios del distrito son el Camp d’en Grassot i Gràcia Nova, un sector más reciente y, por este motivo, autónomo de la Vila, y el de la Salut. Los límites de este último barrio se han ampliado a ambos lados del tramo de la Travessera de Dalt, donde se lleva a cabo un proyecto de reducción del tráfico que mejorará la comunicación entre los márgenes de esta vía."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Horta-Guinardó":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 7: Horta-Guinardó"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"Está situado en el sector noreste de la ciudad, entre los distritos de Gràcia y Nou Barris. Limita también por el sur con L’Eixample, Sant Andreu y Sant Martí, y por el norte, a través de la sierra de Collserola, con los municipios de Sant Cugat y Cerdanyola."}</p>
                        <p className="styleInfo">{"Además de las funciones residenciales que ejerce, en el distrito se han establecido algunos elementos singulares que prestan servicio al conjunto de la ciudad: son los que denominamos elementos ciudad. Entre estos elementos ciudad de Horta-Guinardó figuran la ciudad sanitaria de la Vall d’Hebron, las Llars Mundet o el Hospital de Sant Pau. Se trata de grandes equipamientos que se ubicaron en el distrito por la disponibilidad de espacios libres que había en ese momento."}</p>
                        <p className="styleInfo">{"También las grandes áreas de ocio existentes en Horta-Guinardó deben considerarse elementos de alcance ciudadano. Allí figuran desde el parque de Collserola, el de los Tres Turons o el del Laberint d’Horta hasta el área olímpica de la Vall d’Hebron, con instalaciones deportivas como el Centro Municipal de Tenis, el Palacio Municipal de Deportes de la Vall d’Hebron o el Velódromo de Horta."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Nou Barris":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 8: Nou Barris"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"Nou Barris es un distrito situado en el extremo norte de la ciudad, entre la sierra de Collserola y el distrito de Sant Andreu. Limita al sur con Horta-Guinardó, y al oeste con la sierra de Collserola. "}</p>
                        <p className="styleInfo">{"El último barrio reconocido es el de Can Peguera, que se convierte en el decimotercer barrio en recuerdo de su origen dentro del proyecto de reubicación, en la segunda década del siglo XX, de los obreros que vivían en chabolas en Montjuïc, en grupos de viviendas conocidas popularmente como casas baratas. El extremo superior del distrito lo ocupan los barrios de Ciutat Meridiana, Torre Baró y Vallbona, con unas estructuras urbanas muy marcadas por la orografía montañesa y las grandes barreras artificiales (autopistas y vías del tren)."}</p>
                        <p className="styleInfo">{"El resto de barrios son los que acumulan más población, como los de la Prosperitat, Porta, la Guineueta, el Turó de la Peira y las Roquetes. El de Verdun se quedó con el topónimo en recuerdo de la batalla de la Primera Guerra Mundial, en detrimento del catalanizado Verdum, que da nombre a una plaza."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Sant Andreu":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 9: Sant Andreu"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"El distrito de Sant Andreu, de origen agrícola, evolución industrial y mucha tradición comercial, se transforma a gran velocidad. Los cambios mejoran los antiguos espacios industriales y los integran en el Sant Andreu de toda la vida, el de la plaza del Mercadal o la iglesia de Sant Andreu de Palomar. Un distrito donde se funde el carácter más moderno e innovador de Barcelona con la presencia de un casco antiguo que vive ajeno a tantos cambios, donde la vida comercial y cultural, herencia de un barrio obrero y muy reivindicativo, ofrece entretenimiento de todo tipo al vecindario y a los visitantes."}</p>
                        <p className="styleInfo">{"Los cambios urbanísticos previstos, vinculados a este proyecto, ya han empezado a marcar su realidad territorial. Las transformaciones afectarán a la parte baja de los barrios de la Sagrera y de Sant Andreu y al límite entre este último y los barrios del Bon Pastor y de Baró de Viver, a lo largo del gran parque lineal que seguirá todo el trazado del tren. El barrio del Congrés i els Indians (en recuerdo de los catalanes que hicieron fortuna en las colonias americanas y después volvieron); el de Navas, en el sur del distrito; y el de la Trinitat Vella, en el norte, no tendrán desarrollos urbanos vinculados al AVE en sus territorios."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;

                case "Sant Martí":
                informacion = <div className="columnas">
                    <div className="syleIzquierda"></div>
                    <div className="styleMedio">

                        <img className="styleMapa" src={mapabcn}></img>

                        <h1 className="styleTitulos">{"Distrito 10: Sant Martí"}</h1>
                        <h2 className="styleTitulos">{"Seguridad"}</h2>
                        <p className="styleInfo">{"La seguridad en este distrito es.... "}</p>
                        <p className="styleInfo">{"El distrito es hoy una combinación de historia y modernidad, donde se encuentran núcleos históricos con mucha actividad popular, chimeneas centenarias y fábricas reconvertidas en estudios, viviendas o museos —como es el caso de Can Framis, de la Fundación Vila Casas—, donde conviven edificios de oficinas de diseño y construcciones singulares, como la Torre Agbar o el Edificio MediaTIC."}</p>
                        <p className="styleInfo">{"Esta combinación entre pasado y futuro se refleja especialmente en la transformación del antiguo Poblenou industrial en el nuevo distrito tecnológico. Este proyecto supone mezclar la actividad económica (empresas y oficinas) con la formativa (campus universitarios) y la residencial (reurbanización de las calles y construcción de viviendas). Una iniciativa bautizada como ciudad compacta que quiere ser el referente de la Barcelona del futuro. Otros proyectos que están cambiando la fisonomía del distrito son la prolongación de la avenida Diagonal hasta el recinto del Fòrum, la remodelación de la plaza de las Glòries, la semicobertura de la Gran Vía y la urbanización del litoral, de la Vila Olímpica al Besòs."}</p>
                        <p className="styleInfo">{"Todos estos cambios se concretan en diez barrios. Por encima de la Gran Vía está el Camp de l’Arpa del Clot y el Clot, así como la Verneda i la Pau y Sant Martí de Provençals. En el antiguo territorio del Poblenou se reconocen, además del núcleo central, los barrios de Provençals, el Parc i la Llacuna del Poblenou, la Vila Olímpica y Diagonal Mar."}</p>
                        <h1 className="styleTitulos">{"Comentarios"}</h1>

                    </div>

                    <div className="styleDerecha"></div>
                </div>
                break;
        
            default:
                <p className="styleInfo">{""}</p>
                break;
        }
        
        return (
            <> 
                {informacion}

                <Comentario idUsuario={this.props.idUsuario} nombreUsuario={this.props.nombreUsuario} idDistrito={this.props.idDistrito} />
            </>
        )
    }
}

export default Distrito;