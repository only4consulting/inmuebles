import firebase from 'react-native-firebase';

export const SET_FILTERS = 'SET_FILTERS';

export const getFilters = () => async (dispatch, getState) => {

  try {

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