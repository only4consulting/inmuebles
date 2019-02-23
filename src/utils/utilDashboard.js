import firebase from 'react-native-firebase';
import shuffle from 'shuffle-array';
import i18n from '../i18n';

export const getItemsGroupedByHighlight = async () => {

  //Crear un array con los encabezados
  let items = [
    {
      heading: i18n.t('cab_casas_venta'),
      rentalItems: []
    },
    {
      heading: i18n.t('cab_dpto_venta'),
      rentalItems: []
    },
    {
      heading: i18n.t('cab_dpto_alquiler'),
      rentalItems: []
    },
    {
      heading: i18n.t('cab_terr_venta'),
      rentalItems: []
    }
  ];

  //Obtener todas las propiedades destacadas
  const data = await firebase.firestore().collection('inmuebles').where('destacado', '==', true).get();

  //Recorrer los documentos encontrados
  data.docs.map(doc => {

    //Armar un objeto con los datos + el ID
    let obj = {
      __id: doc.id,
      ...doc.data()
    };

    //Evaluar lel tipo de propiedad
    switch (obj.tipo) {
      case 'casa':

        // Si estan en venta
        if (obj.operacion === 'venta') {
          items[0].rentalItems.push({
            key: obj.__id,
            title: obj.descripcion,
            image: obj.imagenes[0],
            price: obj.precio,
            data: obj
          })
        }

        break;

      case 'departamento' || 'duplex':

        // Si estan en venta va al indice 1 sino al 2
        const indx = ((obj.operacion === 'venta') ? 1 : 2)

        items[indx].rentalItems.push({
          key: obj.__id,
          title: obj.descripcion,
          image: obj.imagenes[indx],
          price: obj.precio,
          data: obj
        })

        break;

      case 'terreno':

        items[3].rentalItems.push({
          key: obj.__id,
          title: obj.descripcion,
          image: obj.imagenes[0],
          price: obj.precio,
          data: obj
        })

        break;

      default:
        break;
    }

  });

  //Mezclar los ítems y devolver solo 5 de cada categoría
  shuffle(items[0].rentalItems)
  items[0].rentalItems.splice(5, 9999);

  shuffle(items[1].rentalItems)
  items[1].rentalItems.splice(5, 9999);

  shuffle(items[2].rentalItems)
  items[2].rentalItems.splice(5, 9999);

  shuffle(items[3].rentalItems)
  items[3].rentalItems.splice(5, 9999);

  return items;

}

export const getItemsGroupedByDate = async () => {

  //Crear un array con los encabezados
  let items = [
    {
      heading: "Casas en venta + recientes",
      rentalItems: []
    },
    {
      heading: "Departamentos en venta + recientes",
      rentalItems: []
    },
    {
      heading: "Departamentos en alquiler + recientes",
      rentalItems: []
    },
    {
      heading: "Terrenos en venta + recientes",
      rentalItems: []
    }
  ];

  //Obtener solo 4 semanas de antiguedad (ahora son 8 para probar)
  const fecha = Date.now() - 4838400000;
  const fechaHasta = new Date(fecha);

  //Obtener todas las propiedades por fecha
  const data = await firebase.firestore().collection('inmuebles')
    .where('fecha_alta', '>=', fechaHasta)
    .orderBy('fecha_alta', 'DESC')
    .get();

  //Recorrer los documentos encontrados
  data.docs.map(doc => {

    //Armar un objeto con los datos + el ID
    let obj = {
      __id: doc.id,
      ...doc.data()
    };

    //Evaluar lel tipo de propiedad
    switch (obj.tipo) {
      case 'casa':

        // Si estan en venta
        if (obj.operacion === 'venta') {
          items[0].rentalItems.push({
            key: obj.__id,
            title: obj.descripcion,
            image: obj.imagenes[0],
            price: obj.precio,
            data: obj
          })
        }

        break;

      case 'departamento' || 'duplex':

        // Si estan en venta va al indice 1 sino al 2
        const indx = ((obj.operacion === 'venta') ? 1 : 2)

        items[indx].rentalItems.push({
          key: obj.__id,
          title: obj.descripcion,
          image: obj.imagenes[indx],
          price: obj.precio,
          data: obj
        })

        break;

      case 'terreno':

        items[3].rentalItems.push({
          key: obj.__id,
          title: obj.descripcion,
          image: obj.imagenes[0],
          price: obj.precio,
          data: obj
        })

        break;

      default:
        break;
    }

  });

  //Devolver solo 5 de cada categoría
  items[0].rentalItems.splice(5, 9999);
  items[1].rentalItems.splice(5, 9999);
  items[2].rentalItems.splice(5, 9999);
  items[3].rentalItems.splice(5, 9999);

  return items;

}

export const getItemsGroupedByVisits = async () => {

  //Crear un array con los encabezados
  let items = [
    {
      heading: "Casas en venta + visitadas",
      rentalItems: []
    },
    {
      heading: "Departamentos en venta + visitadas",
      rentalItems: []
    },
    {
      heading: "Departamentos en alquiler + visitadas",
      rentalItems: []
    },
    {
      heading: "Terrenos en venta + visitadas",
      rentalItems: []
    }
  ];

  //Obtener todas las propiedades por fecha
  const data = await firebase.firestore().collection('inmuebles')
    .orderBy('visitas', 'DESC')
    .get();

  //Recorrer los documentos encontrados
  data.docs.map(doc => {

    //Armar un objeto con los datos + el ID
    let obj = {
      __id: doc.id,
      ...doc.data()
    };

    //Evaluar lel tipo de propiedad
    switch (obj.tipo) {
      case 'casa':

        // Si estan en venta
        if (obj.operacion === 'venta') {
          items[0].rentalItems.push({
            key: obj.__id,
            title: obj.descripcion,
            image: obj.imagenes[0],
            price: obj.precio,
            data: obj
          })
        }

        break;

      case 'departamento' || 'duplex':

        // Si estan en venta va al indice 1 sino al 2
        const indx = ((obj.operacion === 'venta') ? 1 : 2)

        items[indx].rentalItems.push({
          key: obj.__id,
          title: obj.descripcion,
          image: obj.imagenes[indx],
          price: obj.precio,
          data: obj
        })

        break;

      case 'terreno':

        items[3].rentalItems.push({
          key: obj.__id,
          title: obj.descripcion,
          image: obj.imagenes[0],
          price: obj.precio,
          data: obj
        })

        break;

      default:
        break;
    }

  });

  //Devolver solo 5 de cada categoría
  items[0].rentalItems.splice(5, 9999);
  items[1].rentalItems.splice(5, 9999);
  items[2].rentalItems.splice(5, 9999);
  items[3].rentalItems.splice(5, 9999);

  return items;

}

export const getClientItems = async () => {

  //Crear un array para guardar las inmobiliarias
  let items = [];

  //Obtener todas las propiedades por fecha
  const data = await firebase.firestore().collection('inmobiliarias')
    .orderBy('nombre', 'asc')
    .get();

  //Recorrer los documentos encontrados
  data.docs.map(doc => {

    //Armar un objeto con los datos + el ID
    let obj = {
      __id: doc.id,
      ...doc.data()
    };

    items.push(obj);

  });

  return items;

}

export const buildItemData = (data) => {

  let houseDetails = [];

  //Devolver el contenido en base al tipo de inmueble
  switch (data.tipo) {

    //Si es una casa, departamento, duplex
    case 'casa':
    case 'departamento':
    case 'duplex':

      //===================LINEA1===================//
      //Armar cada uno de los textos individualmente
      const dormitorios = `${data.dormitorios} ${(data.dormitorios <= 1) ? i18n.t('dormitorio') + ', ' : i18n.t('dormitorios') + ', '}`;
      const living = `${(data.living) ? i18n.t('living') + ', ' : ''}`;
      const comedor = `${(data.comedor) ? i18n.t('comedor') + ', ' : ''}`;
      const comedor_diario = `${(data.comedor_diario) ? i18n.t('comedor_diario') + ', ' : ''}`;
      const banos = `${data.banos} ${(data.banos <= 1) ? i18n.t('banio') : i18n.t('banios')}`;

      //Concatenar el texto
      const texto = `${dormitorios}${living}${comedor}${comedor_diario}${banos}.`;

      //Ejemplo: 2 dormitorios, living, comedor, 1 baño.
      let item = {
        icon: 'layout',
        title: i18n.t('ambientes'),
        subtitle: texto
      }

      //Agregar el texto al array
      houseDetails.push(item);

      //===================LINEA2===================//
      //Armar cada uno de los textos individualmente
      const apta_credito = `${(data.apta_credito) ? i18n.t('apta_credito') + '. ' : ''}`;
      const precio = `${data.precio} ${i18n.t(data.moneda)}`;

      texto = `${i18n.t(data.operacion)}. ${apta_credito}${precio}.`;

      //Ejempo: Propiedad en venta. Apta para crédito hipotecario. 47.000 dólares.
      item = {
        icon: 'infocirlceo',
        title: i18n.t('operacion_precio'),
        subtitle: texto
      }

      //Agregar el texto al array
      houseDetails.push(item);

      //===================LINEA3===================//
      //Armar cada uno de los textos individualmente
      if (data.cochera === 0) {
        texto = i18n.t('sin_cochera')
      } else {
        texto = `${i18n.t('estacionamiento_para')} ${data.cochera} ${(data.cochera <= 1) ? i18n.t('vehiculo') : i18n.t('vehiculos')}`;
      }

      //Ejempo: Cochera para 1 vehículo.
      item = {
        icon: 'car',
        title: i18n.t('estacionamiento'),
        subtitle: texto
      }

      //Agregar el texto al array
      houseDetails.push(item);

      //===================LINEA4===================//
      //Ejempo: 10/01/2019 06:55 PM
      item = {
        icon: 'arrowsalt',
        title: i18n.t('medida_terreno'),
        subtitle: data.superficie + ' ' + i18n.t('metros_cuadrados')
      }

      //Agregar el texto al array
      houseDetails.push(item);

      //===================LINEA5===================//
      //Ejempo: 10/01/2019 06:55 PM
      item = {
        icon: 'calendar',
        title: i18n.t('fecha_pub'),
        subtitle: data.fecha_alta.toLocaleString()
      }

      //Agregar el texto al array
      houseDetails.push(item);

    //Si es una casa, departamento, duplex
    case 'terreno':
    case 'cochera':

      //Ejempo: 56 metros cuadrados
      item = {
        icon: 'arrowsalt',
        title: i18n.t('medida_terreno'),
        subtitle: data.superficie + ' ' + i18n.t('metros_cuadrados')
      }

      //Agregar el texto al array
      houseDetails.push(item);

      break;
  }

  return houseDetails;

}