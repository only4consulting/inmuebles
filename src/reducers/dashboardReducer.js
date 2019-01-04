import { SET_ACTIVE_TAB, SET_TAB_LABELS } from '../actions/dashboardActions';

// Estado inicial
const initialState = {
  activeExploreTabItem: '',
  exploreTabLabels: []
}

export const dashboardReducer = (state = initialState, action) => {

  // Evaluar la acción
  switch (action.type) {

    // Setear que tab esta activa
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeExploreTabItem: action.payload
      }

    // Setear las etiquetas para las fichas en su correspondiente idioma
    case SET_TAB_LABELS:
      return {
        ...state,
        exploreTabLabels: action.payload
      }

    default:
      return state;
  }
}