import * as postActions from "../actions/postActions";

const initialState = {
  posts: [
    {
      id: 0,
      title: "Superman es el mejor superhéroe, según estudio",
      content:
        "Investigadores de la Universidad de Leicester (Reino Unido) realizaron un estudio para conocer cuál es el mejor superhéroe del mundo del cómic. El estudio -que inició en 2009- analizó lo factible de los poderes atribuidos a cada personaje en la ficción. De esta manera, el análisis indica que Superman es el superhéroe mejor equipado de todos los estudiados, con un buen número de importantes habilidades que incluyen el destructivo ataque Super Flare, además de la posesión de un robusto tejido muscular de alta densidad que aumenta su resistencia. Las conclusiones fueron presentadas con motivo del Superman Day celebrado en Metrópolis (Illinois) el 12 de junio y publicadas en el Journal of Physics Special Topics. (E)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMx-c13hWSV9qqmjn644rDAsOUaWTlfUUlWw&usqp=CAU",
      score: 10,
    },
    {
      id: 1,
      title: "¿Por qué nos gustan los superhéroes?",
      content:
        "Los superhéroes tienen casi 100 años en nuestras vidas. Desde las primeras novelas y los cómics hasta los universos cinematográficos que tenemos ahora, la forma en que se nos han presentado ha evolucionado con el tiempo. Personajes planos que servían como fantasías para los niños, hoy son personajes más tridimensionales y con mensajes profundos. ¿Pero por qué nos gustan los superhéroes? La respuesta es más compleja que tan solo decir que “son geniales”. Mucho tiene que ver con la identificación que podemos llegar a sentir hacia los personajes. No sabemos lo que es ser el último superviviente de un planeta, pero sí sabemos lo que es sentir que nuestro hogar está en otra parte. Sobreponerse a las desgracias también sirve como una identificación. Son un ejemplo de lo que queremos en nosotros. Los héroes representan aquello a lo que no somos y aspiramos, sin dejar los errores y debilidades que los humanizan.",

      image:
        "https://i0.wp.com/blog.claroshop.com/wp-content/uploads/2022/07/image-151.png?resize=768%2C914&ssl=1",
      score: 8.9,
    },
    {
      id: 2,
      title: "Superhéroes de la vida real: Más allá de la ficción",
      content:
        "Un superhéroe o superheroína suele definirse como un ser de ficción que posee unas cualidades físicas o mentales consideradas sobrehumanas o extraordinarias, las cuales suele emplear para hacer el bien. Y esta definición encaja perfectamente para resaltar a otros tipos de superhéroes (estos sí humanos). Desde 1995 existe en Estados Unidos el Día Nacional del Superhéroe, se celebra cada 28 de abril. Y me parece fabuloso que podamos tener un día especial para celebrar y reconocer el esfuerzo de aquellos que todos los días hacen lo extraordinario por hacer de este mundo uno mejor. Más allá de hablar de los superhéroes que vemos en los cómics y en las películas, que sin duda son fuente de inspiración, hoy quiero reconocer a aquellos que nos topamos día a día y nos generan profunda admiración por su actuar.",
      image:
        "https://aweita.cronosmedia.glr.pe/migration/imagen/2020/04/30/noticia-1588289310-lacasadelasflores.jpg",
      score: 9.2,
    },
    {
      id: 3,
      title: "Thanos o Darkseid: ¿Quién ganaría en un combate?",
      content:
        "¿Quién ganaría en una pelea entre Darkseid y Thanos? Es una pregunta tan antigua como los propios personajes. Eternos son los debates entre los fanáticos para definir quién de los dos es el más poderoso. Para unos el Titán Loco, capaz de derrotar a los Vengadores con relativa facilidad. Según otros, el Señor de Apokolips, el villano más emblemático del Universo DC. Thanos es un gran villano y sin sus armas que pueden acabar con todo el Universo, los dos tendrían una batalla increíble. Sin embargo, la fuerza de Darkseid, sus recursos infinitos, los rayos Omega y una gran experiencia en batalla le dan la ventaja definitiva.",
      image:
        "https://pbs.twimg.com/media/EDAQvOOU4AACWeR?format=jpg&name=small",
      score: 9.0,
    },
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActions.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case postActions.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          (post) => post.id !== Number(action.payload.id)
        ),
      };
    case postActions.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === Number(action.payload.id) ? action.payload : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
