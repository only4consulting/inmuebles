import firebase from 'react-native-firebase';

export const getItemsGroupedByHighlight = async () => {

  //Crear un array con los encabezados
  let items = [
    {
      heading: "Casas en venta",
      rentalItems: []
    },
    {
      heading: "Departamentos en venta",
      rentalItems: []
    },
    {
      heading: "Departamentos en alquiler",
      rentalItems: []
    },
    {
      heading: "Terrenos en venta",
      rentalItems: []
    }
  ];

  //Obtener todas las propiedades destacadas
  const data = await firebase.firestore().collection('inmuebles').where('destacado', '==', true).get();

  debugger;

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

  return items;

}

export const getItemsGroupedByDate = async () => {

  //Crear un array con los encabezados
  let items = [
    {
      heading: "Casas en venta",
      rentalItems: []
    },
    {
      heading: "Departamentos en venta",
      rentalItems: []
    },
    {
      heading: "Departamentos en alquiler",
      rentalItems: []
    },
    {
      heading: "Terrenos en venta",
      rentalItems: []
    }
  ];

  //Obtener todas las propiedades destacadas
  const data = await firebase.firestore().collection('inmuebles')
    .where('destacado', '==', true)
    .orderBy('fecha_alta', 'DESC')
    .limit(5)
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

  return items;

}