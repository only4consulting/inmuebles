import i18n from '../i18n';
import { Constants } from '../config';
import { getItemsGroupedByHighlight, getItemsGroupedByDate, getItemsGroupedByVisits } from '../utils/utilDashboard';

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const SET_TAB_LABELS = 'SET_TAB_LABELS';
export const SET_RENTAL_ITEMS = 'SET_RENTAL_ITEMS';
export const SET_LOADING = 'SET_LOADING';

export const setActiveTab = (indx, tab) => async (dispatch, getState) => {

  const activeExploreTabItemIndex = getState().dashboard.activeExploreTabItemIndex;

  //Si la ficha seleccionada es distinta a la actual
  if (indx !== activeExploreTabItemIndex) {

    dispatch({
      type: SET_ACTIVE_TAB,
      indx,
      tab
    })

    const rentalsListings = getState().dashboard.rentalsListings;

    //Si no se cargaron los valores aún
    if (rentalsListings[indx] === undefined) {

      //Obtener los ítems a mostrar
      await dispatch(setRentalItems(indx));

    }

  }
}

export const setLoading = (loading) => {
  return (
    {
      type: SET_LOADING,
      payload: loading
    }
  )
};

export const setRentalItems = (indx) => async (dispatch, getState) => {

  //Obtener los ítems
  let items = getState().dashboard.rentalsListings;

  //Indicar que se están cargando los datos
  dispatch(setLoading(true));

  //Evaluar el índice
  switch (indx) {
    case 0:
      //Obtener los ítems destacados
      items[0] = await getItemsGroupedByHighlight();
      break;

    case 1:
      //Obtener los ítems mas recientes
      items[1] = await getItemsGroupedByDate();
      break;

    case 2:
      //Obtener los ítems mas recientes
      items[2] = await getItemsGroupedByVisits();
      break;

    default:
      break;
  }

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

    //Si es la primera
    if (index === 0) {
      dispatch(setActiveTab(0, label));
    }

  }

  dispatch({
    type: SET_TAB_LABELS,
    payload: exploreTabLabels
  });

}