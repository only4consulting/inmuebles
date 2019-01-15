import i18n from '../i18n';
import { Constants } from '../config';
import { getItemsGroupedByHighlight } from '../utils/utilDashboard';

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const SET_TAB_LABELS = 'SET_TAB_LABELS';
export const SET_RENTAL_ITEMS = 'SET_RENTAL_ITEMS';
export const SET_LOADING = 'SET_LOADING';

export const setActiveTab = (tab) => {
  console.log("Acctivta", tab);
  return ({
    type: SET_ACTIVE_TAB,
    payload: tab
  });
}

export const setLoading = (loading) => {
  return (
    {
      type: SET_LOADING,
      payload: loading
    }
  )
};

export const setRentalItems = () => async (dispatch) => {

  //Indicar que se están cargando los datos
  dispatch(setLoading(true));

  // Obtener los ítems 
  const items = await getItemsGroupedByHighlight();

  dispatch({
    type: SET_RENTAL_ITEMS,
    payload: items
  });

  //Indicar que terminó la carga de datos
  dispatch(setLoading(false));

}

export const setTabLabels = () => (dispatch) => {

  // Array para las etiquetas
  const exploreTabLabels = [];
  let label = '';

  // Obtener el texto en el idioma correspondiente para cada etiqueta
  for (let index = 0; index < Constants.EXPLORE_TAB_LABELS.length; index++) {

    // Obtener el texto
    label = i18n.t(Constants.EXPLORE_TAB_LABELS[index]);

    // Agregar al array
    exploreTabLabels.push(label);

    // Setear la primer ficha seleccionada
    if (index === 0) {
      dispatch(setActiveTab(label));
    }

  }

  dispatch({
    type: SET_TAB_LABELS,
    payload: exploreTabLabels
  });

}