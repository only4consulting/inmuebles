import firebase from 'react-native-firebase';

export const SET_FILTERS = 'SET_FILTERS';

export const getFilters = () => async (dispatch, getState) => {

  try {

    const rootRef = firebase.database().ref();
    // console.log("Refere", rootRef);
    const oneRef = rootRef.child('INMUEBLES').orderByChild('Ciudad_Dormitorios').equalTo('San Nicolas_2').once('value', (snapshot) => {
      console.log("Datos", snapshot._value);
    });

    const inmRef = firebase.database().ref().child('INMUEBLES/00006');

    inmRef.set({
      "descripcion": "Propiedad turco",
      "operacion": "venta",
      "precio": 54000,
      "moneda": "dolares",
      "direccion": "Bartolomé mitre 223 PA",
      "ciudad": "San Nicolás",
      "provincia": "Buenos Aires",
      "ambientes": 3,
      "cochera": 0,
      "dormitorios": 6,
      "pileta": true,
      "superficie": 320,
      "plantas": 1,
      "banos": 2,
      "antiguedad": 35,
      "fecha_alta": 1546454206000,
      "fecha_expira": 1552953599000,
      "inmobiliaria": "0001"
    });

    // const ciudadesBuenosAires = await firebase.database().ref('UBICACION/Buenos Aires/3').once('value');

    // console.log("Ciudades de Buenos Aires", ciudadesBuenosAires._value);

    const data = await firebase.database().ref('FILTER_CATEGORIES').once('value');

    // Setear los filtros
    dispatch(setFilters(data._value));

  } catch (err) {
    console.log("Error leyendo parametrización ", err)
  }
}

export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    payload: filters
  };
}